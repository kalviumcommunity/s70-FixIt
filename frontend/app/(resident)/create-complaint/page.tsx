"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
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
import Image from "next/image"
import {
    ImagePlus,
    X,
    Sparkles,
    Loader2,
} from "lucide-react"

export default function CreateComplaintPage() {
    const router = useRouter()
    const [isLoading, setIsLoading] = useState(false)
    const [image, setImage] = useState<string | null>(null)
    const [description, setDescription] = useState("")
    const [isAnalyzing, setIsAnalyzing] = useState(false)
    const [prediction, setPrediction] = useState<{ severity: string; color: string } | null>(null)

    // Simulate AI Analysis
    useEffect(() => {
        let analysisTimeout: NodeJS.Timeout;

        if (description.length > 20) {
            const timeout = setTimeout(() => {
                setIsAnalyzing(true)
                analysisTimeout = setTimeout(() => {
                    const keywords = ["leak", "fire", "smoke", "burst", "flood", "electricity", "short"]
                    const isUrgent = keywords.some(k => description.toLowerCase().includes(k))
                    setPrediction({
                        severity: isUrgent ? "CRITICAL" : "NORMAL",
                        color: isUrgent ? "text-red-600 bg-red-500/20 border-red-500/40" : "text-indigo-600 bg-indigo-500/20 border-indigo-500/40"
                    })
                    setIsAnalyzing(false)
                }, 1500)
            }, 1000)

            return () => {
                clearTimeout(timeout)
                if (analysisTimeout) clearTimeout(analysisTimeout)
            }
        } else {
            // Reset state if description is too short
            const resetTimeout = setTimeout(() => {
                setPrediction(null)
                setIsAnalyzing(false)
            }, 0)
            return () => clearTimeout(resetTimeout)
        }
    }, [description])

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsLoading(true)
        setTimeout(() => {
            setIsLoading(false)
            router.push("/dashboard")
        }, 1500)
    }

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if (file) {
            const reader = new FileReader()
            reader.onloadend = () => {
                setImage(reader.result as string)
            }
            reader.readAsDataURL(file)
        }
    }

    return (
        <div className="max-w-2xl mx-auto py-8 animate-fade-in">
            <Card className="glass border-border/60 overflow-hidden relative tilt-card shadow-premium hover:shadow-premium-hover transition-all duration-500 group">
                <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-primary/50 via-primary to-primary/50 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute top-0 right-0 p-8 opacity-5">
                    <Sparkles className="h-24 w-24 text-primary" />
                </div>
                <CardHeader className="relative z-10 border-b border-border/40 bg-white/50">
                    <CardTitle className="text-3xl font-extrabold tracking-tight">Raise a Complaint</CardTitle>
                    <CardDescription className="text-lg">
                        Our AI system will analyze your report for immediate priority routing.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
                        <div className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="title" className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Complaint Heading</Label>
                                <Input
                                    id="title"
                                    placeholder="Briefly state the issue..."
                                    required
                                    className="bg-white/40 backdrop-blur-md border-border/60 h-12 text-lg focus:ring-primary/20"
                                />
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label htmlFor="category" className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Category</Label>
                                    <select
                                        id="category"
                                        className="flex h-12 w-full rounded-md border border-border/60 bg-white/40 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-medium"
                                        required
                                    >
                                        <option value="" className="bg-card">Select Hostel Area</option>
                                        <option value="plumbing" className="bg-card">Plumbing</option>
                                        <option value="electrical" className="bg-card">Electrical</option>
                                        <option value="carpentry" className="bg-card">Carpentry</option>
                                        <option value="cleaning" className="bg-card">Environmental</option>
                                    </select>
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="location" className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Location</Label>
                                    <Input
                                        id="location"
                                        placeholder="e.g., Block B, Room 402"
                                        required
                                        className="bg-white/40 backdrop-blur-md border-border/60 h-12 text-sm focus:ring-primary/20"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2 relative">
                                <Label htmlFor="description" className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Detailed Description</Label>
                                <div className="relative">
                                    <textarea
                                        id="description"
                                        value={description}
                                        onChange={(e) => setDescription(e.target.value)}
                                        className="flex min-h-[150px] w-full rounded-md border border-border/60 bg-white/40 px-3 py-3 text-lg ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/20 transition-all resize-none shadow-inner"
                                        placeholder="Describe what's happening... (AI will detect severity)"
                                        required
                                    />
                                    {isAnalyzing && (
                                        <div className="absolute top-3 right-3 flex items-center gap-2 bg-primary/10 px-3 py-1.5 rounded-full border border-primary/20 animate-pulse transition-all">
                                            <Loader2 className="h-4 w-4 text-primary animate-spin" />
                                            <span className="text-[10px] font-bold text-primary tracking-widest uppercase">Analyzing...</span>
                                        </div>
                                    )}
                                </div>
                                {prediction?.severity === "CRITICAL" && (
                                    <div className="absolute bottom-4 right-4 animate-slide-up">
                                        <div className="px-3 py-1.5 bg-red-600 text-[10px] font-black text-white rounded-full shadow-lg shadow-red-500/30 ring-4 ring-red-500/20">URGENT DETECTION</div>
                                    </div>
                                )}
                            </div>

                            <div className="space-y-2">
                                <Label className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Visual Evidence (Optional)</Label>
                                <div className="border border-dashed border-border/60 rounded-xl p-8 flex flex-col items-center justify-center gap-3 hover:bg-white/40 transition-all cursor-pointer relative group shadow-sm hover:shadow-md">
                                    {!image ? (
                                        <>
                                            <div className="h-12 w-12 rounded-full bg-primary/5 flex items-center justify-center group-hover:scale-110 transition-transform">
                                                <ImagePlus className="h-6 w-6 text-primary" />
                                            </div>
                                            <p className="text-sm text-muted-foreground font-medium">Drop photos here or click to browse</p>
                                            <input type="file" accept="image/*" className="absolute inset-0 opacity-0 cursor-pointer" onChange={handleImageUpload} />
                                        </>
                                    ) : (
                                        <div className="relative w-full h-full min-h-[200px] animate-slide-up">
                                            <Image
                                                src={image}
                                                alt="Preview"
                                                width={600}
                                                height={400}
                                                className="w-full h-full object-contain rounded-lg max-h-[300px] shadow-2xl"
                                                unoptimized
                                            />
                                            <button
                                                type="button"
                                                onClick={() => setImage(null)}
                                                className="absolute top-2 right-2 p-2 bg-destructive text-white rounded-full hover:scale-110 transition-transform shadow-lg"
                                            >
                                                <X className="h-4 w-4" />
                                            </button>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 pt-4">
                            <Button
                                variant="ghost"
                                type="button"
                                onClick={() => router.back()}
                                className="h-12 px-8 font-bold text-muted-foreground"
                            >
                                Discard
                            </Button>
                            <Button
                                type="submit"
                                disabled={isLoading}
                                className="h-12 px-10 flex-1 font-bold text-lg shadow-xl shadow-primary/20 hover:scale-105 transition-all active:scale-95"
                            >
                                {isLoading ? (
                                    <div className="flex items-center gap-2">
                                        <Loader2 className="h-5 w-5 animate-spin" />
                                        Submitting...
                                    </div>
                                ) : "Submit Report Request"}
                            </Button>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </div>
    )
}
