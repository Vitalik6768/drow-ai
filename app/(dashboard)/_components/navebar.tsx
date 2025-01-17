"use client"

import { UserButton } from "@clerk/nextjs"



export const Navbar = () => {
    return (
        <div className="flex items-center p-5 lg:px-2 bg-green-500 w-full">
            <div className="hidden lg:flex lg:flex-1">
                {/* <p>to do add search</p> */}
            </div>
                <UserButton />
        </div>
    )
}

