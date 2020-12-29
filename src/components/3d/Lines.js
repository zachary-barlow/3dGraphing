import React from 'react'
// import * as THREE from 'three'
import { OrbitControls, Line, Text } from 'drei'
// import { GeometryUtils } from 'three/examples/jsm/utils/GeometryUtils'
// import { Vector3 } from 'three'


const Lines = ({ x, y, type, xlab }) => {
  let points = []
  let labels = [];

  if (type === 'border') {
    points = [[0, y, 0], [0,0,0], [(x * 0.5) + 0.25,0,0]]
  } else if (type === 'xticks') {
    let x_pos = x / 2 
    points = [[x_pos, 0, 0], [x_pos, -0.2, 0]]

    let text = <Text
                  position={[x_pos, -0.3, 0]}
                  color="black" // default
                  anchorX="center" // default
                  anchorY="middle" // default
                  text={xlab}
                  key={x_pos}
                >
                </Text>
    labels.push(text)
  } else {
    let y_pos = y 
    points = [[0, y_pos, 0], [-0.25, y_pos, 0]]
    let text = <Text
                  position={[-0.3, y_pos, 0]}
                  color="black" // default
                  anchorX="center" // default
                  anchorY="middle" // default
                  text={y.toFixed(1)}
                  key={y_pos}
                >
                </Text>
    labels.push(text)
  }
  

  return (
    <>
      <Line points={points} color="black" position={[0, 0, 0]} linewidth={1} linecap={'round'} linejoin={'round'}/>
      { labels }
      {/* <Line points={points} color="white"  linewidth={5} position={[0, 0, 0]} /> */}
      {/* <OrbitControls /> */}
    </>
  )
}

export default Lines