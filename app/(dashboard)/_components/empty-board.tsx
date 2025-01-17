"use client"

import { Button } from "@/components/ui/button"
import {useMutation} from "convex/react"
import {api} from "@/convex/_generated/api"
import { useOrganization } from "@clerk/nextjs"
import { useApiMutation } from "@/hooks/use-api-mutation"


export const EmptyBoard = () => {
    const {mutate, pending} = useApiMutation(api.board.create)
    const {organization} = useOrganization()

    const onClick = () => {
        if(!organization?.id) return;
        mutate({
            orgId: organization.id,
            title: "untitled",
        })
    }


    return (
        <Button disabled={pending} onClick={onClick}>Create Board</Button>
     
    )
}

