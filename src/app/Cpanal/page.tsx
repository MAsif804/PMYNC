"use client";
import { MapPin, Plus } from "lucide-react";
import React, { useState, useEffect, useRef, useCallback } from "react";

// ── Types ────────────────────────────────────────────────────────────────────
type Tab = "dashboard" | "members" | "projects" | "events";
type DrawerMode = "member" | "project" | "event" | null;

interface MemberData { id: number; name: string; location: string; province: string; designation: string[]; sectors: string[]; description: string; image: string; period: string; yearStart: string; type: string[]; slug: string; socials: { email?: string; linkedin?: string; phone?: string }; achievements: { title: string; description: string }[]; }
interface ProjectData { slug: string; title: string; dateStart: string; dateEnd: string; thumbnail: string; shortDescription: string; beneficiaries: string; locations: string[]; objectives: string[]; impacts: string[]; categories: string[]; linkedHappenings?: string[]; linkedMembers?: string[]; detailImages?: string[]; }
interface EventData { slug: string; title: string; dateStart: string; dateEnd: string; thumbnail: string; shortDescription: string; beneficiaries: string; badge: string; date: string; location: string; category: string; attendees: string; author: string; locations: string[]; objectives: string[]; impacts: string[]; categories: string[]; type?: string[]; detailImages?: string[]; }

// ── Helpers ───────────────────────────────────────────────────────────────────
const slugify = (t: string) => t.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
const ic = "w-full px-3.5 py-2.5 rounded-xl border border-gray-200 bg-white text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#088E48]/30 focus:border-[#088E48] transition-all";
const ta = ic + " resize-none";
const sel = ic;

