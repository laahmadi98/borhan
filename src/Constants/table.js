export const renderTableHeader = (data) => {
    let header = Object.keys(data[0])
    return header.map((item, index) => {
        return <th key={index}>{item}</th>
    })
}

export const renderTableData = (data) => {
    let i;
    let j;
    let text ;
    for (i of data) {
        console.log("renderTableData", i)
       text += <tr>
             for (j in i) {
        
                text += <td>{i[j]}</td>
        }
          text += </tr>
    }
    return text

}