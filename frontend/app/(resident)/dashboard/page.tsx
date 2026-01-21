"use client"

import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    PlusCircle,
    Clock,
    CheckCircle2,
    Wrench,
    Droplets,
    Zap,
    Hammer,
    Shield,
    Wifi,
    Users,
    ChevronRight,
    SearchX,
    LayoutDashboard
} from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { useState } from "react"

// Mock data for complaints
const complaints = [
    {
        id: "1",
        title: "Leaking Tap in Kitchen",
        description: "The main faucet in the kitchen is dripping continuously despite being shut tight. Wasting water.",
        status: "Pending",
        date: "2024-01-19",
        category: "Plumbing",
        icon: Droplets,
        color: "text-primary",
        bg: "bg-primary/10"
    },
    {
        id: "2",
        title: "Street Light Flickering",
        description: "The street light right outside BLK 4 Entrance is flickering rapidly at night, creating unsafe visibility.",
        status: "In Progress",
        date: "2024-01-18",
        category: "Electricians/Internet",
        icon: Zap,
        color: "text-amber-600",
        bg: "bg-amber-600/10"
    },
    {
        id: "3",
        title: "Main door hinge loose",
        description: "The front door hinge is making a loud squeaky noise and feels like it might fall off soon.",
        status: "Resolved",
        date: "2024-01-15",
        category: "Carpentry",
        icon: Hammer,
        color: "text-orange-600",
        bg: "bg-orange-600/10"
    },
    {
        id: "4",
        title: "WiFi Signal Dropping",
        description: "The community WiFi signal in Ward 12 is extremely weak since yesterday morning.",
        status: "Pending",
        date: "2024-01-20",
        category: "Electricians/Internet",
        icon: Zap,
        color: "text-blue-600",
        bg: "bg-blue-600/10"
    },
    {
        id: "5",
        title: "Noise Complaint",
        description: "Very loud construction noise coming from the apartment above after 10 PM.",
        status: "Pending",
        date: "2024-01-21",
        category: "Privacy/Social Issues",
        icon: Shield,
        color: "text-red-600",
        bg: "bg-red-600/10"
    },
    {
        id: "6",
        title: "Elevator Maintenance",
        description: "The left elevator in BLK 4 is stopping erratically between floors. Needs urgent check.",
        status: "In Progress",
        date: "2024-01-21",
        category: "Maintenance",
        icon: Wrench,
        color: "text-indigo-600",
        bg: "bg-indigo-600/10"
    }
]

// Categories for the navigation grids

const CATEGORIES = [
    { id: "all", name: "All Issues", icon: PlusCircle, color: "text-slate-900", bg: "bg-slate-100" },
    { id: "Electricians/Internet", name: "Electricians/Internet", icon: Zap, color: "text-amber-600", bg: "bg-amber-100" },
    { id: "Plumbing", name: "Plumber", icon: Droplets, color: "text-primary", bg: "bg-primary/10" },
    { id: "Carpentry", name: "Carpenter", icon: Hammer, color: "text-orange-600", bg: "bg-orange-100" },
    { id: "Maintenance", name: "Maintenance", icon: Wrench, color: "text-indigo-600", bg: "bg-indigo-100" },
    { id: "Privacy/Social Issues", name: "Privacy/Social Issues", icon: Shield, color: "text-red-600", bg: "bg-red-100" },
]

