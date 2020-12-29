import React from 'react'

const Radio = ({ cols, radio }) => {
  return (
    <div onChange={(e) => radio(e)}>
      {cols.map((col, key) => {
        return (
          <span key={key}><input type="radio" value={col} name="col" /> {col}</span>
        )
      })}
    </div>
  )
}

export default Radio