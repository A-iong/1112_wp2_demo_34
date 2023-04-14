import React, { useContext, useReducer, useEffect } from 'react';

import axios from 'axios';

import DemoReducer_34 from './DemoReducer_34';

// import { supabase } from '../db/clientSupabse';

// let api_url = `http://localhost:5000/api/midprep_34/overview2_34`;

let api_url = `http://localhost:5002/api/mid_project/210410634`;

const initialState = {
  pName: 'A-ion',
  pId: '210410634',
  blogs: [],
  blogs2: [],
  data1: [],
  data2: [],
};

const DemoContext_34 = React.createContext();

const DemoProvider_34 = ({ children }) => {
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

  //   const fetchBlogDataFromSupabase = async () => {
  //     try {
  //       let { data, error } = await supabase.from('card_34').select('*');

  //       console.log('data', data);
  //       dispatch({ type: 'GET_BLOGS_SUPABASE_SUCCESS', payload: data });
  //       //   setData(data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  //   useEffect(() => {
  //     fetchBlogDataFromSupabase();
  //   }, []);

  return (
    <DemoContext_34.Provider value={{ ...state }}>
      {children}
    </DemoContext_34.Provider>
  );
};

const useDemoContext_34 = () => {
  return useContext(DemoContext_34);
};

export { DemoProvider_34, useDemoContext_34 };
