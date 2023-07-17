import React from 'react';
import { DataGrid ,frFR } from '@mui/x-data-grid';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import DeleteIcon from '@mui/icons-material/Delete';
import CreateIcon from '@mui/icons-material/Create';

const columns = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'compte', headerName: 'Nom Compte', width: 120 },
    { field: 'nom', headerName: 'Nom', width: 120 },
    { field: 'prenom',headerName: 'Prenom',width: 120},
    { field: 'fonction',headerName: 'Fonction',width: 120},
    { field: 'telephone',headerName: 'Telephone',width: 120},
    { field: 'email',headerName: 'Email',width: 120},
    { field: 'adresse',headerName: 'Adresse', width: 110},
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
        id:'1',
        compte:'sage1', 
        nom: "John", 
        prenom :'Doe',
        fonction:"doe",
        telephone:"Masse ;)",
        pays:"Maroc",
        email:"Commercial",
        adresse :"Actif",
    },
    {
        id:'1',
        compte:'sage1', 
        nom: "John", 
        prenom :'Doe',
        fonction:"doe",
        telephone:"Masse ;)",
        pays:"Maroc",
        email:"Commercial",
        adresse :"Actif",
    },
    {
        id:'1',
        compte:'sage1', 
        nom: "John", 
        prenom :'Doe',
        fonction:"doe",
        telephone:"Masse ;)",
        pays:"Maroc",
        email:"Commercial",
        adresse :"Actif",
    },
    {
        id:'1',
        compte:'sage1', 
        nom: "John", 
        prenom :'Doe',
        fonction:"doe",
        telephone:"Masse ;)",
        pays:"Maroc",
        email:"Commercial",
        adresse :"Actif",
    },
    {
        id:'1',
        compte:'sage1', 
        nom: "John", 
        prenom :'Doe',
        fonction:"doe",
        telephone:"Masse ;)",
        pays:"Maroc",
        email:"Commercial",
        adresse :"Actif",
    },
    {
        id:'1',
        compte:'sage1', 
        nom: "John", 
        prenom :'Doe',
        fonction:"doe",
        telephone:"Masse ;)",
        pays:"Maroc",
        email:"Commercial",
        adresse :"Actif",
    },
    {
        id:'1',
        compte:'sage1', 
        nom: "John", 
        prenom :'Doe',
        fonction:"doe",
        telephone:"Masse ;)",
        pays:"Maroc",
        email:"Commercial",
        adresse :"Actif",
    },
    {
        id:'1',
        compte:'sage1', 
        nom: "John", 
        prenom :'Doe',
        fonction:"doe",
        telephone:"Masse ;)",
        pays:"Maroc",
        email:"Commercial",
        adresse :"Actif",
    },
    {
        id:'1',
        compte:'sage1', 
        nom: "John", 
        prenom :'Doe',
        fonction:"doe",
        telephone:"Masse ;)",
        pays:"Maroc",
        email:"Commercial",
        adresse :"Actif",
    },
    {
        id:'1',
        compte:'sage1', 
        nom: "John", 
        prenom :'Doe',
        fonction:"doe",
        telephone:"Masse ;)",
        pays:"Maroc",
        email:"Commercial",
        adresse :"Actif",
    },
    {
        id:'1',
        compte:'sage1', 
        nom: "John", 
        prenom :'Doe',
        fonction:"doe",
        telephone:"Masse ;)",
        pays:"Maroc",
        email:"Commercial",
        adresse :"Actif",
    },
    {
        id:'1',
        compte:'sage1', 
        nom: "John", 
        prenom :'Doe',
        fonction:"doe",
        telephone:"Masse ;)",
        pays:"Maroc",
        email:"Commercial",
        adresse :"Actif",
    },
    {
        id:'1',
        compte:'sage1', 
        nom: "John", 
        prenom :'Doe',
        fonction:"doe",
        telephone:"Masse ;)",
        pays:"Maroc",
        email:"Commercial",
        adresse :"Actif",
    },
    {
        id:'1',
        compte:'sage1', 
        nom: "John", 
        prenom :'Doe',
        fonction:"doe",
        telephone:"Masse ;)",
        pays:"Maroc",
        email:"Commercial",
        adresse :"Actif",
    },
    {
        id:'1',
        compte:'sage1', 
        nom: "John", 
        prenom :'Doe',
        fonction:"doe",
        telephone:"Masse ;)",
        pays:"Maroc",
        email:"Commercial",
        adresse :"Actif",
    },
    {
        id:'1',
        compte:'sage1', 
        nom: "John", 
        prenom :'Doe',
        fonction:"doe",
        telephone:"Masse ;)",
        pays:"Maroc",
        email:"Commercial",
        adresse :"Actif",
    },

    
  ];

  
  

const Contact = () => {
    return (
        <div className="app">
        <Sidebar />
        <div className="content">
            
            <div className='Contact'>
                <Header title={"Contact"} />
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
                    disableRowSelectionOnClick
                    />
                </div>
            </div>
        </div>
    </div>
    );
}

export default Contact;
