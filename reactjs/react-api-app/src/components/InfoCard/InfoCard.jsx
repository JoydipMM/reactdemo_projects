import React from 'react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

const InfoCard = ({label, value, className, link}) => {
  return (
    <>
     <div className={cn("card", className)}>
        <h4 className='text-xl font-medium text-neutral-400'>{label}</h4>
        {link ?
        <>
        <Link to={value} target="_blank" className='text-xs text-amber-50 bg-purple-700 px-3.5 py-1 rounded-lg hover:text-amber-50'>{label}</Link>
        </>
         :
         <h2 className='text-3xl font-bold text-blue-500'>{value}</h2>  
         
         }
         
    </div> 
    </>
  )
}

export default InfoCard
