import { NextRequest, NextResponse } from "next/server";
import { projects } from "@/data/projects";
import { readFile, writeFile } from "fs/promises";
import path from "path";

export async function GET() {
    try {
        const safe = projects.map((p) => ({
            slug: p.slug,
            title: p.title,
            dateStart: p.dateStart,
            dateEnd: p.dateEnd,
            thumbnail: p.thumbnail,
            shortDescription: p.shortDescription,
            beneficiaries: p.beneficiaries,
            avatars: p.avatars,
            locations: p.locations,
            objectives: p.objectives,
            impacts: p.impacts,
            categories: p.categories,
            linkedHappenings: p.linkedHappenings ?? [],
            linkedMembers: p.linkedMembers ?? [],
        }));
        return NextResponse.json(safe);
    } catch {
        return NextResponse.json([], { status: 200 });
    }
}

export async function POST(request: NextRequest) {
    try {
        const p = await request.json();

        const filePath = path.join(process.cwd(), "src", "data", "projects.tsx");
        const content = await readFile(filePath, "utf-8");

        const locations = (p.locations || ["Islamabad"]) as string[];
        const objectives = (p.objectives || []) as string[];
        const impacts = (p.impacts || []) as string[];
        const categories = (p.categories || ["projects"]) as string[];
        const linkedHappenings = (p.linkedHappenings || []) as string[];
        const linkedMembers = (p.linkedMembers || []) as string[];
        const dImgs = (p.detailImages && p.detailImages.length > 0) ? p.detailImages : [];
        const imagesStr = dImgs.length > 0 ? `[${dImgs.map((img: string) => `"${img}"`).join(", ")}]` : `defaultDetailImages`;
        const slug = p.slug || p.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

        const entry = `    {
        slug: "${slug}",
        title: "${(p.title || "").replace(/"/g, "'")}",
        dateStart: "${p.dateStart || ""}",
        dateEnd: "${p.dateEnd || ""}",
        thumbnail: "${p.thumbnail || ""}",
        shortDescription: "${(p.shortDescription || "").replace(/"/g, "'")}",
        beneficiaries: "${p.beneficiaries || ""}",
        avatars: [],
        images: ${imagesStr},
        description: getDefaultDescription(),
        fullDescription: defaultFullDescription,
        objectives: [
${objectives.map((o: string) => `            "${o.replace(/"/g, "'")}"`).join(",\n")}
        ],
        impacts: [
${impacts.map((i: string) => `            "${i.replace(/"/g, "'")}"`).join(",\n")}
        ],
        locations: [${locations.map((l: string) => `"${l}"`).join(", ")}],
        detailImages: ${imagesStr},
        categories: [${categories.map((c: string) => `"${c}"`).join(", ")}],
        linkedHappenings: [${linkedHappenings.map((h: string) => `"${h}"`).join(", ")}],
        linkedMembers: [${linkedMembers.map((m: string) => `"${m}"`).join(", ")}],
    },`;

        const insertIdx = content.lastIndexOf("];");
        if (insertIdx === -1) {
            return NextResponse.json({ error: "Could not find array closing in projects.tsx" }, { status: 500 });
        }

        const newContent = content.slice(0, insertIdx) + entry + "\n" + content.slice(insertIdx);
        await writeFile(filePath, newContent, "utf-8");

        return NextResponse.json({ success: true });
    } catch (err) {
        console.error("Projects POST error:", err);
        return NextResponse.json({ error: String(err) }, { status: 500 });
    }
}
