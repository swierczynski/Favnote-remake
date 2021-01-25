import React, { useEffect, useState } from 'react';
import ButtonIcon from '../../atoms/ButtonIcon/ButtonIcon';
import plusIcon from '../../../assets/icons/plus.svg'
import styles from './AddItemBar.module.scss';
import FormAddItem from '../../molecules/FormAddItem/FormAddItem';

const AddItemBar = ({match}) => {

  const [formOpened, setFormOpened] = useState(false)


  useEffect(()=> {
    setFormOpened(false)
  },[match])


  return ( 
    <div className={styles.addItem}>
      <ButtonIcon addItemIcon={true} icon={plusIcon} onClick={()=> setFormOpened(prevValue => !prevValue)} />
      <FormAddItem visiblility={formOpened} setFormOpened={setFormOpened} />
    </div>
   );
}
 
export default AddItemBar;