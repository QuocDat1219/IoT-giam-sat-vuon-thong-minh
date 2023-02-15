import React from 'react'
import "./table.css"
const Table = ({newdata, column}) => {
    
    const data = Object.values(newdata);    
    console.log(data);
  return (
    <table>
        <thead>
            <tr>
                {column.map((item, index) => <TableHeadItem item={item}/>)}
            </tr>
        </thead>
        <tbody>
            {data.map((item, index) => <TableRow item={item} column={column}/>)}
        </tbody>
    </table>
  )
}

const TableHeadItem = ({item}) => <th>{item.heading}</th>
const TableRow = ({item,column}) => (
    <tr>
        {column.map((columnIndex, index) => {
            // if(columnIndex.value.includes('.')){
            //     const itemSplit = columnIndex.value.split('.')
            //     return <td>{item[itemSplit[0]][itemSplit[1]]}</td>
            // }
            return<td>{item[`${columnIndex.value}`]}</td>
        })}
    </tr>
)
export default Table