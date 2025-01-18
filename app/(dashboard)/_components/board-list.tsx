"use client"

import { useSearchParams } from 'next/navigation';
import { use } from 'react';
import { EmptyBoard } from './empty-board';
import { useQuery } from 'convex/react';
import { api } from '@/convex/_generated/api';
import { BoardCard } from './board-card';
import { NewBoardButton } from './new-board-button';

interface BoardListProps {
    orgId?: string;
    query: {
        search?: string;
        favorites?: string;
    }
}

export const BoardList = ({ orgId, query }: BoardListProps) => {
    const searchParams = useSearchParams();
    const data = useQuery(api.boards.get, 
        { orgId: orgId!, search: searchParams.get('search') ?? '', favorites: searchParams.get('favorites') ?? '' }) ?? [];

    if (data === undefined) {
        return (
            <div>
                <h2 className='text-3xl'>
                    {searchParams.get('favorites') ? "Favorite boards" : "Team boards"}
                </h2>


                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-5 mt-8 pb-10'>
                    <NewBoardButton disabled={true} orgId={orgId!} />
                    <BoardCard.Skeleton />
                    <BoardCard.Skeleton />
                    <BoardCard.Skeleton />
                </div>
            </div>

        )
    }

    if (!data.length && searchParams.get('search')) {
        return (
            <div>
                <p>No results found for {searchParams.get('search')}</p>
            </div>
        )
    }

    if (!data.length && searchParams.get('favorites')) {
        return (
            <div>
                <p>No favorite boards found</p>
            </div>
        )
    }

    if (!data.length) {
        return (
            <div>
                <EmptyBoard />
            </div>
        )
    }

    return (
        <div>
            <h2 className='text-3xl'>
                {searchParams.get('favorites') ? "Favorite boards" : "Team boards"}
            </h2>


            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-5 mt-8 pb-10'>

                <NewBoardButton orgId={orgId!} />


                {data.map((board) => (
                    <BoardCard
                        key={board._id}
                        id={board._id}
                        title={board.title}
                        imageUrl={board.imageUrl}
                        authorId={board.authorId}
                        authorName={board.authorName}
                        createdAt={board._creationTime}
                        orgId={board.orgId}
                        isFavorite={board.isFavorite}
                    />
                ))}
            </div>
        </div>
    )
}

