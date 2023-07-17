import React, { useState } from 'react';
import { DataGrid ,frFR } from '@mui/x-data-grid';
import Sidebar from '../components/Sidebar';



  
const rows = [
    {
        id:'sage1', 
        client: "John",
        contact:"doe",
        add:"Commercial",
        ville:"Maroc",
        version :'v-26',
        
    },
    {
        id:'sage1', 
        client: "John",
        contact:"doe",
        add:"Commercial",
        ville:"Maroc",
        version :'v-26',
    },
    {
        id:'sage1', 
        client: "John",
        contact:"doe",
        add:"Commercial",
        ville:"Maroc",
        version :'v-26',
    },
    {
        id:'sage1', 
        client: "John",
        contact:"doe",
        add:"Commercial",
        ville:"Maroc",
        version :'v-26',
    },
    {
        id:'sage1', 
        client: "John",
        contact:"doe",
        add:"Commercial",
        ville:"Maroc",
        version :'v-26',
    },
    {
        id:'sage1', 
        client: "John",
        contact:"doe",
        add:"Commercial",
        ville:"Maroc",
        version :'v-26',
    },
    {
        id:'sage1', 
        client: "John",
        contact:"doe",
        add:"Commercial",
        ville:"Maroc",
        version :'v-26',
    },
    {
        id:'sage1', 
        client: "John",
        contact:"doe",
        add:"Commercial",
        ville:"Maroc",
        version :'v-26',
    },
    {
        id:'sage1', 
        client: "John",
        contact:"doe",
        add:"Commercial",
        ville:"Maroc",
        version :'v-26',
    },
    {
        id:'sage1', 
        client: "John",
        contact:"doe",
        add:"Commercial",
        ville:"Maroc",
        version :'v-26',
    },
    {
        id:'sage1', 
        client: "John",
        contact:"doe",
        add:"Commercial",
        ville:"Maroc",
        version :'v-26',
    },
    {
        id:'sage1', 
        client: "John",
        contact:"doe",
        add:"addX",
        ville:"Maroc",
        version :'v-26',
    },
    {
        id:'1', 
        client: "John",
        contact:"doe",
        add:"addX",
        ville:"Maroc",
        version :'v-26',
    },
    {
        id:'1', 
        client: "John",
        contact:"doe",
        add:"addX",
        ville:"Maroc",
        version :'v-26',
    },
   

    
  ];


const Commercial = () => {
    const columns = [
        { field: 'id', headerName: 'Id', width: 100 },
        { field: 'client', headerName: 'Compte', width: 120 },
        { field: 'contact',headerName: 'Contact',width: 120},
        { field: 'add',headerName: 'Adresse',width: 120},
        { field: 'ville',headerName: 'Ville',width: 120},
        { field: 'version', headerName: 'Version de la lettre', width: 150 },
        
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

export default Commercial;
