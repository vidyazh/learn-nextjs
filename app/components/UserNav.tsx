import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { CreditCard, DoorClosed, Home, Settings } from "lucide-react"

export const navItems = [
    {name: 'Home', href: '/dashboard', icon: Home},
    {name: 'Settings', href: '/dashboard/settings', icon: Settings},
    {name: 'Billing', href: '/dashboard/billing', icon: CreditCard},
]
import Link from "next/link";


export function UserNav(){
    return(
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-10 w-10 rounded-full">
                    <Avatar>
                        <AvatarImage src="https://avatars.githubusercontent.com/u/92587197?v=4" alt=""/>
                    </Avatar>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
                className="w-56"
                align="end"
                forceMount
            >
                <DropdownMenuLabel>
                    <div className="flex flex-col space-y-1">
                        <p className="text-sm font-medium leading-none">Vidya Az Zahra</p>
                        <p className="text-xs leading-none text-muted-foreground">vidya@gmail.com</p>
                    </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    {navItems.map((item, index) => (
                        <DropdownMenuItem asChild key={index}>
                            <Link href={item.href} className="w-full flex justify-between items-center">
                                {item.name}
                                <span><item.icon className="w-4 h-4"/></span>
                            </Link>

                        </DropdownMenuItem>
                    ))}
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="w-full flex justify-between items-center" asChild>
                    <div>
                    Logout{" "} 
                    <span><DoorClosed className="w-4 h-4" /></span>
                    </div>

                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}