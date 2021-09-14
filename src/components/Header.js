import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./Firebase";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };

  console.log(basket);

  return (
    <nav className='header'>
      <Link to='/'>
        <img
          className='header_logo'
          src='https://pngimg.com/uploads/amazon/amazon_PNG11.png'
          alt='logo'
        />
      </Link>
      <div className='header_search'>
        <input type='text' className='header_searchInput' />
        <button>
          <i className='fas fa-search'></i>
        </button>
      </div>

      <div className='header_nav'>
        <Link to={!user && "/login"} className='header_link'>
          <div onClick={handleAuthentication} className='header_option'>
            <span className='header_optionLineOne'>Hello Guest</span>
            <span className='header_optionLineTwo'>
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>

        <Link to='/checkout' className='header_link'>
          <div className='header_option'>
            <span className='header_optionLineOne'>Returns</span>
            <span className='header_optionLineTwo'>& Orders</span>
          </div>
        </Link>

        <Link to='/login' className='header_link'>
          <div className='header_option'>
            <span className='header_optionLineOne'>Your</span>
            <span className='header_optionLineTwo'>Prime</span>
          </div>
        </Link>

        <Link to='/checkout' className='header_link'>
          <div className='header_optionBasket'>
            <span>
              <i className='fas fa-shopping-cart'></i>
            </span>
            <span
              className='header_optionLineTwo header_basketCount'
              style={{
                marginTop: "-1.3rem",
                fontSize: "15px",
                marginLeft: "6px",
              }}
            >
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default Header;
