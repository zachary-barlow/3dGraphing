import React from 'react'
import CheckBox from './Checkbox'
import Radio from './Radio'


const Organize = ({ cols, radio, check }) => {

  const handleClick = (e, id) => {
    console.log('id:', id)
    check(id)
  }

  const handleRadio = (e) => {
    radio(e.target.value)
  }
  return (
    <>
      <div className="lists">
        <div>
          {cols.map((col, key) => {
            return <CheckBox handleClick={handleClick} col_name={col} id={key} key={key} />
          })}
        </div>
        <Radio cols={cols} radio={handleRadio}/>
      </div>
    </>
  )
}

export default Organize