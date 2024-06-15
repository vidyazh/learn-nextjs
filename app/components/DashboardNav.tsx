import { cn } from "@/lib/utils"
import { CreditCard, Home, Settings } from "lucide-react"
import Link from "next/link"

export const navItems = [
    {name: 'Home', href: '/dashboard', icon: Home},
    {name: 'Settings', href: '/dashboard/settings', icon: Settings},
    {name: 'Billing', href: '/dashboard/billing', icon: CreditCard},
]

export function DashboardNav(){
    return (
        <nav className="grid items-start gap-2">
            { navItems.map((item, index) => (
                <Link key={index} href={item.href}>
                    <span className={cn("group flex items-center")}>
                        <item.icon className="mr-2 h-4 w-4"/>
                        <span> { item.name } </span>
                    </span>
                </Link>
            )) }
        </nav>
    )
}