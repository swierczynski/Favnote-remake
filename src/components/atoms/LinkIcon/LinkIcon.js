import React, { useContext } from 'react';
import styles from './LinkIcon.module.scss'
import linkImg from '../../../assets/icons/link.svg';
import { ThemeContext } from '../../../context/ThemeContext';


const LinkIcon = ({link}) => {

  const { colorTheme } = useContext(ThemeContext)

  const styleForA = {
    backgroundImage: `url(${linkImg})`,
    border: `5px solid ${colorTheme}`
  }

  return ( 
    <a style={styleForA} className={styles.link} href={link}></a>
   );
}
 
export default LinkIcon;