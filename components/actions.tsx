"use client"

import { DropdownMenuArrowProps, DropdownMenuContentProps, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem } from "./ui/dropdown-menu";
import { Link2, Pencil, Trash2 } from "lucide-react";
import { toast } from "sonner";
import { useApiMutation } from "@/hooks/use-api-mutation";
import { api } from "@/convex/_generated/api";
import { ConfirmModel } from "./confirm-model";
import { Button } from "./ui/button";
import { useRenameModel } from "@/store/use-rename-model";

interface ActionProps {
    children: React.ReactNode;
    side?: DropdownMenuContentProps["side"];
    sideOffset?: DropdownMenuContentProps["sideOffset"];
    id: string;
    title: string;

}

export const Actions = ({ children, side, sideOffset, id, title }: ActionProps) => {
    const { onOpen } = useRenameModel();
    const { mutate, pending } = useApiMutation(api.board.remove)


    const onCopyLink = () => {
        navigator.clipboard.writeText(`${window.location.origin}/boards/${id}`).then(() => {
            toast.success("Board link copied to clipboard")
        }).catch(() => {
            toast.error("Failed to copy board link")
        })
    }

    const onDelete = () => {
        mutate({ id }).then(() => {
            toast.success("Board deleted")
        }).catch(() => {
            toast.error("Failed to delete board")
        })
    }


    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                {children}

            </DropdownMenuTrigger>
            <DropdownMenuContent
                side={side}
                sideOffset={sideOffset}
                className="w-60"
                onClick={(e) => e.stopPropagation()}>

                <DropdownMenuItem className="cursor-pointer p-3" onClick={onCopyLink}>
                    <Link2 className="w-4 h-4 mr-2" />
                    Copy Board Link
                </DropdownMenuItem>

                
                <DropdownMenuItem className="cursor-pointer p-3" onClick={() => onOpen(id, title)}>
                    <Pencil className="w-4 h-4 mr-2" />
                    Rename Board
                </DropdownMenuItem>

                <ConfirmModel header="Delete Board?" description="Are you sure you want to delete this board?" disabled={pending} onConfirm={onDelete}>
                    <Button  variant={'ghost'} className="cursor-pointer p-3 text-sm w-full justify-start font-normal">
                        <Trash2 className="w-4 h-4 mr-2" />
                        Delete
                    </Button>
                </ConfirmModel>

                
            </DropdownMenuContent>

        </DropdownMenu>


    )
}

