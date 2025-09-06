import React, { useState} from 'react';
import GridRow from '../components/GridRow/GridRow'
import TeamCard from '../components/TeamCard/TeamCard'
import {team} from "../data/StaticData";

const Team = () => {
  const [sortOrder, setSortOrder] = useState(null);
  
  const sortedTeam = [...team].sort((a, b) => {
    if(sortOrder === "asc"){
      return a.name.localeCompare(b.name)
    }else if(sortOrder === "desc"){
      return b.name.localeCompare(a.name)
    }else{
      return team;
    }
    // return sortOrder === "asc"
    //   ? a.name.localeCompare(b.name)
    //   : b.name.localeCompare(a.name);
  });
  return (
    <>

      <div className='flex justify-between items-center mb-6'>
        <h1 className='text-3xl font-bold text-purple-700'>Team</h1>
        <div className='inline-flex justify-between items-center gap-3'>
          <label className='text-[14px] text-stone-500'>Filter</label>
          <select
            className="border-none py-2 px-4 rounded-2xl bg-gray-200 text-black text-xs"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="">By Title</option>
            <option value="asc">Sort A → Z</option>
            <option value="desc">Sort Z → A</option>
          </select>
        </div>
      </div>
      <GridRow gridcol='lg:grid-cols-3'>
        {/* {team.map((item) => <TeamCard key={item.id} data={item}/>)} */}
        {sortedTeam.map((item) => <TeamCard key={item.id} data={item}/>)}
        
      </GridRow>
    </>
  )
}

export default Team
