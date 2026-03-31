import { NextRequest, NextResponse } from "next/server";
import { happenings } from "@/data/happenings";
import { readFile, writeFile } from "fs/promises";
import path from "path";

export async function GET() {
    try {
        const safe = happenings.map((h) => ({ ...h }));
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
        const type = (h.type || ["All"]) as string[];
        const dImgs = (h.detailImages && h.detailImages.length > 0) ? h.detailImages : [];
        const imagesStr = dImgs.length > 0 ? `[${dImgs.map((img: string) => `"${img}"`).join(", ")}]` : `defaultDetailImages`;
        const slug = h.slug || h.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
        const linkedMembersStr = (h.linkedMembers && h.linkedMembers.length > 0) ? `[${h.linkedMembers.map((m: string) => `"${m}"`).join(", ")}]` : "[]";

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
        type: [${type.map((t: string) => `"${t}"`).join(", ")}],
        linkedMembers: ${linkedMembersStr},
        happeningType: "${h.happeningType || "Event"}",
        eventMode: "${h.eventMode || "Onsite"}",
        venue: "${(h.venue || "").replace(/"/g, "'")}",
        fullAddress: "${(h.fullAddress || "").replace(/"/g, "'")}",
        meetingLink: "${(h.meetingLink || "").replace(/"/g, "'")}",
        eventTime: "${(h.eventTime || "").replace(/"/g, "'")}",
        email: "${(h.email || "").replace(/"/g, "'")}",
        phone: "${(h.phone || "").replace(/"/g, "'")}",
        website: "${(h.website || "").replace(/"/g, "'")}",
        fullContent: \`${(h.fullContent || "").replace(/`/g, "'")}\`,
        datePublished: "${h.datePublished || ""}",
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

export async function PUT(request: NextRequest) {
    try {
        const h = await request.json();
        const { slug: originalSlug } = h;
        if (!originalSlug) return NextResponse.json({ error: "No slug provided" }, { status: 400 });

        const filePath = path.join(process.cwd(), "src", "data", "happenings.tsx");
        let content = await readFile(filePath, "utf-8");

        const slugStr = `slug: "${originalSlug}",`;
        let idxOfSlug = content.indexOf(slugStr);
        if (idxOfSlug === -1) return NextResponse.json({ error: "Event not found" }, { status: 404 });

        const objStart = content.lastIndexOf("    {", idxOfSlug);
        const objEnd = content.indexOf("    },", idxOfSlug) + 7;

        if (objStart === -1 || objEnd <= objStart) return NextResponse.json({ error: "Could not parse event entry" }, { status: 500 });

        const locations = (h.locations || ["Islamabad"]) as string[];
        const objectives = (h.objectives || []) as string[];
        const impacts = (h.impacts || []) as string[];
        const categories = (h.categories || ["projects"]) as string[];
        const type = (h.type || ["All"]) as string[];
        const dImgs = (h.detailImages && h.detailImages.length > 0) ? h.detailImages : [];
        const imagesStr = dImgs.length > 0 ? `[${dImgs.map((img: string) => `"${img}"`).join(", ")}]` : `defaultDetailImages`;
        const slug = h.slug || h.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
        const linkedMembersStr = (h.linkedMembers && h.linkedMembers.length > 0) ? `[${h.linkedMembers.map((m: string) => `"${m}"`).join(", ")}]` : "[]";

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
        type: [${type.map((t: string) => `"${t}"`).join(", ")}],
        linkedMembers: ${linkedMembersStr},
        happeningType: "${h.happeningType || "Event"}",
        eventMode: "${h.eventMode || "Onsite"}",
        venue: "${(h.venue || "").replace(/"/g, "'")}",
        fullAddress: "${(h.fullAddress || "").replace(/"/g, "'")}",
        meetingLink: "${(h.meetingLink || "").replace(/"/g, "'")}",
        eventTime: "${(h.eventTime || "").replace(/"/g, "'")}",
        email: "${(h.email || "").replace(/"/g, "'")}",
        phone: "${(h.phone || "").replace(/"/g, "'")}",
        website: "${(h.website || "").replace(/"/g, "'")}",
        fullContent: \`${(h.fullContent || "").replace(/`/g, "'")}\`,
        datePublished: "${h.datePublished || ""}",
    },`;

        content = content.slice(0, objStart) + entry + "\n" + content.slice(objEnd);
        await writeFile(filePath, content, "utf-8");

        return NextResponse.json({ success: true });
    } catch (err) {
        console.error("Events PUT error:", err);
        return NextResponse.json({ error: String(err) }, { status: 500 });
    }
}

export async function DELETE(request: NextRequest) {
    try {
        const { slug } = await request.json();
        if (!slug) return NextResponse.json({ error: "No slug provided" }, { status: 400 });

        const filePath = path.join(process.cwd(), "src", "data", "happenings.tsx");
        let content = await readFile(filePath, "utf-8");

        const slugStr = `slug: "${slug}",`;
        const idxOfSlug = content.indexOf(slugStr);
        if (idxOfSlug === -1) return NextResponse.json({ error: "Event not found" }, { status: 404 });

        const objStart = content.lastIndexOf("    {", idxOfSlug);
        const objEnd = content.indexOf("    },", idxOfSlug) + 7;

        if (objStart !== -1 && objEnd > objStart) {
            content = content.slice(0, objStart) + content.slice(objEnd);
            await writeFile(filePath, content, "utf-8");
        }

        return NextResponse.json({ success: true });
    } catch (err) {
        console.error("Events DELETE error:", err);
        return NextResponse.json({ error: String(err) }, { status: 500 });
    }
}
