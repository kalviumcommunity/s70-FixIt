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
import { User, Mail, Calendar, Shield, BadgeCheck, Camera } from "lucide-react"

export default function ProfilePage() {
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
                    <h1 className="text-3xl font-bold tracking-tight text-gradient">Profile Settings</h1>
                    <p className="text-muted-foreground">Manage your account information and preferences.</p>
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
                                <h2 className="text-xl font-bold tracking-tight">John Doe</h2>
                                <p className="text-sm text-muted-foreground">Resident • Ward 12, BLK 4</p>
                            </div>
                            <div className="flex items-center gap-2 px-3 py-1 bg-green-500/10 text-green-500 rounded-full text-xs font-medium">
                                <BadgeCheck className="h-3.5 w-3.5" />
                                ID Verified
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card className="md:col-span-2 glass border-border/50">
                    <CardHeader>
                        <CardTitle>Personal Information</CardTitle>
                        <CardDescription>Update your personal details and how we can contact you.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleSave} className="space-y-4">
                            <div className="grid gap-4 md:grid-cols-2">
                                <div className="space-y-2">
                                    <Label htmlFor="firstName">First Name</Label>
                                    <div className="relative">
                                        <Input
                                            id="firstName"
                                            defaultValue="bhuvana"
                                            disabled={!isEditing}
                                            className="bg-background/20 pl-9"
                                        />
                                        <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="lastName">Last Name</Label>
                                    <div className="relative">
                                        <Input
                                            id="lastName"
                                            defaultValue="Doe"
                                            disabled={!isEditing}
                                            className="bg-background/20 pl-9"
                                        />
                                        <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="email">Email Address</Label>
                                <div className="relative">
                                    <Input
                                        id="email"
                                        type="email"
                                        defaultValue="john.doe@example.com"
                                        disabled={!isEditing}
                                        className="bg-background/20 pl-9"
                                    />
                                    <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                                </div>
                            </div>

                            <div className="grid gap-4 md:grid-cols-2">
                                <div className="space-y-2 text-muted-foreground">
                                    <Label className="text-foreground">Joined Date</Label>
                                    <div className="flex items-center gap-2 h-10 px-3 rounded-md bg-muted/30 border border-transparent text-sm">
                                        <Calendar className="h-4 w-4" />
                                        January 15, 2024
                                    </div>
                                </div>
                                <div className="space-y-2 text-muted-foreground">
                                    <Label className="text-foreground">Account Role</Label>
                                    <div className="flex items-center gap-2 h-10 px-3 rounded-md bg-muted/30 border border-transparent text-sm">
                                        <Shield className="h-4 w-4" />
                                        Resident User
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
