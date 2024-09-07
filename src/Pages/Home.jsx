import React from 'react'
import moment from 'moment'
import { useState } from 'react';
import { Button } from '@mui/material'
import Calculator from './Component/Calculator';
function Home() {
    const [calculatorPopUp, setCalculatorPopUp] = useState(false);
    const handleCalculations = () => {
        setCalculatorPopUp(true);
    }
    const closeCalculations = () => {
        setCalculatorPopUp(false)    }
  return (
    <>
    <h1 className='flex justify-end p-2'>{moment().format("MMMM DD YYYY")}</h1>
  <div className="CalculationButton flex justify-center items-center">
  <Button variant='contained'
    sx={{backgroundColor: "teal", mx:1, borderRadius:0}} onClick={(handleCalculations)}>
        Want To Do Calculations
    </Button>
  </div>
  <div>
   {
    calculatorPopUp && (
        <Calculator onClose = {closeCalculations}/>
    )
   }
  </div>
    </>
  )
}

export default Home