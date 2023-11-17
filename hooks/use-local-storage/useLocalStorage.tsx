'use client'
import { useState } from "react";

export const useLocalStorage = (key: string) => {

    const [data, setData] = useState(() => {
        try {
            const item = window.localStorage.getItem(key);
            return item ? JSON.parse(item) : "";
        } catch (error) {
            return ""
        }
    })

    const setItem = (value: unknown) => {
      try {
        window.localStorage.setItem(key, JSON.stringify(value));
      } catch (error) {
        console.log(error);
      } 
    };

    const removeItem = () => {
      try {
        window.localStorage.removeItem(key);
        setData('')
      } catch (error) {
        console.log(error);
      }
    };
  
    return { setItem, data, removeItem };
  };