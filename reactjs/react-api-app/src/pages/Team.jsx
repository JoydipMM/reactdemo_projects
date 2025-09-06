import React from 'react';
import GridRow from '../components/GridRow/GridRow'
import TeamCard from '../components/TeamCard/TeamCard'
import {team} from "../data/StaticData";

const Team = () => {
  return (
    <>
      <h1 className='text-3xl font-bold text-purple-700 mb-6'>Team</h1>
      <GridRow gridcol='lg:grid-cols-3'>
        {team.map((item) => <TeamCard key={item.id} data={item}/>)}
        
      </GridRow>
    </>
  )
}

export default Team
