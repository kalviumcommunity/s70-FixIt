"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
    Bell,
    CheckCircle2,
    AlertTriangle,
    Info,
    Clock,
    Filter,
    Trash2,
    Check,
    Mail
} from "lucide-react"
import { cn } from "@/lib/utils"
import Link from "next/link"

// Mock Notifications Data
const initialNotifications = [
    {
        id: "1",
        title: "High Priority Ticket: Block B WiFi Down",
        message: "Multiple residents reported connectivity issues in Block B - Floor 2.",
        type: "urgent",
        time: "10 mins ago",
        read: false,
        icon: AlertTriangle,
        color: "text-red-500",
        bg: "bg-red-500/10"
    },
    {
        id: "2",
        title: "New Staff Assignment Completed",
        message: "Technician John Doe has resolved Ticket #EL-002.",
        type: "success",
        time: "1 hour ago",
        read: false,
        icon: CheckCircle2,
        color: "text-emerald-500",
        bg: "bg-emerald-500/10"
    },
    {
        id: "3",
        title: "System Maintenance Scheduled",
        message: "The server will undergo maintenance at 2:00 AM on Sunday.",
        type: "info",
        time: "3 hours ago",
        read: true,
        icon: Info,
        color: "text-blue-500",
        bg: "bg-blue-500/10"
    },
    {
        id: "4",
        title: "New Resident Registration",
        message: "New student profile waiting for approval.",
        type: "action",
        time: "5 hours ago",
        read: true,
        icon: Mail,
        color: "text-amber-500",
        bg: "bg-amber-500/10"
    },
    {
        id: "5",
        title: "Weekly Report Generated",
        message: "The weekly facility performance report is ready for download.",
        type: "info",
        time: "1 day ago",
        read: true,
        icon: Clock,
        color: "text-primary",
        bg: "bg-primary/10"
    }
]

export default function NotificationsPage() {
    const [notifications, setNotifications] = useState(initialNotifications)
    const [filter, setFilter] = useState("all") // all, unread, urgent

    const handleMarkAsRead = (id: string) => {
        setNotifications(prev => prev.map(n =>
            n.id === id ? { ...n, read: true } : n
        ))
    }

    const handleMarkAllRead = () => {
        setNotifications(prev => prev.map(n => ({ ...n, read: true })))
    }

    const clearAll = () => {
        setNotifications([])
    }

    const filteredNotifications = notifications.filter(n => {
        if (filter === "unread") return !n.read
        if (filter === "urgent") return n.type === "urgent"
        return true
    })

    const unreadCount = notifications.filter(n => !n.read).length

    return (
        <div className="space-y-6 animate-fade-in pb-10">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight text-gradient">Notifications</h1>
                    <p className="text-muted-foreground">Stay updated with system alerts and activities.</p>
                </div>
                <div className="flex gap-2">
                    {unreadCount > 0 && (
                        <Button variant="outline" size="sm" onClick={handleMarkAllRead} className="gap-2">
                            <Check className="h-4 w-4" />
                            Mark all read
                        </Button>
                    )}
                    <Button variant="ghost" size="sm" onClick={clearAll} className="gap-2 text-muted-foreground hover:text-destructive">
                        <Trash2 className="h-4 w-4" />
                        Clear all
                    </Button>
                </div>
            </div>

            <div className="grid gap-6 lg:grid-cols-4">
                {/* Filters Sidebar */}
                <div className="lg:col-span-1">
                    <Card className="glass border-border/50 sticky top-24">
                        <CardHeader>
                            <CardTitle className="text-lg flex items-center gap-2">
                                <Filter className="h-4 w-4" /> Filters
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-1 p-2">
                            {["all", "unread", "urgent"].map((f) => (
                                <button
                                    key={f}
                                    onClick={() => setFilter(f)}
                                    className={cn(
                                        "w-full flex items-center justify-between p-3 rounded-lg text-sm font-medium transition-all text-left",
                                        filter === f ? "bg-primary/10 text-primary" : "text-muted-foreground hover:bg-white/5"
                                    )}
                                >
                                    <span className="capitalize">{f}</span>
                                    {f === "unread" && unreadCount > 0 && (
                                        <Badge variant="secondary" className="bg-primary text-white h-5 px-1.5">{unreadCount}</Badge>
                                    )}
                                </button>
                            ))}
                        </CardContent>
                    </Card>
                </div>

                {/* Notifications List */}
                <div className="lg:col-span-3 space-y-4">
                    {filteredNotifications.length === 0 ? (
                        <Card className="glass border-border/50 py-12 text-center text-muted-foreground">
                            <CardContent>
                                <div className="mx-auto h-12 w-12 rounded-full bg-muted/20 flex items-center justify-center mb-4">
                                    <Bell className="h-6 w-6 opacity-20" />
                                </div>
                                <p>No notifications found.</p>
                            </CardContent>
                        </Card>
                    ) : (
                        filteredNotifications.map((notification) => {
                            const Icon = notification.icon
                            return (
                                <Card key={notification.id} className={cn(
                                    "glass border-border/50 transition-all hover:bg-white/5 group relative overflow-hidden cursor-pointer",
                                    !notification.read && "border-l-4 border-l-primary bg-primary/5"
                                )}>
                                    <Link href={`/admin/notifications/${notification.id}`} className="absolute inset-0 z-10" />
                                    <CardContent className="p-5 flex gap-4">
                                        <div className={cn("h-10 w-10 rounded-full flex items-center justify-center shrink-0 mt-1", notification.bg, notification.color)}>
                                            <Icon className="h-5 w-5" />
                                        </div>
                                        <div className="flex-1 space-y-1">
                                            <div className="flex items-start justify-between">
                                                <h3 className={cn("font-bold text-base group-hover:text-primary transition-colors", !notification.read && "text-primary")}>
                                                    {notification.title}
                                                </h3>
                                                <span className="text-xs text-muted-foreground whitespace-nowrap flex items-center gap-1">
                                                    <Clock className="h-3 w-3" />
                                                    {notification.time}
                                                </span>
                                            </div>
                                            <p className="text-sm text-muted-foreground pr-8">{notification.message}</p>
                                        </div>
                                        {!notification.read && (
                                            <button
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    e.preventDefault();
                                                    handleMarkAsRead(notification.id);
                                                }}
                                                className="absolute top-1/2 -translate-y-1/2 right-4 p-2 rounded-full bg-background/50 hover:bg-background text-primary opacity-0 group-hover:opacity-100 transition-opacity z-20"
                                                title="Mark as read"
                                            >
                                                <Check className="h-4 w-4" />
                                            </button>
                                        )}
                                    </CardContent>
                                </Card>
                            )
                        })
                    )}
                </div>
            </div>
        </div>
    )
}