// ── ImageUpload ───────────────────────────────────────────────────────────────
function ImageUpload({ folder, onUploaded, currentUrl }: { folder: string; onUploaded: (url: string) => void; currentUrl?: string }) {
    const [preview, setPreview] = useState<string | null>(currentUrl || null);
    const [uploading, setUploading] = useState(false);
    const [drag, setDrag] = useState(false);
    const ref = useRef<HTMLInputElement>(null);

    const upload = useCallback(async (file: File) => {
        setPreview(URL.createObjectURL(file));
        setUploading(true);
        const fd = new FormData();
        fd.append("file", file);
        fd.append("folder", folder);
        const res = await fetch("/api/admin/upload", { method: "POST", body: fd });
        const data = await res.json();
        setUploading(false);
        if (data.url) onUploaded(data.url);
    }, [folder, onUploaded]);

    const onDrop = (e: React.DragEvent) => { e.preventDefault(); setDrag(false); const f = e.dataTransfer.files[0]; if (f) upload(f); };

    return (
        <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-gray-700">Logo / Thumbnail</label>
            <div
                onDragOver={(e) => { e.preventDefault(); setDrag(true); }}
                onDragLeave={() => setDrag(false)}
                onDrop={onDrop}
                onClick={() => !preview && ref.current?.click()}
                className={`relative rounded-2xl border-2 border-dashed transition-all overflow-hidden cursor-pointer ${drag ? "border-[#088E48] bg-[#088E48]/5" : preview ? "border-gray-200" : "border-gray-300 hover:border-[#088E48] bg-gray-50"}`}
                style={{ minHeight: 160 }}
            >
                <input ref={ref} type="file" accept="image/*" className="hidden" onChange={(e) => { const f = e.target.files?.[0]; if (f) upload(f); }} />
                {preview ? (
                    <div className="relative">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={preview} alt="preview" className="w-full h-48 object-cover" />
                        <div className="absolute inset-0 bg-black/30 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                            <button type="button" onClick={(e) => { e.stopPropagation(); ref.current?.click(); }} className="px-3 py-1.5 bg-white rounded-lg text-xs font-medium text-gray-800">Change</button>
                            <button type="button" onClick={(e) => { e.stopPropagation(); setPreview(null); onUploaded(""); }} className="px-3 py-1.5 bg-red-500 rounded-lg text-xs font-medium text-white">Remove</button>
                        </div>
                        {uploading && <div className="absolute inset-0 bg-black/50 flex items-center justify-center"><div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" /></div>}
                    </div>
                ) : (
                    <div className="flex flex-col items-center justify-center gap-3 p-8">
                        <div className="w-12 h-12 rounded-xl bg-[#088E48]/10 flex items-center justify-center">
                            <svg className="w-6 h-6 text-[#088E48]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" /></svg>
                        </div>
                        <div className="text-center"><p className="text-sm font-semibold text-gray-700">Drop image here or <span className="text-[#088E48]">browse</span></p><p className="text-xs text-gray-400 mt-0.5">PNG, JPG, WEBP up to 10MB</p></div>
                    </div>
                )}
            </div>
        </div>
    );
}

// ── MultiImageUpload ────────────────────────────────────────────────────────
function MultiImageUpload({ folder, onChange, urls }: { folder: string; onChange: (urls: string[]) => void; urls: string[] }) {
    const [uploading, setUploading] = useState(false);
    const [drag, setDrag] = useState(false);
    const ref = useRef<HTMLInputElement>(null);

    const upload = useCallback(async (files: FileList) => {
        setUploading(true);
        const newUrls = [...urls];
        for (let i = 0; i < files.length; i++) {
            const fd = new FormData();
            fd.append("file", files[i]);
            fd.append("folder", folder);
            const res = await fetch("/api/admin/upload", { method: "POST", body: fd });
            const data = await res.json();
            if (data.url) newUrls.push(data.url);
        }
        setUploading(false);
        onChange(newUrls);
    }, [folder, onChange, urls]);

    const onDrop = (e: React.DragEvent) => { e.preventDefault(); setDrag(false); if (e.dataTransfer.files.length > 0) upload(e.dataTransfer.files); };

    return (
        <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-gray-700">Other Images</label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {urls.map((u, i) => (
                    <div key={i} className="relative rounded-xl overflow-hidden group aspect-video bg-gray-100">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={u} alt="uploaded" className="w-full h-full object-cover" />
                        <button type="button" onClick={() => onChange(urls.filter((_, j) => j !== i))} className="absolute top-2 right-2 w-6 h-6 bg-red-500 rounded-full text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                        </button>
                    </div>
                ))}
                <div
                    onDragOver={(e) => { e.preventDefault(); setDrag(true); }}
                    onDragLeave={() => setDrag(false)}
                    onDrop={onDrop}
                    onClick={() => ref.current?.click()}
                    className={`relative rounded-xl border-2 border-dashed flex flex-col items-center justify-center gap-2 transition-all aspect-video cursor-pointer ${drag ? "border-[#088E48] bg-[#088E48]/5" : "border-gray-200 hover:border-[#088E48] hover:bg-gray-50"}`}
                >
                    <input ref={ref} type="file" min="1" max="5" accept="image/*" multiple className="hidden" onChange={(e) => { if (e.target.files) upload(e.target.files); }} />
                    {uploading ? (
                        <div className="w-5 h-5 border-2 border-[#088E48] border-t-transparent rounded-full animate-spin" />
                    ) : (
                        <>
                            <Plus className="w-5 h-5 text-gray-400" />
                            <span className="text-xs font-medium text-gray-500">Add Images</span>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

// ── DynamicList ───────────────────────────────────────────────────────────────
function DynList({ label, items, placeholder, onChange }: { label: string; items: string[]; placeholder: string; onChange: (v: string[]) => void }) {
    const add = () => onChange([...items, ""]);
    return (
        <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between"><label className="text-sm font-medium text-gray-700">{label}</label><button type="button" onClick={add} className="text-xs text-[#088E48] hover:underline font-medium">+ Add</button></div>
            {items.map((item, i) => (
                <div key={i} className="flex gap-2">
                    <input className={ic} placeholder={placeholder} value={item} onChange={(e) => { const n = [...items]; n[i] = e.target.value; onChange(n); }} />
                    <button type="button" onClick={() => onChange(items.filter((_, j) => j !== i))} className="w-9 h-9 shrink-0 rounded-xl bg-red-50 hover:bg-red-100 text-red-500 flex items-center justify-center transition-colors">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                </div>
            ))}
            {items.length === 0 && <button type="button" onClick={add} className="w-full py-2.5 border-2 border-dashed border-gray-200 rounded-xl text-xs text-gray-400 hover:border-[#088E48] hover:text-[#088E48] transition-all">+ Click to add</button>}
        </div>
    );
}

// ── Toast ─────────────────────────────────────────────────────────────────────
function Toast({ type, message, onClose }: { type: "success" | "error"; message: string; onClose: () => void }) {
    useEffect(() => { const t = setTimeout(onClose, 4000); return () => clearTimeout(t); }, [onClose]);
    return (
        <div className={`fixed bottom-6 right-6 z-[100] flex items-center gap-3 px-5 py-3.5 rounded-2xl shadow-xl text-white text-sm font-medium animate-in slide-in-from-bottom-4 ${type === "success" ? "bg-[#088E48]" : "bg-red-500"}`}>
            {type === "success" ? <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg> : <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>}
            {message}
            <button onClick={onClose} className="ml-2 opacity-70 hover:opacity-100"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg></button>
        </div>
    );
}

// ── Stat Card ─────────────────────────────────────────────────────────────────
function StatCard({ label, count, icon, color, sub }: { label: string; count: number; icon: React.ReactNode; color: string; sub: string }) {
    return (
        <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex items-start justify-between">
            <div><p className="text-sm text-gray-500 font-medium">{label}</p><p className="text-3xl font-bold text-gray-900 mt-1">{count}</p><p className="text-xs text-gray-400 mt-1">{sub}</p></div>
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${color}`}>{icon}</div>
        </div>
    );
}

// ── Main Page ─────────────────────────────────────────────────────────────────
export default function CpanelPage() {
    const [tab, setTabState] = useState<Tab>("dashboard");
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        const t = localStorage.getItem("cpanelTab") as Tab;
        if (t) setTabState(t);
        setMounted(true);
    }, []);

    const setTab = (t: Tab) => {
        setTabState(t);
        localStorage.setItem("cpanelTab", t);
    };

    const [drawer, setDrawer] = useState<DrawerMode>(null);
    const [members, setMembers] = useState<MemberData[]>([]);
    const [allProjects, setProjects] = useState<ProjectData[]>([]);
    const [events, setEvents] = useState<EventData[]>([]);
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [toast, setToast] = useState<{ type: "success" | "error"; message: string } | null>(null);
    const [search, setSearch] = useState("");
    const [provinceFilter, setProvinceFilter] = useState("");
    const [sectorFilter, setSectorFilter] = useState<string[]>([]);
    const [isSectorOpen, setIsSectorOpen] = useState(false);

    const [projectSearch, setProjectSearch] = useState("");
    const [projectDateFilter, setProjectDateFilter] = useState("");
    const [projectTeamFilter, setProjectTeamFilter] = useState<string[]>([]);
    const [isProjectTeamOpen, setIsProjectTeamOpen] = useState(false);

    const [isFormSectorOpen, setIsFormSectorOpen] = useState(false);
    const [isLinkedHappeningsOpen, setIsLinkedHappeningsOpen] = useState(false);
    const [isLinkedMembersOpen, setIsLinkedMembersOpen] = useState(false);

    const [eventSearch, setEventSearch] = useState("");
    const [eventDateFilter, setEventDateFilter] = useState("");
    const [eventTeamFilter, setEventTeamFilter] = useState<string[]>([]);
    const [isEventTeamOpen, setIsEventTeamOpen] = useState(false);

    // Member form
    const defMember: Omit<MemberData, "id"> & { id: string } = { id: "", name: "", location: "", province: "", designation: [], sectors: [], description: "", image: "", period: "2023 - present", yearStart: "2023", type: ["member"], slug: "", socials: {}, achievements: [] };
    const [mf, setMf] = useState(defMember);
    // Project form
    const defProject: ProjectData = { slug: "", title: "", dateStart: "", dateEnd: "", thumbnail: "", shortDescription: "", beneficiaries: "", locations: ["Islamabad"], objectives: [""], impacts: [""], categories: ["projects"], linkedHappenings: [], linkedMembers: [], detailImages: [] };
    const [pf, setPf] = useState<ProjectData>(defProject);
    // Event form
    const defEvent: EventData = { slug: "", title: "", dateStart: "", dateEnd: "", thumbnail: "", shortDescription: "", beneficiaries: "", badge: "", date: "", location: "", category: "", attendees: "", author: "", locations: ["Islamabad"], objectives: [""], impacts: [""], categories: ["projects"], type: ["All"], detailImages: [] };
    const [ef, setEf] = useState<EventData>(defEvent);

    const showToast = (type: "success" | "error", message: string) => setToast({ type, message });

    const fetchAll = useCallback(async () => {
        setLoading(true);
        try {
            const [r1, r2, r3] = await Promise.all([fetch("/api/admin/members"), fetch("/api/admin/projects"), fetch("/api/admin/events")]);
            setMembers(await r1.json());
            setProjects(await r2.json());
            setEvents(await r3.json());
        } catch { showToast("error", "Failed to load data"); }
        setLoading(false);
    }, []);

    useEffect(() => { fetchAll(); }, [fetchAll]);

    const openDrawer = (mode: DrawerMode) => { setDrawer(mode); setMf(defMember); setPf(defProject); setEf(defEvent); };
    const closeDrawer = () => setDrawer(null);

    const saveMember = async () => {
        if (!mf.name.trim()) { showToast("error", "Name is required"); return; }
        setSaving(true);
        const payload = { ...mf, id: mf.id ? parseInt(mf.id) : Date.now(), slug: mf.slug || slugify(mf.name) };
        const res = await fetch("/api/admin/members", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });
        const data = await res.json();
        setSaving(false);
        if (data.success) { showToast("success", `Member "${mf.name}" added successfully!`); closeDrawer(); fetchAll(); }
        else showToast("error", data.error || "Failed to save member");
    };

    const saveProject = async () => {
        if (!pf.title.trim()) { showToast("error", "Title is required"); return; }
        setSaving(true);
        const payload = { ...pf, slug: pf.slug || slugify(pf.title) };
        const res = await fetch("/api/admin/projects", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });
        const data = await res.json();
        setSaving(false);
        if (data.success) { showToast("success", `Project "${pf.title}" added!`); closeDrawer(); fetchAll(); }
        else showToast("error", data.error || "Failed to save project");
    };

    const saveEvent = async () => {
        if (!ef.title.trim()) { showToast("error", "Title is required"); return; }
        setSaving(true);
        const payload = { ...ef, slug: ef.slug || slugify(ef.title) };
        const res = await fetch("/api/admin/events", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });
        const data = await res.json();
        setSaving(false);
        if (data.success) { showToast("success", `Event "${ef.title}" added!`); closeDrawer(); fetchAll(); }
        else showToast("error", data.error || "Failed to save event");
    };

    const deleteMember = async (id: number) => {
        if (!window.confirm("Are you sure you want to delete this member?")) return;
        setLoading(true);
        try {
            const res = await fetch("/api/admin/members", {
                method: "DELETE",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ id })
            });
            const data = await res.json();
            if (data.success) {
                showToast("success", "Member deleted successfully");
                fetchAll();
            } else {
                showToast("error", data.error || "Failed to delete member");
                setLoading(false);
            }
        } catch {
            showToast("error", "Error deleting member");
            setLoading(false);
        }
    };

    const provinces = ["Punjab", "Sindh", "Khyber Pakhtunkhwa", "Balochistan", "Islamabad", "AJK", "Gilgit-Baltistan"];
    const categories = ["Technology", "Education", "Health", "Policy Development", "Youth Leadership", "Global Policy", "Entrepreneurship", "Civic Engagement"];
    const labels: Record<Tab, string> = { dashboard: "Dashboard", members: "Members", projects: "Projects", events: "Events" };

    const allSectors = Array.from(new Set(members.flatMap(m => m.sectors))).sort();

    const filteredMembers = members.filter((m) => {
        const matchesSearch = m.name.toLowerCase().includes(search.toLowerCase()) || (m.designation || []).some(d => d.toLowerCase().includes(search.toLowerCase()));
        const matchesProvince = provinceFilter === "" || m.province === provinceFilter;
        const matchesSector = sectorFilter.length === 0 || m.sectors.some(s => sectorFilter.includes(s));
        return matchesSearch && matchesProvince && matchesSector;
    });

    const allProjectDates = Array.from(new Set(allProjects.map(p => p.dateStart).filter(Boolean))).sort();
    const filteredProjects = allProjects.filter(p => {
        const matchesSearch = p.title.toLowerCase().includes(projectSearch.toLowerCase());
        const matchesDate = projectDateFilter === "" || p.dateStart === projectDateFilter;
        // Since project data does not inherently have 'teamMembers' mapped to member names, we check if we added it,
        // or safely pass if not implemented. For now, it assumes a property exists or ignores filter if empty.
        const pTeam = (p as any).teamMembers || [];
        const matchesTeam = projectTeamFilter.length === 0 || pTeam.some((m: string) => projectTeamFilter.includes(m));
        return matchesSearch && matchesDate && matchesTeam;
    });

    const allEventDates = Array.from(new Set(events.map(e => e.dateStart).filter(Boolean))).sort();
    const filteredEvents = events.filter(e => {
        const matchesSearch = e.title.toLowerCase().includes(eventSearch.toLowerCase());
        const matchesDate = eventDateFilter === "" || e.dateStart === eventDateFilter;
        const eTeam = (e as any).teamMembers || [];
        const matchesTeam = eventTeamFilter.length === 0 || eTeam.some((m: string) => eventTeamFilter.includes(m));
        return matchesSearch && matchesDate && matchesTeam;
    });

    const navItems: { id: Tab; label: string; icon: React.ReactNode }[] = [
        { id: "dashboard", label: "Dashboard", icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg> },
        { id: "members", label: "Members", icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" /></svg> },
        { id: "projects", label: "Projects", icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" /></svg> },
        { id: "events", label: "Happenings", icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg> },
    ];

    if (!mounted) return null;

    return (
        <div className="min-h-screen bg-[#f1f5f9] flex font-sans">
            {/* Sidebar */}
            <aside className="w-60 shrink-0 bg-[#0f172a] min-h-screen flex flex-col fixed left-0 top-0 bottom-0 z-30">
                <div className="px-5 py-6 border-b border-white/10">
                    <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-xl bg-[#088E48] flex items-center justify-center shrink-0">
                            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        </div>
                        <div><p className="text-white font-bold text-sm">PMYNC</p><p className="text-gray-400 text-xs">Admin Panel</p></div>
                    </div>
                </div>
                <nav className="flex-1 px-3 py-5 space-y-1">
                    {navItems.map((n) => (
                        <button key={n.id} onClick={() => setTab(n.id)} className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-left transition-all ${tab === n.id ? "bg-[#088E48] text-white" : "text-gray-400 hover:bg-white/5 hover:text-gray-200"}`}>
                            {n.icon}<span className="text-sm font-medium">{n.label}</span>
                            {n.id === "members" && members.length > 0 && <span className={`ml-auto text-xs px-1.5 py-0.5 rounded-full font-medium ${tab === "members" ? "bg-white/20 text-white" : "bg-white/10 text-gray-400"}`}>{members.length}</span>}
                        </button>
                    ))}
                </nav>
                <div className="px-5 py-5 border-t border-white/10">
                    <a href="/" className="flex items-center gap-2 text-xs text-gray-400 hover:text-gray-200 transition-colors">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                        View Live Site
                    </a>
                </div>
            </aside>

            {/* Main */}
            <main className="flex-1 ml-60 min-h-screen flex flex-col">
                {/* Header */}
                <header className="bg-white border-b border-gray-100 px-8 py-4 flex items-center justify-between sticky top-0 z-20">
                    <div><h1 className="text-lg font-bold text-gray-900">{labels[tab]}</h1><p className="text-xs text-gray-400">PMYNC Admin Control Panel</p></div>
                    <div className="flex items-center gap-3">
                        <div className="flex items-center gap-2 px-3 py-1.5 bg-emerald-50 rounded-lg"><div className="w-2 h-2 rounded-full bg-[#088E48] animate-pulse" /><span className="text-xs font-medium text-[#088E48]">Live</span></div>
                        {tab === "members" && <button onClick={() => openDrawer("member")} className="flex items-center gap-2 px-4 py-2 bg-[#088E48] hover:bg-[#06703a] text-white text-sm font-semibold rounded-xl transition-all shadow-sm shadow-[#088E48]/30"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>Add Member</button>}
                        {tab === "projects" && <button onClick={() => openDrawer("project")} className="flex items-center gap-2 px-4 py-2 bg-[#088E48] hover:bg-[#06703a] text-white text-sm font-semibold rounded-xl transition-all shadow-sm shadow-[#088E48]/30"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>Add Project</button>}
                        {tab === "events" && <button onClick={() => openDrawer("event")} className="flex items-center gap-2 px-4 py-2 bg-[#088E48] hover:bg-[#06703a] text-white text-sm font-semibold rounded-xl transition-all shadow-sm shadow-[#088E48]/30"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>Add Event</button>}
                    </div>
                </header>

                <div className="flex-1 p-8">
                    {loading ? (
                        <div className="flex items-center justify-center py-32"><div className="w-8 h-8 border-2 border-[#088E48] border-t-transparent rounded-full animate-spin" /></div>
                    ) : (
                        <>
                            {/* DASHBOARD */}
                            {tab === "dashboard" && (
                                <div className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                                        <StatCard label="Total Members" count={members.length} sub="Council Members" color="bg-emerald-50" icon={<svg className="w-6 h-6 text-[#088E48]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" /></svg>} />
                                        <StatCard label="Total Projects" count={allProjects.length} sub="Active Programs" color="bg-blue-50" icon={<svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" /></svg>} />
                                        <StatCard label="Total Events" count={events.length} sub="Happenings" color="bg-purple-50" icon={<svg className="w-6 h-6 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>} />
                                    </div>
                                    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                                        <h3 className="font-bold text-gray-800 mb-4">Quick Actions</h3>
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                            {[{ label: "Add Member", tab: "members" as Tab, drawer: "member" as DrawerMode, color: "bg-emerald-500 hover:bg-emerald-600" }, { label: "Add Project", tab: "projects" as Tab, drawer: "project" as DrawerMode, color: "bg-blue-500 hover:bg-blue-600" }, { label: "Add Event", tab: "events" as Tab, drawer: "event" as DrawerMode, color: "bg-purple-500 hover:bg-purple-600" }].map((a) => (
                                                <button key={a.label} onClick={() => { setTab(a.tab); openDrawer(a.drawer); }} className={`${a.color} text-white font-semibold rounded-xl py-3 px-5 transition-all text-sm`}>{a.label}</button>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                                        <h3 className="font-bold text-gray-800 mb-4">Recent Members</h3>
                                        <div className="space-y-3">
                                            {members.slice(-5).reverse().map((m) => (
                                                <div key={m.id} className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50 transition-colors">
                                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                                    <img src={m.image || "/members/placeholder.jpg"} alt={m.name} className="w-10 h-10 rounded-full object-cover bg-gray-100" onError={(e) => { (e.target as HTMLImageElement).src = "https://ui-avatars.com/api/?name=" + encodeURIComponent(m.name) + "&background=088E48&color=fff"; }} />
                                                    <div className="flex-1 min-w-0"><p className="text-sm font-semibold text-gray-800 truncate">{m.name}</p><p className="text-xs text-gray-400 truncate">{(m.designation || []).join(", ")} · {m.province}</p></div>
                                                    <span className="text-xs px-2 py-1 bg-emerald-50 text-emerald-700 rounded-full">{m.type[0]}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* MEMBERS */}
                            {tab === "members" && (
                                <div className="space-y-5">
                                    <div className="flex items-center gap-3">
                                        <div className="relative flex-1 max-w-xs">
                                            <svg className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                                            <input className="pl-9 pr-4 py-2.5 rounded-xl border border-gray-200 bg-white text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#088E48]/30 focus:border-[#088E48] w-full" placeholder="Search members..." value={search} onChange={(e) => setSearch(e.target.value)} />
                                        </div>
                                        <select
                                            className="px-4 py-2.5 rounded-xl border border-gray-200 bg-white text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#088E48]/30 focus:border-[#088E48] transition-all"
                                            value={provinceFilter}
                                            onChange={(e) => setProvinceFilter(e.target.value)}
                                        >
                                            <option value="">All Provinces</option>
                                            {provinces.map((p) => <option key={p} value={p}>{p}</option>)}
                                        </select>

                                        <div className="relative">
                                            <button
                                                onClick={() => setIsSectorOpen(!isSectorOpen)}
                                                className="px-4 py-2.5 rounded-xl border border-gray-200 bg-white text-sm text-gray-800 flex items-center justify-between gap-2 hover:border-[#088E48] transition-all min-w-[140px]"
                                            >
                                                <span className="truncate max-w-[120px] text-left">
                                                    {sectorFilter.length === 0 ? "All Sectors" : `${sectorFilter.length} selected`}
                                                </span>
                                                <svg className={`w-4 h-4 text-gray-400 transition-transform ${isSectorOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                                            </button>
                                            {isSectorOpen && (
                                                <>
                                                    <div className="fixed inset-0 z-10" onClick={() => setIsSectorOpen(false)} />
                                                    <div className="absolute left-0 top-full mt-2 w-64 bg-white border border-gray-100 rounded-xl shadow-lg z-20 py-2 max-h-64 overflow-y-auto flex flex-col">
                                                        {allSectors.map(s => (
                                                            <label key={s} className="flex items-center gap-3 px-4 py-2 hover:bg-gray-50 cursor-pointer">
                                                                <input
                                                                    type="checkbox"
                                                                    className="w-4 h-4 text-[#088E48] rounded-sm border-gray-300 focus:ring-[#088E48]"
                                                                    checked={sectorFilter.includes(s)}
                                                                    onChange={(e) => {
                                                                        if (e.target.checked) setSectorFilter([...sectorFilter, s]);
                                                                        else setSectorFilter(sectorFilter.filter(sf => sf !== s));
                                                                    }}
                                                                />
                                                                <span className="text-sm text-gray-700">{s}</span>
                                                            </label>
                                                        ))}
                                                        {allSectors.length === 0 && <div className="px-4 py-2 text-sm text-gray-400">No sectors found</div>}
                                                    </div>
                                                </>
                                            )}
                                        </div>

                                        <p className="text-sm text-gray-500 shrink-0">{filteredMembers.length} members</p>
                                    </div>
                                    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                                        <table className="w-full text-sm">
                                            <thead><tr className="bg-gray-50 border-b border-gray-100">{["Photo", "Name", "Designation", "Province", "Sectors", "Type", "Action"].map((h) => <th key={h} className={`px-5 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider ${h === "Action" ? "text-right" : ""}`}>{h}</th>)}</tr></thead>
                                            <tbody className="divide-y divide-gray-50">
                                                {filteredMembers.map((m) => (
                                                    <tr key={m.id} className="hover:bg-gray-50 transition-colors group">
                                                        <td className="px-5 py-3">
                                                            {/* eslint-disable-next-line @next/next/no-img-element */}
                                                            <img src={m.image || ""} alt={m.name} className="w-9 h-9 rounded-full object-cover bg-gray-100" onError={(e) => { (e.target as HTMLImageElement).src = "https://ui-avatars.com/api/?name=" + encodeURIComponent(m.name) + "&background=088E48&color=fff&size=64"; }} />
                                                        </td>
                                                        <td className="px-5 py-3"><p className="font-semibold text-gray-800">{m.name}</p><p className="text-xs text-gray-400">{m.location}</p></td>
                                                        <td className="px-5 py-3 text-gray-600">{(m.designation || []).join(", ")}</td>
                                                        <td className="px-5 py-3 text-gray-600">{m.province}</td>
                                                        <td className="px-5 py-3"><div className="flex flex-wrap gap-1">{m.sectors.slice(0, 2).map((s) => <span key={s} className="text-xs px-2 py-0.5 bg-gray-100 text-gray-600 rounded-full">{s}</span>)}</div></td>
                                                        <td className="px-5 py-3"><span className="text-xs px-2.5 py-1 bg-emerald-50 text-emerald-700 rounded-full font-medium">{m.type[0]}</span></td>
                                                        <td className="px-5 py-3 text-right">
                                                            <button 
                                                                onClick={() => deleteMember(m.id)}
                                                                className="opacity-0 group-hover:opacity-100 p-2 text-red-500 hover:bg-red-50 rounded-lg transition-all"
                                                                title="Delete Member"
                                                            >
                                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                                                            </button>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                        {filteredMembers.length === 0 && <div className="py-16 text-center text-gray-400 text-sm">No members found. <button onClick={() => openDrawer("member")} className="text-[#088E48] underline">Add one now</button></div>}
                                    </div>
                                </div>
                            )}

                            {/* PROJECTS */}
                            {tab === "projects" && (
                                <div className="space-y-5">
                                    <div className="flex flex-wrap items-center gap-3">
                                        <div className="relative flex-1 min-w-[200px] max-w-xs">
                                            <svg className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                                            <input className="pl-9 pr-4 py-2.5 rounded-xl border border-gray-200 bg-white text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#088E48]/30 focus:border-[#088E48] w-full" placeholder="Search projects..." value={projectSearch} onChange={(e) => setProjectSearch(e.target.value)} />
                                        </div>
                                        <select
                                            className="px-4 py-2.5 rounded-xl border border-gray-200 bg-white text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#088E48]/30 focus:border-[#088E48] transition-all"
                                            value={projectDateFilter}
                                            onChange={(e) => setProjectDateFilter(e.target.value)}
                                        >
                                            <option value="">All Dates</option>
                                            {allProjectDates.map((d) => <option key={d} value={d}>{d}</option>)}
                                        </select>
                                        <div className="relative">
                                            <button
                                                onClick={() => setIsProjectTeamOpen(!isProjectTeamOpen)}
                                                className="px-4 py-2.5 rounded-xl border border-gray-200 bg-white text-sm text-gray-800 flex items-center justify-between gap-2 hover:border-[#088E48] transition-all min-w-[140px]"
                                            >
                                                <span className="truncate max-w-[120px] text-left">
                                                    {projectTeamFilter.length === 0 ? "Team Members" : `${projectTeamFilter.length} selected`}
                                                </span>
                                                <svg className={`w-4 h-4 text-gray-400 transition-transform ${isProjectTeamOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                                            </button>
                                            {isProjectTeamOpen && (
                                                <>
                                                    <div className="fixed inset-0 z-10" onClick={() => setIsProjectTeamOpen(false)} />
                                                    <div className="absolute left-0 top-full mt-2 w-64 bg-white border border-gray-100 rounded-xl shadow-lg z-20 py-2 max-h-64 overflow-y-auto flex flex-col">
                                                        {members.map(m => (
                                                            <label key={m.id} className="flex items-center gap-3 px-4 py-2 hover:bg-gray-50 cursor-pointer">
                                                                <input
                                                                    type="checkbox"
                                                                    className="w-4 h-4 text-[#088E48] rounded-sm border-gray-300 focus:ring-[#088E48]"
                                                                    checked={projectTeamFilter.includes(m.name)}
                                                                    onChange={(e) => {
                                                                        if (e.target.checked) setProjectTeamFilter([...projectTeamFilter, m.name]);
                                                                        else setProjectTeamFilter(projectTeamFilter.filter(mf => mf !== m.name));
                                                                    }}
                                                                />
                                                                <span className="text-sm text-gray-700">{m.name}</span>
                                                            </label>
                                                        ))}
                                                        {members.length === 0 && <div className="px-4 py-2 text-sm text-gray-400">No members found</div>}
                                                    </div>
                                                </>
                                            )}
                                        </div>
                                        <p className="text-sm text-gray-500 ml-auto shrink-0">{filteredProjects.length} projects</p>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                                        {filteredProjects.map((p) => (
                                            <div key={p.slug} className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-md transition-shadow w-auto">
                                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                                <img
                                                    src={p.thumbnail}
                                                    alt={p.title}
                                                    className="w-full h-64 object-cover bg-gray-100" onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
                                                />
                                                <div className="p-4">
                                                    <p className="font-bold text-gray-800 text-sm leading-snug line-clamp-2">
                                                        {p.title}
                                                    </p>
                                                    <p className="text-xs text-gray-400 mt-1">
                                                        {p.dateStart} – {p.dateEnd}
                                                    </p>
                                                    <p className="text-xs text-gray-500 mt-2 line-clamp-2">{p.shortDescription}</p>
                                                    <div className="flex items-center gap-2 mt-3">
                                                        <span className="text-xs px-2 py-0.5 bg-blue-50 text-blue-600 rounded-full">
                                                            {p.beneficiaries} beneficiaries
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                        <button onClick={() => openDrawer("project")} className="bg-white rounded-2xl border-2 border-dashed border-gray-200 hover:border-[#088E48] h-52 flex flex-col items-center justify-center gap-3 transition-all group">
                                            <div className="w-12 h-12 rounded-xl bg-gray-100 group-hover:bg-[#088E48]/10 flex items-center justify-center transition-colors">
                                                <Plus className="w-6 h-6 text-gray-400 group-hover:text-[#088E48]" />
                                            </div>
                                            <p className="text-sm font-medium text-gray-400 group-hover:text-[#088E48]">
                                                Add New Project
                                            </p>
                                        </button>
                                    </div>
                                </div>
                            )}

                            {/* HAPPENINGS */}
                            {tab === "events" && (
                                <div className="space-y-5">
                                    <div className="flex flex-wrap items-center gap-3">
                                        <div className="relative flex-1 min-w-[200px] max-w-xs">
                                            <svg className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                                            <input className="pl-9 pr-4 py-2.5 rounded-xl border border-gray-200 bg-white text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#088E48]/30 focus:border-[#088E48] w-full" placeholder="Search happenings..." value={eventSearch} onChange={(e) => setEventSearch(e.target.value)} />
                                        </div>
                                        <select
                                            className="px-4 py-2.5 rounded-xl border border-gray-200 bg-white text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#088E48]/30 focus:border-[#088E48] transition-all"
                                            value={eventDateFilter}
                                            onChange={(e) => setEventDateFilter(e.target.value)}
                                        >
                                            <option value="">All Dates</option>
                                            {allEventDates.map((d) => <option key={d} value={d}>{d}</option>)}
                                        </select>
                                        <div className="relative">
                                            <button
                                                onClick={() => setIsEventTeamOpen(!isEventTeamOpen)}
                                                className="px-4 py-2.5 rounded-xl border border-gray-200 bg-white text-sm text-gray-800 flex items-center justify-between gap-2 hover:border-[#088E48] transition-all min-w-[140px]"
                                            >
                                                <span className="truncate max-w-[120px] text-left">
                                                    {eventTeamFilter.length === 0 ? "Team Members" : `${eventTeamFilter.length} selected`}
                                                </span>
                                                <svg className={`w-4 h-4 text-gray-400 transition-transform ${isEventTeamOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                                            </button>
                                            {isEventTeamOpen && (
                                                <>
                                                    <div className="fixed inset-0 z-10" onClick={() => setIsEventTeamOpen(false)} />
                                                    <div className="absolute left-0 top-full mt-2 w-64 bg-white border border-gray-100 rounded-xl shadow-lg z-20 py-2 max-h-64 overflow-y-auto flex flex-col">
                                                        {members.map(m => (
                                                            <label key={m.id} className="flex items-center gap-3 px-4 py-2 hover:bg-gray-50 cursor-pointer">
                                                                <input
                                                                    type="checkbox"
                                                                    className="w-4 h-4 text-[#088E48] rounded-sm border-gray-300 focus:ring-[#088E48]"
                                                                    checked={eventTeamFilter.includes(m.name)}
                                                                    onChange={(e) => {
                                                                        if (e.target.checked) setEventTeamFilter([...eventTeamFilter, m.name]);
                                                                        else setEventTeamFilter(eventTeamFilter.filter(mf => mf !== m.name));
                                                                    }}
                                                                />
                                                                <span className="text-sm text-gray-700">{m.name}</span>
                                                            </label>
                                                        ))}
                                                        {members.length === 0 && <div className="px-4 py-2 text-sm text-gray-400">No members found</div>}
                                                    </div>
                                                </>
                                            )}
                                        </div>
                                        <p className="text-sm text-gray-500 ml-auto shrink-0">{filteredEvents.length} happenings</p>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                                        {filteredEvents.map((e) => (
                                            <div key={e.slug} className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                                <img src={e.thumbnail} alt={e.title} className="w-full h-64 object-cover bg-gray-100" onError={(e2) => { (e2.target as HTMLImageElement).style.display = "none"; }} />
                                                <div className="p-4">
                                                    {e.badge &&
                                                        <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${e.badge === "UpComing" ? "bg-orange-50 text-orange-600" : e.badge === "Story" ? "bg-purple-50 text-purple-600" : "bg-blue-50 text-blue-600"}`}>
                                                            {e.badge}
                                                        </span>}
                                                    <p className="font-bold text-gray-800 text-sm leading-snug mt-2 line-clamp-2">{e.title}</p>
                                                    <p className="text-xs text-gray-400 mt-1">{e.category} · {e.dateStart}</p>
                                                    {e.location &&
                                                        <div className="flex items-center gap-1 text-xs text-gray-500 mt-1">
                                                            <MapPin className="w-4 h-4 text-gray-400" />
                                                            {e.location}
                                                        </div>}
                                                </div>
                                            </div>
                                        ))}
                                        <button onClick={() => openDrawer("event")} className="bg-white rounded-2xl border-2 border-dashed border-gray-200 hover:border-[#088E48] h-52 flex flex-col items-center justify-center gap-3 transition-all group">
                                            <div className="w-12 h-12 rounded-xl bg-gray-100 group-hover:bg-[#088E48]/10 flex items-center justify-center transition-colors">
                                                <Plus className="w-6 h-6 text-gray-400 group-hover:text-[#088E48]" />
                                            </div>
                                            <p className="text-sm font-medium text-gray-400 group-hover:text-[#088E48]">Add New Happening</p>
                                        </button>
                                    </div>
                                </div>
                            )}
                        </>
                    )}
                </div>
            </main>

            {/* Drawer Overlay */}
            {drawer && (
                <div className="fixed inset-0 z-40 flex">
                    <div className="flex-1 bg-black/40 backdrop-blur-sm" onClick={closeDrawer} />
                    <div className="w-[520px] bg-white h-full flex flex-col shadow-2xl overflow-hidden">
                        {/* Drawer Header */}
                        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
                            <div>
                                <h2 className="text-lg font-bold text-gray-900">{drawer === "member" ? "Add New Member" : drawer === "project" ? "Add New Project" : "Add New Happening"}</h2>
                                <p className="text-xs text-gray-400 mt-0.5">Fill in the details and click Save</p>
                            </div>
                            <button onClick={closeDrawer} className="w-8 h-8 rounded-xl bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-500 transition-colors">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                            </button>
                        </div>

                        {/* Drawer Body */}
                        <div className="flex-1 overflow-y-auto p-6 space-y-4">
                            {/* MEMBER FORM */}
                            {drawer === "member" && (
                                <>
                                    <ImageUpload folder="members" onUploaded={(url) => setMf((f) => ({ ...f, image: url }))} currentUrl={mf.image} />
                                    <div className="grid grid-cols-2 gap-3">
                                        <div><label className="text-xs font-medium text-gray-600 mb-1 block">Member ID</label><input className={ic} placeholder="e.g. 10" value={mf.id} onChange={(e) => setMf((f) => ({ ...f, id: e.target.value }))} /></div>
                                        <div><label className="text-xs font-medium text-gray-600 mb-1 block">Full Name *</label><input className={ic} placeholder="Ahmed Khan" value={mf.name} onChange={(e) => setMf((f) => ({ ...f, name: e.target.value, slug: slugify(e.target.value) }))} /></div>
                                        <div><label className="text-xs font-medium text-gray-600 mb-1 block">Location *</label><input className={ic} placeholder="Islamabad" value={mf.location} onChange={(e) => setMf((f) => ({ ...f, location: e.target.value }))} /></div>
                                        <div><label className="text-xs font-medium text-gray-600 mb-1 block">Province *</label><select className={sel} value={mf.province} onChange={(e) => setMf((f) => ({ ...f, province: e.target.value }))}><option value="">Select</option>{provinces.map((p) => <option key={p} value={p}>{p}</option>)}</select></div>
                                        <div><label className="text-xs font-medium text-gray-600 mb-1 block">Designation</label><input className={ic} placeholder="Member, Chairperson" value={(mf.designation || []).join(", ")} onChange={(e) => setMf((f) => ({ ...f, designation: e.target.value.split(",").map(v => v.trim()).filter(Boolean) }))} /></div>
                                        <div><label className="text-xs font-medium text-gray-600 mb-1 block">Year Start</label><input className={ic} placeholder="2023" value={mf.yearStart} onChange={(e) => setMf((f) => ({ ...f, yearStart: e.target.value }))} /></div>
                                        <div><label className="text-xs font-medium text-gray-600 mb-1 block">Email</label><input className={ic} placeholder="email@example.com" value={mf.socials.email || ""} onChange={(e) => setMf((f) => ({ ...f, socials: { ...f.socials, email: e.target.value } }))} /></div>
                                        <div><label className="text-xs font-medium text-gray-600 mb-1 block">LinkedIn</label><input className={ic} placeholder="https://linkedin.com/in/..." value={mf.socials.linkedin || ""} onChange={(e) => setMf((f) => ({ ...f, socials: { ...f.socials, linkedin: e.target.value } }))} /></div>
                                        <div><label className="text-xs font-medium text-gray-600 mb-1 block">Phone</label><input className={ic} placeholder="+92 300 1234567" value={mf.socials.phone || ""} onChange={(e) => setMf((f) => ({ ...f, socials: { ...f.socials, phone: e.target.value } }))} /></div>
                                    </div>
                                    <div><label className="text-xs font-medium text-gray-600 mb-1 block">Slug (auto)</label><input className={ic + " bg-gray-50"} value={mf.slug} onChange={(e) => setMf((f) => ({ ...f, slug: e.target.value }))} /></div>
                                    <div className="relative">
                                        <label className="text-xs font-medium text-gray-600 mb-1 block">Sectors</label>
                                        <button
                                            type="button"
                                            onClick={() => setIsFormSectorOpen(!isFormSectorOpen)}
                                            className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 bg-white text-sm text-gray-800 flex items-center justify-between gap-2 hover:border-[#088E48] transition-all"
                                        >
                                            <span className="truncate text-left max-w-[calc(100%-20px)]">
                                                {mf.sectors.length === 0 ? <span className="text-gray-400">Select Sectors...</span> : mf.sectors.join(", ")}
                                            </span>
                                            <svg className={`w-4 h-4 text-gray-400 transition-transform ${isFormSectorOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                                        </button>
                                        {isFormSectorOpen && (
                                            <>
                                                <div className="fixed inset-0 z-[50]" onClick={() => setIsFormSectorOpen(false)} />
                                                <div className="absolute left-0 right-0 top-[68px] bg-white border border-gray-100 rounded-xl shadow-lg z-[60] py-2 max-h-48 overflow-y-auto flex flex-col">
                                                    {allSectors.map(s => (
                                                        <label key={s} className="flex items-center gap-3 px-4 py-2 hover:bg-gray-50 cursor-pointer">
                                                            <input
                                                                type="checkbox"
                                                                className="w-4 h-4 text-[#088E48] rounded-sm border-gray-300 focus:ring-[#088E48]"
                                                                checked={mf.sectors.includes(s)}
                                                                onChange={(e) => {
                                                                    if (e.target.checked) setMf(f => ({ ...f, sectors: [...f.sectors, s] }));
                                                                    else setMf(f => ({ ...f, sectors: f.sectors.filter(sf => sf !== s) }));
                                                                }}
                                                            />
                                                            <span className="text-sm text-gray-700">{s}</span>
                                                        </label>
                                                    ))}
                                                    {allSectors.length === 0 && <div className="px-4 py-2 text-sm text-gray-400">No sectors found</div>}
                                                </div>
                                            </>
                                        )}
                                    </div>
                                    <div>
                                        <label className="text-xs font-medium text-gray-600 mb-1 block">Member Type</label>
                                        <select
                                            className={sel}
                                            value={mf.type[0] || ""}
                                            onChange={(e) => setMf((f) => ({ ...f, type: [e.target.value] }))}
                                        >
                                            <option value="leadership">Leadership</option>
                                            <option value="member">Member</option>
                                            <option value="alumni">Alumni</option>
                                        </select>
                                    </div>
                                    <div><label className="text-xs font-medium text-gray-600 mb-1 block">Description</label><textarea className={ta} rows={3} placeholder="Brief bio..." value={mf.description} onChange={(e) => setMf((f) => ({ ...f, description: e.target.value }))} /></div>
                                    <div className="border-t border-gray-100 pt-3">
                                        <div className="flex items-center justify-between mb-2"><label className="text-xs font-medium text-gray-700">Achievements</label><button type="button" onClick={() => setMf((f) => ({ ...f, achievements: [...f.achievements, { title: "", description: "" }] }))} className="text-xs text-[#088E48] hover:underline">+ Add</button></div>
                                        {mf.achievements.map((a, i) => (
                                            <div key={i} className="bg-gray-50 rounded-xl p-3 mb-2 space-y-2">
                                                <input className={ic} placeholder="Title" value={a.title} onChange={(e) => { const n = [...mf.achievements]; n[i] = { ...n[i], title: e.target.value }; setMf((f) => ({ ...f, achievements: n })); }} />
                                                <textarea className={ta} rows={2} placeholder="Description" value={a.description} onChange={(e) => { const n = [...mf.achievements]; n[i] = { ...n[i], description: e.target.value }; setMf((f) => ({ ...f, achievements: n })); }} />
                                                <button type="button" onClick={() => setMf((f) => ({ ...f, achievements: f.achievements.filter((_, j) => j !== i) }))} className="text-xs text-red-500 hover:underline">Remove</button>
                                            </div>
                                        ))}
                                    </div>
                                </>
                            )}

                            {/* PROJECT FORM */}
                            {drawer === "project" && (
                                <>
                                    <ImageUpload folder="nyc-project" onUploaded={(url) => setPf((f) => ({ ...f, thumbnail: url }))} currentUrl={pf.thumbnail} />
                                    <div><label className="text-xs font-medium text-gray-600 mb-1 block">Project Title *</label><input className={ic} placeholder="e.g. Leadership Development Program" value={pf.title} onChange={(e) => setPf((f) => ({ ...f, title: e.target.value, slug: slugify(e.target.value) }))} /></div>
                                    <div><label className="text-xs font-medium text-gray-600 mb-1 block">Slug (auto)</label><input className={ic + " bg-gray-50"} value={pf.slug} onChange={(e) => setPf((f) => ({ ...f, slug: e.target.value }))} /></div>
                                    <div className="grid grid-cols-2 gap-3">
                                        <div><label className="text-xs font-medium text-gray-600 mb-1 block">Start Date</label><input className={ic} placeholder="Nov, 2025" value={pf.dateStart} onChange={(e) => setPf((f) => ({ ...f, dateStart: e.target.value }))} /></div>
                                        <div><label className="text-xs font-medium text-gray-600 mb-1 block">End Date</label><input className={ic} placeholder="Dec, 2025" value={pf.dateEnd} onChange={(e) => setPf((f) => ({ ...f, dateEnd: e.target.value }))} /></div>
                                        <div><label className="text-xs font-medium text-gray-600 mb-1 block">Beneficiaries</label><input className={ic} placeholder="2500+" value={pf.beneficiaries} onChange={(e) => setPf((f) => ({ ...f, beneficiaries: e.target.value }))} /></div>
                                    </div>
                                    <div><label className="text-xs font-medium text-gray-600 mb-1 block">Short Description</label><textarea className={ta} rows={2} placeholder="Brief description..." value={pf.shortDescription} onChange={(e) => setPf((f) => ({ ...f, shortDescription: e.target.value }))} /></div>
                                    <DynList label="Locations" items={pf.locations} placeholder="e.g. Islamabad" onChange={(v) => setPf((f) => ({ ...f, locations: v }))} />
                                    <DynList label="Key Objectives" items={pf.objectives} placeholder="e.g. Empower youth" onChange={(v) => setPf((f) => ({ ...f, objectives: v }))} />
                                    <DynList label="Impacts" items={pf.impacts} placeholder="e.g. 500+ trained" onChange={(v) => setPf((f) => ({ ...f, impacts: v }))} />
                                    <div className="relative">
                                        <label className="text-xs font-medium text-gray-600 mb-1 block">Linked Happenings</label>
                                        <button
                                            type="button"
                                            onClick={() => { setIsLinkedHappeningsOpen(o => !o); setIsLinkedMembersOpen(false); }}
                                            className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 bg-white text-sm text-gray-800 flex items-center justify-between gap-2 hover:border-[#088E48] transition-all"
                                        >
                                            <span className="truncate text-left text-gray-700">
                                                {(pf.linkedHappenings || []).length === 0
                                                    ? <span className="text-gray-400">Select happenings...</span>
                                                    : `${(pf.linkedHappenings || []).length} selected`}
                                            </span>
                                            <svg className={`w-4 h-4 text-gray-400 shrink-0 transition-transform ${isLinkedHappeningsOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                                        </button>
                                        {(pf.linkedHappenings || []).length > 0 && (
                                            <div className="flex flex-wrap gap-1 mt-1.5">
                                                {(pf.linkedHappenings || []).map(slug => {
                                                    const ev = events.find(e => e.slug === slug);
                                                    return (
                                                        <span key={slug} className="inline-flex items-center gap-1 text-xs bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded-full">
                                                            {ev ? ev.title.slice(0, 30) + (ev.title.length > 30 ? '…' : '') : slug}
                                                            <button type="button" onClick={() => setPf(f => ({ ...f, linkedHappenings: (f.linkedHappenings || []).filter(s => s !== slug) }))} className="ml-0.5 text-emerald-500 hover:text-red-500">×</button>
                                                        </span>
                                                    );
                                                })}
                                            </div>
                                        )}
                                        {isLinkedHappeningsOpen && (
                                            <>
                                                <div className="fixed inset-0 z-[50]" onClick={() => setIsLinkedHappeningsOpen(false)} />
                                                <div className="absolute left-0 right-0 top-full mt-1 bg-white border border-gray-100 rounded-xl shadow-lg z-[60] py-2 max-h-52 overflow-y-auto">
                                                    {events.length === 0 && <div className="px-4 py-2 text-sm text-gray-400">No happenings found</div>}
                                                    {events.map(ev => (
                                                        <label key={ev.slug} className="flex items-start gap-3 px-4 py-2 hover:bg-gray-50 cursor-pointer">
                                                            <input
                                                                type="checkbox"
                                                                className="w-4 h-4 mt-0.5 text-[#088E48] rounded-sm border-gray-300 focus:ring-[#088E48] shrink-0"
                                                                checked={(pf.linkedHappenings || []).includes(ev.slug)}
                                                                onChange={e => {
                                                                    if (e.target.checked) setPf(f => ({ ...f, linkedHappenings: [...(f.linkedHappenings || []), ev.slug] }));
                                                                    else setPf(f => ({ ...f, linkedHappenings: (f.linkedHappenings || []).filter(s => s !== ev.slug) }));
                                                                }}
                                                            />
                                                            <span className="text-sm text-gray-700 leading-snug">{ev.title}</span>
                                                        </label>
                                                    ))}
                                                </div>
                                            </>
                                        )}
                                    </div>
                                    <div className="relative">
                                        <label className="text-xs font-medium text-gray-600 mb-1 block">Linked Members</label>
                                        <button
                                            type="button"
                                            onClick={() => { setIsLinkedMembersOpen(o => !o); setIsLinkedHappeningsOpen(false); }}
                                            className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 bg-white text-sm text-gray-800 flex items-center justify-between gap-2 hover:border-[#088E48] transition-all"
                                        >
                                            <span className="truncate text-left text-gray-700">
                                                {(pf.linkedMembers || []).length === 0
                                                    ? <span className="text-gray-400">Select members...</span>
                                                    : `${(pf.linkedMembers || []).length} selected`}
                                            </span>
                                            <svg className={`w-4 h-4 text-gray-400 shrink-0 transition-transform ${isLinkedMembersOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                                        </button>
                                        {(pf.linkedMembers || []).length > 0 && (
                                            <div className="flex flex-wrap gap-1 mt-1.5">
                                                {(pf.linkedMembers || []).map(slug => {
                                                    const m = members.find(mb => mb.slug === slug);
                                                    return (
                                                        <span key={slug} className="inline-flex items-center gap-1 text-xs bg-blue-50 text-blue-700 px-2 py-0.5 rounded-full">
                                                            {m ? m.name : slug}
                                                            <button type="button" onClick={() => setPf(f => ({ ...f, linkedMembers: (f.linkedMembers || []).filter(s => s !== slug) }))} className="ml-0.5 text-blue-500 hover:text-red-500">×</button>
                                                        </span>
                                                    );
                                                })}
                                            </div>
                                        )}
                                        {isLinkedMembersOpen && (
                                            <>
                                                <div className="fixed inset-0 z-[50]" onClick={() => setIsLinkedMembersOpen(false)} />
                                                <div className="absolute left-0 right-0 top-full mt-1 bg-white border border-gray-100 rounded-xl shadow-lg z-[60] py-2 max-h-52 overflow-y-auto">
                                                    {members.length === 0 && <div className="px-4 py-2 text-sm text-gray-400">No members found</div>}
                                                    {members.map(m => (
                                                        <label key={m.slug} className="flex items-center gap-3 px-4 py-2 hover:bg-gray-50 cursor-pointer">
                                                            <input
                                                                type="checkbox"
                                                                className="w-4 h-4 text-[#088E48] rounded-sm border-gray-300 focus:ring-[#088E48] shrink-0"
                                                                checked={(pf.linkedMembers || []).includes(m.slug)}
                                                                onChange={e => {
                                                                    if (e.target.checked) setPf(f => ({ ...f, linkedMembers: [...(f.linkedMembers || []), m.slug] }));
                                                                    else setPf(f => ({ ...f, linkedMembers: (f.linkedMembers || []).filter(s => s !== m.slug) }));
                                                                }}
                                                            />
                                                            <div className="flex items-center gap-2">
                                                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                                                <img src={m.image} alt={m.name} className="w-6 h-6 rounded-full object-cover bg-gray-100" onError={e => { (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${encodeURIComponent(m.name)}&background=088E48&color=fff`; }} />
                                                                <span className="text-sm text-gray-700">{m.name}</span>
                                                                <span className="text-xs text-gray-400">{(m.designation || []).join(", ")}</span>
                                                            </div>
                                                        </label>
                                                    ))}
                                                </div>
                                            </>
                                        )}
                                    </div>
                                    <MultiImageUpload folder="nyc-project" urls={pf.detailImages || []} onChange={(urls) => setPf(f => ({ ...f, detailImages: urls }))} />
                                </>
                            )}

                            {/* EVENT FORM */}
                            {drawer === "event" && (
                                <>
                                    <ImageUpload folder="nyc-happening" onUploaded={(url) => setEf((f) => ({ ...f, thumbnail: url }))} currentUrl={ef.thumbnail} />
                                    <div><label className="text-xs font-medium text-gray-600 mb-1 block">Event Title *</label><input className={ic} placeholder="Youth Leadership Workshop" value={ef.title} onChange={(e) => setEf((f) => ({ ...f, title: e.target.value, slug: slugify(e.target.value) }))} /></div>
                                    <div className="grid grid-cols-2 gap-3">
                                        <div><label className="text-xs font-medium text-gray-600 mb-1 block">Badge</label><select className={sel} value={ef.badge} onChange={(e) => setEf((f) => ({ ...f, badge: e.target.value }))}><option value="">None</option>{["UpComing", "Story", "Blog"].map((b) => <option key={b} value={b}>{b}</option>)}</select></div>
                                        <div><label className="text-xs font-medium text-gray-600 mb-1 block">Category</label><select className={sel} value={ef.category} onChange={(e) => setEf((f) => ({ ...f, category: e.target.value }))}><option value="">Select</option>{categories.map((c) => <option key={c} value={c}>{c}</option>)}</select></div>
                                        <div><label className="text-xs font-medium text-gray-600 mb-1 block">Start Date</label><input className={ic} placeholder="Nov, 2025" value={ef.dateStart} onChange={(e) => setEf((f) => ({ ...f, dateStart: e.target.value }))} /></div>
                                        <div><label className="text-xs font-medium text-gray-600 mb-1 block">End Date</label><input className={ic} placeholder="Dec, 2025" value={ef.dateEnd} onChange={(e) => setEf((f) => ({ ...f, dateEnd: e.target.value }))} /></div>
                                        <div><label className="text-xs font-medium text-gray-600 mb-1 block">Attendees</label><input className={ic} placeholder="150+" value={ef.attendees} onChange={(e) => setEf((f) => ({ ...f, attendees: e.target.value }))} /></div>
                                        <div><label className="text-xs font-medium text-gray-600 mb-1 block">Beneficiaries</label><input className={ic} placeholder="2500+" value={ef.beneficiaries} onChange={(e) => setEf((f) => ({ ...f, beneficiaries: e.target.value }))} /></div>
                                    </div>
                                    <div><label className="text-xs font-medium text-gray-600 mb-1 block">Venue / Location</label><input className={ic} placeholder="Convention Center, Islamabad" value={ef.location} onChange={(e) => setEf((f) => ({ ...f, location: e.target.value }))} /></div>
                                    <div><label className="text-xs font-medium text-gray-600 mb-1 block">Event Date & Time</label><input className={ic} placeholder="Sunday, March 17, 9:00 AM" value={ef.date} onChange={(e) => setEf((f) => ({ ...f, date: e.target.value }))} /></div>
                                    <div><label className="text-xs font-medium text-gray-600 mb-1 block">Author (Blog/Story)</label><input className={ic} placeholder="By Sarah Hafiz" value={ef.author} onChange={(e) => setEf((f) => ({ ...f, author: e.target.value }))} /></div>
                                    <div><label className="text-xs font-medium text-gray-600 mb-1 block">Short Description</label><textarea className={ta} rows={2} value={ef.shortDescription} onChange={(e) => setEf((f) => ({ ...f, shortDescription: e.target.value }))} /></div>
                                    <DynList label="Locations" items={ef.locations} placeholder="e.g. Islamabad" onChange={(v) => setEf((f) => ({ ...f, locations: v }))} />
                                    <DynList label="Key Objectives" items={ef.objectives} placeholder="e.g. Empower youth" onChange={(v) => setEf((f) => ({ ...f, objectives: v }))} />
                                    <DynList label="Impacts" items={ef.impacts} placeholder="e.g. 500+ attended" onChange={(v) => setEf((f) => ({ ...f, impacts: v }))} />
                                    <div><label className="text-xs font-medium text-gray-600 mb-1 block">Happening Type (comma separated)</label><input className={ic} placeholder="events, All" value={(ef.type || []).join(", ")} onChange={(e) => setEf((f) => ({ ...f, type: e.target.value.split(",").map((s) => s.trim()).filter(Boolean) }))} /></div>
                                    <MultiImageUpload folder="nyc-happening" urls={ef.detailImages || []} onChange={(urls) => setEf(f => ({ ...f, detailImages: urls }))} />
                                </>
                            )}
                        </div>

                        {/* Drawer Footer */}
                        <div className="px-6 py-4 border-t border-gray-100 flex gap-3 bg-white">
                            <button onClick={closeDrawer} className="flex-1 py-2.5 rounded-xl border border-gray-200 text-sm font-medium text-gray-600 hover:bg-gray-50 transition-all">Cancel</button>
                            <button
                                onClick={drawer === "member" ? saveMember : drawer === "project" ? saveProject : saveEvent}
                                disabled={saving}
                                className="flex-1 py-2.5 rounded-xl bg-[#088E48] hover:bg-[#06703a] text-white text-sm font-bold transition-all shadow-sm shadow-[#088E48]/30 disabled:opacity-60 flex items-center justify-center gap-2"
                            >
                                {saving ? <><div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />Saving...</> : <>
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                    Save {drawer === "member" ? "Member" : drawer === "project" ? "Project" : "Happening"}
                                </>}
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Toast */}
            {toast && <Toast type={toast.type} message={toast.message} onClose={() => setToast(null)} />}
        </div>
    );
}
