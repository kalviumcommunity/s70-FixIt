import { Navbar } from "@/components/navbar"
import { Wrench } from "lucide-react"

export default function ResidentLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="min-h-screen flex flex-col bg-mesh relative overflow-x-hidden">
            {/* Background decorative glow for layout */}
            <div className="fixed top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -z-10 pointer-events-none" />
            <div className="fixed bottom-0 left-0 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[120px] -z-10 pointer-events-none" />

            <Navbar />
            <main className="flex-1 container mx-auto px-4 py-8 lg:py-12 relative z-10 w-full">
                {children}
            </main>

            <footer className="py-12 px-4 border-t border-border/5 bg-white/40 backdrop-blur-sm mt-auto">
                <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="flex items-center gap-2 opacity-60">
                        <Wrench className="h-5 w-5 text-primary" />
                        <span className="font-extrabold text-xl tracking-tighter text-primary">FixIt</span>
                    </div>
                    <p className="text-sm text-muted-foreground font-medium italic">
                        Ensuring every community member stays in perfect condition.
                    </p>
                    <div className="text-xs text-muted-foreground/60 font-bold tracking-widest uppercase">
                        &copy; 2024 Team Wardex
                    </div>
                </div>
            </footer>
        </div>
    )
}
