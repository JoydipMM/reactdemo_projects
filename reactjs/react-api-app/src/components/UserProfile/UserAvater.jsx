import React from 'react';

const UserAvater = ({avatar, size="28"}) => {
    
  return (
    <div className='w-auto relative'>
        <div className={`w-${size} h-${size} block overflow-hidden rounded-2xl border border-solid border-neutral-200`}>
            <img src={avatar} className='w-full h-full object-cover' />
        </div>
    </div>
  )
}

export default UserAvater;
