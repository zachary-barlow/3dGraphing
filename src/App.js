import { useState } from 'react'

import Data from './components/Data'
import Header from './components/Header'
import Graphs from './components/Graphs';
import getGraph from './utils/js/getGraphData.js'

import './utils/css/index.css'

function App() {
  const [collaspe, setCollaspe] = useState(true)
  const [table, setTable] = useState([])
  const [label, setLabel] = useState('')
  const [dataCols, setDataCols] = useState([])

  let graphs = '';

  const handleChange = (data, type) => {
    if (type === 'table') {
      setTable(data)
    } else if (type === 'label') {
      setLabel(data)
    } else if (type === 'check') {
      const col_name = table[0][data]
      if (!dataCols.includes(col_name)) {
        setDataCols([...dataCols, col_name])
      } else {
        let ind = dataCols.indexOf(table[0][data])
        let temp = dataCols.slice(0, ind).concat(dataCols.slice(ind + 1))
        setDataCols(temp)
      }
    }
  }

  const changeBtn = (e) => {
    e.preventDefault()
    setCollaspe(!collaspe)
  }

  if (table.length > 0  && label) {
    graphs = <Graphs data={getGraph(table, label, dataCols)} label={ label }/>
  }

  return (
    <>
      <div className={collaspe ? "sect" : "sect-small"}>
        <Header state={collaspe} changeBtn={changeBtn}/>
        <Data table={ table } change={handleChange} label={ label } dataCols={ dataCols }/>
      </div>
      { graphs }    
    </>
  );
}

export default App;
