
export interface Technician {
    id: string
    name: string
    role: string
    department: string
    status: 'Available' | 'Busy' | 'Off'
    avatar?: string
    specialization: string[]
    currentLoad: number // 0-100%
}

export const TECHNICIANS: Technician[] = [
    {
        id: "T-101",
        name: "Rajesh Kumar",
        role: "Senior Electrician",
        department: "Power & WiFi",
        status: "Available",
        specialization: ["High Voltage", "Wiring", "Generators"],
        currentLoad: 20
    },
    {
        id: "T-102",
        name: "Suresh Patil",
        role: "Network Engineer",
        department: "Power & WiFi",
        status: "Busy",
        specialization: ["Fiber Optics", "Routers", "Cabling"],
        currentLoad: 85
    },
    {
        id: "T-201",
        name: "Mahesh Yadav",
        role: "Plumber",
        department: "Water & Hygiene",
        status: "Available",
        specialization: ["Pipe Fitting", "Leakage", "Sanitary"],
        currentLoad: 10
    },
    {
        id: "T-202",
        name: "Ramesh Pawar",
        role: "Janitor Lead",
        department: "Water & Hygiene",
        status: "Off",
        specialization: ["Cleaning", "Waste Management"],
        currentLoad: 0
    },
    {
        id: "T-301",
        name: "Vijay Singh",
        role: "Carpenter",
        department: "Furniture & Fixes",
        status: "Available",
        specialization: ["Woodwork", "Locks", "Furniture Repair"],
        currentLoad: 45
    },
    {
        id: "T-401",
        name: "Sunil Gupta",
        role: "Mess Manager",
        department: "Mess & Food",
        status: "Available",
        specialization: ["Food Quality", "Kitchen Equipment"],
        currentLoad: 30
    },
    {
        id: "T-501",
        name: "Vikram Malhotra",
        role: "Security Supervisor",
        department: "Safety & Social",
        status: "Busy",
        specialization: ["Surveillance", "Dispute Resolution"],
        currentLoad: 90
    }
]
