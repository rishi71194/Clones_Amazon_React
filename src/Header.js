import React from 'react';
import './css/Header.css';
import SearchIcon from '@mui/icons-material/Search';
import { ShoppingBasket } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';

export default function Header() {

    const  [{ basket }, dispatch] = useStateValue();

    return (
        <div className='header'>
            <Link to="/">
                <img
                className="header__logo" 
                src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
                alt=""
                />
            </Link>

            <div className="header__search">
                <input
                className="header__searchInput" type="text" />
                <SearchIcon className="header__searchIcon" />
            </div>

            <div className="header__nav">
            <Link to="/login">
                <div className="header__option">
                    <span className="header__optionLine1">Hello Rishi</span>
                    <span className="header__optionLine2">Sign In</span>
                </div>
                </Link>
                <div className="header__option">
                    <span className="header__optionLine1">Returns</span>
                    <span className="header__optionLine2">& Orders</span>
                </div>
                <div className="header__option">
                    <span className="header__optionLine1">Your</span>
                    <span className="header__optionLine2">Prime</span>
                </div>
                <Link to="/checkout">
                    <div className="header__optionBasket">
                        <ShoppingBasket />
                        <span className="header__optionLine2 header__basketCount">{basket?.length}</span>
                    </div>
                </Link>
            </div>              
        </div>
    )
};

 