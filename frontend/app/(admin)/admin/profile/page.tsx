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
import { User, Mail, ShieldAlert, Camera, Briefcase, Building, Lock, Bell, Fingerprint } from "lucide-react"

export default function AdminProfilePage() {
    const [isEditing, setIsEditing] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [notifications, setNotifications] = useState({
        email: true,
        push: false,
        marketing: false
    })

    const handleSave = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsLoading(true)
        setTimeout(() => {
            setIsLoading(false)
            setIsEditing(false)
        }, 1000)
    }

    return (
        <div className="space-y-6 animate-fade-in pb-10">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight text-gradient">Admin Profile</h1>
                    <p className="text-muted-foreground">Manage your administrative credentials and privileges.</p>
                </div>
                {!isEditing && (
                    <Button onClick={() => setIsEditing(true)}>Edit Profile</Button>
                )}
            </div>

            <div className="grid gap-6 md:grid-cols-3">
                {/* Left Column: Avatar & Quick Stats */}
                <div className="space-y-6">
                    <Card className="glass border-border/50 overflow-hidden">
                        <div className="h-32 bg-gradient-to-r from-primary/20 to-blue-500/20" />
                        <CardContent className="flex flex-col items-center relative pt-0">
                            <div className="-mt-16 mb-6 group cursor-pointer relative">
                                <div className="h-32 w-32 rounded-full bg-background flex items-center justify-center border-[6px] border-background shadow-2xl overflow-hidden relative">
                                    <div className="h-full w-full bg-primary/10 flex items-center justify-center">
                                        <User className="h-16 w-16 text-primary" />
                                    </div>
                                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                        <Camera className="h-8 w-8 text-white" />
                                    </div>
                                </div>
                            </div>

                            <div className="text-center space-y-1.5 mb-6">
                                <h2 className="text-xl font-bold">Admin User</h2>
                                <p className="text-sm text-muted-foreground">Senior Manager • Facility Ops</p>
                                <div className="flex items-center justify-center gap-2 mt-3">
                                    <Badge variant="secondary" className="gap-1 bg-primary/10 text-primary hover:bg-primary/20 border-primary/20">
                                        <ShieldAlert className="h-3 w-3" />
                                        Super Admin
                                    </Badge>
                                </div>
                            </div>

                            <div className="w-full pt-6 border-t border-border/5 grid grid-cols-2 gap-4 text-center">
                                <div>
                                    <p className="text-2xl font-bold text-primary">52</p>
                                    <p className="text-[10px] text-muted-foreground uppercase font-black tracking-widest">Actions</p>
                                </div>
                                <div>
                                    <p className="text-2xl font-bold text-primary">4.9</p>
                                    <p className="text-[10px] text-muted-foreground uppercase font-black tracking-widest">Rating</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="glass border-border/50">
                        <CardHeader>
                            <CardTitle className="text-base flex items-center gap-2">
                                <Lock className="h-4 w-4 text-primary" />
                                Security Status
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="flex items-center justify-between">
                                <div className="space-y-0.5">
                                    <div className="text-sm font-medium">Two-Factor Auth</div>
                                    <div className="text-xs text-muted-foreground">Enabled via Authenticator</div>
                                </div>
                                <Switch checked={true} />
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="space-y-0.5">
                                    <div className="text-sm font-medium">Session Timeout</div>
                                    <div className="text-xs text-muted-foreground">Auto-lock after 15m</div>
                                </div>
                                <Switch checked={true} />
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Right Column: Details & Settings */}
                <div className="md:col-span-2 space-y-6">
                    <Card className="glass border-border/50">
                        <CardHeader>
                            <CardTitle>Administrative Details</CardTitle>
                            <CardDescription>Update your workspace settings and contact information.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <form onSubmit={handleSave} className="space-y-4">
                                <div className="grid gap-4 md:grid-cols-2">
                                    <div className="space-y-2">
                                        <Label htmlFor="firstName">First Name</Label>
                                        <Input
                                            id="firstName"
                                            defaultValue="Admin"
                                            disabled={!isEditing}
                                            className="bg-white/5"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="lastName">Last Name</Label>
                                        <Input
                                            id="lastName"
                                            defaultValue="User"
                                            disabled={!isEditing}
                                            className="bg-white/5"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="email">Work Email</Label>
                                    <div className="relative">
                                        <Input
                                            id="email"
                                            type="email"
                                            defaultValue="admin@fixit.com"
                                            disabled={!isEditing}
                                            className="bg-white/5 pl-9"
                                        />
                                        <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                                    </div>
                                </div>

                                <div className="grid gap-4 md:grid-cols-2">
                                    <div className="space-y-2">
                                        <Label>Department</Label>
                                        <div className="flex items-center gap-2 h-10 px-3 rounded-md bg-muted/30 border border-transparent text-sm">
                                            <Building className="h-4 w-4 text-muted-foreground" />
                                            Facility Management
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <Label>Designation</Label>
                                        <div className="flex items-center gap-2 h-10 px-3 rounded-md bg-muted/30 border border-transparent text-sm">
                                            <Briefcase className="h-4 w-4 text-muted-foreground" />
                                            Operation Head
                                        </div>
                                    </div>
                                </div>

                                {isEditing && (
                                    <div className="flex gap-2 pt-4 justify-end border-t border-border/10 mt-4">
                                        <Button variant="outline" type="button" onClick={() => setIsEditing(false)}>
                                            Cancel
                                        </Button>
                                        <Button type="submit" disabled={isLoading}>
                                            {isLoading ? "Saving..." : "Save Changes"}
                                        </Button>
                                    </div>
                                )}
                            </form>
                        </CardContent>
                    </Card>

                    <Card className="glass border-border/50">
                        <CardHeader>
                            <CardTitle className="text-base flex items-center gap-2">
                                <Bell className="h-4 w-4 text-primary" />
                                Notification Preferences
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="flex items-center justify-between p-4 rounded-lg border border-border/10 bg-white/5">
                                <div className="space-y-0.5">
                                    <div className="text-sm font-medium">Critical Alerts</div>
                                    <div className="text-xs text-muted-foreground">Receive real-time alerts for high-priority tickets</div>
                                </div>
                                <Switch checked={notifications.email} onCheckedChange={(c: boolean) => setNotifications(prev => ({ ...prev, email: c }))} />
                            </div>
                            <div className="flex items-center justify-between p-4 rounded-lg border border-border/10 bg-white/5">
                                <div className="space-y-0.5">
                                    <div className="text-sm font-medium">Daily Summaries</div>
                                    <div className="text-xs text-muted-foreground">Morning digest of departmental performance</div>
                                </div>
                                <Switch checked={notifications.push} onCheckedChange={(c: boolean) => setNotifications(prev => ({ ...prev, push: c }))} />
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="glass border-red-500/10">
                        <CardHeader>
                            <CardTitle className="text-base text-red-500 flex items-center gap-2">
                                <Fingerprint className="h-4 w-4" />
                                Danger Zone
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <Button variant="destructive" className="w-full sm:w-auto" size="sm">
                                Reset Password
                            </Button>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
}
