import React from 'react';
import { cn } from '../../lib/utils'
import TagsCard from '../TagsCard/TagsCard';

const TeamCard = ({data}) => {
  const { id, name, role, location, skills } = data;
  return (
    <>
      <div className={cn('card')}>
        <h4 className='text-xs font-medium text-gray-600 bg-gray-200 mb-2 absolute top-0 right-0 px-5 py-1 rounded-2xl rounded-tl-none rounded-br-none'>ID: {id}</h4>
        <h3 className='text-xl font-bold text-stone-800'>{name}</h3>
        <h4 className='text-xs font-medium text-blue-500 mb-2'>{role}</h4>
        <div className='flex flex-col gap-y-2.5'>
          <div className='flex'>
            <label className='text-[14px] text-stone-500'>Location :</label><div className='flex-1 text-[14px] px-2.5'>{location}</div>
          </div>
          <div className='flex'>
            <label className='text-[14px] text-stone-500'>Skills :</label><div className='flex-1 flex flex-wrap text-[14px] px-2.5 gap-1.5'>
              {skills.map((skill, index)=><TagsCard key={index} item={skill}/>)}
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default TeamCard
