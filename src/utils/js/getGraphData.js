const getGraphData = (table, label, vals) => {
  if (table.length > 0) {
    const col_index = table[0].indexOf(label)
    let data = [[], []] // val, label
    let val_index = table[0].indexOf(vals[0])
  
    for(let row = 1; row < table.length - 1; row ++) {
      data[0].push(table[row][val_index])
      data[1].push(table[row][col_index])
    }

    return data
  }
  return []
}

export default getGraphData