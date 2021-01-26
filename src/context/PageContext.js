import React, { createContext, useEffect, useState } from 'react';
import { withRouter } from  'react-router-dom'

export const PageContext = createContext()


const PageContextProvider = ({children, location}) => {

  const [pageType, setPageType] = useState('notes');

  useEffect(()=> {
    const pageTypes = ['twitters', 'articles', 'notes', 'login'];
    let currentPage = pageTypes.filter(page => location.pathname.includes(page));

    currentPage = currentPage[0]

    if(pageType === currentPage) return

    setPageType(currentPage)
  },[location])

  return ( 
    <PageContext.Provider value={{pageType}}>
      {children}
    </PageContext.Provider>
   );
}
 
export default withRouter(PageContextProvider);