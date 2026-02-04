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

export default function SignupPage() {
    const router = useRouter()
    const [isLoading, setIsLoading] = useState(false)

    const handleSignup = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsLoading(true)
        // Simulate API call
        setTimeout(() => {
            setIsLoading(false)
            router.push("/dashboard")
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
                    <CardTitle className="text-2xl text-center tracking-tight font-bold">Hostel Registration</CardTitle>
                    <CardDescription className="text-center">
                        Enter your information to join the hostel community
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSignup} className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="first-name">First name</Label>
                                <Input
                                    id="first-name"
                                    placeholder="bhuvana"
                                    required
                                    className="bg-background/20 backdrop-blur-sm border-border/30 focus:border-primary/50 transition-all"
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="last-name">Last name</Label>
                                <Input
                                    id="last-name"
                                    placeholder="Doe"
                                    required
                                    className="bg-background/20 backdrop-blur-sm border-border/30 focus:border-primary/50 transition-all"
                                />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                                id="email"
                                placeholder="name@example.com"
                                required
                                type="email"
                                className="bg-background/20 backdrop-blur-sm border-border/30 focus:border-primary/50 transition-all"
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="password">Password</Label>
                            <Input
                                id="password"
                                placeholder="••••••••"
                                required
                                type="password"
                                className="bg-background/20 backdrop-blur-sm border-border/30 focus:border-primary/50 transition-all"
                            />
                        </div>
                        <Button className="w-full h-11 shadow-lg shadow-primary/20 mt-2" type="submit" disabled={isLoading}>
                            {isLoading ? "Creating account..." : "Sign up"}
                        </Button>
                    </form>
                </CardContent>
                <CardFooter className="flex justify-center border-t border-border/10 pt-6">
                    <p className="text-sm text-muted-foreground">
                        Already have an account?{" "}
                        <Link href="/login" className="text-primary font-medium hover:underline">
                            Sign in
                        </Link>
                    </p>
                </CardFooter>
            </Card>
        </div>
    )
}
