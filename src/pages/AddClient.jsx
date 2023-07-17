import { MenuItem, TextField } from '@mui/material';
import React from 'react';
import Sidebar from '../components/Sidebar';


const status = [
    {
        value : "1",
        label : "Client"
    },
    {
        value : "2",
        label : "Procpect"
    },
]

const villes = [
    {
        value : "1",
        label : "Rabat"
    },
    {
        value : "2",
        label : "Casablanca"
    },
]

const pays = [
    {
        value : "1",
        label : "Maroc"
    },
    {
        value : "2",
        label : "USA"
    },
]

 const comm = [
    {
        value : "1",
        label : "Comm1"
    },
    {
        value : "2",
        label : "Comm2"
    },
 ]

const AddClient = () => {
    return (
        <div className="app">
      <Sidebar />
      <div className="content">
        <div className='addClient'>
            <form>
                <div className="title">
                    Ajouter un Client
                </div>
                <div className="form">
                <div className="form__row">
                <TextField className="input" label="Id_Sage" variant="standard" />
                <TextField className="input" label="Nom" variant="standard" />
                </div>
                    <div className="form__row">
                    <TextField className="input" label="Adresse" variant="standard" />
                    <TextField className="input" label="Telephone" variant="standard" />
                    </div>
                    <TextField
                        size='small'
                        select
                        className='input'
                        label="Status"
                        >
                        {status.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                            {option.label}
                            </MenuItem>
                        ))}
                        </TextField>
                        <TextField
                        size='small'
                        select
                        className='input'
                        label="Pays"
                        >
                        {pays.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                            {option.label}
                            </MenuItem>
                        ))}
                        </TextField>
                        <TextField
                        size='small'
                        select
                        className='input'
                        label="Ville"
                        >
                        {villes.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                            {option.label}
                            </MenuItem>
                        ))}
                        </TextField>
                        <TextField
                        size='small'
                        select
                        className='input'
                        label="Commercial"
                        >
                        {comm.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                            {option.label}
                            </MenuItem>
                        ))}
                        </TextField>
                </div>
                <div className="button submit">Ajouter</div>
            </form>
        </div>
        
      </div>
    </div>
    );
}

export default AddClient;
