import React from 'react'
import { Link } from 'react-router-dom';
import GridRow from '../GridRow/GridRow';
import InfoCard from '../InfoCard/InfoCard';

const SiteInfo = ({name, tagline, stats, links}) => {
  return (
    <>
    <GridRow className="mb-6 card" gridcol="grid-cols-2">
        <div>
            <h3 className='text-2xl font-bold text-cyan-900'>{name}</h3>
            <label className='text-xs text-gray-600 p-0 mb-0'>Tagline: {tagline}</label>
        </div> 
        <div className='flex gap-3 items-center justify-end'>
            <Link to={links.github} target="_blank" className='text-xs text-amber-50 bg-purple-700 px-3.5 py-1 rounded-lg hover:text-amber-50'>github</Link>
            <Link to={links.docs} target="_blank" className='text-xs text-amber-50 bg-purple-700 px-3.5 py-1 rounded-lg hover:text-amber-50'>Docs</Link>
        </div>
    </GridRow>
    <GridRow className="mb-6" gridcol="grid-cols-3">
        <InfoCard className="py-4 px-5" label={"Users"} value={stats.users}/>
        <InfoCard className="py-4 px-5" label={"Courses"} value={stats.courses} route="/course"/>
        <InfoCard className="py-4 px-5" label={"Team"} value={stats.team} route="/team"/>
    </GridRow>
    {/* <GridRow className="mb-6" gridcol={true}>
        <InfoCard className="py-4 px-5 flex items-center justify-between" label={"github"} value={links.github} link/>
        <InfoCard className="py-4 px-5 flex items-center justify-between" label={"docs"} value={links.docs} link/>
    </GridRow> */}
    </>
  )
}

export default SiteInfo;
