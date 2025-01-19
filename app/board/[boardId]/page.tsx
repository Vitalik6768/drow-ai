import { Canvas } from "./_components/canvas";
import { Room } from "@/components/room";
import { CanvasLoading } from "./_components/canvas-loading";


interface BoardIdPageProps {
    params: {
        boardId: string;
    }
}

const BoardIdPage = async ({ params }: BoardIdPageProps) => {
    const boardId = await params.boardId;
    
    return (
        // <Room roomId={boardId} fallback={<CanvasLoading/>}>
            <Canvas boardId={boardId} />
        // </Room>
    )
}

export default BoardIdPage;
