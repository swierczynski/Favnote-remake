import React, { Component, useContext } from 'react';
import { PageContext } from '../context/PageContext';

const withPageContext = (Component) => {
  return ( props ) => {
    const { pageType } = useContext(PageContext)
    return <Component {...props} pageType={pageType} />
  }
}
 
export default withPageContext;

