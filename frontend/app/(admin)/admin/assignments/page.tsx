"use client"

import React, { useState } from "react"
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    CardDescription
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
    SheetClose
} from "@/components/ui/sheet"
import {
    Users,
    Clock,
    CheckCircle2,
    AlertCircle,
    Search,
    Filter,
    ArrowRight,
    Briefcase,
    Zap,
    MapPin,
    CalendarClock
} from "lucide-react"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"
import { complaints as initialComplaints } from "@/lib/mock-data"
import { TECHNICIANS, Technician } from "@/lib/staff-data"

// Define interface matching mock-data structure + new fields
interface Complaint {
    id: string
    title: string
    description: string
    status: string
    date: string
    category: string
    categorySlug: string
    icon: any
    color: string
    bg: string
    assignedTo?: string
}

export default function AssignmentsPage() {
    // Local state to simulate database with typed array
    const [complaints, setComplaints] = useState<Complaint[]>(
        initialComplaints.filter(c => c.status !== "Resolved").map(c => ({ ...c }))
    )
    const [technicians, setTechnicians] = useState<Technician[]>(TECHNICIANS)
    const [selectedComplaintId, setSelectedComplaintId] = useState<string | null>(null)
    const [searchQuery, setSearchQuery] = useState("")

    const handleAssign = (complaintId: string, techId: string) => {
        // Update complaint status
        setComplaints(prev => prev.map(c =>
            c.id === complaintId
                ? { ...c, status: "In Progress", assignedTo: techId }
                : c
        ))

        // Update technician load
        setTechnicians(prev => prev.map(t =>
            t.id === techId
                ? { ...t, status: "Busy", currentLoad: Math.min(t.currentLoad + 20, 100) as number }
                : t
        ))

        setSelectedComplaintId(null)
    }

    const filteredComplaints = complaints.filter(c =>
        c.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.category.toLowerCase().includes(searchQuery.toLowerCase())
    )

    // Helper to get matching technicians for a category
    const getRecommendedTechs = (category: string) => {
        return technicians.filter(t => t.department === category || t.department === "All")
    }

    return (
        <div className="flex flex-col gap-8 animate-fade-in pb-10">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight text-gradient">Staff Assignments</h1>
                    <p className="text-muted-foreground">Manage work orders and technician dispatch.</p>
                </div>
                <div className="flex items-center gap-3">
                    <Button variant="outline" className="rounded-full gap-2 hidden md:flex">
                        <Filter className="h-4 w-4" />
                        Filter By Dept
                    </Button>
                    <div className="relative w-full md:w-64">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input
                            placeholder="Search tasks..."
                            className="pl-9 rounded-full bg-card/50 border-white/5"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 h-[calc(100vh-200px)]">
                {/* Left Column: Task Feed */}
                <div className="lg:col-span-2 flex flex-col gap-6 overflow-y-auto pr-2 scrollbar-hide">
                    <div className="flex items-center justify-between">
                        <h2 className="text-lg font-bold flex items-center gap-2">
                            <Briefcase className="h-5 w-5 text-primary" />
                            Pending Tasks
                            <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">{filteredComplaints.filter(c => c.status === "Pending").length}</Badge>
                        </h2>
                    </div>

                    <div className="grid gap-4">
                        {filteredComplaints.length === 0 && (
                            <div className="text-center py-20 text-muted-foreground">
                                No tasks found matching your search.
                            </div>
                        )}
                        {filteredComplaints.map((complaint) => {
                            const isAssigned = complaint.assignedTo;
                            const assignedTech = technicians.find(t => t.id === complaint.assignedTo);
                            const Icon = complaint.icon;

                            return (
                                <Card key={complaint.id} className={cn(
                                    "glass border-border/10 transition-all hover:bg-white/5 group relative overflow-hidden",
                                    isAssigned ? "border-l-4 border-l-emerald-500" : "border-l-4 border-l-amber-500"
                                )}>
                                    <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <ArrowRight className="h-5 w-5 text-muted-foreground -rotate-45" />
                                    </div>
                                    <CardContent className="p-5 flex flex-col sm:flex-row gap-5">
                                        <div className={cn("h-12 w-12 rounded-xl flex items-center justify-center shrink-0", complaint.bg)}>
                                            <Icon className={cn("h-6 w-6", complaint.color)} />
                                        </div>
                                        <div className="flex-1 space-y-2">
                                            <div className="flex items-start justify-between">
                                                <div>
                                                    <Badge variant="outline" className={cn("text-[10px] font-black uppercase tracking-widest border-0 bg-white/5", complaint.color)}>
                                                        {complaint.category}
                                                    </Badge>
                                                    <h3 className="text-lg font-bold mt-2 group-hover:text-primary transition-colors">{complaint.title}</h3>
                                                </div>
                                            </div>
                                            <p className="text-sm text-muted-foreground line-clamp-2">{complaint.description}</p>

                                            <div className="flex items-center gap-4 pt-2 text-xs text-muted-foreground">
                                                <div className="flex items-center gap-1">
                                                    <CalendarClock className="h-3.5 w-3.5" />
                                                    {complaint.date}
                                                </div>
                                                <div className="flex items-center gap-1">
                                                    <MapPin className="h-3.5 w-3.5" />
                                                    Block B
                                                </div>
                                            </div>

                                            {assignedTech ? (
                                                <div className="mt-4 flex items-center gap-3 bg-emerald-500/10 p-3 rounded-lg border border-emerald-500/20">
                                                    <div className="h-8 w-8 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-500 font-bold">
                                                        {assignedTech.name.charAt(0)}
                                                    </div>
                                                    <div>
                                                        <p className="text-xs text-emerald-500 font-bold">Assigned to</p>
                                                        <p className="text-sm font-semibold">{assignedTech.name}</p>
                                                    </div>
                                                    <CheckCircle2 className="h-5 w-5 text-emerald-500 ml-auto" />
                                                </div>
                                            ) : (
                                                <div className="mt-4 flex items-center gap-3">
                                                    <Sheet>
                                                        <SheetTrigger asChild>
                                                            <Button
                                                                size="sm"
                                                                className="gap-2 rounded-lg bg-primary/10 hover:bg-primary/20 text-primary border border-primary/20"
                                                                onClick={() => setSelectedComplaintId(complaint.id)}
                                                            >
                                                                <Users className="h-4 w-4" />
                                                                Assign Technician
                                                            </Button>
                                                        </SheetTrigger>
                                                        <SheetContent className="glass-dark border-l border-white/10 w-[400px] sm:w-[540px]">
                                                            <SheetHeader className="mb-6">
                                                                <SheetTitle className="text-2xl font-bold">Select Technician</SheetTitle>
                                                                <SheetDescription>
                                                                    Recommended staff for <span className="text-primary font-bold">{complaint.category}</span>
                                                                </SheetDescription>
                                                            </SheetHeader>

                                                            <div className="space-y-4">
                                                                <h4 className="text-xs font-black uppercase text-muted-foreground tracking-widest">Available Now</h4>
                                                                {getRecommendedTechs(complaint.category).map(tech => (
                                                                    <div
                                                                        key={tech.id}
                                                                        className="flex items-center justify-between p-3 rounded-xl border border-white/5 bg-white/5 hover:bg-white/10 transition-colors cursor-pointer group/tech"
                                                                        onClick={() => handleAssign(complaint.id, tech.id)}
                                                                    >
                                                                        <div className="flex items-center gap-3">
                                                                            <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                                                                                {tech.name.charAt(0)}
                                                                            </div>
                                                                            <div>
                                                                                <p className="font-bold">{tech.name}</p>
                                                                                <p className="text-xs text-muted-foreground">{tech.role}</p>
                                                                            </div>
                                                                        </div>
                                                                        <div className="text-right">
                                                                            <span className={cn(
                                                                                "text-[10px] font-bold px-2 py-0.5 rounded-full border",
                                                                                tech.status === "Available" ? "bg-emerald-500/10 text-emerald-500 border-emerald-500/20" :
                                                                                    tech.status === "Busy" ? "bg-amber-500/10 text-amber-500 border-amber-500/20" :
                                                                                        "bg-red-500/10 text-red-500 border-red-500/20"
                                                                            )}>
                                                                                {tech.status}
                                                                            </span>
                                                                            {tech.status === 'Available' && (
                                                                                <Button size="sm" variant="ghost" className="h-7 ml-2 text-xs opacity-0 group-hover/tech:opacity-100 transition-opacity">
                                                                                    Select
                                                                                </Button>
                                                                            )}
                                                                        </div>
                                                                    </div>
                                                                ))}
                                                                {getRecommendedTechs(complaint.category).length === 0 && (
                                                                    <p className="text-center text-muted-foreground py-4 text-sm">No specialized technicians found for this category.</p>
                                                                )}
                                                            </div>
                                                        </SheetContent>
                                                    </Sheet>
                                                    <span className="text-xs text-amber-500 font-medium animate-pulse flex items-center gap-1.5">
                                                        <AlertCircle className="h-3 w-3" />
                                                        Action Required
                                                    </span>
                                                </div>
                                            )}
                                        </div>
                                    </CardContent>
                                </Card>
                            )
                        })}
                    </div>
                </div>

                {/* Right Column: Staff Stats */}
                <div className="hidden lg:flex flex-col gap-6">
                    <div className="flex items-center justify-between">
                        <h2 className="text-lg font-bold flex items-center gap-2">
                            <Zap className="h-5 w-5 text-amber-500" />
                            Live Status
                        </h2>
                    </div>

                    <Card className="glass border-border/10">
                        <CardHeader className="pb-2">
                            <CardTitle className="text-sm font-medium text-muted-foreground uppercase tracking-widest">Active Workforce</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="text-3xl font-bold">{technicians.filter(t => t.status !== "Off").length} / {technicians.length}</div>
                            <p className="text-xs text-muted-foreground mt-1">Technicians currently on shift</p>
                        </CardContent>
                    </Card>

                    <div className="space-y-3">
                        <p className="text-[10px] font-black uppercase text-muted-foreground tracking-widest">Department Load</p>
                        {["Power & WiFi", "Water & Hygiene", "Furniture & Fixes"].map(dept => {
                            const deptTechs = technicians.filter(t => t.department === dept);
                            const avgLoad = deptTechs.length ? deptTechs.reduce((acc, t) => acc + t.currentLoad, 0) / deptTechs.length : 0;

                            return (
                                <div key={dept} className="space-y-1">
                                    <div className="flex justify-between text-xs">
                                        <span>{dept}</span>
                                        <span className="font-bold">{Math.round(avgLoad)}%</span>
                                    </div>
                                    <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                                        <div
                                            className={cn("h-full rounded-full transition-all duration-1000",
                                                avgLoad > 80 ? "bg-red-500" : avgLoad > 50 ? "bg-amber-500" : "bg-emerald-500"
                                            )}
                                            style={{ width: `${avgLoad}%` }}
                                        />
                                    </div>
                                </div>
                            )
                        })}
                    </div>

                    <Card className="glass border-border/10 mt-auto bg-gradient-to-br from-primary/5 to-transparent">
                        <CardContent className="p-6">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center">
                                    <Users className="h-5 w-5 text-primary" />
                                </div>
                                <div>
                                    <p className="font-bold text-sm">Need more staff?</p>
                                    <p className="text-xs text-muted-foreground">Check schedule & shifts</p>
                                </div>
                            </div>
                            <Button className="w-full text-xs font-bold bg-primary/10 hover:bg-primary/20 text-primary border border-primary/20">
                                View Roster
                            </Button>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
}
