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
    Wrench,
    Shield,
    Trash2,
    Hammer,
    ArrowRight,
    Search,
    Filter,
    Utensils,
    Wifi
} from "lucide-react"
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"

const departments = [
    { id: "warden", name: "Hostel Warden", icon: Shield, color: "text-red-600", bg: "bg-red-600/10", count: 3, pending: 1 },
    { id: "mess", name: "Mess Committee", icon: Utensils, color: "text-orange-600", bg: "bg-orange-600/10", count: 8, pending: 2 },
    { id: "technical", name: "IT/Technical Team", icon: Wifi, color: "text-blue-600", bg: "bg-blue-600/10", count: 12, pending: 4 },
    { id: "hvac", name: "Water & Power", icon: Wrench, color: "text-indigo-600", bg: "bg-indigo-600/10", count: 6, pending: 2 },
    { id: "cleaning", name: "Cleaning Staff", icon: Trash2, color: "text-emerald-600", bg: "bg-emerald-600/10", count: 15, pending: 3 },
    { id: "carpentry", name: "Locker & Furniture", icon: Hammer, color: "text-amber-600", bg: "bg-amber-600/10", count: 5, pending: 0 },
]

const recentStats = [
    { label: "Total Complaints", value: "254", change: "+12.5%", trend: "up" },
    { label: "Active Jobs", value: "42", change: "+4", trend: "up" },
    { label: "Resolved Today", value: "18", change: "+2", trend: "up" },
    { label: "SLA Adherence", value: "98.2%", change: "+0.5%", trend: "up" },
]

export default function AdminDashboardPage() {
    return (
        <div className="flex flex-col gap-8 animate-fade-in pb-10 px-4 md:px-0">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-4xl font-extrabold tracking-tight text-gradient">Hostel Commander</h1>
                    <p className="text-muted-foreground mt-1 text-lg">Central control for hostel and student residence operations.</p>
                </div>
                <div className="flex items-center gap-3">
                    <div className="relative w-64">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input placeholder="Search tickets..." className="pl-9 bg-card/40 border-border/10 rounded-full h-10" />
                    </div>
                    <Button variant="outline" size="icon" className="rounded-full">
                        <Filter className="h-4 w-4" />
                    </Button>
                </div>
            </div>

            {/* Quick Stats Grid */}
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {recentStats.map((stat, i) => (
                    <Card key={i} className="glass overflow-hidden border-border/5 group hover:border-primary/20 transition-all duration-500">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 relative z-10">
                            <CardTitle className="text-sm font-medium text-muted-foreground uppercase tracking-wider">{stat.label}</CardTitle>
                        </CardHeader>
                        <CardContent className="relative z-10">
                            <div className="text-3xl font-bold">{stat.value}</div>
                            <p className="text-xs text-primary mt-1 font-semibold flex items-center gap-1">
                                <span className="p-0.5 bg-primary/10 rounded">{stat.change}</span>
                                <span className="text-muted-foreground font-normal">from last cycle</span>
                            </p>
                        </CardContent>
                    </Card>
                ))}
            </div>

            {/* Department Hub */}
            <div className="space-y-4">
                <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-bold tracking-tight">Department Hub</h2>
                    <Button variant="link" className="text-primary hover:no-underline">Configure Teams</Button>
                </div>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
                    {departments.map((dept) => {
                        const Icon = dept.icon
                        return (
                            <Link key={dept.id} href={`/admin/departments/${dept.id}`}>
                                <Card className="hover-lift border-border/5 bg-card/40 cursor-pointer h-full group">
                                    <CardContent className="p-5 flex flex-col items-center justify-center text-center gap-3">
                                        <div className={cn("p-3 rounded-2xl transition-all duration-300 group-hover:scale-110", dept.bg)}>
                                            <Icon className={cn("h-6 w-6", dept.color)} />
                                        </div>
                                        <div>
                                            <p className="font-bold text-sm tracking-tight">{dept.name}</p>
                                            <p className="text-xs text-muted-foreground mt-0.5">{dept.count} Active Tickets</p>
                                        </div>
                                        {dept.pending > 0 && (
                                            <div className="mt-1 px-2 py-0.5 bg-red-500/10 text-red-500 text-[10px] font-bold rounded-full border border-red-500/20">
                                                {dept.pending} URGENT
                                            </div>
                                        )}
                                    </CardContent>
                                </Card>
                            </Link>
                        )
                    })}
                </div>
            </div>

            {/* Main Content Area */}
            <div className="grid gap-6 lg:grid-cols-3">
                <Card className="lg:col-span-2 glass border-border/5">
                    <CardHeader className="flex flex-row items-center justify-between">
                        <div>
                            <CardTitle>Priority Resolution Queue</CardTitle>
                            <CardDescription>Critically pending tasks requiring immediate assignment.</CardDescription>
                        </div>
                        <Button variant="ghost" size="sm" className="gap-2">
                            View Analytics <ArrowRight className="h-4 w-4" />
                        </Button>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            {[1, 2, 3].map((item) => (
                                <div key={item} className="flex items-center justify-between p-4 rounded-xl bg-card/30 border border-border/5 hover:border-border/20 transition-colors group">
                                    <div className="flex items-center gap-4">
                                        <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">#FL</div>
                                        <div>
                                            <p className="text-sm font-semibold tracking-tight">Hostel WiFi Deadzone - Block B</p>
                                            <p className="text-xs text-muted-foreground">IT Team • High Priority • 2h ago</p>
                                        </div>
                                    </div>
                                    <Button variant="secondary" size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity">Assign</Button>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>

                <Card className="glass border-border/5">
                    <CardHeader>
                        <CardTitle>Operational Health</CardTitle>
                        <CardDescription>Live system performance metrics.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div className="space-y-2">
                            <div className="flex justify-between text-xs font-semibold mb-1 uppercase tracking-wider text-muted-foreground">
                                <span>Ticket Resolution Rate</span>
                                <span>85%</span>
                            </div>
                            <div className="h-1.5 w-full bg-muted/30 rounded-full overflow-hidden">
                                <div className="h-full bg-primary w-[85%] rounded-full shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <div className="flex justify-between text-xs font-semibold mb-1 uppercase tracking-wider text-muted-foreground">
                                <span>Student Satisfaction</span>
                                <span>92%</span>
                            </div>
                            <div className="h-1.5 w-full bg-muted/30 rounded-full overflow-hidden">
                                <div className="h-full bg-emerald-500 w-[92%] rounded-full shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
                            </div>
                        </div>
                        <div className="pt-4 border-t border-border/10">
                            <div className="flex items-center justify-between mb-4">
                                <span className="text-sm font-medium">Team Performance</span>
                                <span className="text-xs text-emerald-500">+4.2%</span>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="text-center p-3 rounded-lg bg-card/20 border border-border/5">
                                    <p className="text-lg font-bold">14m</p>
                                    <p className="text-[10px] uppercase text-muted-foreground">Avg Response</p>
                                </div>
                                <div className="text-center p-3 rounded-lg bg-card/20 border border-border/5">
                                    <p className="text-lg font-bold">96%</p>
                                    <p className="text-[10px] uppercase text-muted-foreground">Completed</p>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
