import React, { useContext, useReducer, useEffect } from 'react';

import axios from 'axios';

import DemoReducer_34 from './DemoReducer_34';

let api_url = `http://localhost:5001/api/middle_project/210410196`;

const initialState = {
  pName: 'ChungChun Wang',
  pId: '210410196',
  blogs: [],
  blogs2: [],
  data1: [],
  data2: [],
};

const ServerContext_34 = React.createContext();

const ServerProvider_34 = ({ children }) => {
  const [state, dispatch] = useReducer(DemoReducer_34, initialState);

  const fetchProductDataFromNodeServer = async () => {
    try {
      const results = await axios.get(api_url);
      console.log('results', results.data);
      dispatch({ type: 'GET_PRODUCTS_NODE_SUCCESS', payload: results.data });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProductDataFromNodeServer();
  }, []);

  return (
    <ServerContext_34.Provider value={{ ...state }}>
      {children}
    </ServerContext_34.Provider>
  );
};

const useServerContext_34 = () => {
  return useContext(ServerContext_34);
};

export { ServerProvider_34, useServerContext_34 };
