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
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Badge } from "@/components/ui/badge"
import {
    Settings,
    Globe,
    Shield,
    Users,
    Palette,
    Save,
    MoreHorizontal,
    Plus,
    AlertTriangle,
    CheckCircle2
} from "lucide-react"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function ApplicationSettingsPage() {
    const [maintenanceMode, setMaintenanceMode] = useState(false)
    const [systemName, setSystemName] = useState("FixIt Facility Manager")

    // Mock user data
    const [users] = useState([
        { id: 1, name: "Admin User", email: "admin@fixit.com", role: "Super Admin", status: "Active" },
        { id: 2, name: "Sarah Connor", email: "sarah@fixit.com", role: "Manager", status: "Active" },
        { id: 3, name: "John Doe", email: "john@fixit.com", role: "Technician Lead", status: "Away" },
    ])

    return (
        <div className="space-y-8 animate-fade-in pb-10">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight text-gradient">System Settings</h1>
                    <p className="text-muted-foreground">Configure global application preferences and access control.</p>
                </div>
                <div className="flex gap-2">
                    <Button variant="outline" className="gap-2">
                        <Save className="h-4 w-4" />
                        Save Changes
                    </Button>
                </div>
            </div>

            <div className="grid gap-6">
                {/* General Settings */}
                <Card className="glass border-border/50">
                    <CardHeader>
                        <div className="flex items-center gap-2">
                            <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                                <Globe className="h-4 w-4" />
                            </div>
                            <div>
                                <CardTitle className="text-lg">General Configuration</CardTitle>
                                <CardDescription>Basic system identifiers and operational mode.</CardDescription>
                            </div>
                        </div>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div className="grid gap-4 md:grid-cols-2">
                            <div className="space-y-2">
                                <Label>Application Name</Label>
                                <Input
                                    value={systemName}
                                    onChange={(e) => setSystemName(e.target.value)}
                                    className="bg-white/5"
                                />
                            </div>
                            <div className="space-y-2">
                                <Label>Support Email</Label>
                                <Input defaultValue="helpdesk@fixit.com" className="bg-white/5" />
                            </div>
                        </div>

                        <div className="flex items-center justify-between p-4 rounded-xl border border-border/10 bg-white/5">
                            <div className="space-y-0.5">
                                <div className="text-sm font-bold flex items-center gap-2">
                                    Maintenance Mode
                                    {maintenanceMode && <Badge variant="destructive" className="h-5 text-[10px]">ACTIVE</Badge>}
                                </div>
                                <div className="text-xs text-muted-foreground">
                                    Temporarily disable access for residents. Admins still have access.
                                </div>
                            </div>
                            <Switch
                                checked={maintenanceMode}
                                onCheckedChange={setMaintenanceMode}
                                className="data-[state=checked]:bg-red-500"
                            />
                        </div>
                    </CardContent>
                </Card>

                {/* Team Management */}
                <Card className="glass border-border/50">
                    <CardHeader className="flex flex-row items-center justify-between">
                        <div className="flex items-center gap-2">
                            <div className="h-8 w-8 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-500">
                                <Users className="h-4 w-4" />
                            </div>
                            <div>
                                <CardTitle className="text-lg">Team Access</CardTitle>
                                <CardDescription>Manage administrative users and permissions.</CardDescription>
                            </div>
                        </div>
                        <Button size="sm" className="gap-2">
                            <Plus className="h-4 w-4" />
                            Invite User
                        </Button>
                    </CardHeader>
                    <CardContent>
                        <div className="rounded-xl border border-white/10 bg-white/5 overflow-hidden">
                            {users.map((user, i) => (
                                <div
                                    key={user.id}
                                    className={`flex items-center justify-between p-4 ${i !== users.length - 1 ? 'border-b border-white/5' : ''}`}
                                >
                                    <div className="flex items-center gap-4">
                                        <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                                            {user.name.charAt(0)}
                                        </div>
                                        <div>
                                            <p className="font-bold text-sm">{user.name}</p>
                                            <p className="text-xs text-muted-foreground">{user.email}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-6">
                                        <Badge variant="outline" className="border-border/20 bg-background/50">
                                            {user.role}
                                        </Badge>
                                        <div className="text-xs font-medium flex items-center gap-1.5 text-emerald-500">
                                            <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                                            {user.status}
                                        </div>
                                        <DropdownMenu>
                                            <DropdownMenuTrigger asChild>
                                                <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                                                    <MoreHorizontal className="h-4 w-4" />
                                                </Button>
                                            </DropdownMenuTrigger>
                                            <DropdownMenuContent align="end">
                                                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                                <DropdownMenuSeparator />
                                                <DropdownMenuItem>Edit Permissions</DropdownMenuItem>
                                                <DropdownMenuItem className="text-red-500">Remove Access</DropdownMenuItem>
                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>

                {/* Appearance */}
                <Card className="glass border-border/50">
                    <CardHeader>
                        <div className="flex items-center gap-2">
                            <div className="h-8 w-8 rounded-lg bg-pink-500/10 flex items-center justify-center text-pink-500">
                                <Palette className="h-4 w-4" />
                            </div>
                            <div>
                                <CardTitle className="text-lg">Appearance</CardTitle>
                                <CardDescription>Customize the admin dashboard experience.</CardDescription>
                            </div>
                        </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="flex items-center justify-between">
                            <div className="space-y-0.5">
                                <div className="text-sm font-medium">Dark Mode</div>
                                <div className="text-xs text-muted-foreground">Force dark theme across the dashboard.</div>
                            </div>
                            <Switch checked={true} disabled />
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="space-y-0.5">
                                <div className="text-sm font-medium">Compact View</div>
                                <div className="text-xs text-muted-foreground">Increase information density in lists.</div>
                            </div>
                            <Switch checked={false} />
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
