import React, { useContext, useState } from 'react';
import { PageContext } from '../../../context/PageContext';
import { ThemeContext } from '../../../context/ThemeContext';
import Avatar from '../../atoms/Avatar/Avatar';
import Button from '../../atoms/Button/Button';
import Heading from '../../atoms/Heading/Heading';
import LinkIcon from '../../atoms/LinkIcon/LinkIcon';
import Paragraph from '../../atoms/Paragraph/Paragraph';
import styles from './Card.module.scss';
import { removeItem } from '../../../store/actions';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

const Card = ({removeItem, id, content, title, twitterName, articleUrl}) => {

  const { pageType } = useContext(PageContext);
  const { colorTheme } = useContext(ThemeContext)

  const [redirect, setRedirect] = useState(false)

  const styleForHeading = {
    backgroundColor: colorTheme
  }

  const handleClick = () => {
    setRedirect(true)
  }

  if(redirect) {
    return <Redirect to={`${pageType}/${id}`} />
  }
  return ( 
    <div className={styles.outsideCard}>
      <div className={styles.cardWrapper}>
        <div className={styles.wrapperCardInside} onClick={handleClick}>
          <div style={styleForHeading} className={styles.heading} >
            <Heading card>{title}</Heading>
            {pageType === 'twitters' && <Avatar account={`https://unavatar.now.sh/${twitterName}`} /> }
            {pageType === 'articles' && <LinkIcon link={articleUrl} />}
          </div>
          <Paragraph>
            {content}
          </Paragraph>
        </div>
        <Button secandary={true} onClick={()=> removeItem(pageType, id)}>Remove</Button>
      </div>
    </div>
   );
}


const mapDispatchToProps = dispatch => ({
  removeItem: (itemType, id) => dispatch(removeItem(itemType, id))
})

const CardConsumer = connect(null, mapDispatchToProps)(Card)


 
export default CardConsumer;