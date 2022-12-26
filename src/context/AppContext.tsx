import React from "react";
import { useLocation, useNavigate } from "react-router";
import useStorage from "../hooks/storage/useStorage";
import { IToken } from "../request/Token";
import { checkTokenWS } from "../services/LoginServiceAPI";

interface Props {
  token?: string;
  setearToken: (token: string) => void;
}


export const AppContext = React.createContext({} as Props);

const AppProvider = ({ children }: { children: React.ReactNode }) => {

  const history = useNavigate();
  const location = useLocation();

  const [token, setearToken] = React.useState<string | undefined>();
  const { getItem, deleteItem } = useStorage();

  React.useEffect(() => {
    console.log('-- Entra Contexto')
    const storedUser = getItem("token");
    if (storedUser == null || storedUser == undefined) {
      setearToken(undefined);
      if (location.pathname.includes("/administracion")) {
        history("/login");
      }
    } else {
      verificarToken(storedUser);
    }
  }, [getItem, location.pathname, history]);

  const verificarToken = async (token: string) => {
    try {
      let objectToPost: IToken = { token: token };
      const response = await checkTokenWS(objectToPost);
      setearToken(token);
      if (location.pathname.includes("/login")) {
        history("/administracion");
      }
    } catch (error: any) {
      console.log('Token invalido ');
      deleteItem("token")
      history("/expired");
    }
  }

  return (
    <AppContext.Provider
      value={{
        token,
        setearToken
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;  