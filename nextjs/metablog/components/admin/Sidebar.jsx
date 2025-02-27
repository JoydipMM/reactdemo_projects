"user client"
import Link from 'next/link'
import React from 'react'

const Sidebar = () => {
  return (
    <div>
      Admin Sidebar<br/>
      <ul>
        <li><Link href={"blogList"}>Blog List</Link></li>
        <li><Link href={"blogAdd"}>Blog Add</Link></li>
        <li><Link href={"subscription"}>Subscription</Link></li>
      </ul>
    </div>
  )
}

export default Sidebar
