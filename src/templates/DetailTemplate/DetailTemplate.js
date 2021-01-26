import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Avatar from '../../components/atoms/Avatar/Avatar';
import Button from '../../components/atoms/Button/Button';
import Heading from '../../components/atoms/Heading/Heading';
import LinkIcon from '../../components/atoms/LinkIcon/LinkIcon';
import Paragraph from '../../components/atoms/Paragraph/Paragraph';
import { PageContext } from '../../context/PageContext';
import styles from './DetailTemplate.module.scss'


const DetailTemplate = ({title, content, twitterName, articleUrl, created, id}) => {

  const { pageType } = useContext(PageContext);
  const history = useHistory()

  return ( 
    <div className={styles.cardWrapper}>
        <div className={styles.wrapperCardInside}>
          <div className={styles.heading} >
            <Heading card>{title}</Heading>
            {pageType === 'twitters' && <Avatar account={`https://unavatar.now.sh/${twitterName}`} /> }
            {pageType === 'articles' && <LinkIcon link={articleUrl} />}
          </div>
          <Paragraph>
            {content}
          </Paragraph>
        </div>
        <Button secandary={true} onClick={() => history.push(`/${pageType}`)}>Close</Button>
    </div>
   );
}
 
export default DetailTemplate;