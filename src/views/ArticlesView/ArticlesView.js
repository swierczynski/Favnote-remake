import React from 'react';
import UserPageTemplate from '../../templates/UserPageTemplate/UserPageTemplate';
import {connect} from 'react-redux'
import Card from '../../components/molecules/Card/Card';


const ArticlesView = ({articles}) => {

  const allArticles = articles.map(article => <li><Card key={article.id} {...article} /> </li>)

  return ( 
    <UserPageTemplate>
      <ul>
      {allArticles}
      </ul>
    </UserPageTemplate>
   );
}


const mapStateToProps = state => ({
  articles: state.articles
})


const ArticlesViewConsumer = connect(mapStateToProps)(ArticlesView)
 
export default ArticlesViewConsumer;