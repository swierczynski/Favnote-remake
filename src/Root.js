import React, { useContext } from 'react';
import MainTemplate from './templates/MainTemplate/MainTamplate';
import { routes } from './routes';
import { Redirect, Route, Switch } from 'react-router-dom'
import { AuthContext } from './context/AuthContext';
import NotesView from './views/NotesView/NotesView';
import TwittersView from './views/TwittersView/TwittersView';
import ArticlesView from './views/ArticlesView/ArticlesView';
import DetailsView from './views/DetailsView/DetailsView';
import LoginView from './views/LoginView/LoginView';


const Root = () => {

  const {isAuthorised} = useContext(AuthContext)

  return ( 
    <MainTemplate>
      <Switch>
      <>
      {
        !isAuthorised && <Redirect to={routes.login} />
      }
      <Route exact path={routes.login} component={LoginView} />
      <Route exact path={routes.home} render={()=> <Redirect to={routes.notes} />} />
      <Route exact path={routes.notes} component={NotesView} />
      <Route exact path={routes.twitters} component={TwittersView} />
      <Route exact path={routes.articles} component={ArticlesView} />
      <Route path={routes.article } component={DetailsView} />
      <Route path={routes.twitter } component={DetailsView} />
      <Route path={routes.note } component={DetailsView} />
      </>
      </Switch>
    </MainTemplate>
   );
}
 
export default Root;


