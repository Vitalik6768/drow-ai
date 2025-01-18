"use client";

import { ReactNode } from "react";
import {
  LiveblocksProvider,
  RoomProvider,
  ClientSideSuspense,
} from "@liveblocks/react/suspense";

interface RoomProps {
    children: ReactNode;
    roomId: string;
    fallback: ReactNode;

}



export function Room({ children, roomId, fallback }:  RoomProps) {
  return (
    <LiveblocksProvider publicApiKey={"pk_dev_xYjN10wdFKHtIn0_TnI6INsA2MpVCMEJuZMNTCaCKvG-JMGByU3gdhc_XigJrYqN"}>
      <RoomProvider id={roomId} initialPresence={{}}>
        <ClientSideSuspense fallback={fallback}>
          {() => children}
        </ClientSideSuspense>
      </RoomProvider>
    </LiveblocksProvider>
  );
}