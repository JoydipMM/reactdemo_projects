import React from 'react'
import GridRow from '../GridRow/GridRow';
import { cn } from '../../lib/utils';
import UserAvater from './UserAvater';
import LavelTag from '../LavelTag/LavelTag';
import KeyValueCard from '../KeyValueCard/KeyValueCard';


const UserProfile = ({data}) => {

    const {id, name, email, location, avatar, joined, preferences, badges} = data;
  return (
    <>
    {/* gridcol="grid-cols-2" */}
      <GridRow>
        {/* <LavelTag position='left' lavel={id} title="ID" /> */}
        <div className='flex gap-6'>
            <UserAvater avatar={avatar}/>
            <div className='flex-1'>
                <GridRow className={'card pt-9 mb-3 gap-2'} gridcol="grid-cols-2">
                    <LavelTag position='left' lavel={id} title="ID" />
                    <div>
                        <div className="flex-1 text-2xl font-bold text-purple-700">{name}</div>
                    </div>
                    <div className="flex">
                        <label className="text-[14px] text-stone-500">E-mail :</label>
                        <div className="flex-1 text-[14px] px-2.5">{email}</div>
                    </div>
                    <div className="flex">
                        <label className="text-[14px] text-stone-500">Location :</label>
                        <div className="flex-1 text-[14px] px-2.5">{location}</div>
                    </div>
                    <div className="flex">
                        <label className="text-[14px] text-stone-500">Joined :</label>
                        <div className="flex-1 text-[14px] px-2.5">{location}</div>
                    </div>
                    <KeyValueCard data={preferences} />
                </GridRow>

                <GridRow className={'card'} gridcol="grid-cols-2">
                    <div>
                        <h3 className='text-lg font-bold text-cyan-900 mb-2'>Notification</h3>
                        <GridRow gridcol="grid-cols-4">
                            <KeyValueCard data={preferences.notifications} />
                        </GridRow>
                    </div>
                </GridRow>
            </div>
        </div>
      </GridRow>
    </>
  )
}

export default UserProfile
