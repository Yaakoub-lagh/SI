import { MenuItem, TextField } from '@mui/material';
import React from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Sidebar from '../components/Sidebar';




const AddLettre = () => {
    return (
        <div className="app">
      <Sidebar />
      <div className="content">
        
        <div className='addClient'>
            <form>
                <div className="title">
                    Ajouter une Lettre
                </div>
                <div className="form">
                    <TextField className="input" label="Version" variant="standard" />
                    <TextField className="input" label="Trimestre" variant="standard" />
                    <div className="form__row">
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DemoContainer components={['DatePicker']}>
                            <DatePicker label="Date de Sortie" />
                        </DemoContainer>
                    </LocalizationProvider>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DemoContainer components={['DatePicker']}>
                            <DatePicker  label="Date de debut de la Livraison" />
                        </DemoContainer>
                    </LocalizationProvider>
                    </div>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DemoContainer components={['DatePicker']}>
                            <DatePicker  label="Date de fin de livraison" />
                        </DemoContainer>
                    </LocalizationProvider>
                </div>
                <div className="button submit">Ajouter</div>
            </form>
        </div>
      </div>
    </div>
    );
}

export default AddLettre;
