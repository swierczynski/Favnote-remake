import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import ButtonIcon from '../../atoms/ButtonIcon/ButtonIcon';
import bulbIcon from '../../../assets/icons/bulb.svg'
import penIcon from '../../../assets/icons/pen.svg'
import twitterIcon from '../../../assets/icons/twitter.svg';
import logoutIcon from '../../../assets/icons/logout.svg';
import styles from './Sidebar.module.scss';
import { routes } from '../../../routes';
import { ThemeContext } from '../../../context/ThemeContext';
import logo from '../../../assets/icons/logo.svg'
import { PageContext } from '../../../context/PageContext';

const Sidebar = () => {

  const {colorTheme} = useContext(ThemeContext);
  const { pageType } = useContext(PageContext)


  const styleForNavigation = {
    backgroundColor: colorTheme
  }
  

  return ( 
    <nav style={styleForNavigation} className={styles.sidebar}>
      <ul className={styles.imageLogo}>
        <li>
        <NavLink activeClassName={styles.active} to={routes.home}>
          <img src={logo} alt="Favnote logo"/>
        </NavLink>
        </li>
      </ul>
      <ul className={styles.listMainIcons}>
        <li>
          <NavLink activeClassName={styles.active} to={routes.notes}>
            <ButtonIcon icon={penIcon} />
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName={styles.active} to={routes.twitters}>
            <ButtonIcon icon={twitterIcon} />
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName={styles.active} to={routes.articles}>
            <ButtonIcon icon={bulbIcon} />
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName={styles.active} to={routes.login}>
            <ButtonIcon icon={logoutIcon} />
          </NavLink>
        </li>
      </ul>
    </nav>
   );
}
 
export default Sidebar;