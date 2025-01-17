"use client"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { OrganizationSwitcher } from "@clerk/nextjs"
import { LayoutDashboardIcon, StarIcon } from "lucide-react"
import { Poppins } from "next/font/google"
import Image from "next/image"
import Link from "next/link"
import { useSearchParams } from "next/navigation"

const font = Poppins({
    subsets: ["latin"],
    weight: ["600"],
    variable: "--font-poppins",
})

export const OrgSidebar = () => {

    const searchParams = useSearchParams();
    const favorites = searchParams.get("favorites");

    return (
        <div className="hidden lg:flex flex-col sapce-y-4 w-[206px] pl-5 pt-5">
            <Link href='/'>
            <div className="flex items-center gap-x-2">
                <Image src='/logo.svg' alt='logo' width={60} height={60} />
                <span className={cn("font-semibold text-2xl", font.className)}>
                    Drow Ai
                </span>


            </div>
            </Link>
            <OrganizationSwitcher hidePersonal appearance={{
                elements: {
                    rootBox:{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        width: "100%",
                    },
                    OrganizationSwitcher: {
                        padding: "6px",
                        width: "100%",
                        borderRadius: "8px",
                        border: "1px solid #e5e7eb",
                        justifyContent: "space-between",
                        backgroundColor: "white",
                     
                    }
                }
            }}/>

            <div className="space-y-1 w-full">
                <Button variant={favorites ? "ghost" : "secondary"} asChild size={"lg"} className="font-normal justify-start px-2 w-full">
                    <Link href='/'>
                    <LayoutDashboardIcon className="w-4 h-4 mr-2" />
                    Team Boards
                    </Link>

                </Button>

                <Button variant={favorites ? "secondary" : "ghost"}  asChild size={"lg"} className="font-normal justify-start px-2 w-full">
                    <Link href={{
                        pathname: "/",
                        query: {
                            favorites: true
                        }
                        
                    }}>
                    <StarIcon className="w-4 h-4 mr-2" />
                    favorites Boards
                    </Link>

                </Button>

            </div>
        </div>

    )

}


