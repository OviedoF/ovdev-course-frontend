import styles from './Navbar.module.scss';
import { faHouse, faList, faUserAltSlash, faUser, faBarsProgress } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {useSelector, useDispatch} from 'react-redux';
import { logout } from '../../actions/auth.actions';
import Link from 'next/link';
import React from 'react';
import { activeScreen, desactiveScreen } from '../../actions/screensActive.actions';
import { useRouter } from 'next/router';

const Navbar = () => {
    const auth = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const router = useRouter();

    const handleLogout = () => {
        dispatch( logout() );
        localStorage.removeItem('x-access');
        dispatch( desactiveScreen('successMessage') );
        dispatch( activeScreen('errorMessage', 'Te has desconectado, por favor vuelve a ingresar.') );
        router.push('/');
    }

    return ( 
        <nav className={styles.nav}>
            <ul>
                <li>
                    <Link href={'/'}>
                        <div className="">
                            <FontAwesomeIcon icon={faHouse} style={{marginRight: "10px", height: "18px"}}/> 
                            <p>Inicio</p>
                        </div>
                    </Link>
                </li>

                { auth.user 
                    ?  
                    <li onClick={(e) => handleLogout()}>
                        <FontAwesomeIcon 
                        icon={faUserAltSlash} 
                        style={{marginRight: "10px", height: "18px"}} 
                        /> 
                            <p>Desconectarse</p>
                    </li>
                    :  
                    <li><FontAwesomeIcon 
                        icon={faUser} 
                        style={{marginRight: "10px", height: "18px"}} 
                    /> <p>Conectarse</p></li>
                }

                {
                    auth && auth.roles.includes('admin')
                    ? 
                    <li>
                        <Link href={'/admin'}>
                            <div className={styles.admin_nav_button}>
                            <FontAwesomeIcon icon={faBarsProgress} style={{marginRight: "10px", height: "18px"}}/> 
                            <p>Admin</p>
                            </div>
                        </Link>
                    </li>

                    :
                    ''
                }
                
            </ul>
        </nav> 
    );
}
 
export default Navbar;