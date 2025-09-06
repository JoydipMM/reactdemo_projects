import React, {useState} from 'react'
import GridRow from '../components/GridRow/GridRow'
import CourseCard from '../components/CourseCard/CourseCard'
import {courses} from "../data/StaticData";

const Courses = () => {

  const [sortOrder, setSortOrder] = useState("asc");

  const sortedCourses = [...courses].sort((a, b) => {
    return sortOrder === "asc"
      ? a.title.localeCompare(b.title)
      : b.title.localeCompare(a.title);
  });
  return (
    <>
    <div className='flex justify-between items-center mb-6'>
      <h1 className='text-3xl font-bold text-purple-700'>Course</h1>

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
        {sortedCourses.map((item) => <CourseCard key={item.id} data={item}/>)}
      </GridRow>

    </>
  )
}

export default Courses
