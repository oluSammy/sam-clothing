import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import { auth } from '../../firebase/firebase.utils';
import {ReactComponent as Logo} from '../../assets/4.3 crown.svg.svg';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import {selectCartHidden} from '../../redux/cart/cart.selector';
import {selectCurrentUser} from '../../redux/user/user.selector';

import './header.styles.scss';

const Header = ({currentUser, hidden})=>{
    return(
        <div className="header">
            <Link to='/' className="Logo-container">
                <Logo className="lo"></Logo>
            </Link>
            <div className="options">
                <Link className="option" to='/shop'>SHOP</Link>
                <Link className="option" to='/contact'>CONTACT</Link>
                {
                    currentUser
                    ? <div className="option" onClick={()=>auth.signOut()}> SIGN OUT</div>
                    : <Link className="option" to="/signin">SIGN IN </Link>
                }
                <CartIcon/>
            </div>
            {
                hidden ? '' : <CartDropdown/>
            }
        </div>
    )
};

const mapStateToPropsFunction = createStructuredSelector({
        currentUser: selectCurrentUser,
        hidden: selectCartHidden
})

export default connect(mapStateToPropsFunction)(Header);