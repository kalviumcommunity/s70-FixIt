import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Wrench, ArrowRight, ShieldCheck, Clock } from "lucide-react"

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-mesh text-foreground overflow-hidden">
      <header className="px-6 h-18 flex items-center justify-between border-b border-border/40 bg-white/60 backdrop-blur-xl sticky top-0 z-50">
        <div className="flex items-center gap-2.5 group">
          <div className="p-2 bg-primary/10 rounded-xl group-hover:scale-110 transition-transform">
            <Wrench className="h-5 w-5 text-primary" />
          </div>
          <span className="font-extrabold text-2xl tracking-tighter text-primary">FixIt</span>
        </div>
        <div className="flex items-center gap-6">
          <Link href="/login" className="text-sm font-semibold hover:text-primary transition-colors">
            Login
          </Link>
          <Button asChild className="rounded-full px-6 shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all">
            <Link href="/signup">Get Started</Link>
          </Button>
        </div>
      </header>

      <main className="flex-1 relative">
        {/* Decorative Glow Elements */}
        <div className="absolute top-1/4 -left-20 w-80 h-80 bg-primary/10 rounded-full blur-[120px] -z-10" />
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-indigo-500/10 rounded-full blur-[120px] -z-10" />

        <section className="pt-24 pb-16 px-6 text-center max-w-5xl mx-auto space-y-10 animate-fade-in relative z-10">
          <div className="inline-flex items-center gap-3 rounded-full border border-primary/20 px-5 py-2 text-xs font-bold transition-all bg-white shadow-sm text-primary hover:shadow-md mb-4 uppercase tracking-[0.25em]">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
            </span>
            System Live: Community 1.0
          </div>
          <h1 className="text-7xl md:text-9xl font-black tracking-tight leading-[0.9] text-slate-900">
            Fixing your <br />
            <span className="text-gradient">Community.</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-500 max-w-2xl mx-auto font-medium leading-relaxed">
            The next-gen maintenance platform for modern living. <br className="hidden md:block" />
            Report issues, track progress, and feel at home.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 pt-8">
            <Button size="lg" className="h-14 px-10 text-lg rounded-full shadow-2xl shadow-primary/30 group py-6" asChild>
              <Link href="/dashboard">
                Report an Issue <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="h-14 px-10 text-lg rounded-full border-2 border-primary/20 bg-white/40 hover:bg-white hover:border-primary/40 transition-all shadow-xl py-6" asChild>
              <Link href="/admin/dashboard">
                Admin Demo
              </Link>
            </Button>
          </div>
        </section>

        <section className="py-24 px-6 bg-muted/30">
          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12">
            <div className="space-y-4">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Fast Resolution</h3>
              <p className="text-muted-foreground">
                Raise complaints instantly and get assigned to the right staff member within minutes.
              </p>
            </div>
            <div className="space-y-4">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <ShieldCheck className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Transparent Tracking</h3>
              <p className="text-muted-foreground">
                Monitor the status of your request with real-time updates.
              </p>
            </div>
            <div className="space-y-4">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Wrench className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Expert Staff</h3>
              <p className="text-muted-foreground">
                Our verified maintenance team ensures high-quality repairs and accountability.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="h-24 border-t flex items-center justify-center text-muted-foreground text-sm">
        &copy; 2024 FixIt / Team Wardex. All rights reserved.
      </footer>
    </div>
  )
}
