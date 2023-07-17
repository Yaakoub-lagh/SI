import React, { useState } from 'react';
import { DataGrid ,frFR } from '@mui/x-data-grid';
import Sidebar from '../components/Sidebar';
import DeleteIcon from '@mui/icons-material/Delete';
import CreateIcon from '@mui/icons-material/Create';
import { Checkbox, ToggleButton } from '@mui/material';
import { Favorite, FavoriteBorder } from '@mui/icons-material';
import MailIcon from '@mui/icons-material/Mail';
import MarkEmailReadIcon from '@mui/icons-material/MarkEmailRead';



  
const rows = [
    {
        id:'sage1', 
        client: "John",
        contact:"doe",
        add:"Commercial",
        ville:"Maroc",
        version :'Doe',
        
    },
    {
        id:'sage1', 
        client: "John",
        contact:"doe",
        add:"Commercial",
        ville:"Maroc",
        version :'Doe',
    },
    {
        id:'sage1', 
        client: "John",
        contact:"doe",
        add:"Commercial",
        ville:"Maroc",
        version :'Doe',
    },
    {
        id:'sage1', 
        client: "John",
        contact:"doe",
        add:"Commercial",
        ville:"Maroc",
        version :'Doe',
    },
    {
        id:'sage1', 
        client: "John",
        contact:"doe",
        add:"Commercial",
        ville:"Maroc",
        version :'Doe',
    },
    {
        id:'sage1', 
        client: "John",
        contact:"doe",
        add:"Commercial",
        ville:"Maroc",
        version :'Doe',
    },
    {
        id:'sage1', 
        client: "John",
        contact:"doe",
        add:"Commercial",
        ville:"Maroc",
        version :'Doe',
    },
    {
        id:'sage1', 
        client: "John",
        contact:"doe",
        add:"Commercial",
        ville:"Maroc",
        version :'Doe',
    },
    {
        id:'sage1', 
        client: "John",
        contact:"doe",
        add:"Commercial",
        ville:"Maroc",
        version :'Doe',
    },
    {
        id:'sage1', 
        client: "John",
        contact:"doe",
        add:"Commercial",
        ville:"Maroc",
        version :'Doe',
    },
    {
        id:'sage1', 
        client: "John",
        contact:"doe",
        add:"Commercial",
        ville:"Maroc",
        version :'Doe',
    },
    {
        id:'sage1', 
        client: "John",
        contact:"doe",
        add:"Commercial",
        ville:"Maroc",
        version :'Doe',
    },
    {
        id:'sage1', 
        client: "John",
        contact:"doe",
        add:"Commercial",
        ville:"Maroc",
        version :'Doe',
    },
    {
        id:'sage1', 
        client: "John",
        contact:"doe",
        add:"Commercial",
        ville:"Maroc",
        version :'Doe',
    },
    {
        id:'sage1', 
        client: "John",
        contact:"doe",
        add:"Commercial",
        ville:"Maroc",
        version :'Doe',
    },
    {
        id:'sage1', 
        client: "John",
        contact:"doe",
        add:"Commercial",
        ville:"Maroc",
        version :'Doe',
    },

    
  ];


const Livreur = () => {
    const [selected, setSelected] = useState(false);
    const columns = [
        { field: 'id', headerName: 'ID', width: 100 },
        { field: 'client', headerName: 'Nom Client', width: 120 },
        { field: 'contact',headerName: 'Contact',width: 120},
        { field: 'add',headerName: 'Adresse',width: 120},
        { field: 'ville',headerName: 'Ville',width: 120},
        { field: 'version', headerName: 'Version', width: 120 },
        {
            field : 'action',
            headerName:'Etat',
            width : 130,
            sortable: false,
            renderCell :(params)=>{
                return(
                    <div className="action">
                        <Checkbox icon={<MailIcon />} checkedIcon={<MarkEmailReadIcon />} />
                    
                    </div>
                )
            }
        }
      ];
    return (
        <div className="app">
            <Sidebar />
            <div className="content">       
                <div className='Client'>
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

export default Livreur;
