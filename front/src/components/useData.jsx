import React from 'react';
import { useContext } from 'react';

const DataContext = React.createContext();

const useData = () => {
    return useContext(DataContext);
};

export default useData;