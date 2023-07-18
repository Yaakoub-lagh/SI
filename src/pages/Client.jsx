import React from 'react';
// import { DataGrid ,frFR } from '@mui/x-data-grid';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import { MenuItem, TextField } from '@mui/material';
// import DeleteIcon from '@mui/icons-material/Delete';
// import CreateIcon from '@mui/icons-material/Create';

import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

// const columns = [
//     { field: 'id', headerName: 'Id_Sage', width: 100 },
//     { field: 'firstName', headerName: 'Nom Client', width: 120 },
//     { field: 'addr',headerName: 'Adresse',width: 120},
//     { field: 'commercial',headerName: 'Commercial',width: 120},
//     { field: 'pays',headerName: 'Pays',width: 120},
//     { field: 'ville', headerName: 'Ville', width: 120 },
//     { field: 'type',headerName: 'Type',width: 120},
//     { field: 'telephone',headerName: 'Telephone',width: 120},
//     { field: 'status',headerName: 'Status', width: 110},
//     {
//         field : 'action',
//         headerName:'Action',
//         width : 120,
//         sortable: false,
//         renderCell :(params)=>{
//             return(
//                 <div className="action">
//                     <div className="edit"><CreateIcon /></div>
//                     <div className="delete"><DeleteIcon /></div>
//                 </div>
//             )
//         }
//     }
//   ];

  
// const rows = [
//     {
//         id:'sage1', 
//         firstName: "John",
//         addr:"doe",
//         commercial:"Commercial",
//         pays:"Maroc",
//         ville :'Doe',
//         type:"Masse ",
//         telephone:"000",
//         status :"client",
        
