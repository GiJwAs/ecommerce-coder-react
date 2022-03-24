import Button from '@mui/material/Button';
import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'

function NavBar(props) {
    //console.log(props)
    return(
        //JSX
        <header className='main-header'>
            <div className='container-logo'>
            {<img src="https://www.camaronbrujo.com/skin/frontend/smartwave/camaron/images/logo-camaron-header.jpg" alt="Camarón Brujo"></img>}
            </div>
            <ul className='navbar'>
                <li><Button className="custom-btn" variant="contained">Home</Button></li>
                <li><Button variant="contained">Shortboards</Button></li>
                <li><Button variant="contained">Sups</Button></li>
                <li><Button variant="contained">Longboards</Button></li>
                <li><Button variant="contained">Accesorios</Button></li>
            </ul>
            <CartWidget />
        </header>
    )
}

export default NavBar