import React, {useContext} from "react";
import { ApiContext } from "./Context/Data";
import Arrow from ".//image/icon-arrow.svg"
import InputTag from "./input";
import "./index.css"
import differenceInYears from "date-fns/differenceInYears";
import differenceInDays from "date-fns/differenceInDays";
import differenceInMonths from "date-fns/differenceInMonths";

const Form = (props) => {
    const {day, month, year, DayInputValue, MonthInputValue, YearInputValue} = useContext(ApiContext)
   const DateYear = new Date()
   const currentYear = DateYear.getFullYear()

   const diffInDay = differenceInDays(
    new Date(year, month, 31),
    new Date(year, month, day)
   )
   const diffInMonth = differenceInMonths(
    new Date(year, 12, 31),
    new Date(year, month, day)
   )
   const diffInyear = differenceInYears(
    new Date(),
    new Date(year, month, day)
   )
  

        return(
           <div className="px-4 md:px-0">
            <div  className=" font-poppins-sans-sans-erif max-w-666px space-y-5 bg-White shadow-2xl p-10 rounded-13px-13px-150px rounded-t-xl rounded-bl-2xl">
                <form className="grid grid-cols-3 gap-7">
                  <div>
                     <label  className=" font-extrabold text-light-gray"htmlFor="Day" >Day</label>
                     <InputTag 
                     value={day}
                     onChange={DayInputValue}
                     el={day}
                     min={1}
                     max={31}
                     number={31}
                     style={{borderColor: day > 31  || day < 1 ? "red" : ""}}
                   text={"Day input is not Vaild"}
                   />
                  </div>
                  <div>
                     <label className=" font-extrabold text-light-gray">Month</label>
                        <InputTag 
                        value={month}
                        onChange={MonthInputValue}
                        el={month}
                        min={1}
                        max={12}
                        number={12}
                        style={{borderColor: month > 12 || month < 1 ? "red" : ""}}
                        text={"Must be a valid month"}
                        />
                  </div>
                  <div>
                  <label className=" font-extrabold text-light-gray">Year</label>
                  <InputTag 
                        value={year}
                        onChange={YearInputValue}
                        el={year}
                        number={currentYear}
                         style={{borderColor: year > currentYear || year < 1 ? "red" : ""}}
                         text={"Must be a valid year"}
                        />
                  </div>
                </form>
                <div className="grid grid-cols-10 p-2">
                <div className="border-b col-span-9 h-7"></div>
                  <div className=" cursor-pointer bg-purple h-12 w-12 rounded-full hover:bg-black" ><img src={Arrow} alt="" className="w-8 mx-auto pt-2" /></div>
                </div>
                <div className="space-y-5">
                  <div className="text-5xl space-x-4 font-extrabold"><span className="text-purple output-year">{diffInyear}</span><span className="">years</span></div>
                  <div className="text-5xl space-x-4 font-extrabold"><span className="text-purple output-year">{diffInMonth}</span><span>months</span></div>
                  <div className="text-5xl space-x-4 font-extrabold"><span className="text-purple output-year">{diffInDay}</span><span>days</span></div>
                </div>
            </div>
           </div>
        )
    }

export default Form;