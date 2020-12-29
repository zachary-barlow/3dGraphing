import React from 'react'

const DataTable = ({ data }) => {
  let table = '';
  if (data.length > 0) {
    const headers = data[0];
    const rows = data.slice(1)
    table =      
    <table>
      <thead>
        <tr>
          {headers.map((val, key) => {
            return <th key={key}>{val}</th>
          })}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, key) => {
          return <tr key={key}>
                  {row.map((val, key_v) => {
                    return <td key={key_v}>{val}</td>
                  })}
                </tr> 
        })}
      </tbody>
    </table>  
    
  }

  return (
    <>
      {table}
    </>
  )
}

export default DataTable