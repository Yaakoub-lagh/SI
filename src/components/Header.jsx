import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({title}) => {
    return (
        <div className='Header'>
                <div className="title">
                    Mes {title}
                </div>
                <Link to={`/add${title}`} className="button add">
                    Ajouter {title}
                </Link>
        </div>
    );
}

export default Header;
