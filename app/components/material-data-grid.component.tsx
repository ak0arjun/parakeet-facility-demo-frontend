import { Paper } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

type MaterialDataGridConfig = {
    columnDefs: GridColDef[],
    data: {[key: string]: string}[]
  };

export default function MaterialDataGrid(materialDataGridConfig: MaterialDataGridConfig) {
    const paginationModel = { page: 0, pageSize: 5 };
    return (
        <Paper sx={{ height: 400, width: '100%' }}>
          <DataGrid
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