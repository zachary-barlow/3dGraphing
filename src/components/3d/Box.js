import React, { useState } from 'react'
import { Box, Html} from 'drei'

function GraphBox({ x, y, xlab }) {
  const [hover, setHover] = useState(false)
  const [clicked, setClicked] = useState(false)
  let height = y 
  let y_pos = height - 0.5 * ( y )
  let x_pos = 0 + 0.5 * ( x ) - 0.25
  return (
    <>
      <Box
        args={[0.5, height, 0.5]} // Width, Height and Depth of the box
        position={[x_pos, y_pos, -0.25]} 
        radius={1} // Border-Radius of the box
        smoothness={4} // Optional, number of subdivisions
        onClick={() => setClicked(!clicked)}
        onPointerOver={(event) => setHover(true)}
        onPointerOut={(event) => setHover(false)}
      >
        <meshPhongMaterial attach="material" color={hover ? 'hotpink' : clicked ? 'orange' : '#2866D7'} />
        <Html scaleFactor={clicked ? 50 : 0}>
          <div class="content">
            x: {xlab} <br />
            y: {y}
          </div>
        </Html>
      </Box>


    </>
  )
}

export default GraphBox