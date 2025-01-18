"use client"

import { useRenameModel } from "@/store/use-rename-model";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "../ui/dialog";
import { FormEvent, FormEventHandler, useEffect, useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useApiMutation } from "@/hooks/use-api-mutation";
import { api } from "@/convex/_generated/api";
import { toast } from "sonner";




export const RenameModel = () => {

    const { mutate, pending } = useApiMutation(api.board.update);


    const { isOpen, onOpen, onClose, initialValues } = useRenameModel();

    const [title, setTitle] = useState(initialValues?.title || '');

    useEffect(() => {
        setTitle(initialValues?.title || '');
    }, [initialValues.title]);

    const onSubmit:FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();
        mutate({
            id: initialValues.id,
            title: title
        }).then(() => {
            toast.success('Board renamed successfully');
            onClose();
        }).catch((error) => {
            toast.error('Failed to rename board');
        });
    }


    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Edit voard Title</DialogTitle>
                </DialogHeader>
                <DialogDescription>
                    Edit new title for this board

                </DialogDescription>
                <form onSubmit={onSubmit} className="space-y-4">
                    <Input
                        disabled={pending}
                        required
                        maxLength={60}
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Title"

                    >
                    </Input>

                    <DialogFooter>
                        <DialogClose asChild>
                            <Button type="button" variant="outline">
                                Cancel
                            </Button>

                        </DialogClose>
                        <Button disabled={pending} type="submit">
                            Save
                        </Button>

                    </DialogFooter>


                </form>



            </DialogContent>
        </Dialog>
    )


}
