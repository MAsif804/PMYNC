import { NextRequest, NextResponse } from "next/server";
import { featuredStories } from "@/data/featured-stories";
import { readFile, writeFile } from "fs/promises";
import path from "path";

// Use featured-stories.ts as the single source for stories
const FILE_PATH = path.join(process.cwd(), "src", "data", "featured-stories.ts");

// ── Build a FeaturedStory-shaped TS entry for writing to stories.ts ───────────
function buildEntry(s: {
    id: number; slug: string; name: string; location: string; province: string;
    description: string; thumbnail: string; skills: string[]; aboutstory: string;
    storydescription: string; storyimages: string; innvotion: string;
    detailimages: string[]; communitydescription: string; communityimages: string;
}) {
    const skills = (s.skills || []).map((t: string) => `"${t.replace(/"/g, "'")}"`).join(", ");
    const imgs = (s.detailimages || []).map((i: string) => `"${i}"`).join(", ");
    const safe = (v: string) => (v || "").replace(/"/g, "'").replace(/\n/g, "\\n");
    return `    {
        id: ${s.id},
        slug: "${s.slug}",
        name: "${safe(s.name)}",
        location: "${safe(s.location)}",
        province: "${safe(s.province)}",
        description: "${safe(s.description)}",
        thumbnail: "${s.thumbnail || ""}",
        skills: [${skills}],
        aboutstory: "${safe(s.aboutstory)}",
        storydescription: "${safe(s.storydescription)}",
        storyimages: "${s.storyimages || ""}",
        innvotion: \`${(s.innvotion || "").replace(/`/g, "'")}\`,
        detailimages: [${imgs}],
        communitydescription: "${safe(s.communitydescription)}",
        communityimages: "${s.communityimages || ""}",
    },`;
}

// ── GET – all featured stories + admin-added stories ─────────────────────────
export async function GET() {
    try {
        return NextResponse.json(featuredStories);
    } catch {
        return NextResponse.json([], { status: 200 });
    }
}

// ── POST – append new story to stories.ts ─────────────────────────────────────
export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const slug = body.slug || (body.name || "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
        const id = body.id || Date.now();
        const entry = buildEntry({ ...body, id, slug });

        const content = await readFile(FILE_PATH, "utf-8");
        const insertIdx = content.lastIndexOf("];");
        if (insertIdx === -1) return NextResponse.json({ error: "Cannot find array close in stories.ts" }, { status: 500 });

        const newContent = content.slice(0, insertIdx) + entry + "\n" + content.slice(insertIdx);
        await writeFile(FILE_PATH, newContent, "utf-8");
        return NextResponse.json({ success: true, id, slug });
    } catch (err) {
        console.error("Stories POST error:", err);
        return NextResponse.json({ error: String(err) }, { status: 500 });
    }
}

// ── PUT – edit a story in featured-stories.ts ─────────────────────────────────
export async function PUT(request: NextRequest) {
    try {
        const body = await request.json();
        const { id } = body;
        if (!id) return NextResponse.json({ error: "id required" }, { status: 400 });

        const slug = body.slug || (body.name || "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
        const entry = buildEntry({ ...body, id, slug });
        
        let content = await readFile(FILE_PATH, "utf-8");
        const idStr = `id: ${id},`;
        let idxOfId = content.indexOf(idStr);
        if (idxOfId === -1) {
            idxOfId = content.indexOf(`id: "${id}",`);
        }

        if (idxOfId === -1) {
            return NextResponse.json({ error: "Story not found" }, { status: 404 });
        }

        const objStart = content.lastIndexOf("    {", idxOfId);
        const objEnd = content.indexOf("    },", idxOfId) + 7;

        if (objStart === -1 || objEnd <= objStart) {
            return NextResponse.json({ error: "Could not parse story entry" }, { status: 500 });
        }

        content = content.slice(0, objStart) + entry + "\n" + content.slice(objEnd);
        await writeFile(FILE_PATH, content, "utf-8");
        return NextResponse.json({ success: true });
    } catch (err) {
        console.error("Stories PUT error:", err);
        return NextResponse.json({ error: String(err) }, { status: 500 });
    }
}

// ── DELETE – remove from featured-stories.ts ──────────────────────────────────
export async function DELETE(request: NextRequest) {
    try {
        const { id } = await request.json();
        if (!id) return NextResponse.json({ error: "id required" }, { status: 400 });

        let content = await readFile(FILE_PATH, "utf-8");
        const idStr = `id: ${id},`;
        let idxOfId = content.indexOf(idStr);
        if (idxOfId === -1) {
            idxOfId = content.indexOf(`id: "${id}",`);
        }

        if (idxOfId === -1) {
            return NextResponse.json({ error: "Story not found" }, { status: 404 });
        }

        const objStart = content.lastIndexOf("    {", idxOfId);
        const objEnd = content.indexOf("    },", idxOfId) + 7;

        if (objStart !== -1 && objEnd > objStart) {
            content = content.slice(0, objStart) + content.slice(objEnd);
            await writeFile(FILE_PATH, content, "utf-8");
            return NextResponse.json({ success: true });
        }

        return NextResponse.json({ error: "Could not parse story entry" }, { status: 500 });
    } catch (err) {
        console.error("Stories DELETE error:", err);
        return NextResponse.json({ error: String(err) }, { status: 500 });
    }
}
