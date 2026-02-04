"use client"

import React from "react"
import Link from "next/link"
import { Bell } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ADMIN_NOTIFICATIONS } from "@/lib/mock-data"

const RESIDENT_NOTIFICATIONS = [
    { read: false },
    { read: false },
    { read: true }
]

export function NotificationCenter({ isAdmin = false }: { isAdmin?: boolean }) {
    const activeNotifications = isAdmin ? ADMIN_NOTIFICATIONS : RESIDENT_NOTIFICATIONS
    const unreadCount = activeNotifications.filter(n => !n.read).length
    const linkHref = isAdmin ? "/admin/notifications" : "/notifications"

    return (
        <Link href={linkHref}>
            <Button
                variant="ghost"
                size="icon"
                className="relative rounded-xl hover:bg-primary/5 transition-all active:scale-95 group"
            >
                <Bell className="h-5 w-5 transition-transform group-hover:rotate-12 text-slate-600" />
                {unreadCount > 0 && (
                    <span className="absolute -top-1 -right-1 h-5 w-5 bg-red-600 text-white text-[10px] font-black rounded-full flex items-center justify-center border-2 border-white shadow-lg animate-in fade-in zoom-in duration-300">
                        {unreadCount}
                    </span>
                )}
            </Button>
        </Link>
    )
}
