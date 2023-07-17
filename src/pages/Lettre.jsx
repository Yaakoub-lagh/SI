import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import { DataGrid, GridCellModes } from '@mui/x-data-grid';
import {randomCreatedDate,randomTraderName,randomUpdatedDate,} from '@mui/x-data-grid-generator';




const columns = [
    { field: 'Version', headerName: 'Version', width: 120, editable: true },
    { field: 'trimestre', headerName: 'Trimestre', type: 'number',width: 130, editable: true },
    { field: 'sortie', headerName: 'Date de Sortie', width: 150, editable: true },
    { field: 'livrasion', headerName: 'Date de Livraison', width: 150, editable: true },
    { field: 'finlivrasion', headerName: 'Date de Fin de Livraison', width: 180, editable: true },
   
  ];
  
  const rows = [
    {
      id: 1,
      Version: "v-23",
      trimestre: 1,
      sortie: randomCreatedDate(),
      livrasion: randomCreatedDate(),
      finlivrasion: randomCreatedDate(),
    },
    {
        id: 2,
        Version: "v-23",
        trimestre: 1,
        sortie: randomCreatedDate(),
        livrasion: randomUpdatedDate(),
        finlivrasion: randomUpdatedDate(),
    },
    {
        id: 3,
        Version: "v-23",
        trimestre: 1,
        sortie: randomCreatedDate(),
        livrasion: randomUpdatedDate(),
        finlivrasion: randomUpdatedDate(),
    },
    {
        id: 4,
        Version: "v-23",
        trimestre: 1,
        sortie: randomCreatedDate(),
        livrasion: randomUpdatedDate(),
        finlivrasion: randomUpdatedDate(),
    },
    {
        id: 5,
        Version: "v-23",
        trimestre: 1,
        sortie: randomCreatedDate(),
        livrasion: randomUpdatedDate(),
        finlivrasion: randomUpdatedDate(),
    },
  ];
  
  export default function SingleClickEditing() {
    const [cellModesModel, setCellModesModel] = React.useState({});
  
    const handleCellClick = React.useCallback((params, event) => {
      if (!params.isEditable) {
        return;
      }
  
      // Ignore portal
      if (!event.currentTarget.contains(event.target)) {
        return;
      }
  
      setCellModesModel((prevModel) => {
        return {
            
          // Revert the mode of the other cells from other rows
          ...Object.keys(prevModel).reduce(
            (acc, id) => ({
              ...acc,
              [id]: Object.keys(prevModel[id]).reduce(
                (acc2, field) => ({
                  ...acc2,
                  [field]: { mode: GridCellModes.View },
                }),
                {},
              ),
            }),
            {},
          ),
          [params.id]: {
            // Revert the mode of other cells in the same row
            ...Object.keys(prevModel[params.id] || {}).reduce(
              (acc, field) => ({ ...acc, [field]: { mode: GridCellModes.View } }),
              {},
            ),
            [params.field]: { mode: GridCellModes.Edit },
          },
        };
      });
    }, []);
  
    const handleCellModesModelChange = React.useCallback((newModel) => {
      setCellModesModel(newModel);
    }, []);
  
    return (
        <div className="app">
            <Sidebar />
            <div className="content">
        <div className="Client">
        <Header title={"Lettre"}/>
        <div className='datagrid'>
        <DataGrid
          rows={rows}
          columns={columns}
          cellModesModel={cellModesModel}
          onCellModesModelChange={handleCellModesModelChange}
          onCellClick={handleCellClick}
        />
      </div>
        </div>
      </div>
      </div>
    );
  }

