import React, { useState } from 'react';
import './App.css';
import MaterialTable from 'material-table'
import jsonFile from "./temp.json";
import ReactDOM from 'react-dom';

var password = "VinhHao";
while (k !== password) {
var k = prompt("Nhập mật khẩu");
if(k===password){alert('Mật khẩu đúng, nhấn Ok để tiếp tục')}
else if (k !== password) {
  alert("Sai mật khẩu! Hihi");
  }
}
  
function App() {
  const [tableData, setTableData] = useState(
    jsonFile
  )
  const columns = [
    { title: "Site", field: "Site", sorting: true},
    { title: "Product", field: "Product" },
    { title: "Parameter", field: "Parameter"},
    { title: "Temperature", field: "Temperature"},
    { title: "Duration", field: "Duration"},
    { title: "Mean", field: "Trung_bình", grouping: false },
    { title: "Mode", field: "Mode", grouping: false },
    { title: "Median", field: "Median", grouping: false },
    { title: "Min", field: "Min", grouping: false },
    { title: "Max", field: "Max", grouping: false },
    { title: "Shapiro-Wilk test", field: "Shapiro-Wilk test", grouping: false },
    //{ title: "Cp", field: "Cp", grouping: false },
    //{ title: "Cpk", field: "Cpk", grouping: false },
    { title: "%retention", field: "%Retention", grouping: false },
    { title: "%Reduction_da_tru", field: "%_seperative_reduction", grouping: false },
    { title: "%Reduction_chua_tru", field: "%_accumulative_reduction", grouping: false },
    { title: "Count", field: "Count", grouping: false },
  ]
  return (
    <div className="App">
      <div className='abc'>
        <h1 align="center">Shelf-life report</h1>
        <h2 align="center">QA MCH</h2>
      </div>
      <MaterialTable columns={columns} data={tableData}
        onSelectionChange={(selectedRows) => console.log(selectedRows)}
        options={{
          sorting: true, search: true,
          searchFieldAlignment: "right", searchAutoFocus: true, searchFieldVariant: "standard",
          filtering: true, paging: true, pageSizeOptions: [25, 50, 100], pageSize: 50,
          paginationType: "stepped", showFirstLastPageButtons: false, paginationPosition: "both", exportButton: true,
          exportAllData: true, exportFileName: "TableData", actionsColumnIndex: -1, selection: false, index :true,
          showSelectAllCheckbox: false, showTextRowsSelected: false, selectionProps: rowData => ({
          }),
          grouping: true, columnsButton: true,
          rowStyle: (data, index) => index % 2 === 0 ? { background: "#f5f5f5" } : null,
          headerStyle: { background: "#006600",color:"white"}
        }}
        title="Search" />
        <h4>By Huynh Anh Khoa</h4>
    </div>
  );
}

export default App;
