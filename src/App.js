import React, { useState } from 'react';
import './App.css';
import MaterialTable from 'material-table'
import jsonFile from "./temp.json";
import ReactDOM from 'react-dom';

var password = "VinhHao";
while (k != password) {
var k = prompt("Nhập mật khẩu");
if(k==password){alert('Mật khẩu đúng, nhấn Ok để tiếp tục')}
else if (k != password) {
  alert("Sai mật khẩu! Lêu lêu");
  }
}
  
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
    { title: "%retention", field: "%Retention"},
    { title: "%Reduction_da_tru", field: "%Reduction_da_tru"},
    { title: "%Reduction_chua_tru", field: "%Reduction_chua_tru"}
  ]
  


  return (
    
    <div className="App">
      <div className='abc'>
        <h1 align="center">Shelf-life report - QA MCH </h1>
        <h4 align='center'>By Huynh Anh Khoa</h4>
      </div>
      <MaterialTable columns={columns} data={tableData}
        onSelectionChange={(selectedRows) => console.log(selectedRows)}
        options={{
          sorting: true, search: true,
          searchFieldAlignment: "right", searchAutoFocus: true, searchFieldVariant: "standard",
          filtering: true, paging: true, pageSizeOptions: [25, 50, 100], pageSize: 50,
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