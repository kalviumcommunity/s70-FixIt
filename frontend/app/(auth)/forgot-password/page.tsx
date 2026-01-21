"use client"

import { useState } from "react"
import Link from "next/link"
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
import { Wrench, ArrowLeft, MailCheck } from "lucide-react"

export default function ForgotPasswordPage() {
    const [isLoading, setIsLoading] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsLoading(true)
        // Simulate API call
        setTimeout(() => {
            setIsLoading(false)
            setIsSubmitted(true)
        }, 1500)
    }

    return (
        <div className="flex min-h-screen w-full items-center justify-center bg-muted/40 p-4 relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-3xl" />

            <Card className="w-full max-w-sm glass border-border/50 shadow-2xl relative z-10 animate-fade-in">
                <CardHeader className="space-y-1">
                    <div className="flex items-center gap-2 mb-4 justify-center">
                        <div className="p-2 bg-primary/10 rounded-full">
                            <Wrench className="h-6 w-6 text-primary" />
                        </div>
                        <span className="text-xl font-bold tracking-tight">FixIt</span>
                    </div>
                    {isSubmitted ? (
                        <>
                            <div className="flex justify-center mb-4">
                                <div className="p-3 bg-green-500/10 rounded-full">
                                    <MailCheck className="h-8 w-8 text-green-500" />
                                </div>
                            </div>
                            <CardTitle className="text-2xl text-center">Check your email</CardTitle>
                            <CardDescription className="text-center">
                                We&apos;ve sent a password reset link to your email address.
                            </CardDescription>
                        </>
                    ) : (
                        <>
                            <CardTitle className="text-2xl text-center">Forgot password?</CardTitle>
                            <CardDescription className="text-center">
                                No worries, we&apos;ll send you reset instructions.
                            </CardDescription>
                        </>
                    )}
                </CardHeader>
                <CardContent>
                    {!isSubmitted ? (
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="email">Email address</Label>
                                <Input
                                    id="email"
                                    placeholder="name@example.com"
                                    required
                                    type="email"
                                    className="bg-background/20 backdrop-blur-sm border-border/30 focus:border-primary/50 transition-all"
                                />
                            </div>
                            <Button className="w-full h-11 shadow-lg shadow-primary/20" type="submit" disabled={isLoading}>
                                {isLoading ? "Sending link..." : "Reset password"}
                            </Button>
                        </form>
                    ) : (
                        <Button variant="outline" className="w-full" asChild>
                            <Link href="https://mail.google.com" target="_blank">
                                Open email app
                            </Link>
                        </Button>
                    )}
                </CardContent>
                <CardFooter className="flex justify-center border-t border-border/10 pt-6">
                    <Link
                        href="/login"
                        className="text-sm font-medium text-muted-foreground hover:text-primary inline-flex items-center gap-2 transition-colors"
                    >
                        <ArrowLeft className="h-4 w-4" />
                        Back to login
                    </Link>
                </CardFooter>
            </Card>
        </div>
    )
}
