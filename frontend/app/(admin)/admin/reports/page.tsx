"use client"

import React from "react"
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    CardDescription
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
    BarChart3,
    Users,
    Download,
    Calendar,
    ArrowUpRight,
    ArrowDownRight,
    Search,
    Filter
} from "lucide-react"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"

const reportStats = [
    { label: "Completion Rate", value: "94%", change: "+2.4%", trend: "up", description: "Vs last month" },
    { label: "Avg Response Time", value: "18m", change: "-12%", trend: "up", description: "Lower is better" },
    { label: "Active Technicians", value: "32", change: "+4", trend: "up", description: "Currently on field" },
    { label: "Resident Rating", value: "4.8", change: "+0.2", trend: "up", description: "Satisfied community" },
]

export default function AdminReportsPage() {
    return (
        <div className="flex flex-col gap-8 animate-fade-in pb-10">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight text-gradient">Operational Intelligence</h1>
                    <p className="text-muted-foreground">Detailed analytics and departmental performance reports.</p>
                </div>
                <div className="flex items-center gap-3">
                    <Button variant="outline" className="rounded-full gap-2">
                        <Calendar className="h-4 w-4" />
                        Last 30 Days
                    </Button>
                    <Button className="rounded-full gap-2 shadow-lg shadow-primary/20">
                        <Download className="h-4 w-4" />
                        Export Data
                    </Button>
                </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                {reportStats.map((stat, i) => (
                    <Card key={i} className="glass border-border/10 tilt-card">
                        <CardHeader className="pb-2">
                            <CardTitle className="text-sm font-medium text-muted-foreground uppercase tracking-widest">{stat.label}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="flex items-baseline gap-2">
                                <div className="text-2xl font-bold">{stat.value}</div>
                                <div className={`text-xs font-bold flex items-center ${stat.trend === 'up' ? 'text-emerald-500' : 'text-red-500'}`}>
                                    {stat.trend === 'up' ? <ArrowUpRight className="h-3 w-3" /> : <ArrowDownRight className="h-3 w-3" />}
                                    {stat.change}
                                </div>
                            </div>
                            <p className="text-[10px] text-muted-foreground mt-1 underline decoration-primary/20 underline-offset-4">{stat.description}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
                <Card className="glass border-border/10">
                    <CardHeader>
                        <div className="flex items-center gap-2 mb-2">
                            <BarChart3 className="h-5 w-5 text-primary" />
                            <CardTitle>Departmental Efficiency</CardTitle>
                        </div>
                        <CardDescription>Resolution frequency across specialized teams.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        {[
                            { name: "Electrical", value: 88, color: "bg-amber-600" },
                            { name: "Plumbing", value: 92, color: "bg-primary" },
                            { name: "Carpentry", value: 76, color: "bg-orange-600" },
                            { name: "Environmental", value: 98, color: "bg-emerald-600" },
                        ].map((dept) => (
                            <div key={dept.name} className="space-y-2">
                                <div className="flex justify-between text-xs font-semibold">
                                    <span className="text-muted-foreground">{dept.name}</span>
                                    <span>{dept.value}%</span>
                                </div>
                                <div className="h-2 w-full bg-muted/20 rounded-full overflow-hidden">
                                    <div className={`h-full ${dept.color} rounded-full shimmer`} style={{ width: `${dept.value}%` }} />
                                </div>
                            </div>
                        ))}
                    </CardContent>
                </Card>

                <Card className="glass border-border/10">
                    <CardHeader>
                        <div className="flex items-center gap-2 mb-2">
                            <Users className="h-5 w-5 text-primary" />
                            <CardTitle>Community Engagement</CardTitle>
                        </div>
                        <CardDescription>Resident feedback distribution and active users.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="h-[200px] w-full flex items-end justify-around gap-2 pt-10">
                            {[45, 60, 85, 30, 95, 70, 50].map((h, i) => (
                                <div key={i} className="flex-1 space-y-2 group flex flex-col items-center">
                                    <div
                                        className="w-full bg-primary/20 border border-primary/20 rounded-t-lg transition-all duration-500 group-hover:bg-primary/40 group-hover:scale-105 relative"
                                        style={{ height: `${h}%` }}
                                    >
                                        <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                                            {h}%
                                        </div>
                                    </div>
                                    <span className="text-[10px] text-muted-foreground uppercase font-bold tracking-tighter">Mon</span>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>

            <Card className="glass border-border/10 overflow-hidden">
                <CardHeader className="flex flex-row items-center justify-between border-b border-white/5 bg-white/5">
                    <div>
                        <CardTitle>Detailed Audit Log</CardTitle>
                        <CardDescription>Immutable record of all system operations.</CardDescription>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="relative w-48">
                            <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                            <Input placeholder="Filter logs..." className="pl-9 h-8 text-xs bg-card/50 border-white/5" />
                        </div>
                        <Button variant="outline" size="sm" className="h-8 rounded-md gap-2">
                            <Filter className="h-3.5 w-3.5" />
                            More Filters
                        </Button>
                    </div>
                </CardHeader>
                <CardContent className="p-0">
                    <table className="w-full text-sm text-left">
                        <thead className="text-[10px] font-black text-muted-foreground uppercase tracking-widest bg-card/40 border-b border-white/5">
                            <tr>
                                <th className="px-6 py-4">Event ID</th>
                                <th className="px-6 py-4">Action</th>
                                <th className="px-6 py-4">Admin</th>
                                <th className="px-6 py-4">Timestamp</th>
                                <th className="px-6 py-4 text-right">Magnitude</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5">
                            {[
                                { id: "EV-9921", action: "Ticket Escalation", admin: "Alex D.", time: "2m ago", mag: "HIGH" },
                                { id: "EV-9920", action: "Staff Dispatch", admin: "System", time: "15m ago", mag: "MED" },
                                { id: "EV-9919", action: "Bulk Resolution", admin: "Sarah L.", time: "1h ago", mag: "LOW" },
                                { id: "EV-9918", action: "Policy Update", admin: "Alex D.", time: "4h ago", mag: "HIGH" },
                            ].map((log) => (
                                <tr key={log.id} className="hover:bg-white/5 transition-colors">
                                    <td className="px-6 py-4 font-mono text-xs text-primary">{log.id}</td>
                                    <td className="px-6 py-4 font-bold tracking-tight">{log.action}</td>
                                    <td className="px-6 py-4 text-muted-foreground">{log.admin}</td>
                                    <td className="px-6 py-4 text-xs italic">{log.time}</td>
                                    <td className="px-6 py-4 text-right">
                                        <span className={cn(
                                            "text-[10px] font-black px-2 py-0.5 rounded border",
                                            log.mag === "HIGH" ? "bg-red-500/10 text-red-500 border-red-500/20" :
                                                log.mag === "MED" ? "bg-blue-500/10 text-blue-500 border-blue-500/20" :
                                                    "bg-muted text-muted-foreground border-border/10"
                                        )}>
                                            {log.mag}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </CardContent>
            </Card>
        </div>
    )
}
