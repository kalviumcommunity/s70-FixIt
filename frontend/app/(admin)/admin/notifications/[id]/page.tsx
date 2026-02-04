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
    MapPin,
    User,
    AlertTriangle,
} from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"

// Mock data lookup (would be an API call)
const getNotification = (id: string) => {
    // Return mock data based on ID for demo purposes
    return {
        id,
        title: "High Priority Ticket: Block B WiFi Down",
        description: "Multiple residents reported connectivity issues in Block B - Floor 2. Initial diagnostics suggest a router failure in the main corridor access point.",
        type: "urgent",
        status: "Open",
        timestamp: "Today, 10:42 AM",
        location: "Block B, Floor 2",
        reporter: "System Monitor",
        steps: [
            "Investigate router power supply",
            "Check switch connectivity",
            "Replace access point if necessary"
        ],
        relatedTicket: "#IT-502"
    }
}

export default function NotificationDetailPage({ params }: { params: { id: string } }) {
    // In a real app we'd await params and fetch data
    const notification = getNotification(params.id)

    if (!notification) {
        notFound()
    }

    return (
        <div className="space-y-6 animate-fade-in pb-10 max-w-4xl mx-auto">
            <Button variant="ghost" className="gap-2 pl-0 hover:pl-2 transition-all" asChild>
                <Link href="/admin/notifications">
                    <ArrowLeft className="h-4 w-4" />
                    Back to Notifications
                </Link>
            </Button>

            <div className="grid gap-6 md:grid-cols-3">
                <div className="md:col-span-2 space-y-6">
                    <Card className="glass border-border/50 overflow-hidden">
                        <div className="h-2 bg-red-500 w-full" />
                        <CardHeader>
                            <div className="flex items-start justify-between gap-4">
                                <div className="space-y-1">
                                    <div className="flex items-center gap-2 mb-2">
                                        <Badge variant="destructive" className="bg-red-500/10 text-red-500 border-red-500/20 hover:bg-red-500/20">
                                            <AlertTriangle className="h-3 w-3 mr-1" />
                                            Urgent Alert
                                        </Badge>
                                        <Badge variant="outline">System ID: {notification.id}</Badge>
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
                                <h3 className="font-bold text-sm uppercase tracking-wider text-muted-foreground">Action Plan</h3>
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
                            <CardTitle className="text-sm uppercase tracking-wider text-muted-foreground">Context Details</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="flex items-center gap-3">
                                <div className="h-10 w-10 rounded-lg bg-white/5 flex items-center justify-center">
                                    <Clock className="h-5 w-5 text-muted-foreground" />
                                </div>
                                <div>
                                    <p className="text-xs text-muted-foreground font-bold uppercase">Time Reported</p>
                                    <p className="text-sm font-medium">{notification.timestamp}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="h-10 w-10 rounded-lg bg-white/5 flex items-center justify-center">
                                    <MapPin className="h-5 w-5 text-muted-foreground" />
                                </div>
                                <div>
                                    <p className="text-xs text-muted-foreground font-bold uppercase">Location</p>
                                    <p className="text-sm font-medium">{notification.location}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="h-10 w-10 rounded-lg bg-white/5 flex items-center justify-center">
                                    <User className="h-5 w-5 text-muted-foreground" />
                                </div>
                                <div>
                                    <p className="text-xs text-muted-foreground font-bold uppercase">Reported By</p>
                                    <p className="text-sm font-medium">{notification.reporter}</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Button className="w-full text-white font-bold h-12 rounded-xl shadow-lg shadow-primary/20" size="lg">
                        Acknowledge & Investigate
                    </Button>
                </div>
            </div>
        </div>
    )
}
