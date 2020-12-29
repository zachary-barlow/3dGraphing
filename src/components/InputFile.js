import React, { useState } from 'react'
import readFile from '../utils/js/readFile'

const InputFile = ({ type, change }) => {
  const [selectedFile, setSelectedFile] = useState(null)
  let data;

  const handleSubmit = async (e) => {
    e.preventDefault()
    let file = selectedFile[0];
    const table_data = await readFile(type, file)
    change(table_data)
  }


  if (type === 'self') {
    data = (
      <div>
        <label>Input Data</label>
        <textarea id="file" name="file"/>
      </div>
    )
  } else {
    data = (
      <div>
        <label>Input File</label>
        <input type="file" id="file" name="file"  onChange={(e) => setSelectedFile(e.target.files)} required />
      </div>
    )
  }
  
  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        {data}
        <div>
          <button type="submit">Upload File</button>
        </div>
      </form>
    </div>
  )
}

export default InputFile