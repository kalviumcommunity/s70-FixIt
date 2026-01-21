"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Wrench } from "lucide-react"
import { cn } from "@/lib/utils"

export default function LoginPage() {
    const router = useRouter()
    const [role, setRole] = useState("resident")
    const [isLoading, setIsLoading] = useState(false)

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsLoading(true)
        // Simulate API call
        setTimeout(() => {
            setIsLoading(false)
            if (role === "admin") {
                router.push("/admin/dashboard")
            } else {
                router.push("/dashboard")
            }
        }, 1000)
    }

    return (
        <div className="flex min-h-screen w-full items-center justify-center bg-muted/40 p-4">
            <Card className="w-full max-w-sm glass border-border/50 shadow-xl">
                <CardHeader className="space-y-1">
                    <div className="flex items-center gap-2 mb-2 justify-center">
                        <div className="p-2 bg-primary/10 rounded-full">
                            <Wrench className="h-6 w-6 text-primary" />
                        </div>
                        <span className="text-xl font-bold text-gradient">FixIt</span>
                    </div>
                    <CardTitle className="text-2xl text-center tracking-tight font-bold">Welcome back</CardTitle>
                    <CardDescription className="text-center">
                        Enter your email to sign in to your account
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleLogin} className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                                id="email"
                                placeholder="m@example.com"
                                required
                                type="email"
                                className="bg-background/20 backdrop-blur-sm border-border/30 focus:border-primary/50 transition-all"
                            />
                        </div>
                        <div className="space-y-2">
                            <div className="flex items-center justify-between">
                                <Label htmlFor="password">Password</Label>
                                <Link
                                    href="/forgot-password"
                                    className="text-xs text-primary hover:underline"
                                >
                                    Forgot password?
                                </Link>
                            </div>
                            <Input
                                id="password"
                                placeholder="••••••••"
                                required
                                type="password"
                                className="bg-background/20 backdrop-blur-sm border-border/30 focus:border-primary/50 transition-all"
                            />
                        </div>
                        <div className="space-y-3 pt-2">
                            <Label className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">Select Role (Demo)</Label>
                            <div className="flex gap-2">
                                <Button
                                    type="button"
                                    variant={role === "resident" ? "default" : "outline"}
                                    onClick={() => setRole("resident")}
                                    className={cn(
                                        "flex-1 transition-all duration-300",
                                        role === "resident" && "shadow-[0_0_15px_rgba(79,70,229,0.3)]"
                                    )}
                                >
                                    Resident
                                </Button>
                                <Button
                                    type="button"
                                    variant={role === "admin" ? "default" : "outline"}
                                    onClick={() => setRole("admin")}
                                    className={cn(
                                        "flex-1 transition-all duration-300",
                                        role === "admin" && "shadow-[0_0_15px_rgba(79,70,229,0.3)]"
                                    )}
                                >
                                    Admin
                                </Button>
                            </div>
                        </div>
                        <Button className="w-full h-11 shadow-lg shadow-primary/20" type="submit" disabled={isLoading}>
                            {isLoading ? "Signing in..." : "Sign in"}
                        </Button>
                    </form>
                </CardContent>
                <CardFooter className="flex justify-center border-t border-border/10 pt-6">
                    <p className="text-sm text-muted-foreground">
                        Don&apos;t have an account?{" "}
                        <Link href="/signup" className="text-primary font-medium hover:underline">
                            Sign up
                        </Link>
                    </p>
                </CardFooter>
            </Card>
        </div>
    )
}
