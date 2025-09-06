import React from 'react';

const UserAvater = ({avatar, size="48"}) => {
    
  return (
    <div className='w-auto relative'>
        <div className={`w-${size} h-${size} block overflow-hidden rounded-full border border-solid border-neutral-200`}>
            <img src={avatar} className='w-full h-full object-cover' />
        </div>
    </div>
  )
}

export default UserAvater;
