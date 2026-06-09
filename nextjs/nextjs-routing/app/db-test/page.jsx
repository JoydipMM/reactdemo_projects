import React from 'react';
import {connectDB} from "@/shared/lib/db";

const DBTestPage = async() => {

    await connectDB();

  return (
    <div>
      <h2>DBTestPage</h2>
    </div>
  )
}

export default DBTestPage
