import React from "react";
import SettleMent from "../SettleMent";


const MoneySettlement = () => {
  return (
  <>
     <SettleMent heading = "Money Settlement" 
         progressBars={[false, false, true]}
         />
  
  </>
  )
};

export default MoneySettlement;
