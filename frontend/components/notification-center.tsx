"use client"

import React, { useState } from "react"
import {
    Bell,
    CheckCircle2,
    AlertTriangle,
    Info,
    MoreVertical,
    X
} from "lucide-react"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const notifications = [
    {
        id: "1",
        title: "Ticket Resolved",
        description: "Your plumbing request #PL-402 has been marked as resolved by Staff.",
        type: "success",
        time: "5m ago",
        read: false,
        icon: CheckCircle2,
        color: "text-emerald-500",
        bg: "bg-emerald-500/10"
    },
    {
        id: "2",
        title: "Staff Assigned",
        description: "Mike (Electrician) has been assigned to your request #EL-102.",
        type: "info",
        time: "1h ago",
        read: false,
        icon: Info,
        color: "text-blue-500",
        bg: "bg-blue-500/10"
    },
    {
        id: "3",
        title: "Urgent Update",
        description: "The main water line repair is being prioritized for your block.",
        type: "warning",
        time: "2h ago",
        read: true,
        icon: AlertTriangle,
        color: "text-amber-500",
        bg: "bg-amber-500/10"
    },
]

export function NotificationCenter() {
    const [isOpen, setIsOpen] = useState(false)
    const unreadCount = notifications.filter(n => !n.read).length

    return (
        <div className="relative">
            <Button
                variant="ghost"
                size="icon"
                className="relative rounded-full hover:bg-primary/10 transition-colors"
                onClick={() => setIsOpen(!isOpen)}
            >
                <Bell className="h-5 w-5" />
                {unreadCount > 0 && (
                    <span className="absolute top-1 right-1 h-3 w-3 bg-red-500 border-2 border-background rounded-full animate-pulse" />
                )}
            </Button>

            {isOpen && (
                <>
                    <div
                        className="fixed inset-0 z-40 bg-transparent"
                        onClick={() => setIsOpen(false)}
                    />
                    <Card className="absolute right-0 mt-3 w-80 md:w-96 glass border-border/40 shadow-2xl z-50 animate-slide-up origin-top-right overflow-hidden">
                        <CardHeader className="flex flex-row items-center justify-between pb-2">
                            <div>
                                <CardTitle className="text-lg font-bold">Notifications</CardTitle>
                                <CardDescription>Stay updated on your requests</CardDescription>
                            </div>
                            <Button
                                variant="ghost"
                                size="icon"
                                className="h-8 w-8 rounded-full"
                                onClick={() => setIsOpen(false)}
                            >
                                <X className="h-4 w-4" />
                            </Button>
                        </CardHeader>
                        <CardContent className="p-0 max-h-[400px] overflow-y-auto">
                            <div className="flex flex-col">
                                {notifications.length > 0 ? (
                                    notifications.map((n) => {
                                        const Icon = n.icon
                                        return (
                                            <div
                                                key={n.id}
                                                className={cn(
                                                    "p-4 border-b border-border/5 hover:bg-white/5 transition-colors cursor-pointer group flex gap-3",
                                                    !n.read && "bg-primary/5"
                                                )}
                                            >
                                                <div className={cn("h-10 w-10 rounded-full flex items-center justify-center shrink-0", n.bg)}>
                                                    <Icon className={cn("h-5 w-5", n.color)} />
                                                </div>
                                                <div className="flex-1 space-y-1">
                                                    <div className="flex items-center justify-between">
                                                        <p className={cn("text-sm font-semibold", !n.read ? "text-foreground" : "text-muted-foreground")}>
                                                            {n.title}
                                                        </p>
                                                        <span className="text-[10px] text-muted-foreground">{n.time}</span>
                                                    </div>
                                                    <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">
                                                        {n.description}
                                                    </p>
                                                </div>
                                                <Button variant="ghost" size="icon" className="h-6 w-6 opacity-0 group-hover:opacity-100 transition-opacity self-center">
                                                    <MoreVertical className="h-3 w-3" />
                                                </Button>
                                            </div>
                                        )
                                    })
                                ) : (
                                    <div className="p-10 text-center">
                                        <Bell className="h-10 w-10 text-muted/20 mx-auto mb-3" />
                                        <p className="text-sm text-muted-foreground">All caught up!</p>
                                    </div>
                                )}
                            </div>
                        </CardContent>
                        <div className="p-3 bg-muted/20 text-center border-t border-border/10">
                            <Button variant="link" size="sm" className="text-xs text-primary h-auto p-0">
                                Mark all as read
                            </Button>
                        </div>
                    </Card>
                </>
            )}
        </div>
    )
}
