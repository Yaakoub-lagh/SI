import React from 'react';
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from 'react-router-dom';
import Logo from '../stylesheet/img/logo.png'

const menu_list=[
    {
        name:"Gestion Client",
        link :"/client",
    },
    {
        name:"Gestion Contact",
        link :"/contact",
    },
    {
        name:"Gestion Lettre",
        link :"/Letter",
    },
    {
        name:"Livreur",
        link :"/livreur",
    },
    {
        name:"Commerciale",
        link :"/comercial",
    },
    
    
]


const Sidebar = () => {
    return (
        <div className='Sidebar'>
            <div className="leftside">
                <div className="menu">
                <div className="logo">
                    <img src={Logo} alt="" />
                </div>
                <ul>
                    {
                        menu_list?.map((list,index)=>(
                            <li><a href={list.link}>{list.name}</a></li>
                        ))
                    }
                </ul>
                </div>
                <Link to={"/login"} className="account">
                    <LogoutIcon />
                </Link>
 
            </div>
        </div>
    );
}

export default Sidebar;
