import React, { useState } from 'react'

const Checkbox = ({ handleClick, col_name, id }) => {
  const [checked, setChecked] = useState(false)

  const clicked = (e) => {
    setChecked(!checked)
    handleClick(e, id)
  }

  return (
    <>
      <input type="checkbox" value={col_name} checked={checked} onChange={(event) => clicked(event)} /> {col_name}
    </>
  )
}

export default Checkbox