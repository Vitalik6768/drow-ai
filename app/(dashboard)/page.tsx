"use client"

import { useOrganization, UserButton } from "@clerk/nextjs";
import { EmptyOrg } from "./_components/empty-org";
import { Organization } from "@clerk/nextjs/server";
import { BoardList } from "./_components/board-list";


interface DashboardPageProps {
    searchParams: {
        search?: string;
        favorites?: string;

    }
}

const DashboardPage = ({searchParams}: DashboardPageProps) => {
    const {organization} = useOrganization();
    return (
        <div className="flex-1 h-[calc(100%-80px)] p-6 bg-slate-500">
           {/* <EmptyOrg/> */}

           <BoardList orgId={organization?.id} query={searchParams}/>



        </div>

    )

}

export default DashboardPage;
