import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasket from '@material-ui/icons/ShoppingBasket';
import {useStateValue} from './StateProvider'; 

function Header() {
    const [{ basket }] = useStateValue();
    console.log(basket);
    return (
        <nav className="header">

            {/* Logo */}
            <Link to="/login">
                <img className="header_logo"
                    src="data:image/png;base64,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"
                    alt="amazon" />
            </Link>

            {/* Search bar */}
            <div className="header_search">
                <input type="text" className="header_searchInput" />
                <SearchIcon className="header_searchIcon" />
            </div>

            {/* Links */}
            <div className = "header_nav">

                <Link to="/login" className="header_link">
                    <div className = "header_option">
                        <span className="header_optionLineOne">Hello</span>
                        <span className="header_optionLineTwo">SignIn</span>
                    </div>
                </Link>

                <Link to="/checkout" className="header_link">
                    <div className = "header_optionBasket">
                        <ShoppingBasket />
                        <span className="header_optionLineTwo header_basketCount">{basket?.length}</span>
                    </div>
                </Link>
            </div>

        </nav>
    )
}

export default Header
