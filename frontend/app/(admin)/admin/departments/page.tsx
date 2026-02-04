"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    CardDescription
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import {
    Shield,
    Utensils,
    Wifi,
    Wrench,
    Trash2,
    Hammer,
    Search,
    Filter,
    ArrowRight,
    Users,
    ClipboardList,
    AlertCircle
} from "lucide-react"
import { cn } from "@/lib/utils"

const departments = [
    {
        id: "warden",
        name: "Hostel Warden",
        description: "Student discipline and room allocation",
        icon: Shield,
        color: "text-red-600",
        bg: "bg-red-600/10",
        stats: { staff: 4, active: 3, efficiency: "98%" },
        status: "Operational"
    },
    {
        id: "mess",
        name: "Mess Committee",
        description: "Food quality control and dining services",
        icon: Utensils,
        color: "text-orange-600",
        bg: "bg-orange-600/10",
        stats: { staff: 12, active: 8, efficiency: "94%" },
        status: "High Load"
    },
    {
        id: "technical",
        name: "IT/Technical Team",
        description: "Internet, WiFi, and Hardware support",
        icon: Wifi,
        color: "text-blue-600",
        bg: "bg-blue-600/10",
        stats: { staff: 6, active: 12, efficiency: "88%" },
        status: "Operational"
    },
    {
        id: "hvac",
        name: "Water & Power",
        description: "Plumbing, Electricity, and Generators",
        icon: Wrench,
        color: "text-indigo-600",
        bg: "bg-indigo-600/10",
        stats: { staff: 8, active: 6, efficiency: "92%" },
        status: "Operational"
    },
    {
        id: "cleaning",
        name: "Cleaning Staff",
        description: "Housekeeping and Waste Management",
        icon: Trash2,
        color: "text-emerald-600",
        bg: "bg-emerald-600/10",
        stats: { staff: 20, active: 15, efficiency: "96%" },
        status: "Operational"
    },
    {
        id: "carpentry",
        name: "Locker & Furniture",
        description: "Repairs, locks, and structural maintenance",
        icon: Hammer,
        color: "text-amber-600",
        bg: "bg-amber-600/10",
        stats: { staff: 3, active: 5, efficiency: "85%" },
        status: "Understaffed"
    },
]

export default function DepartmentsPage() {
    return (
        <div className="flex flex-col gap-8 animate-fade-in pb-10">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight text-gradient">Departments</h1>
                    <p className="text-muted-foreground">Overview of all operational teams and their current status.</p>
                </div>
                <div className="flex items-center gap-3">
                    <div className="relative w-full md:w-64">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input placeholder="Search departments..." className="pl-9 bg-card/50 border-white/5" />
                    </div>
                </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {departments.map((dept) => {
                    const Icon = dept.icon
                    return (
                        <Link key={dept.id} href={`/admin/departments/${dept.id}`}>
                            <Card className="glass border-border/10 h-full hover:bg-white/5 transition-all group relative overflow-hidden">
                                <CardHeader className="flex flex-row items-center justify-between pb-2">
                                    <div className={cn("p-2.5 rounded-xl transition-transform group-hover:scale-110", dept.bg)}>
                                        <Icon className={cn("h-6 w-6", dept.color)} />
                                    </div>
                                    <Badge variant="outline" className={cn(
                                        "bg-background/50 border-0",
                                        dept.status === "High Load" ? "text-orange-500 bg-orange-500/10" :
                                            dept.status === "Understaffed" ? "text-red-500 bg-red-500/10" :
                                                "text-emerald-500 bg-emerald-500/10"
                                    )}>
                                        {dept.status}
                                    </Badge>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div>
                                        <CardTitle className="text-xl mb-1">{dept.name}</CardTitle>
                                        <CardDescription className="line-clamp-2">{dept.description}</CardDescription>
                                    </div>

                                    <div className="grid grid-cols-3 gap-2 pt-2 border-t border-white/5">
                                        <div className="text-center p-2 rounded-lg bg-white/5">
                                            <div className="flex items-center justify-center gap-1.5 text-muted-foreground mb-1">
                                                <Users className="h-3 w-3" />
                                            </div>
                                            <p className="text-lg font-bold">{dept.stats.staff}</p>
                                            <p className="text-[10px] uppercase tracking-wider text-muted-foreground">Staff</p>
                                        </div>
                                        <div className="text-center p-2 rounded-lg bg-white/5">
                                            <div className="flex items-center justify-center gap-1.5 text-muted-foreground mb-1">
                                                <ClipboardList className="h-3 w-3" />
                                            </div>
                                            <p className="text-lg font-bold">{dept.stats.active}</p>
                                            <p className="text-[10px] uppercase tracking-wider text-muted-foreground">Open</p>
                                        </div>
                                        <div className="text-center p-2 rounded-lg bg-white/5">
                                            <div className="flex items-center justify-center gap-1.5 text-muted-foreground mb-1">
                                                <AlertCircle className="h-3 w-3" />
                                            </div>
                                            <p className="text-lg font-bold">{dept.stats.efficiency}</p>
                                            <p className="text-[10px] uppercase tracking-wider text-muted-foreground">Eff.</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-2 text-xs font-bold text-primary opacity-0 group-hover:opacity-100 transition-opacity -translate-x-4 group-hover:translate-x-0 duration-300">
                                        Manage Department <ArrowRight className="h-3 w-3" />
                                    </div>
                                </CardContent>
                            </Card>
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}
