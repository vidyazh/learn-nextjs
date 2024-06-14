import Link from "next/link";
import { ThemeToggle } from "./Themetoggle";

export function Navbar() {
    return(
        <nav className="border-b bg-background h-[10vh] flex items-center">
            <div className="container flex items-center justify-between">
            <Link href="/">
                 <h1 className="font-bold text-3xl">Vidya Az Zahra</h1>           
            </Link>

            <div className="flex items-center gap-x-5">
                <ThemeToggle/>
            </div>
            
            </div>

        </nav>
    )
}