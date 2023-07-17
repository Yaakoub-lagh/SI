import { TextField } from "@mui/material";
import Sidebar from "../components/Sidebar";

const AddContact = () => {
    return (
        <div className="app">
      <Sidebar />
      <div className="content">
        <div className='addContact'>
            <form>
                <div className="title">
                    Ajouter un Contact
                </div>
                <div className="form">
                    <TextField className="input" label="Compte" variant="standard" />
                    <TextField className="input" label="Nom" variant="standard" />
                    <TextField className="input" label="Prenom" variant="standard" />
                    <TextField className="input" label="Fonction" variant="standard" />
                    <TextField className="input" label="telephone" variant="standard" />
                    <TextField className="input" label="email" variant="standard" />
                    <TextField className="input" label="adresse" variant="standard" />



                </div>
                <div className="button submit">Ajouter</div>
            </form>
        </div>
        
      </div>
    </div>
    );
}

export default AddContact;