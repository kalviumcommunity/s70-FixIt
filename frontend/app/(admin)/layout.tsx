import { AdminSidebar } from "@/components/admin-sidebar"
import { NotificationCenter } from "@/components/notification-center"
import Link from "next/link"
import { User, LogOut } from "lucide-react"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="grid min-h-screen w-full lg:grid-cols-[280px_1fr] bg-mesh overflow-hidden">
            {/* Layout specific glows */}
            <div className="fixed top-1/4 -right-40 w-96 h-96 bg-primary/5 rounded-full blur-[100px] -z-10" />

            <div className="hidden border-r border-border/5 bg-white/20 backdrop-blur-3xl lg:block h-screen sticky top-0 shadow-2xl shadow-primary/5">
                <AdminSidebar />
            </div>
            <div className="flex flex-col relative h-screen overflow-y-auto">
                <header className="flex h-18 items-center justify-between border-b border-border/5 bg-white/40 backdrop-blur-xl px-6 sticky top-0 z-30 shadow-sm">
                    <div className="flex items-center gap-4 lg:hidden">
                        <span className="font-black text-primary tracking-tighter text-2xl">FixIt Admin</span>
                    </div>
                    <div className="hidden lg:flex items-center gap-2 bg-primary/5 px-4 py-2 rounded-full border border-primary/10">
                        <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary/70">Terminal Intelligence Active</span>
                    </div>
                    <div className="flex items-center gap-5 ml-auto">
                        <NotificationCenter />
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <div className="flex items-center gap-3 active:scale-95 transition-transform cursor-pointer group">
                                    <div className="flex flex-col items-end mr-1">
                                        <span className="text-sm font-bold text-slate-900 group-hover:text-primary transition-colors">Admin Root</span>
                                        <span className="text-[10px] text-muted-foreground font-medium uppercase tracking-widest">Commander</span>
                                    </div>
                                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center border-2 border-primary/20 group-hover:border-primary/40 transition-all overflow-hidden shadow-glow">
                                        <span className="text-sm font-black text-primary">AD</span>
                                    </div>
                                </div>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end" className="w-64">
                                <DropdownMenuLabel>Administrative Access</DropdownMenuLabel>
                                <div className="px-3 py-4 border-b border-border/5 mb-1 bg-primary/5 rounded-lg mx-1">
                                    <p className="text-sm font-bold text-slate-900 leading-none mb-1">Admin Root</p>
                                    <p className="text-xs text-muted-foreground mb-1.5 font-medium">admin@fixit.com</p>
                                    <div className="inline-flex items-center px-2 py-0.5 rounded-full bg-primary/10 text-[9px] font-black uppercase tracking-widest text-primary border border-primary/20">
                                        System Commander
                                    </div>
                                </div>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem asChild>
                                    <Link href="/admin/profile" className="flex items-center gap-2">
                                        <User className="h-4 w-4" />
                                        Admin Profile
                                    </Link>
                                </DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem asChild className="text-primary hover:bg-primary hover:text-white transition-all">
                                    <Link href="/login" className="flex items-center gap-2 w-full">
                                        <LogOut className="h-4 w-4" />
                                        Switch Account
                                    </Link>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </header>
                <main className="flex-1 p-4 lg:p-10 relative z-10 w-full max-w-7xl mx-auto">
                    {children}
                </main>
            </div>
        </div>
    )
}
