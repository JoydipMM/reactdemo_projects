import React from 'react'
import GridRow from '../components/GridRow/GridRow'
import CourseCard from '../components/CourseCard/CourseCard'
import {courses} from "../data/StaticData";

const Courses = () => {
  return (
    <>
      <h1 className='text-3xl font-bold text-purple-700 mb-6'>Course</h1>

      <GridRow gridcol='lg:grid-cols-3'>
        {courses.map((item) => <CourseCard key={item.id} data={item}/>)}
      </GridRow>

    </>
  )
}

export default Courses
