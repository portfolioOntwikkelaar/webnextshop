import { createContext, ReactNode, useContext } from "react"

// import { createContext, ReactNode, useContext, useMemo } from "react";
import { ApiConfig, ApiProviderContext } from "./types/api";
import { ApiHooks } from "./types/hooks";

interface ApiProviderProps {
  children: ReactNode | ReactNode[]
  config: ApiConfig | { testKey: string } 
  
}
// interface ApiProviderProps {
//   children: ReactNode | ReactNode[]
//   config: ApiConfig,
//   hooks: ApiHooks
// // }
// config,
//   hooks



export const ApiContext = createContext({})
// export const ApiContext = createContext<Partial<ApiProviderContext>>({})

export const ApiProvider = ({
  children,
  config
  
}: ApiProviderProps) => {
  


  return (
    <ApiContext.Provider value={config}>
      { children }
    </ApiContext.Provider>
  )
}

export const useApiProvider = () => {
  return useContext(ApiContext)
}