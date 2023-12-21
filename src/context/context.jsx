import React, { createContext, useContext, useState, useEffect } from "react";
import { request } from "../api/request";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [data, setData] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);
  const [symbolFilter, setSymbolFilter] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedData = await request();
        setData(fetchedData);
        console.log(data);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };

    fetchData();
  }, []);

  const updateData = (newData) => {
    setData(newData);
  };

  return (
    <DataContext.Provider
      value={{
        data,
        updateData,
        showDropdown,
        setShowDropdown,
        symbolFilter,
        setSymbolFilter,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useDataContext = () => {
  const context = useContext(DataContext);

  if (!context) {
    console.error("useDataContext must be used within a DataProvider");
  }

  return context;
};
