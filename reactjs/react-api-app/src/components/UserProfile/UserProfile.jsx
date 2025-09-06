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
                <GridRow className={'card pt-9'} gridcol="grid-cols-2">
                    <LavelTag position='left' lavel={id} title="ID" />
                    <KeyValueCard data={preferences} />
                    <div>
                        <h3 className='text-xl font-bold text-cyan-900 mb-2'>Notification</h3>
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
