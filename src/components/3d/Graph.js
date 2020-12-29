import GraphBox from './Box'
import React, { useEffect, useRef } from "react"
import {  useControl } from "react-three-gui"
import { OrbitControls, TransformControls, Text } from "drei"
import Lines from './Lines'

const Graph = ({ data, label }) => {
  const orbit = useRef()
  const transform = useRef()
  const mode = useControl("mode", { type: "select", items: ["translate"] })
  useEffect(() => {
    if (transform.current) {
      const controls = transform.current
      controls.setMode(mode)
      const callback = event => (orbit.current.enabled = !event.value)
      controls.addEventListener("dragging-changed", callback)
      return () => controls.removeEventListener("dragging-changed", callback)
    }
  })

  
  let boxes = []
  let x = data[0].length
  let y = Math.max.apply(Math, data[0])
  let xticks = []
  let yticks = []
  const diff = y / 10
  for(let l = 0; l < 10; l++) {
    let ytick = <Lines x={0} y={y - diff * l} key={l} type='yticks'/>
    yticks.push(ytick)
  }

  for(let j = 0; j < data[0].length; j++) {
    let box = <GraphBox x={j + 1} y={data[0][j]} xlab={data[1][j]} key={j}/>
    boxes.push(box)

    let tick = <Lines x={j} y={data[0][j]} key={j} type='xticks' xlab={data[1][j]}/>
    xticks.push(tick)
  }
  return (
    <>
      <TransformControls ref={transform}>
        {/* <GraphLines /> */}
        <Lines x={x} y={y} type='border' xlab={data}/>
        { xticks }
        { yticks }
        <Text
          position={[x / 4, -2.0, 0]}
          color="black" // default
          anchorX="center" // default
          anchorY="middle" // default
          fontSize="2"
          text={label}
        >
        </Text>
        {/* <GraphBox x={0.5} y={2}/> */}
        { boxes }
      </TransformControls>
      <OrbitControls ref={orbit} />
    </>
  )
}

export default Graph