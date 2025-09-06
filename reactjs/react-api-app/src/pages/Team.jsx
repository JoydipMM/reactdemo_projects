import React, { useState} from 'react';
import GridRow from '../components/GridRow/GridRow'
import TeamCard from '../components/TeamCard/TeamCard'
import {team} from "../data/StaticData";

const Team = () => {
  const [sortOrder, setSortOrder] = useState("asc");
  
  const sortedTeam = [...team].sort((a, b) => {
    return sortOrder === "asc"
      ? a.name.localeCompare(b.name)
      : b.name.localeCompare(a.name);
  });
  return (
    <>

      <div className='flex justify-between items-center mb-6'>
        <h1 className='text-3xl font-bold text-purple-700'>Team</h1>

        <select
          className="border-none py-2 px-4 rounded-2xl bg-gray-200 text-black text-xs"
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value="asc">Sort A → Z</option>
          <option value="desc">Sort Z → A</option>
        </select>
      </div>
      <GridRow gridcol='lg:grid-cols-3'>
        {/* {team.map((item) => <TeamCard key={item.id} data={item}/>)} */}
        {sortedTeam.map((item) => <TeamCard key={item.id} data={item}/>)}
        
      </GridRow>
    </>
  )
}

export default Team
