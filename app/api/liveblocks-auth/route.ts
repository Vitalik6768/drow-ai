import { api } from "@/convex/_generated/api";
import { auth, currentUser } from "@clerk/nextjs/server";
import { Liveblocks } from "@liveblocks/node";
import { ConvexHttpClient } from "convex/browser";

const convex = new ConvexHttpClient(process.env.NEXT_PUBLIC_CONVEX_UR!);

console.log(convex)

const liveblocks = new Liveblocks({
  secret: "sk_dev_82Kr_yqEIh1y2MqjrccFvGGujyuLMpurVqRT_a7AUgRCZaaXlTFfLcmLzBO_cZ6t",
});


export async function POST(request: Request) {

    const authorization = await auth()
    const user = await currentUser()

    console.log('authorization',{
        authorization,
        user
    })


    if(!user || !authorization) {
        return new Response("Unauthorized", { status: 403 })
    }

    const room = await request.json()
    const board = await convex.query(api.board.getBoard,{id: room})

    console.log('authorization',{
        room,
        board,
        
    })




    if(board?.orgId !== authorization.orgId) {
        return new Response("Unauthorized", { status: 403 })
    }

    const userInfo = {
        name: user.fullName,
        picture: user.imageUrl,
    }

    console.log('userInfo',{
        userInfo
    })




    const session = liveblocks.prepareSession(
        user.id,
        {userInfo}
        // Optional
      );

      if(room){
        session.allow(room, session.FULL_ACCESS)
      }

      console.log('status allowed')
      
      const { status, body } = await session.authorize();



      return new Response(body, { status });


}

