import React from 'react'
// import './PostCard.css';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';
import { cn } from '../../lib/utils';

const PostCard = ({active}) => {
  return (
    <>
      {/* <div className={clsx("card bg-amber-400", {"bg-amber-800":active})}>ghfghf erwe</div> */}
      {/* <div className={twMerge(clsx("card bg-amber-400", {"bg-amber-800":active}))}>ghfghf erwe</div> */}
      <div className={cn("card bg-amber-400", {"bg-amber-800":active})}>ghfghf erwe</div>
    </>
  )
}

export default PostCard
