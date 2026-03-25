import { NextRequest, NextResponse } from "next/server";
import { allMembers } from "@/data/members";
import { readFile, writeFile } from "fs/promises";
import path from "path";

export async function GET() {
    try {
        const safe = allMembers.map((m) => ({
            id: m.id,
            name: m.name,
            location: m.location,
            province: m.province,
            designation: m.designation,
            sectors: m.sectors,
            description: m.description,
            image: m.image,
            period: m.period,
            yearStart: m.yearStart,
            type: m.type,
            slug: m.slug,
            socials: m.socials,
            achievements: m.achievements ?? [],
        }));
        return NextResponse.json(safe);
    } catch {
        return NextResponse.json([], { status: 200 });
    }
}

export async function POST(request: NextRequest) {
    try {
        const m = await request.json();

        const filePath = path.join(process.cwd(), "src", "data", "members.ts");
        const content = await readFile(filePath, "utf-8");

        const sectors = Array.isArray(m.sectors) ? m.sectors : [m.sectors];
        const types = Array.isArray(m.type) ? m.type : [m.type];
        const slug = m.slug || m.name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
        const socials = m.socials || {};
        const socialsStr =
            Object.keys(socials).length > 0
                ? `{ ${Object.entries(socials)
                    .filter(([, v]) => v)
                    .map(([k, v]) => `${k}: "${v}"`)
                    .join(", ")} }`
                : "{}";

        const achievements = (m.achievements || []) as { title: string; description: string }[];
        const achievementsStr =
            achievements.length > 0
                ? `[\n${achievements
                    .map(
                        (a) =>
                            `            { title: "${(a.title || "").replace(/"/g, "'")}", description: "${(a.description || "").replace(/"/g, "'")}" },`
                    )
                    .join("\n")}\n        ]`
                : "[]";

        const entry = `    {
        id: ${m.id || Date.now()},
        name: "${(m.name || "").replace(/"/g, "'")}",
        location: "${(m.location || "").replace(/"/g, "'")}",
        province: "${(m.province || "").replace(/"/g, "'")}",
        designation: [${(Array.isArray(m.designation) ? m.designation : [m.designation]).filter(Boolean).map((d: string) => `"${(d || "").replace(/"/g, "'")}"`).join(", ")}],
        sectors: [${sectors.map((s: string) => `"${s.replace(/"/g, "'")}"`).join(", ")}],
        description: "${(m.description || "").replace(/"/g, "'")}",
        image: "${m.image || "/members/placeholder.jpg"}",
        period: "${m.period || "2023 - present"}",
        yearStart: "${m.yearStart || "2023"}",
        type: [${types.map((t: string) => `"${t}"`).join(", ")}],
        slug: "${slug}",
        socials: ${socialsStr},
        achievements: ${achievementsStr},
    },`;

        // Find the closing of the allMembers array and insert before it
        const insertIdx = content.lastIndexOf("];");
        if (insertIdx === -1) {
            return NextResponse.json({ error: "Could not find array closing in members.ts" }, { status: 500 });
        }

        const newContent = content.slice(0, insertIdx) + entry + "\n" + content.slice(insertIdx);
        await writeFile(filePath, newContent, "utf-8");

        return NextResponse.json({ success: true });
    } catch (err) {
        console.error("Members POST error:", err);
        return NextResponse.json({ error: String(err) }, { status: 500 });
    }
}

export async function DELETE(request: NextRequest) {
    try {
        const { id } = await request.json();
        if (!id) return NextResponse.json({ error: "No ID provided" }, { status: 400 });

        const filePath = path.join(process.cwd(), "src", "data", "members.ts");
        let content = await readFile(filePath, "utf-8");

        const idStr = `id: ${id},`;
        let idxOfId = content.indexOf(idStr);
        if (idxOfId === -1) {
            // Also check for string IDs just in case
            idxOfId = content.indexOf(`id: "${id}",`);
        }

        if (idxOfId === -1) {
            return NextResponse.json({ error: "Member not found" }, { status: 404 });
        }

        const objStart = content.lastIndexOf("    {", idxOfId);
        const objEnd = content.indexOf("    },", idxOfId) + 7;

        if (objStart !== -1 && objEnd > objStart) {
            content = content.slice(0, objStart) + content.slice(objEnd);
            await writeFile(filePath, content, "utf-8");
        }

        return NextResponse.json({ success: true });
    } catch (err) {
        console.error("Members DELETE error:", err);
        return NextResponse.json({ error: String(err) }, { status: 500 });
    }
}
