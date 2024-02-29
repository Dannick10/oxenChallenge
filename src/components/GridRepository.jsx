import { useState, useRef } from 'react';

import { filterBy } from "@progress/kendo-data-query";
import { Grid, GridColumn, GridToolbar } from '@progress/kendo-react-grid';
import { ExcelExport } from "@progress/kendo-react-excel-export";
import '@progress/kendo-theme-default/dist/all.css';


const GridRepository = ({data}) => {
  
  const initialFilter = {
    logic: "and",
    filters: [
      {
        field: "name",
        operator: "contains",
        value: "",
      },
      {
        field: "description",
        operator: "contains",
        value: "",
      }
    ],
  };

  const [filter, setFilter] = useState(initialFilter);


  const _export = useRef(null);

  const excelExport = () => {
    if (_export.current !== null) {
      _export.current.save();
    }
  };

  return (
    <>
     <ExcelExport data={data} ref={_export}>
     <Grid 
       data={filterBy(data, filter)}
       filterable={true}
       filter={filter}
       onFilterChange={(e) => setFilter(e.filter)}
      
      >
       <GridToolbar>
          <button
            title="Export Excel"
            className="k-button k-button-md k-rounded-md k-button-solid k-button-solid-primary"
            onClick={excelExport}
          >
            Exportar Excel
          </button>
        </GridToolbar>

      <GridColumn field="id" title="Id" width="90px" filterable={false}/>
      <GridColumn field="owner.login" title="Criador" width="100px" filterable={false}/>
      <GridColumn field="name" title="Projeto" width="150px" />
      <GridColumn field="description" title="Descrição"  width="280px"/>
      <GridColumn field="pushed_at" title="Data" filterable={false}/>
      <GridColumn field="visibility" title="visibilidade"  width="100px" filterable={false} />
      <GridColumn field="has_pages" title="github Page" width="100px" filterable={false}/>
    </Grid>
    </ExcelExport>
    </>
  )
}

export default GridRepository