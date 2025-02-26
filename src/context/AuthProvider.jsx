import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";
import config from "../Config";


export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [blogs, setBlogs] = useState([]);
  const [carousels, setCarousels] = useState([]);
  const [refreshTrigger, setRefreshTrigger] = useState(0);



  const fetchBlogs = async () => {
    try {
      const { data } = await axios.get(
        `${config.apiUrl}/api/blogs/all-blogs`,
        { withCredentials: true }
      );
      setBlogs(data);
    } catch (error) {
      console.log(error);
    }
  };


  const fetchCarousels = async () => {
    try {
      const { data } = await axios.get(
        `${config.apiUrl}/api/carousel/all-carousels`,
        { withCredentials: true }
      );
      setCarousels(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchBlogs();
    fetchCarousels();
  }, []);

   // 🔹 Function to trigger a refresh
   const refreshData = () => {
    setRefreshTrigger((prev) => prev + 1);
  };

  return (
    <AuthContext.Provider
      value={{
        fetchBlogs,
        blogs,
        fetchCarousels,
        carousels,
        refreshData,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);


