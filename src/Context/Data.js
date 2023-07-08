import React, {createContext, useState} from "react";

export const ApiContext = createContext()

const ApiContextProvider = ({children}) => {
    const [day, setday] = useState(19)
    const [month, setmonth] = useState(12)
    const [year, setyear] = useState(2004)
    
    const DayInputValue = (e) => {
        setday(e.target.value)
    }
   
    const MonthInputValue = (e) => {
        setmonth(e.target.value)
    }

    const YearInputValue = (e) => {
        setyear(e.target.value)
    }
 
   return(
    <div>
       <ApiContext.Provider value={{day, month, year, DayInputValue, MonthInputValue, YearInputValue}}>
       {children}
       </ApiContext.Provider>
    </div>
   )
}

export default ApiContextProvider