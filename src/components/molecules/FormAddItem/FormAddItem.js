import React, { useContext, useState } from 'react';
import { PageContext } from '../../../context/PageContext';
import { ThemeContext } from '../../../context/ThemeContext';
import Heading from '../../atoms/Heading/Heading';
import Input from '../../atoms/Input/Input';
import styles from './FormAddItem.module.scss'
import Button from '../../atoms/Button/Button'
import { addItem } from '../../../store/actions';
import {connect} from 'react-redux'

const FormAddItem = ({visiblility, addItem, setFormOpened}) => {

  const [formTitle, setFormTitle] = useState('');
  const [formTwitterName, setFormTwitterName] = useState('');
  const [formArticleUrl, setFormArticleUrl] = useState('')
  const [formMessage, setFormMessage] = useState('')

  const {colorTheme} = useContext(ThemeContext)
  const { pageType } = useContext(PageContext)

  const styleForVisibility = {
    transform: 'translateX(0%)',
    borderLeft: `10px solid ${colorTheme}`
  }
  const styleForNotVisibility = {
    transform: 'translateX(100%)',
  }

  const handleSubmit = e => {
    e.preventDefault();

    const formValues = {
      title: formTitle,
      content: formMessage,
      twitterName: formTwitterName,
      articleUrl: formArticleUrl
    }

    addItem(pageType, formValues);

    setFormTitle('')
    setFormTwitterName('')
    setFormArticleUrl('')
    setFormMessage('')

    setFormOpened(false)
  }

  return ( 
    <div style={visiblility ? styleForVisibility : styleForNotVisibility} className={styles.outsideForm}>
      <Heading>Create new {pageType}</Heading>
      <form onSubmit={handleSubmit}>
        <div className={styles.inside}>
          <Input value={formTitle} onChange={e => setFormTitle(e.target.value)} placeholder='title' />
          { pageType === 'twitters' && 
          <Input value={formTwitterName} onChange={e => setFormTwitterName(e.target.value)} placeholder='twitter account name' />
          }
          { pageType === 'articles' && <Input value={formArticleUrl} onChange={e => setFormArticleUrl(e.target.value)} placeholder='link to article'   />
          }
          <Input isMessage placeholder='description' value={formMessage} onChange={e => setFormMessage(e.target.value)} />
        </div>
        <Button type='submit'>Add Item</Button>
      </form>
    </div>
   );
}

const mapDispatchToProps = dispatch => ({
  addItem: (itemType, itemContent) => dispatch(addItem(itemType, itemContent)) 
})

const FormAddItemConsumer = connect(null, mapDispatchToProps)(FormAddItem)
 
export default FormAddItemConsumer;
