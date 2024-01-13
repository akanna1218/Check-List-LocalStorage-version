import { createContext } from "react";


const DataContext=createContext();

export const DataProvider=({children})=>{
    const headerInfo="To Do List"
    return(
        <DataContext.Provider value={{headerInfo}}>
            {children}</DataContext.Provider>
    )
}
export default DataContext;