"use client"

import { useSearchParams } from 'next/navigation';
import { use } from 'react';
import { EmptyBoard } from './empty-board';

interface BoardListProps {
    orgId?: string;
    query: {
        search?: string;
        favorites?: string;
    }
}

export const BoardList = ({orgId, query}: BoardListProps) => {
    const searchParams = useSearchParams();
    const data = [];

    if(!data.length && searchParams.get('search')) {
        return(
            <div>
                <p>No results found for</p>
            </div>
        )
    }

    if(!data.length && searchParams.get('favorites')) {
        return(
            <div>
                <p>No favorite boards found</p>
            </div>
        )
    }

    if(!data.length) {
        return(
            <div>
                <EmptyBoard/>
            </div>
        )
    }




    return (
        <div>
            <p>Board List</p>
        </div>
    )
}