//     },
//     {
//         id:'sage1', 
//         firstName: "John",
//         addr:"doe",
//         commercial:"Commercial",
//         pays:"Maroc",
//         ville :'Doe',
//         type:"Masse ",
//         telephone:"000",
//         status :"client",
//     },
//     {
//         id:'sage1', 
//         firstName: "John",
//         addr:"doe",
//         commercial:"Commercial",
//         pays:"Maroc",
//         ville :'Doe',
//         type:"Masse ",
//         telephone:"000",
//         status :"client",
//     },
//     {
//         id:'sage1', 
//         firstName: "John",
//         addr:"doe",
//         commercial:"Commercial",
//         pays:"Maroc",
//         ville :'Doe',
//         type:"Masse ",
//         telephone:"000",
//         status :"client",
//     },
//     {
//         id:'sage1', 
//         firstName: "John",
//         addr:"doe",
//         commercial:"Commercial",
//         pays:"Maroc",
//         ville :'Doe',
//         type:"Masse ",
//         telephone:"000",
//         status :"client",
//     },
//     {
//         id:'sage1', 
//         firstName: "John",
//         addr:"doe",
//         commercial:"Commercial",
//         pays:"Maroc",
//         ville :'Doe',
//         type:"Masse ",
//         telephone:"000",
//         status :"client",
//     },
//     {
//         id:'sage1', 
//         firstName: "John",
//         addr:"doe",
//         commercial:"Commercial",
//         pays:"Maroc",
//         ville :'Doe',
//         type:"Masse ",
//         telephone:"000",
//         status :"client",
//     },
//     {
//         id:'sage1', 
//         firstName: "John",
//         addr:"doe",
//         commercial:"Commercial",
//         pays:"Maroc",
//         ville :'Doe',
//         type:"Masse ",
//         telephone:"000",
//         status :"client",
//     },
//     {
//         id:'sage1', 
//         firstName: "John",
//         addr:"doe",
//         commercial:"Commercial",
//         pays:"Maroc",
//         ville :'Doe',
//         type:"Masse ",
//         telephone:"000",
//         status :"client",
//     },
//     {
//         id:'sage1', 
//         firstName: "John",
//         addr:"doe",
//         commercial:"Commercial",
//         pays:"Maroc",
//         ville :'Doe',
//         type:"Masse ",
//         telephone:"000",
//         status :"client",
//     },
//     {
//         id:'sage1', 
//         firstName: "John",
//         addr:"doe",
//         commercial:"Commercial",
//         pays:"Maroc",
//         ville :'Doe',
//         type:"Masse ",
//         telephone:"000",
//         status :"client",
//     },
//     {
//         id:'sage1', 
//         firstName: "John",
//         addr:"doe",
//         commercial:"Commercial",
//         pays:"Maroc",
//         ville :'Doe',
//         type:"Masse ",
//         telephone:"000",
//         status :"client",
//     },
//     {
//         id:'sage1', 
//         firstName: "John",
//         addr:"doe",
//         commercial:"Commercial",
//         pays:"Maroc",
//         ville :'Doe',
//         type:"Masse ",
//         telephone:"000",
//         status :"client",
//     },
//     {
//         id:'sage1', 
//         firstName: "John",
//         addr:"doe",
//         commercial:"Commercial",
//         pays:"Maroc",
//         ville :'Doe',
//         type:"Masse ",
//         telephone:"000",
//         status :"client",
//     },
//     {
//         id:'sage1', 
//         firstName: "John",
//         addr:"doe",
//         commercial:"Commercial",
//         pays:"Maroc",
//         ville :'Doe',
//         type:"Masse ",
//         telephone:"000",
//         status :"client",
//     },
//     {
//         id:'sage1', 
//         firstName: "John",
//         addr:"doe",
//         commercial:"Commercial",
//         pays:"Maroc",
//         ville :'Doe',
//         type:"Masse ",
//         telephone:"000",
//         status :"client",
//     },

    
//   ];



  function createData(id_sage,
    nom,
    address,
    pays,
    ville,
    commercial,
    phone,
    status,
    type) {
    return {
      id_sage,
      nom,
      address,
      pays,
      ville,
      commercial,
      phone,
      status,
      type,
      contact: [
        {
          nom: 'Yakob',
          prenom: 'Laghdache',
          fonction: "fonctnio",
          phone :"0645454545",
          version : '1.0',
          date : '2020-01-05'
        },
      ],
    };
  }
  
  function Row(props) {
    const { row } = props;
    const [open, setOpen] = React.useState(false);
  
    return (
      <React.Fragment>
        <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
          <TableCell>
            <IconButton
              aria-label="expand row"
              size="small"
              onClick={() => setOpen(!open)}
            >
              {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
          </TableCell>
          <TableCell>{row.id_sage}</TableCell>
          <TableCell>{row.nom}</TableCell>
          <TableCell>{row.address}</TableCell>
          <TableCell>{row.pays}</TableCell>
          <TableCell>{row.ville}</TableCell>
          <TableCell>{row.commercial}</TableCell>
          <TableCell>{row.phone}</TableCell>
          <TableCell>{row.status}</TableCell>
          <TableCell>{row.type}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Box sx={{ margin: 1 }}>
                <Typography variant="h6" gutterBottom component="div">
                  Contact
                </Typography>
                <Table size="small" aria-label="purchases">
                  <TableHead>
                    <TableRow>
                      <TableCell>Nom</TableCell>
                      <TableCell>Prenom</TableCell>
                      <TableCell>Fonction</TableCell>
                      <TableCell>Telephone</TableCell>
                      <TableCell>Version</TableCell>
                      <TableCell>Date Livraison</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {row.contact.map((historyRow) => (
                      <TableRow key={historyRow.date}>
                        <TableCell component="th" scope="row">
                          {historyRow.nom}
                        </TableCell>
                        <TableCell>{historyRow.prenom}</TableCell>
                        <TableCell align="right">{historyRow.fonction}</TableCell>
                        <TableCell align="right">
                          {historyRow.phone}
                        </TableCell>
                        <TableCell align="right">
                          {historyRow.version}
                        </TableCell>
                        <TableCell align="right">
                          {historyRow.date}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Box>
            </Collapse>
          </TableCell>
        </TableRow>
      </React.Fragment>
    );
  }
  
  Row.propTypes = {
    row: PropTypes.shape({
      id_sage: PropTypes.number.isRequired,
      nom: PropTypes.string.isRequired,
      address: PropTypes.string.isRequired,
      pays: PropTypes.string.isRequired,
      ville: PropTypes.string.isRequired,
      commercial: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      contact: PropTypes.arrayOf(
        PropTypes.shape({
            nom: PropTypes.string.isRequired,
            prenom: PropTypes.string.isRequired,
            fonction: PropTypes.string.isRequired,
            phone: PropTypes.string.isRequired,
            version: PropTypes.string.isRequired,
            date: PropTypes.string.isRequired,
        }),
      ).isRequired,
    }).isRequired,
  };
  
  const rows = [
    createData(1,'Yakob','Adr1','Maroc','Casa','Yakob','000','Sub','Masse'),
    createData(1,'Yakob','Adr1','Maroc','Casa','Yakob','000','Sub','Masse'),
    createData(1,'Yakob','Adr1','Maroc','Casa','Yakob','000','Sub','Masse'),
    createData(1,'Yakob','Adr1','Maroc','Casa','Yakob','000','Sub','Masse'),
    createData(1,'Yakob','Adr1','Maroc','Casa','Yakob','000','Sub','Masse'),
    createData(1,'Yakob','Adr1','Maroc','Casa','Yakob','000','Sub','Masse'),
  ];

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
  
  

const Client = () => {
    return (
        <div className="app">
            <Sidebar />
            <div className="content">       
                <div className='Client'>
                    <Header title={"Client"} />
                    <div className="filters">
                        <div className="title">
                            Filters
                        </div>
                        <div className="filter">
                            <TextField className="input" label="Id_Sage" variant="standard" />
                            <TextField className="input" label="Nom" variant="standard" />
                    <TextField className="input" label="Adresse" variant="standard" />
                    <TextField className="input" label="Telephone" variant="standard" />
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
                    </div>
                    <div className="datagrid">
                    <TableContainer component={Paper}>
          <Table aria-label="collapsible table">
            <TableHead>
              <TableRow>
                <TableCell />
                <TableCell>id_sage</TableCell>
                <TableCell>nom</TableCell>
                <TableCell>address</TableCell>
                <TableCell>pays</TableCell>
                <TableCell>ville</TableCell>
                <TableCell>commercial</TableCell>
                <TableCell>phone</TableCell>
                <TableCell>status</TableCell>
                <TableCell>type</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <Row key={row.name} row={row} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Client;
