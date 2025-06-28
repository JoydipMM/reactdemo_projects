"use client"

const page = ({ params }: { params: { id: string } }) => {
  
  return (
    <div>
      Edit Tour {params.id}<br/>
      <div>
      Add New Tour<br/>
      <form>
        <div>
            <label>Title</label>
            <input type="text" />
        </div>
        <div>
            <label>Description</label>
            <textarea></textarea>
        </div>
        <div>
            <button type="submit">Create</button>
        </div>
      </form>
    </div>
    </div>
  )
}

export default page
