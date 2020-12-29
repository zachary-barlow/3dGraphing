import React from 'react'

const Header = ({ state, changeBtn }) => {
  let btn;

  if (state) {
    btn = <button onClick={(e) => changeBtn(e)}>-</button>
  } else {
    btn = <button onClick={(e) => changeBtn(e)}>+</button>
  }
  return (
    <div className="header">
      <h1>3D-Graphing</h1>
      {btn}
    </div>
  );
}

export default Header