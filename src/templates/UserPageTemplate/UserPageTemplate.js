import React from 'react';
import AddItemBar from '../../components/organisms/AddItemBar/AddItemBar';
import Sidebar from '../../components/organisms/Sidebar/Sidebar';
import styles from './UserPageTemplate.module.scss'

const UserPageTemplate = ({children}) => {
  return ( 
    <div className={styles.main}>
      <div className={styles.sidebar}>
        <Sidebar />
      </div>
      <main className={styles.content}>
        {children}
      </main>
      <AddItemBar/>
    </div>
   );
}
 
export default UserPageTemplate;