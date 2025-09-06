import React from 'react'

const KeyValueCard = ({data}) => {
  return (
    <>
      {Object.entries(data).map(([key, value]) => (
        <div key={key} className="mb-1">
          {typeof value !== "object" && value !== null && (
            <>
            <div className="flex">
                <label className="text-[14px] text-stone-500">{key} :</label>
                <div className="flex-1 text-[14px] px-2.5">{String(value)}</div>
            </div>
            </>
          )}
        </div>
      ))}
    </>
  )
}

export default KeyValueCard
