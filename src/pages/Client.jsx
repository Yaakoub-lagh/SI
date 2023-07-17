import React from 'react';
import { DataGrid ,frFR } from '@mui/x-data-grid';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import DeleteIcon from '@mui/icons-material/Delete';
import CreateIcon from '@mui/icons-material/Create';

const columns = [
    { field: 'id', headerName: 'Id_Sage', width: 100 },
    { field: 'firstName', headerName: 'Nom Client', width: 120 },
    { field: 'addr',headerName: 'Adresse',width: 120},
    { field: 'commercial',headerName: 'Commercial',width: 120},
    { field: 'pays',headerName: 'Pays',width: 120},
    { field: 'ville', headerName: 'Ville', width: 120 },
    { field: 'type',headerName: 'Type',width: 120},
    { field: 'telephone',headerName: 'Telephone',width: 120},
    { field: 'status',headerName: 'Status', width: 110},
    {
        field : 'action',
        headerName:'Action',
        width : 120,
        sortable: false,
        renderCell :(params)=>{
            return(
                <div className="action">
                    <div className="edit"><CreateIcon /></div>
                    <div className="delete"><DeleteIcon /></div>
                </div>
            )
        }
    }
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

  
  

const Client = () => {
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
                            paginationModel: { page: 0, pageSize: 5 },
                            },
                        }}
                        pageSizeOptions={[10,30]}
                        disableRowSelectionOnClick
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Client;
