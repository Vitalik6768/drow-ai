"use client"

import { UserButton } from "@clerk/nextjs"
import { SearchInput } from "./search-input"



export const Navbar = () => {
    return (
        <div className="flex items-center p-5 lg:px-2 w-full">
            <div className="hidden lg:flex lg:flex-1">
                <SearchInput />
            </div>
                <UserButton />
        </div>
    )
}

