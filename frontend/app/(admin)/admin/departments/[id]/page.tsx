import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    ChevronLeft,
    MoreHorizontal,
    Clock,
    User,
    MapPin,
    AlertCircle,
    CheckCircle2,
    Search,
    Filter,
    ArrowUpRight
} from "lucide-react"
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"

interface Complaint {
    id: string
    title: string
    resident: string
    status: string
    date: string
    location: string
}

const complaintsByDept: Record<string, Complaint[]> = {
    electrical: [
        { id: "EL-001", title: "Fuse failure in Lobby", resident: "Jane Cooper", status: "Urgent", date: "10 mins ago", location: "Block A" },
        { id: "EL-002", title: "Street monitor flicker", resident: "Robert Fox", status: "In Progress", date: "1h ago", location: "Main Gate" },
        { id: "EL-003", title: "Corridor lighting dim", resident: "Esther Howard", status: "Completed", date: "3h ago", location: "Level 4" },
    ],
    plumbing: [
        { id: "PL-001", title: "Main pipe leak", resident: "Cameron Williamson", status: "Urgent", date: "5 mins ago", location: "Basement" },
        { id: "PL-002", title: "Tap dripping continuously", resident: "Jenny Wilson", status: "In Progress", date: "4h ago", location: "Unit 402" },
    ],
    carpentry: [
        { id: "CR-001", title: "Main door hinge loose", resident: "Guy Hawkins", status: "In Progress", date: "2h ago", location: "Unit 102" },
    ],
    cleaning: [
        { id: "CL-001", title: "Spillage in hallway", resident: "Theresa Webb", status: "Urgent", date: "2 mins ago", location: "Block C" },
        { id: "CL-002", title: "Waste bin overflow", resident: "Jacob Jones", status: "Completed", date: "1 day ago", location: "Park Area" },
    ],
}

export default async function DepartmentDetailedView({ params }: { params: Promise<{ id: string }> }) {
    const { id: deptId } = await params
    const deptName = deptId.charAt(0).toUpperCase() + deptId.slice(1)
    const complaints = complaintsByDept[deptId] || []

    return (
        <div className="flex flex-col gap-8 animate-fade-in pb-10">
            <div className="flex items-center gap-4">
                <Button variant="ghost" size="icon" asChild className="rounded-full">
                    <Link href="/admin/dashboard">
                        <ChevronLeft className="h-5 w-5" />
                    </Link>
                </Button>
                <div>
                    <h1 className="text-3xl font-bold tracking-tight text-gradient">{deptName} Department</h1>
                    <p className="text-muted-foreground">Manage service requests and team assignments.</p>
                </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <Card className="glass border-border/5">
                    <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium text-muted-foreground uppercase">Pending Tickets</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{complaints.filter(c => c.status !== "Completed").length}</div>
                        <div className="flex items-center gap-1 text-[10px] text-red-500 font-bold mt-1">
                            <AlertCircle className="h-3 w-3" /> 2 OVERDUE
                        </div>
                    </CardContent>
                </Card>
                <Card className="glass border-border/5">
                    <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium text-muted-foreground uppercase">Active Staff</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">12</div>
                        <div className="flex items-center gap-1 text-[10px] text-emerald-500 font-bold mt-1">
                            <CheckCircle2 className="h-3 w-3" /> 8 ON SITE
                        </div>
                    </CardContent>
                </Card>
                <Card className="glass border-border/5">
                    <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium text-muted-foreground uppercase">Avg Resolution</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">45m</div>
                        <div className="flex items-center gap-1 text-[10px] text-blue-500 font-bold mt-1">
                            <ArrowUpRight className="h-3 w-3" /> +5% VS LAST WEEK
                        </div>
                    </CardContent>
                </Card>
            </div>

            <div className="space-y-4">
                <div className="flex items-center justify-between gap-4">
                    <div className="relative flex-1 max-w-sm">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input placeholder="Search within department..." className="pl-9 bg-card/40 border-border/10 rounded-full" />
                    </div>
                    <Button variant="outline" className="rounded-full gap-2">
                        <Filter className="h-4 w-4" /> Filter
                    </Button>
                </div>

                <div className="rounded-xl border border-border/5 overflow-hidden">
                    <table className="w-full text-sm text-left">
                        <thead className="bg-muted/30 border-b border-border/5">
                            <tr>
                                <th className="p-4 font-semibold text-muted-foreground uppercase text-[10px] tracking-widest">Ticket ID</th>
                                <th className="p-4 font-semibold text-muted-foreground uppercase text-[10px] tracking-widest">Title</th>
                                <th className="p-4 font-semibold text-muted-foreground uppercase text-[10px] tracking-widest">Resident</th>
                                <th className="p-4 font-semibold text-muted-foreground uppercase text-[10px] tracking-widest">Location</th>
                                <th className="p-4 font-semibold text-muted-foreground uppercase text-[10px] tracking-widest">Status</th>
                                <th className="p-4 font-semibold text-muted-foreground uppercase text-[10px] tracking-widest text-right">Action</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-border/5">
                            {complaints.length > 0 ? complaints.map((complaint) => (
                                <tr key={complaint.id} className="hover:bg-muted/20 transition-colors group">
                                    <td className="p-4 font-mono text-xs text-primary">{complaint.id}</td>
                                    <td className="p-4">
                                        <div className="font-semibold">{complaint.title}</div>
                                        <div className="text-[10px] text-muted-foreground flex items-center gap-1 mt-0.5">
                                            <Clock className="h-3 w-3" /> {complaint.date}
                                        </div>
                                    </td>
                                    <td className="p-4">
                                        <div className="flex items-center gap-2">
                                            <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center">
                                                <User className="h-3 w-3 text-primary" />
                                            </div>
                                            <span className="text-xs font-medium">{complaint.resident}</span>
                                        </div>
                                    </td>
                                    <td className="p-4">
                                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                                            <MapPin className="h-3 w-3" /> {complaint.location}
                                        </div>
                                    </td>
                                    <td className="p-4">
                                        <span className={cn(
                                            "inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold border",
                                            complaint.status === "Urgent" ? "bg-red-500/10 text-red-500 border-red-500/20 shadow-[0_0_10px_rgba(239,68,68,0.1)]" :
                                                complaint.status === "In Progress" ? "bg-amber-500/10 text-amber-500 border-amber-500/20" :
                                                    "bg-emerald-500/10 text-emerald-500 border-emerald-500/20"
                                        )}>
                                            {complaint.status.toUpperCase()}
                                        </span>
                                    </td>
                                    <td className="p-4 text-right">
                                        <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                                            <MoreHorizontal className="h-4 w-4" />
                                        </Button>
                                    </td>
                                </tr>
                            )) : (
                                <tr>
                                    <td colSpan={6} className="p-10 text-center text-muted-foreground italic">
                                        No active complaints found for this department.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
