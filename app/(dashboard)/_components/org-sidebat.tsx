"use client"

import { cn } from "@/lib/utils"
import { OrganizationSwitcher } from "@clerk/nextjs"
import { Poppins } from "next/font/google"
import Image from "next/image"
import Link from "next/link"

const font = Poppins({
    subsets: ["latin"],
    weight: ["600"],
    variable: "--font-poppins",
})

export const OrgSidebar = () => {
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
                    }
                }
            }}/>
        </div>

    )

}


