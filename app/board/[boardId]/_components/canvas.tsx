"use client"

import { Info } from "./info"
import { Participants } from "./participants"
import { ToolBar } from "./tool-bar"

interface CanvasProps {
    boardId: string;
}

export const Canvas = ({ boardId }: CanvasProps) => {
    return(
        <main className="h-screen w-screen relative bg-neutral-100 touch-none">
            <Info />
            <Participants />
            <ToolBar />
        </main>
    )
}
