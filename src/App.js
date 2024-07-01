import React, { useState } from 'react';
import './App.css';
import MaterialTable from 'material-table'
import jsonFile from "./temp.json";

function App() {
  const [tableData, setTableData] = useState(
    jsonFile
  )
  const columns = [
    { title: "Site", field: "Site", sorting: true},
    { title: "Product", field: "Product" },
    { title: "Parameter", field: "Parameter", align: "center", grouping: false },
    { title: "Temperature", field: "Temperature", emptyValue: () => <em>null</em>, searchable: false, export: false},
    { title: "Duration", field: "Duration"},
    { title: "Mean", field: "Mean"},
    { title: "Mode", field: "Mode"},
    { title: "Median", field: "Median"},
    { title: "Min", field: "Min"},
    { title: "Max", field: "Max"},
    { title: "Shapiro-Wilk test", field: "Shapiro-Wilk test"},
    { title: "Cp", field: "Cp"},
    { title: "Cpk", field: "Cpk"},
    { title: "%retention", field: "retention"},
    { title: "%Reduction_da_tru", field: "Reduction_da_tru"},
    { title: "%Reduction_chua_tru", field: "Reduction_chua_tru"}
  ]
  return (
    <div className="App">
      <div className='abc'>
        <h1 align="center">Shelf-life report - QA MCH </h1>
        <h4 align='center'>By Huynh Anh Khoa</h4>
      </div>
      <MaterialTable columns={columns} data={tableData}
        editable={{
          onRowAdd: (newRow) => new Promise((resolve, reject) => {
            setTableData([...tableData, newRow])
            setTimeout(() => resolve(), 500)
          }),
          onRowUpdate: (newRow, oldRow) => new Promise((resolve, reject) => {
            const updatedData = [...tableData]
            updatedData[oldRow.tableData.id] = newRow
            setTableData(updatedData)
            setTimeout(() => resolve(), 500)
          }),
          onRowDelete: (selectedRow) => new Promise((resolve, reject) => {
            const updatedData = [...tableData]
            updatedData.splice(selectedRow.tableData.id, 1)
            setTableData(updatedData)
            setTimeout(() => resolve(), 1000)
          })
        }}  
        onSelectionChange={(selectedRows) => console.log(selectedRows)}
        options={{
          sorting: true, search: true,
          searchFieldAlignment: "right", searchAutoFocus: true, searchFieldVariant: "standard",
          filtering: true, paging: true, pageSizeOptions: [2, 5, 10, 20, 25, 50, 100], pageSize: 50,
          paginationType: "stepped", showFirstLastPageButtons: false, paginationPosition: "both", exportButton: true,
          exportAllData: true, exportFileName: "TableData", addRowPosition: "first", actionsColumnIndex: -1, selection: true,
          showSelectAllCheckbox: false, showTextRowsSelected: false, selectionProps: rowData => ({
            disabled: rowData.age == null, 
            // color:"primary"
          }),
          grouping: true, columnsButton: true,
          rowStyle: (data, index) => index % 2 === 0 ? { background: "#f5f5f5" } : null,
          headerStyle: { background: "purple",color:"white"}
        }}
        title="Search" />
        <h2>hh</h2>
    </div>
  );
}

export default App;