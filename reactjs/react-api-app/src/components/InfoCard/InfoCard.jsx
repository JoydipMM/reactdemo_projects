import React from 'react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';
import { SquareArrowOutUpRight } from 'lucide-react';

const InfoCard = ({label, value, className, link, route}) => {
  return (
    <>
     <div className={cn("card", className)}>
      {route && <Link to={route} className='text-xs font-medium mb-2 absolute top-0 right-0 px-3 py-3 rounded-2xl rounded-tl-none rounded-br-none bg-blue-700 hover:bg-gray-700'>
        <SquareArrowOutUpRight size={18} color="#fff" />
        </Link>}
        
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
