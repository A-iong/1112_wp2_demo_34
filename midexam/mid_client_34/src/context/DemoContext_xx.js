import React, { useContext, useReducer, useEffect } from 'react';

import axios from 'axios';

import DemoReducer_xx from './DemoReducer_xx';

// import { supabase } from '../db/clientSupabse';

let api_midprep_url = `http://localhost:5000/api/midprep_xx/overview2_xx`;

let api_midterm_url = `http://localhost:5000/api/mid_xx/menu_xx`;

const initialState = {
  pName: 'Hsingtai Chung',
  pId: '123456789',
  blogs: [],
  blogs2: [],
  data1: [],
  data2: [],
  menu: [],
};

const DemoContext_xx = React.createContext();

const DemoProvider_xx = ({ children }) => {
  const [state, dispatch] = useReducer(DemoReducer_xx, initialState);

  const fetchProductDataFromNodeServer = async () => {
    try {
      const results = await axios.get(api_midprep_url);
      console.log('product data', results.data);
      dispatch({ type: 'GET_PRODUCTS_NODE_SUCCESS', payload: results.data });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProductDataFromNodeServer();
  }, []);

  const fetchMenuDataFromNodeServer = async (filter = '') => {
    try {
      const results = await axios.get(`${api_midterm_url}/${filter}`);
      console.log('menu data', results.data);
      dispatch({ type: 'GET_MENU_NODE_SUCCESS', payload: results.data });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchMenuDataFromNodeServer();
  }, []);

  const changeMenuFilter = (filter) => {
    console.log('filter', filter);
    fetchMenuDataFromNodeServer(filter);
  };
  //   const fetchBlogDataFromSupabase = async () => {
  //     try {
  //       let { data, error } = await supabase.from('card_xx').select('*');

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
    <DemoContext_xx.Provider value={{ ...state, changeMenuFilter }}>
      {children}
    </DemoContext_xx.Provider>
  );
};

const useDemoContext_xx = () => {
  return useContext(DemoContext_xx);
};

export { DemoProvider_xx, useDemoContext_xx };
