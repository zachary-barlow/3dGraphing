
const readFile = async (type, file) => {
  if (type === 'self') {
    return readString(file)
  } else {
    return await readOther(file)
  }
}

const readString = (file) => {
  console.log("string")
}

const readOther = (file, callback) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    let data = [];
    reader.onload = () => {
      let text = reader.result;
      let rows = text.split('\n')
      
      for(let row of rows) {
        data = [...data, row.split(',')]
      }
      return data;
    }
    reader.onloadend = () => {
      resolve(data)
    }
    reader.readAsText(file);
  })
}

export default readFile