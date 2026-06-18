import React from 'react'
import QueryList from '@/app/tanstack-query-mutation/__components/QueryList'
import QueryMutation from '@/app/tanstack-query-mutation/__components/QueryMutation'

const page = () => {
  return (
    <div>
      <QueryList/>
      <QueryMutation/>
    </div>
  )
}

export default page
