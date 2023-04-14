import React, { useContext, useReducer, useEffect } from "react";

import axios from "axios";

import DemoReducer_34 from "./DemoReducer_34";

import { supabase } from "../db/clientSupabse";

const initialState = {
  pName: "ChungChun Wang",
  pId: "210410196",
  blogs: [],
  blogs2: [],
  data1: [],
  data2: [],
};

const SupabaseContext_34 = React.createContext();

const SupabaseProvider_34 = ({ children }) => {
  const [state, dispatch] = useReducer(DemoReducer_34, initialState);

  const fetchBlogDataFromSupabase = async () => {
    try {
      let { data, error } = await supabase.from("middle_product_34").select("*");

      console.log("data", data);
      dispatch({ type: "GET_BLOGS_SUPABASE_SUCCESS", payload: data });
      //   setData(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchBlogDataFromSupabase();
  }, []);

  return (
    <SupabaseContext_34.Provider value={{ ...state }}>
      {children}
    </SupabaseContext_34.Provider>
  );
};

const useSupabaseContext_34 = () => {
  return useContext(SupabaseContext_34);
};

export { SupabaseProvider_34, useSupabaseContext_34 };
