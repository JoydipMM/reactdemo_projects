import React from 'react'
// import './PostCard.css';
import { cn } from '../../lib/utils';

const PostCard = ({}) => {
  return (
    <>
      {/* <div className={clsx("card bg-amber-400", {"bg-amber-800":active})}>ghfghf erwe</div> */}
      {/* <div className={twMerge(clsx("card bg-amber-400", {"bg-amber-800":active}))}>ghfghf erwe</div> */}
      {/* <div className={cn("card bg-amber-400", {"bg-amber-800":active})}>ghfghf erwe</div> */}
      <div className={cn("card")}>ghfghf erwe</div>
    </>
  )
}

export default PostCard
