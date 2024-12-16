import { Paper } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { FacilityModel } from '../models/facility.model';

type MaterialDataGridConfig = {
    columnDefs: GridColDef[];
    data: FacilityModel[];
    rowClick: (rowId: number) => void;
  };

export default function MaterialDataGrid(materialDataGridConfig: MaterialDataGridConfig) {
    const paginationModel = { page: 0, pageSize: 5 };
    return (
        <Paper sx={{ height: 400, width: '100%' }}>
          <DataGrid
           onRowClick={(params) => materialDataGridConfig.rowClick(params.row.id)}
            rows={materialDataGridConfig.data}
            columns={materialDataGridConfig.columnDefs}
            initialState={{ pagination: { paginationModel } }}
            pageSizeOptions={[5, 10]}
            checkboxSelection
            sx={{ border: 0 }}
          />
        </Paper>
      );
}