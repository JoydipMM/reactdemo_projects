import React from 'react'
import { cn } from '../../lib/utils'
import TagsCard from '../TagsCard/TagsCard';
import GridRow from '../GridRow/GridRow';

const CourseCard = ({data}) => {

    const { id, title, category, level, rating, durationHrs } = data;

    const getLevel = (lavel) =>{
      let cardLevelClass;
      let cardBorder;
      if(lavel ==="Beginner"){
        cardLevelClass = "bg-amber-600 text-white";
        cardBorder = "border-amber-600";
      }else if(lavel ==="Intermediate"){
        cardLevelClass = "bg-indigo-400 text-white";
        cardBorder = "border-indigo-400";
      }else{
        cardLevelClass = "bg-fuchsia-600 text-white";
        cardBorder = "border-fuchsia-600";
      }
      return cardLevelClass;
    }
  return (
    <>
      <div className={cn('card pt-10 pb-10')}>
        <h4 className='text-xs font-medium text-gray-600 bg-gray-200 mb-2 absolute top-0 right-0 px-5 py-1 rounded-2xl rounded-tl-none rounded-br-none'>ID: {id}</h4>
        <h4 className={cn('text-xs font-medium mb-2 absolute top-0 left-0 px-5 py-1 rounded-2xl rounded-tr-none rounded-bl-none', getLevel(level))}>Level: {level}</h4>
        <h3 className='text-xl font-bold text-stone-800'>{title}</h3>
        <h4 className='text-xs font-medium text-blue-500 mb-2'>Category: {category}</h4>
        <div className='flex flex-col gap-y-2.5'>
          <GridRow gridcol='lg:grid-cols-2'>
            <div className='flex'>
              <label className='text-[14px] text-stone-500'>Rating :</label><div className='flex-1 text-[14px] px-2.5'>{rating}</div>
            </div>
            <div className='flex'>
              <label className='text-[14px] text-stone-500'>DurationHrs :</label><div className='flex-1 text-[14px] px-2.5'>{durationHrs}</div>
            </div>
          </GridRow>
        </div>

      </div>
    </>
  )
}

export default CourseCard
