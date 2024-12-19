import React from 'react'
import SettleMent from '../SettleMent'

const FullSettlement = () => {

  return (
    <>
    <SettleMent heading = "Full Settlement (Positions + Money Settlements)" 
    progressBars={[true, true, true]} />
    </>
  )
}

export default FullSettlement