export default function DashboardPage() {
    const [selectedCategory, setSelectedCategory] = useState("all")

    const filteredComplaints = selectedCategory === "all"
        ? complaints
        : complaints.filter(c => c.category === selectedCategory)

    return (
        <div className="flex flex-col gap-10 animate-fade-in pb-10">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-4xl font-extrabold tracking-tight text-gradient">Hello, Bhuvana</h1>
                    <p className="text-muted-foreground mt-1">Manage and track your property concerns with ease.</p>
                </div>
                <Button asChild className="rounded-full px-6 h-11 shadow-lg shadow-primary/20 hover:scale-105 transition-transform">
                    <Link href="/create-complaint" className="gap-2">
                        <PlusCircle className="h-4 w-4" />
                        Raise Complaint
                    </Link>
                </Button>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
                <Card className="glass border-border/5 group hover:border-primary/20 transition-all duration-500 overflow-hidden relative">
                    <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:scale-125 transition-transform">
                        <Clock className="h-12 w-12 text-primary" />
                    </div>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 relative z-10">
                        <CardTitle className="text-sm font-black uppercase tracking-widest text-muted-foreground">
                            Active Requests
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="relative z-10">
                        <div className="text-3xl font-black text-slate-900">2</div>
                        <p className="text-xs text-muted-foreground mt-1 font-bold">Awaiting Technical Action</p>
                    </CardContent>
                </Card>
                <Card className="glass border-border/5 group hover:border-emerald-500/20 transition-all duration-500 overflow-hidden relative">
                    <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:scale-125 transition-transform">
                        <CheckCircle2 className="h-12 w-12 text-emerald-500" />
                    </div>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 relative z-10">
                        <CardTitle className="text-sm font-black uppercase tracking-widest text-muted-foreground">
                            Resolved Cases
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="relative z-10">
                        <div className="text-3xl font-black text-slate-900">24</div>
                        <p className="text-xs text-emerald-600 mt-1 font-bold">100% Satisfaction Rate</p>
                    </CardContent>
                </Card>
                <Card className="glass border-border/5 group hover:border-primary/20 transition-all duration-500 overflow-hidden relative">
                    <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:scale-125 transition-transform">
                        <Wrench className="h-12 w-12 text-primary" />
                    </div>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 relative z-10">
                        <CardTitle className="text-sm font-black uppercase tracking-widest text-muted-foreground">
                            Next Inspection
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="relative z-10">
                        <div className="text-3xl font-black text-slate-900">1</div>
                        <p className="text-xs text-primary mt-1 font-bold underline underline-offset-4">Scheduled for Monday</p>
                    </CardContent>
                </Card>
            </div>

            <div className="space-y-6">
                <div className="flex flex-col gap-2">
                    <h2 className="text-2xl font-black tracking-tight flex items-center gap-2">
                        <LayoutDashboard className="h-6 w-6 text-primary" />
                        Explore Categories
                    </h2>
                    <p className="text-muted-foreground text-sm font-medium">Select a department to view specific complaints and their status.</p>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-6 gap-3">
                    {CATEGORIES.map((cat) => {
                        const Icon = cat.icon
                        const isActive = selectedCategory === cat.id
                        return (
                            <button
                                key={cat.id}
                                onClick={() => setSelectedCategory(cat.id)}
                                className={cn(
                                    "p-4 rounded-3xl border transition-all duration-500 flex flex-col items-center justify-center gap-3 group relative overflow-hidden",
                                    isActive
                                        ? "bg-primary border-primary shadow-2xl shadow-primary/30 scale-105 z-10"
                                        : "glass border-border/5 hover:border-primary/30 hover:scale-105"
                                )}
                            >
                                <div className={cn(
                                    "p-3 rounded-2xl transition-all duration-500",
                                    isActive ? "bg-white/20 text-white" : cn(cat.bg, cat.color)
                                )}>
                                    <Icon className="h-6 w-6" />
                                </div>
                                <span className={cn(
                                    "text-[10px] font-black uppercase tracking-widest text-center",
                                    isActive ? "text-white" : "text-slate-600"
                                )}>
                                    {cat.name}
                                </span>
                            </button>
                        )
                    })}
                </div>

                <div className="pt-4">
                    <h3 className="text-sm font-black text-muted-foreground uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
                        <ChevronRight className="h-4 w-4 text-primary" />
                        {selectedCategory === "all" ? "All Recent Activity" : `${selectedCategory} Reports`}
                    </h3>

                    {filteredComplaints.length > 0 ? (
                        <div className="grid gap-6">
                            {filteredComplaints.map((complaint) => {
                                const Icon = complaint.icon
                                return (
                                    <Card key={complaint.id} className="glass border-border/5 hover:border-primary/20 transition-all duration-300 group overflow-hidden">
                                        <CardContent className="p-0">
                                            <div className="flex flex-col md:flex-row md:items-center">
                                                <div className={cn(
                                                    "w-full md:w-16 h-16 md:h-auto flex items-center justify-center border-b md:border-b-0 md:border-r border-border/5",
                                                    complaint.bg
                                                )}>
                                                    <Icon className={cn("h-6 w-6", complaint.color)} />
                                                </div>
                                                <div className="flex-1 p-6 space-y-3">
                                                    <div className="flex items-start justify-between gap-4">
                                                        <div>
                                                            <div className="flex items-center gap-2 mb-1">
                                                                <span className="text-[10px] font-black text-primary uppercase tracking-widest px-2 py-0.5 bg-primary/5 rounded border border-primary/10">
                                                                    #{complaint.id}
                                                                </span>
                                                                <span className="text-[10px] font-bold text-muted-foreground">
                                                                    {complaint.date}
                                                                </span>
                                                            </div>
                                                            <h4 className="text-lg font-black tracking-tight text-slate-900 group-hover:text-primary transition-colors">
                                                                {complaint.title}
                                                            </h4>
                                                        </div>
                                                        <div className={cn(
                                                            "px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border",
                                                            complaint.status === "Pending" ? "bg-red-500/10 text-red-500 border-red-500/20" :
                                                                complaint.status === "In Progress" ? "bg-amber-500/10 text-amber-500 border-amber-500/20" :
                                                                    "bg-emerald-500/10 text-emerald-500 border-emerald-500/20"
                                                        )}>
                                                            {complaint.status}
                                                        </div>
                                                    </div>
                                                    <div className="p-4 rounded-2xl bg-slate-900/5 border border-slate-900/5">
                                                        <p className="text-xs font-black text-slate-500 uppercase tracking-widest mb-2">Complaint Reason</p>
                                                        <p className="text-sm font-medium text-slate-600 leading-relaxed italic">
                                                            &quot;{complaint.description}&quot;
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                )
                            })}
                        </div>
                    ) : (
                        <div className="flex flex-col items-center justify-center border-2 border-dashed border-border/10 rounded-[3rem] p-20 animate-in fade-in zoom-in duration-700">
                            <div className="p-6 bg-slate-100 rounded-full mb-6">
                                <SearchX className="h-12 w-12 text-slate-400" />
                            </div>
                            <h4 className="text-xl font-black text-slate-900 mb-2">Clear Skies for {selectedCategory}</h4>
                            <p className="text-muted-foreground font-medium text-center max-w-sm">No complaints or maintenance issues found in this category. Everything looks perfect!</p>
                            <Button variant="outline" className="mt-8 rounded-full" onClick={() => setSelectedCategory("all")}>
                                View All Categories
                            </Button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
