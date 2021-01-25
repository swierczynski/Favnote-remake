import React from 'react';
import UserPageTemplate from '../../templates/UserPageTemplate/UserPageTemplate';
import {connect} from 'react-redux'
import Card from '../../components/molecules/Card/Card'

const TwittersView = ({twitters}) => {

  const allTwitters = twitters.map(twitter => <li><Card key={twitter.id} {...twitter} /> </li>)

  return ( 
    <UserPageTemplate>
      <ul>
      {allTwitters}
      </ul>
    </UserPageTemplate>
   );
}


const mapStateToProps = (state) => ({
  twitters: state.twitters
})

const TwittersViewConsumer = connect(mapStateToProps)(TwittersView)
 
export default TwittersViewConsumer;