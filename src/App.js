import React, { useState } from 'react';
import './App.css';
import MaterialTable from 'material-table'
import jsonFile from "./temp.json";

function App() {
  const [tableData, setTableData] = useState(
    jsonFile
  )
  const columns = [
    { title: "Site", field: "Site", sorting: false, cellStyle: { background:"#009688" }, headerStyle: { color: "#fff" } },
    { title: "Product", field: "Product", filterPlaceholder: "filter" },
    { title: "Parameter", field: "Parameter", align: "center", grouping: false },
    {
      title: "Temperature", field: "Temperature", emptyValue: () => <em>null</em>, searchable: false, export: false
    },
    { title: "Duration", field: "Duration", filterPlaceholder: "filter" },
    { title: "Mean", field: "Mean", filterPlaceholder: "filter" },
    { title: "Mode", field: "Mode", filterPlaceholder: "filter" },
    { title: "Median", field: "Median", filterPlaceholder: "filter" },
    { title: "Min", field: "Min", filterPlaceholder: "filter" },
    { title: "Max", field: "Max", filterPlaceholder: "filter" },
    { title: "Shapiro-Wilk test", field: "Shapiro-Wilk test", filterPlaceholder: "filter" },
    { title: "Cp", field: "Cp", filterPlaceholder: "filter" },
    { title: "Cpk", field: "Cpk", filterPlaceholder: "filter" },
    { title: "%retention", field: "retention", filterPlaceholder: "filter" },
    { title: "%Reduction_da_tru", field: "Reduction_da_tru", filterPlaceholder: "filter" },
    { title: "%Reduction_chua_tru", field: "Reduction_chua_tru", filterPlaceholder: "filter" }
  ]
  return (
    <div className="App">
      <h1 align="center">Shelf-life report - QA MCH</h1>
      <h4 align='center'>By Huynh Anh Khoa</h4>

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
        actions={[
          {
            
          }
        ]}
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
          headerStyle: { background: "#f44336",color:"#fff"}
        }}
        title="Search" />
        <h2>hh</h2>
    </div>
  );
}

export default App;