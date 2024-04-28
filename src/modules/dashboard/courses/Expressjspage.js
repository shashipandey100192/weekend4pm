import React from 'react'
import { DataGrid } from '@mui/x-data-grid';

function Expressjspage() {
    const columns = [
        { field: 'id', headerName: 'userId', width: 100 },
        { field: 'firstName', headerName: 'First Name', width: 130 },
        { field: 'lastName', headerName: 'Last Name', width: 130 },
        {
          field: 'age', headerName: 'User Age', type: 'number', width: 90,},
        {
          field: 'fullName',
          headerName: 'Full name',
          description: 'This column has a value getter and is not sortable.',
          sortable: false,
          width: 160,
          valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
        },
      ];
    const rows = [
        { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
        { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
        { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
        { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
        { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
        { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
        { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
        { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
        { id: 10, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
        { id: 11, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
        { id: 12, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
        { id: 13, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
        { id: 14, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
        { id: 15, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
        { id: 16, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
        { id: 17, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
        { id: 18, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
      ];
    return (
        <div className='container-fluid bg-light' >
            <div className='row'>
                <div className='col-sm-12 p-3'>
                    <h1 className='border-bottom pb-3'>Expressjs with Pagination</h1>
                    <div style={{ height: 500, width: '100%' }}>
                        <DataGrid
                            rows={rows}
                            columns={columns}
                            initialState={{
                                pagination: {
                                    paginationModel: { page: 0, pageSize: 5 },
                                },
                            }}
                            pageSizeOptions={[5, 10,15,20]}
                            checkboxSelection
                        />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Expressjspage