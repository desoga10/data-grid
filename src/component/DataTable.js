import React, { useState, useEffect } from 'react'
<<<<<<< HEAD
import { DataGrid } from '@material-ui/data-grid'
=======
import { DataGrid } from '@mui/x-data-grid'
>>>>>>> e05d77a08d8aabac622ae8c6ac70cb0eaa1ad704

const columns = [
  { field: 'id', headerName: 'ID' },
  { field: 'title', headerName: 'Title', width: 300 },
  { field: 'body', headerName: 'Body', width: 600 }
]

const DataTable = () => {

  const [tableData, setTableData] = useState([])

<<<<<<< HEAD
  const [rows, setRows] = useState(tableData);
  const [deletedRows, setDeletedRows] = useState([]);

=======
>>>>>>> e05d77a08d8aabac622ae8c6ac70cb0eaa1ad704
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((data) => data.json())
      .then((data) => setTableData(data))

  }, [])

<<<<<<< HEAD
  console.log(tableData);
=======
  console.log(tableData)
>>>>>>> e05d77a08d8aabac622ae8c6ac70cb0eaa1ad704

  return (
    <div style={{ height: 700, width: '100%' }}>
      <DataGrid
        rows={tableData}
        columns={columns}
        pageSize={12}
<<<<<<< HEAD
        checkboxSelection
        onSelectionModelChange={({ selectionModel }) => {
          const rowIds = selectionModel.map(rowId => parseInt(String(rowId), 10));
          const rowsToDelete = tableData.filter(row => rowIds.includes(row.id));
          setDeletedRows(rowsToDelete);
          console.log(deletedRows);
        }}
=======
>>>>>>> e05d77a08d8aabac622ae8c6ac70cb0eaa1ad704
      />
    </div>
  )
}

export default DataTable
