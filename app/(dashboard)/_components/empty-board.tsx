"use client"

import { Button } from "@/components/ui/button"
import {useMutation} from "convex/react"
import {api} from "@/convex/_generated/api"
import { useOrganization } from "@clerk/nextjs"
import { useApiMutation } from "@/hooks/use-api-mutation"
import { toast } from "sonner"


export const EmptyBoard = () => {
    const {mutate, pending} = useApiMutation(api.board.create)
    const {organization} = useOrganization()

    const onClick = () => {
        if(!organization?.id) return;
        mutate({
            orgId: organization.id,
            title: "untitled",
        }).then((id) => {
            toast.success("Board created")
        }).catch((err) => {
            toast.error("Failed to create board")
        })
    }


    return (
        <Button disabled={pending} onClick={onClick}>Create Board</Button>
     
    )
}

