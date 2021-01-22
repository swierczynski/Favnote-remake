import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom'
import PageContextProvider from '../../context/PageContext';
import ThemeContextProvider from '../../context/ThemeContext';
import { Provider } from 'react-redux';
import { store } from '../../store/store'
import AuthContextProvider from '../../context/AuthContext';

const MainTemplate = ({children}) => {
  return ( 
    <Provider store={store}>
      <Router>
        <PageContextProvider>
          <ThemeContextProvider>
            <AuthContextProvider>
              {children}
            </AuthContextProvider>
          </ThemeContextProvider>
        </PageContextProvider>
      </Router>
    </Provider>
   );
}
 
export default MainTemplate;