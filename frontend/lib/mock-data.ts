import {
    LayoutDashboard,
    Wifi,
    Droplets,
    Hammer,
    Utensils,
    Shield,
    Wrench,
    AlertTriangle,
    Info,
    Bell
} from "lucide-react"

export const CATEGORIES = [
    { id: "all", slug: "all", name: "All Issues", icon: LayoutDashboard, color: "text-slate-900", bg: "bg-slate-100" },
    { id: "Power & WiFi", slug: "power-internet", name: "Power & WiFi", icon: Wifi, color: "text-blue-600", bg: "bg-blue-100" },
    { id: "Water & Hygiene", slug: "water-hygiene", name: "Water & Hygiene", icon: Droplets, color: "text-primary", bg: "bg-primary/10" },
    { id: "Furniture & Fixes", slug: "furniture-fixes", name: "Furniture & Fixes", icon: Hammer, color: "text-amber-600", bg: "bg-amber-100" },
    { id: "Mess & Food", slug: "mess-food", name: "Mess & Food", icon: Utensils, color: "text-orange-600", bg: "bg-orange-100" },
    { id: "Safety & Social", slug: "safety-social", name: "Safety & Social", icon: Shield, color: "text-red-600", bg: "bg-red-100" },
]

export const complaints = [
    {
        id: "1",
        title: "Mess Food Quality - Cold Lunch",
        description: "The lunch served in the mess today was cold and the quality of the dal was poor. Request immediate check by mess committee.",
        status: "Pending",
        date: "2024-01-21",
        category: "Mess & Food",
        categorySlug: "mess-food",
        icon: Utensils,
        color: "text-orange-600",
        bg: "bg-orange-600/10"
    },
    {
        id: "2",
        title: "Hostel WiFi Deadzone - Room 302",
        description: "The WiFi signal in Room 302 (BLK B) has been completely dead since last evening. Affecting study hours.",
        status: "In Progress",
        date: "2024-01-20",
        category: "Power & WiFi",
        categorySlug: "power-internet",
        icon: Wifi,
        color: "text-blue-600",
        bg: "bg-blue-600/10"
    },
    {
        id: "3",
        title: "Locker Door Hinge Broken",
        description: "The main door of the personal locker in Room 105 is swinging loose and cannot be locked securely.",
        status: "Resolved",
        date: "2024-01-18",
        category: "Furniture & Fixes",
        categorySlug: "furniture-fixes",
        icon: Hammer,
        color: "text-amber-600",
        bg: "bg-amber-600/10"
    },
    {
        id: "4",
        title: "Bathroom Tap Leaking",
        description: "The faucet in the shared bathroom of second floor is leaking heavily, causing a wet floor hazard.",
        status: "Pending",
        date: "2024-01-21",
        category: "Water & Hygiene",
        categorySlug: "water-hygiene",
        icon: Droplets,
        color: "text-primary",
        bg: "bg-primary/10"
    },
    {
        id: "5",
        title: "Roommate Noise After Curfew",
        description: "Persistent loud music and talking in the adjacent room after 11 PM curfew. Requesting Warden intervention.",
        status: "Pending",
        date: "2024-01-21",
        category: "Safety & Social",
        categorySlug: "safety-social",
        icon: Shield,
        color: "text-red-600",
        bg: "bg-red-600/10"
    },
    {
        id: "6",
        title: "Laundry Machine Error",
        description: "Washing machine #4 in the common laundry room is showing Error E2 and not draining water.",
        status: "In Progress",
        date: "2024-01-19",
        category: "Water & Hygiene",
        categorySlug: "water-hygiene",
        icon: Wrench,
        color: "text-indigo-600",
        bg: "bg-indigo-600/10"
    }
]

export const ADMIN_NOTIFICATIONS = [
    {
        id: "1",
        title: "New Ticket Assigned",
        description: "A new maintenance request #WA-502 has been assigned to your department.",
        type: "info",
        time: "10m ago",
        read: false,
        icon: Info,
        color: "text-blue-500",
        bg: "bg-blue-500/10"
    },
    {
        id: "2",
        title: "Urgent: Mess Escalation",
        description: "Several complaints received regarding food quality in Block C.",
        type: "warning",
        time: "1h ago",
        read: false,
        icon: AlertTriangle,
        color: "text-amber-500",
        bg: "bg-amber-500/10"
    },
    {
        id: "3",
        title: "System Update",
        description: "Hostel Commander dashboard will undergo maintenance at 2 AM.",
        type: "info",
        time: "5h ago",
        read: true,
        icon: Bell,
        color: "text-primary",
        bg: "bg-primary/10"
    },
]
