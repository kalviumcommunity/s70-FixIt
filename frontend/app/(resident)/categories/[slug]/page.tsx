"use client"

import { use } from "react"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
} from "@/components/ui/card"
import {
    ChevronLeft,
    SearchX,
    ChevronRight,
} from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { CATEGORIES, complaints } from "@/lib/mock-data"

export default function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = use(params)

    const category = CATEGORIES.find(c => c.slug === slug)
    const filteredComplaints = slug === "all"
        ? complaints
        : complaints.filter(c => c.categorySlug === slug)

    if (!category && slug !== "all") {
        return (
            <div className="flex flex-col items-center justify-center min-h-[60vh]">
                <h1 className="text-2xl font-bold">Category not found</h1>
                <Button asChild className="mt-4">
                    <Link href="/dashboard">Back to Dashboard</Link>
                </Button>
            </div>
        )
    }

    const Icon = category?.icon || SearchX

    return (
        <div className="flex flex-col gap-10 animate-fade-in pb-10">
            <div className="flex items-center gap-4">
                <Button asChild variant="ghost" size="icon" className="rounded-full">
                    <Link href="/dashboard">
                        <ChevronLeft className="h-6 w-6" />
                    </Link>
                </Button>
                <div>
                    <div className="flex items-center gap-3">
                        <div className={cn("p-2 rounded-xl", category?.bg || "bg-slate-100")}>
                            <Icon className={cn("h-6 w-6", category?.color || "text-slate-600")} />
                        </div>
                        <h1 className="text-4xl font-extrabold tracking-tight text-gradient">
                            {category?.name || "All Issues"}
                        </h1>
                    </div>
                    <p className="text-muted-foreground mt-1 ml-1">
                        Viewing all maintenance and social reports for {category?.name || "hostel life"}.
                    </p>
                </div>
            </div>

            <div className="pt-4">
                <h3 className="text-sm font-black text-muted-foreground uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
                    <ChevronRight className="h-4 w-4 text-primary" />
                    {category?.name || "All"} Reports
                </h3>

                {filteredComplaints.length > 0 ? (
                    <div className="grid gap-6">
                        {filteredComplaints.map((complaint) => {
                            const ComplaintIcon = complaint.icon
                            return (
                                <Card key={complaint.id} className="glass border-border/5 hover:border-primary/20 transition-all duration-300 group overflow-hidden">
                                    <CardContent className="p-0">
                                        <div className="flex flex-col md:flex-row md:items-center">
                                            <div className={cn(
                                                "w-full md:w-16 h-16 md:h-auto flex items-center justify-center border-b md:border-b-0 md:border-r border-border/5",
                                                complaint.bg
                                            )}>
                                                <ComplaintIcon className={cn("h-6 w-6", complaint.color)} />
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
                        <h4 className="text-xl font-black text-slate-900 mb-2">Clear Skies for {category?.name}</h4>
                        <p className="text-muted-foreground font-medium text-center max-w-sm">No complaints or maintenance issues found in this category. Everything looks perfect!</p>
                        <Button asChild variant="outline" className="mt-8 rounded-full">
                            <Link href="/dashboard">
                                Back to Dashboard
                            </Link>
                        </Button>
                    </div>
                )}
            </div>
        </div>
    )
}
