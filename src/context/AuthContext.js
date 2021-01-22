import React, { createContext, useState } from 'react';

export const AuthContext = createContext(false)


const AuthContextProvider = ({children}) => {

  const [isAuthorised, setIsAuthorised] = useState(true)

  return ( 
    <AuthContext.Provider value={{isAuthorised, setIsAuthorised}}>
      {children}
    </AuthContext.Provider>
   );
}
 
export default AuthContextProvider;