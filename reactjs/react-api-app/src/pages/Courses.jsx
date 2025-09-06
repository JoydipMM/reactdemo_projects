import React, {useState} from 'react'
import GridRow from '../components/GridRow/GridRow'
import CourseCard from '../components/CourseCard/CourseCard'
import {courses} from "../data/StaticData";

const Courses = () => {

  const [sortOrder, setSortOrder] = useState(null);

  const sortedCourses = [...courses].sort((a, b) => {
    if(sortOrder === "asc"){
      return a.level.localeCompare(b.level)
    }else if(sortOrder === "desc"){
      return b.level.localeCompare(a.level)
    }else{
      return courses;
    }
    // return sortOrder === "asc"
    //   ? a.level.localeCompare(b.level)
    //   : b.level.localeCompare(a.level);
  });
  return (
    <>
    <div className='flex justify-between items-center mb-6'>
      <h1 className='text-3xl font-bold text-purple-700'>Course</h1>

      <div className='inline-flex justify-between items-center gap-3'>
          <label className='text-[14px] text-stone-500'>Filter</label>
          <select
            className="border-none py-2 px-4 rounded-2xl bg-gray-200 text-black text-xs"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="">By Level</option>
            <option value="asc">Sort A → Z</option>
            <option value="desc">Sort Z → A</option>
          </select>
      </div>
    </div>

      <GridRow gridcol='lg:grid-cols-3'>
        {sortedCourses.map((item) => <CourseCard key={item.id} data={item}/>)}
      </GridRow>

    </>
  )
}

export default Courses
