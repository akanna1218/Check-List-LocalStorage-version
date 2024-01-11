import React, { createContext, useState,useEffect } from "react";



const DataContext=createContext({}); //1


 export const DataProvider=({children})=>{  //2
        const [Items, setItems] = useState( ()=>{
        const storeLocal=localStorage.getItem('user');                                                    // get the local storage by giving the local storage name
          return storeLocal?JSON.parse(storeLocal):[]                                                       // then check anything present in local storage if yes parse it if no make it as empty []
        });                                                           // here we don't have to pass the api link bcaz that is in different format , instead in the Api fetching function we convert the data and pass that variable to the setState
        // const len = Items.length;
        useEffect(() => {
            localStorage.setItem("user", JSON.stringify(Items));
            console.log(Items)
          }, [Items]);
        
    
    return(
<DataContext.Provider
value={{Items,setItems}}>
    {children}
</DataContext.Provider>

    )
}

export default DataContext