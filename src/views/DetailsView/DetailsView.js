import React from 'react';
import DetailTemplate from '../../templates/DetailTemplate/DetailTemplate';
import UserPageTemplate from '../../templates/UserPageTemplate/UserPageTemplate';
import withPageContext from '../../hoc/withPageContext';
import {connect} from 'react-redux';

const DetailsView = ({match, activeItem}) => {

  console.log(activeItem);
  return ( 
    <UserPageTemplate>
      <DetailTemplate {...activeItem} />
    </UserPageTemplate>
   );
}

const mapStateToProps = (state, ownProps) => {
  const { pageType } = ownProps;

  if(state[pageType]) {
    return {
      activeItem: state[pageType].filter(card => card.id == ownProps.match.params.id)[0]
    }
  }
}

const DetailsViewConsumer = withPageContext(connect(mapStateToProps)(DetailsView))

export default DetailsViewConsumer