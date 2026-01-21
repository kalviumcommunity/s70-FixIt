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
import { User, Mail, ShieldAlert, Camera, Briefcase, Building } from "lucide-react"

export default function AdminProfilePage() {
    const [isEditing, setIsEditing] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    const handleSave = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsLoading(true)
        setTimeout(() => {
            setIsLoading(false)
            setIsEditing(false)
        }, 1000)
    }

    return (
        <div className="space-y-6 animate-fade-in">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Admin Profile</h1>
                    <p className="text-muted-foreground">Manage your administrative credentials and privileges.</p>
                </div>
                {!isEditing && (
                    <Button onClick={() => setIsEditing(true)}>Edit Profile</Button>
                )}
            </div>

            <div className="grid gap-6 md:grid-cols-3">
                <Card className="md:col-span-1 glass border-border/50">
                    <CardContent className="pt-6">
                        <div className="flex flex-col items-center space-y-4">
                            <div className="relative group">
                                <div className="h-24 w-24 rounded-full bg-primary/10 flex items-center justify-center border-2 border-primary/20 overflow-hidden">
                                    <User className="h-12 w-12 text-primary" />
                                </div>
                                <button className="absolute bottom-0 right-0 p-1.5 bg-primary text-white rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
                                    <Camera className="h-4 w-4" />
                                </button>
                            </div>
                            <div className="text-center">
                                <h2 className="text-xl font-bold">Admin User</h2>
                                <p className="text-sm text-muted-foreground">Senior Manager • Facility Ops</p>
                            </div>
                            <div className="flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium border border-primary/20">
                                <ShieldAlert className="h-3.5 w-3.5" />
                                Super Admin
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card className="md:col-span-2 glass border-border/50">
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
                                        className="bg-background/20"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="lastName">Last Name</Label>
                                    <Input
                                        id="lastName"
                                        defaultValue="User"
                                        disabled={!isEditing}
                                        className="bg-background/20"
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
                                        className="bg-background/20 pl-9"
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
                                <div className="flex gap-2 pt-4 justify-end">
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
            </div>
        </div>
    )
}
