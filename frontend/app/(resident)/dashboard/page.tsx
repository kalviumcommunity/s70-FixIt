"use client"

import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
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
    ChevronRight,
    SearchX,
    LayoutDashboard,
    Utensils,
    Wifi
} from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { useState } from "react"

import { CATEGORIES } from "@/lib/mock-data"

export default function DashboardPage() {
    return (
        <div className="flex flex-col gap-10 animate-fade-in pb-10">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-4xl font-extrabold tracking-tight text-gradient">Hello, Bhuvana</h1>
                    <p className="text-muted-foreground mt-1">Manage and track your hostel life concerns with ease.</p>
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
                            Next Room Audit
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
                        return (
                            <Link
                                key={cat.id}
                                href={`/categories/${cat.slug}`}
                                className={cn(
                                    "p-4 rounded-3xl border transition-all duration-500 flex flex-col items-center justify-center gap-3 group relative overflow-hidden",
                                    "glass border-border/5 hover:border-primary/30 hover:scale-105"
                                )}
                            >
                                <div className={cn(
                                    "p-3 rounded-2xl transition-all duration-500",
                                    cn(cat.bg, cat.color)
                                )}>
                                    <Icon className="h-6 w-6" />
                                </div>
                                <span className={cn(
                                    "text-[10px] font-black uppercase tracking-widest text-center",
                                    "text-slate-600"
                                )}>
                                    {cat.name}
                                </span>
                            </Link>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
