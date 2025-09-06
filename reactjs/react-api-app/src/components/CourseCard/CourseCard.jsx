import React from 'react'
import { cn } from '../../lib/utils'
import TagsCard from '../TagsCard/TagsCard';
import GridRow from '../GridRow/GridRow';
import LavelTag from '../LavelTag/LavelTag';

const CourseCard = ({data}) => {

  const { id, title, category, level, rating, durationHrs } = data;
  
  return (
    <>
      <div className={cn('card pt-10 pb-10')}>
        <LavelTag lavel={level} position='left' title="Level" />
        <LavelTag lavel={id} title="ID" />
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
