"use client"

import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
    ArrowLeft,
    Clock,
    User,
    CheckCircle2,
} from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"

const getNotification = (id: string) => {
    return {
        id,
        title: "Ticket Resolved",
        description: "Your plumbing request #PL-402 regarding 'Leaking Tap' has been marked as resolved by the Staff. If you are satisfied with the work, please close the ticket.",
        type: "success",
        status: "Resolved",
        timestamp: "5 mins ago",
        location: "Block A - Room 302",
        reporter: "Mike (Electrician)",
        steps: [
            "Replaced washer",
            "Checked for leaks",
            "Cleaned area"
        ]
    }
}

export default function ResidentNotificationDetailPage({ params }: { params: { id: string } }) {
    const notification = getNotification(params.id)

    if (!notification) {
        notFound()
    }

    return (
        <div className="container mx-auto px-4 py-8 space-y-6 animate-fade-in pb-20 max-w-4xl">
            <Button variant="ghost" className="gap-2 pl-0 hover:pl-2 transition-all" asChild>
                <Link href="/notifications">
                    <ArrowLeft className="h-4 w-4" />
                    Back to Notifications
                </Link>
            </Button>

            <div className="grid gap-6 md:grid-cols-3">
                <div className="md:col-span-2 space-y-6">
                    <Card className="glass border-border/50 overflow-hidden">
                        <div className="h-2 bg-emerald-500 w-full" />
                        <CardHeader>
                            <div className="flex items-start justify-between gap-4">
                                <div className="space-y-1">
                                    <div className="flex items-center gap-2 mb-2">
                                        <Badge variant="outline" className="text-emerald-500 border-emerald-500/20 bg-emerald-500/10">
                                            <CheckCircle2 className="h-3 w-3 mr-1" />
                                            Resolved
                                        </Badge>
                                        <Badge variant="outline">Ticket #PL-402</Badge>
                                    </div>
                                    <CardTitle className="text-2xl font-bold">{notification.title}</CardTitle>
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                                <p className="text-lg leading-relaxed">{notification.description}</p>
                            </div>

                            <div className="space-y-3">
                                <h3 className="font-bold text-sm uppercase tracking-wider text-muted-foreground">Work Done</h3>
                                <div className="space-y-2">
                                    {notification.steps.map((step, i) => (
                                        <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-transparent hover:border-white/10 transition-colors">
                                            <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xs font-bold">
                                                {i + 1}
                                            </div>
                                            <span className="text-sm font-medium">{step}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                <div className="space-y-6">
                    <Card className="glass border-border/50">
                        <CardHeader>
                            <CardTitle className="text-sm uppercase tracking-wider text-muted-foreground">Details</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="flex items-center gap-3">
                                <div className="h-10 w-10 rounded-lg bg-white/5 flex items-center justify-center">
                                    <Clock className="h-5 w-5 text-muted-foreground" />
                                </div>
                                <div>
                                    <p className="text-xs text-muted-foreground font-bold uppercase">Updated</p>
                                    <p className="text-sm font-medium">{notification.timestamp}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="h-10 w-10 rounded-lg bg-white/5 flex items-center justify-center">
                                    <User className="h-5 w-5 text-muted-foreground" />
                                </div>
                                <div>
                                    <p className="text-xs text-muted-foreground font-bold uppercase">Updated By</p>
                                    <p className="text-sm font-medium">{notification.reporter}</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
}
