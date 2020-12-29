import React, { useState } from 'react'
import InputFile from './InputFile'
import DataTable from './DataTable';
import Organize from './Organize';

import '../utils/css/table.css'

const DataSection = ({ table, change, label, dataCols }) => {
  const [fileType, setFileType] = useState('');
  const [display, setDisplay] = useState(false)

  let chosen;

  const handleTableChange = (data) => {
    change(data, 'table')
    setDisplay(true)
  }

  const handleRadioChange = (val) => {
    change(val, 'label')
  }

  const handleCheckBoxChange = (id) => {
    change(id, 'check')
  }

  if (display) {
    chosen = <div id="organize">
      <h3>Choose data to display</h3>
      <Organize cols={ table[0] } radio={ handleRadioChange } check={ handleCheckBoxChange }/>
    </div>
  }
  return (
    <div id="data-section">
      <h2>Data Section</h2>
      <div>
        <select value={fileType} onChange={(e) => setFileType(e.target.value)}>
          <option value="csv">File</option>
          <option value="self">Input own</option>
        </select>
      </div>
      <InputFile type={fileType} change={handleTableChange} />
      <div className="data-table">
        {<DataTable data={ table } />}
      </div>

      { chosen }
      <p><strong>Label:</strong> { label }</p>
      <p><strong>Data col:</strong> { dataCols.map((val, key) => { return <span key={key}>{val} </span>}) }</p>
    </div>
  )
}

export default DataSection