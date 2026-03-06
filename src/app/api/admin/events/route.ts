import { NextRequest, NextResponse } from "next/server";
import { happenings } from "@/data/happenings";
import { readFile, writeFile } from "fs/promises";
import path from "path";

export async function GET() {
    try {
        const safe = happenings.map((h) => ({
            slug: h.slug,
            title: h.title,
            dateStart: h.dateStart,
            dateEnd: h.dateEnd,
            thumbnail: h.thumbnail,
            shortDescription: h.shortDescription,
            beneficiaries: h.beneficiaries,
            badge: h.badge,
            date: h.date,
            location: h.location,
            category: h.category,
            attendees: h.attendees,
            author: h.author,
            avatars: h.avatars,
            locations: h.locations,
            objectives: h.objectives,
            impacts: h.impacts,
            categories: h.categories,
        }));
        return NextResponse.json(safe);
    } catch {
        return NextResponse.json([], { status: 200 });
    }
}

export async function POST(request: NextRequest) {
    try {
        const h = await request.json();

        const filePath = path.join(process.cwd(), "src", "data", "happenings.tsx");
        const content = await readFile(filePath, "utf-8");

        const locations = (h.locations || ["Islamabad"]) as string[];
        const objectives = (h.objectives || []) as string[];
        const impacts = (h.impacts || []) as string[];
        const categories = (h.categories || ["projects"]) as string[];
        const slug = h.slug || h.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

        const badgeLine = h.badge ? `\n        badge: "${h.badge}",` : "";
        const authorLine = h.author ? `\n        author: "${(h.author || "").replace(/"/g, "'")}",` : "";

        const entry = `    {
        slug: "${slug}",
        title: "${(h.title || "").replace(/"/g, "'")}",
        dateStart: "${h.dateStart || ""}",
        dateEnd: "${h.dateEnd || ""}",
        thumbnail: "${h.thumbnail || ""}",
        shortDescription: "${(h.shortDescription || "").replace(/"/g, "'")}",
        beneficiaries: "${h.beneficiaries || ""}",${badgeLine}
        date: "${h.date || ""}",
        location: "${(h.location || "").replace(/"/g, "'")}",
        category: "${h.category || ""}",
        attendees: "${h.attendees || ""}",${authorLine}
        avatars: [],
        images: defaultDetailImages,
        description: getDefaultDescription(),
        fullDescription: defaultFullDescription,
        objectives: [
${objectives.map((o: string) => `            "${o.replace(/"/g, "'")}"`).join(",\n")}
        ],
        impacts: [
${impacts.map((i: string) => `            "${i.replace(/"/g, "'")}"`).join(",\n")}
        ],
        locations: [${locations.map((l: string) => `"${l}"`).join(", ")}],
        detailImages: defaultDetailImages,
        categories: [${categories.map((c: string) => `"${c}"`).join(", ")}],
    },`;

        const insertIdx = content.lastIndexOf("];");
        if (insertIdx === -1) {
            return NextResponse.json({ error: "Could not find array closing in happenings.tsx" }, { status: 500 });
        }

        const newContent = content.slice(0, insertIdx) + entry + "\n" + content.slice(insertIdx);
        await writeFile(filePath, newContent, "utf-8");

        return NextResponse.json({ success: true });
    } catch (err) {
        console.error("Events POST error:", err);
        return NextResponse.json({ error: String(err) }, { status: 500 });
    }
}
