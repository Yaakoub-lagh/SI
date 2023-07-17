import React from 'react';
import { DataGrid ,frFR } from '@mui/x-data-grid';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

const columns = [
    { field: 'id', headerName: 'ID_SAGE', width: 100 },
    { field: 'firstName', headerName: 'Nom Client', width: 120 },
    { field: 'addr',headerName: 'Adresse',width: 120},
    { field: 'commercial',headerName: 'Commercial',width: 120},
    { field: 'pays',headerName: 'Pays',width: 120},
    { field: 'ville', headerName: 'Ville', width: 120 },
    { field: 'type',headerName: 'Type',width: 120},
    { field: 'telephone',headerName: 'Telephone',width: 120},
    { field: 'status',headerName: 'Status', width: 110},
  ];

  
const rows = [
    {
        id:'sage1', 
        firstName: "John",
        addr:"doe",
        commercial:"Commercial",
        pays:"Maroc",
        ville :'Doe',
        type:"Masse ",
        telephone:"000",
        status :"client",
        
    },
    {
        id:'sage1', 
        firstName: "John",
        addr:"doe",
        commercial:"Commercial",
        pays:"Maroc",
        ville :'Doe',
        type:"Masse ",
        telephone:"000",
        status :"client",
    },
    {
        id:'sage1', 
        firstName: "John",
        addr:"doe",
        commercial:"Commercial",
        pays:"Maroc",
        ville :'Doe',
        type:"Masse ",
        telephone:"000",
        status :"client",
    },
    {
        id:'sage1', 
        firstName: "John",
        addr:"doe",
        commercial:"Commercial",
        pays:"Maroc",
        ville :'Doe',
        type:"Masse ",
        telephone:"000",
        status :"client",
    },
    {
        id:'sage1', 
        firstName: "John",
        addr:"doe",
        commercial:"Commercial",
        pays:"Maroc",
        ville :'Doe',
        type:"Masse ",
        telephone:"000",
        status :"client",
    },
    {
        id:'sage1', 
        firstName: "John",
        addr:"doe",
        commercial:"Commercial",
        pays:"Maroc",
        ville :'Doe',
        type:"Masse ",
        telephone:"000",
        status :"client",
    },
    {
        id:'sage1', 
        firstName: "John",
        addr:"doe",
        commercial:"Commercial",
        pays:"Maroc",
        ville :'Doe',
        type:"Masse ",
        telephone:"000",
        status :"client",
    },
    {
        id:'sage1', 
        firstName: "John",
        addr:"doe",
        commercial:"Commercial",
        pays:"Maroc",
        ville :'Doe',
        type:"Masse ",
        telephone:"000",
        status :"client",
    },
    {
        id:'sage1', 
        firstName: "John",
        addr:"doe",
        commercial:"Commercial",
        pays:"Maroc",
        ville :'Doe',
        type:"Masse ",
        telephone:"000",
        status :"client",
    },
    {
        id:'sage1', 
        firstName: "John",
        addr:"doe",
        commercial:"Commercial",
        pays:"Maroc",
        ville :'Doe',
        type:"Masse ",
        telephone:"000",
        status :"client",
    },
    {
        id:'sage1', 
        firstName: "John",
        addr:"doe",
        commercial:"Commercial",
        pays:"Maroc",
        ville :'Doe',
        type:"Masse ",
        telephone:"000",
        status :"client",
    },
    {
        id:'sage1', 
        firstName: "John",
        addr:"doe",
        commercial:"Commercial",
        pays:"Maroc",
        ville :'Doe',
        type:"Masse ",
        telephone:"000",
        status :"client",
    },
    {
        id:'sage1', 
        firstName: "John",
        addr:"doe",
        commercial:"Commercial",
        pays:"Maroc",
        ville :'Doe',
        type:"Masse ",
        telephone:"000",
        status :"client",
    },
    {
        id:'sage1', 
        firstName: "John",
        addr:"doe",
        commercial:"Commercial",
        pays:"Maroc",
        ville :'Doe',
        type:"Masse ",
        telephone:"000",
        status :"client",
    },
    {
        id:'sage1', 
        firstName: "John",
        addr:"doe",
        commercial:"Commercial",
        pays:"Maroc",
        ville :'Doe',
        type:"Masse ",
        telephone:"000",
        status :"client",
    },
    {
        id:'sage1', 
        firstName: "John",
        addr:"doe",
        commercial:"Commercial",
        pays:"Maroc",
        ville :'Doe',
        type:"Masse ",
        telephone:"000",
        status :"client",
    },

    
  ];

  
  

const Admin = () => {
    return (
        <div className="app">
            <Sidebar />
            <div className="content">       
                <div className='Client'>
                    <Header title={"Client"} />
                    <div className="datagrid">
                    <DataGrid
                        rows={rows}
                        columns={columns}
                        localeText={frFR.components.MuiDataGrid.defaultProps.localeText}
                        initialState={{
                            pagination: {
                            paginationModel: { page: 0, pageSize: 20 },
                            },
                        }}
                        pageSizeOptions={[20,30]}
                        checkboxSelection
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Admin;
