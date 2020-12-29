import React from 'react'
import { Canvas } from 'react-three-fiber'
import Graph from './3d/Graph'

const Graphs = ({ data, label }) => {
  return(
    <>
      <Canvas
        invalidateFrameloop
        camera={{ position: [10, 10, 15], fov: 60}}
      >
        <ambientLight />
        <Graph data={data} label={label} />
      </Canvas>
    </>
  )
}

export default Graphs