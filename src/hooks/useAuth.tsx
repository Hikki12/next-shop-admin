import { createContext, useContext, useState } from 'react';
import axios from "axios";
import Cookie from "js-cookie";
import endPoints from "@/services/api";

interface ProviderAuthProps {
  children: React.ReactNode;
}

const AuthContext = createContext({});

export const ProviderAuth = ({children}: ProviderAuthProps) => {
  const auth = useProviderAuth();
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
  return useContext(AuthContext);
}

export const useProviderAuth = () => {
  const [user, setUser] = useState(null);

  const signIn = async (email: string, password: string) => {
    const options = {
      headers: {
        accept: '*/*',
        'Content-Type': 'application/json',
      }
    }
    const { data: access_token } = await axios.post(endPoints.auth.login, { email, password }, options);
    if(access_token){
      const token = access_token.access_token;
      Cookie.set('token', token, {expires: 5});
      axios.defaults.headers.common = {'Authorization': `Bearer ${token}`}
      const {data: user} = await axios.get(endPoints.auth.profile);
      console.log("User: ", user);
      setUser(user);
    }
  };

  return {
    user,
    signIn
  };
}
