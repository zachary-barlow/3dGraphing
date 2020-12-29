import React, { useMemo,useCallback, useRef } from 'react'
import * as THREE from 'three'

import { useThree, useResource } from 'react-three-fiber'

const GraphLines = () => {
  // const { camera, gl } = useThree()
  // const [ref, object] = useResource()
  const ref = useRef()
  const points = useMemo(() => [new THREE.Vector3(0, 5, 0), new THREE.Vector3(0, 0, 0), new THREE.Vector3(5, 0, 0)], [])
  const onUpdate = useCallback((self) => self.setFromPoints(points), [points])
  return (
    <>
      <line position={[-0.5, -1, 0]} ref={ref}>
        <bufferGeometry attach="geometry" onUpdate={onUpdate} />
        <lineBasicMaterial attach="material" color={'#9c88ff'} linewidth={10} linecap={'round'} linejoin={'round'} />
      </line>
      {/* <dragControls args={[[object], camera, gl.domElement]} /> */}
    </>
  )
}

export default GraphLines