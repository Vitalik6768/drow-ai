import { Loader } from "lucide-react"
import { Info } from "./info"
import { Participants } from "./participants"
import { ToolBar } from "./tool-bar"



export const CanvasLoading = () => {
    return (
        <main className="h-screen w-screen relative bg-neutral-100 touch-none flex items-center justify-center">

            <Loader className="h-6 w-6 text-muted-foreground animate-spin" size={48} />
            <Info.Skeleton />
            <Participants.Skeleton />
            <ToolBar.Skeleton />
            
        </main>
    
    )
}

