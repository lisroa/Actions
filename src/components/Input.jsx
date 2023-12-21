"use client";
import React, { useState, useEffect, useRef } from "react";
import { useDataContext } from "../context/context";
import { Button } from "flowbite-react";

function Input() {
  const { showDropdown, setShowDropdown, symbolFilter, setSymbolFilter, data } =
    useDataContext();
  const [filteredSymbolOptions, setFilteredSymbolOptions] = useState([]);
  const inputRef = useRef(null);

  const handleInputChange = (e) => {
    setShowDropdown(true);

    if (e && e.target) {
      setSymbolFilter(e.target.value);
    }
  };

  const handleOptionClick = () => {
    setShowDropdown(false);
  };

  const handleClickOutside = (event) => {
    if (inputRef.current && !inputRef.current.contains(event.target)) {
      setShowDropdown(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const filteredOptions =
      Array.isArray(data) && data.length
        ? data
            .filter(
              (item) =>
                item.symbol &&
                item.symbol.toLowerCase().includes(symbolFilter.toLowerCase())
            )
            .map((item) => item.symbol)
        : [];
    setFilteredSymbolOptions(filteredOptions);
  }, [data, symbolFilter]);

  return (
    <>
      <div className="relative mt-20 mx-auto w-full lg:w-1/2" ref={inputRef}>
        <p className="mr-2">Simbolo: </p>
        <div className="flex w-full lg:w-96 h-12 items-center justify-center mt-2">
          <input
            type="text"
            placeholder="Escribe algo"
            className="px-4 py-2 border border-gray-300 rounded-md w-64 mr-2"
            onChange={(e) => {
              handleInputChange();
              setSymbolFilter(e.target.value);
              console.log(symbolFilter);
            }}
          />

          <Button className="h-11 w-60">Agregar simbolo</Button>
        </div>

        {showDropdown && (
          <div className="absolute z-10 mt-2 bg-white border border-gray-300 rounded-md shadow-md w-58">
            <ul>
              <li
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={handleOptionClick}
              >
                Opción 1
              </li>
              <li
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={handleOptionClick}
              >
                Opción 2
              </li>
              <li
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={handleOptionClick}
              >
                Opción 3
              </li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
}

export default Input;
