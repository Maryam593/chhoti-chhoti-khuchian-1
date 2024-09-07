// import React from 'react';
// import { FaTimes } from 'react-icons/fa';
// import { Button } from '@mui/material';
// import { useDispatch, useSelector } from 'react-redux';
// import { Addition, Clear, Division, EqualsTo, Modulus, Multiplication, set_Num, Subtraction } from '../ActionCreator/action';

// function Calculator({ onClose }) {
//     const { currentValue, num } = useSelector((state) => state);
//     const dispatch = useDispatch();

//     const handleNumberClick = (value) => {
//         dispatch(set_Num(value)); // Use dispatch here
//     };

//     return (
//         <>
//             {/* Background overlay */}
//             <div className='fixed inset-0 bg-black opacity-50 z-40' onClick={onClose}></div>
//             {/* Calculator popup */}
//             <div className='fixed inset-0 flex justify-center items-center z-50'>
//                 <div className='bg-white p-5 rounded shadow-lg w-[400px] min-h-96'>
//                     {/* Header with title and close button */}
//                     <div className='flex justify-between items-center mb-4'>
//                         <h2>Calculator</h2>
//                         <Button onClick={onClose} sx={{ minWidth: 'auto', padding: 0 }}>
//                             <FaTimes />
//                         </Button>
//                     </div>
//                     {/* Calculator UI */}
//                     <div className='w-full flex justify-center items-center'>
//                         <div className="CalculatorBody bg-blue-950 w-full h-80 rounded-md shadow-md p-4">
//                             <div className="CalculatorScreen bg-slate-300 min-h-16 w-full rounded p-2 flex justify-center items-center">
//                                 <input
//                                     type="text"
//                                     className="text bg-slate-300 w-full h-full text-center p-2 border-none outline-none"
//                                     value={num !== 0 ? num : currentValue}
//                                     readOnly
//                                 />
//                             </div>
//                             <div className="calculatorPad">
//                             <div className="OddNumbers">
//                                <div className="numberPad">
//                                   {/* Operations */}
//                                   <Button onClick={() => dispatch(Addition())}>+</Button>
//                                 <Button onClick={() => dispatch(Subtraction())}>-</Button>
//                                 <Button onClick={() => dispatch(Multiplication())}>*</Button>
//                                 <Button onClick={() => dispatch(Division())}>/</Button>
//                                 <Button onClick={() => dispatch(Modulus())}>%</Button>
//                                {[1, 3, 5, 7, 9].map((number) => (
//                                     <Button key={number} onClick={() => handleNumberClick(number)}>
//                                         {number}
//                                     </Button>
                                    
//                                 ))}
                               
//                                </div>
                               
//                             </div>
//                             <div className="EvenNumbers">
//                                 {[2, 4, 6, 8, 0].map((number) => (
//                                     <Button key={number} onClick={() => handleNumberClick(number)}>
//                                         {number}
//                                     </Button>
//                                 ))}
//                                 {/* Operations */}
                               
//                                 <Button onClick={() => dispatch(Clear())}>C</Button>
//                                 <Button onClick={() => dispatch(EqualsTo())}>=</Button>
//                             </div>
//                         </div>
//                         </div>
                        
                       
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// }

// export default Calculator;

import React from 'react';
import { FaTimes } from 'react-icons/fa';
import { Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { Addition, Clear, Division, EqualsTo, Modulus, Multiplication, set_Num, Subtraction } from '../ActionCreator/action';

function Calculator({ onClose }) {
    const { currentValue, num } = useSelector((state) => state);
    const dispatch = useDispatch();

    const handleNumberClick = (value) => {
        dispatch(set_Num(value));
    };

    return (
        <>
            {/* Background overlay */}
            <div className='fixed inset-0 bg-black opacity-50 z-40' onClick={onClose}></div>
            {/* Calculator popup */}
            <div className='fixed inset-0 flex justify-center items-center z-50'>
                <div className='bg-white p-5 rounded-lg shadow-lg w-[350px]'>
                    {/* Header with title and close button */}
                    <div className='flex justify-between items-center mb-4'>
                        <h2 className='text-xl font-bold'>Calculator</h2>
                        <Button onClick={onClose} sx={{ minWidth: 'auto', padding: 0 }}>
                            <FaTimes />
                        </Button>
                    </div>
                    {/* Calculator UI */}
                    <div className='flex flex-col'>
                        <div className="CalculatorBody bg-gray-800 rounded-lg shadow-md">
                            <div className="CalculatorScreen bg-gray-300 p-4 rounded-t-lg w-88 flex justify-end items-center m-2">
                                <input
                                    type="text"
                                    className="w-full h-12 text-2xl font-semibold text-right bg-gray-300 border-none"
                                    value={num !== 0 ? num : currentValue}
                                    readOnly
                                />
                            </div>
                            <div className="calculatorPad grid grid-cols-4 gap-2 p-4">
                                <Button
                                    // className='bg-orange-600 text-white rounded-lg p-4'
                                    sx={{bgcolor:"orange", color:"white", borderRadius :"5%"}}
                                    onClick={() => handleNumberClick(7)}
                                >
                                    7
                                </Button>
                                <Button
                                    // className='bg-orange-600 text-white rounded-lg p-4'
                                    sx={{bgcolor:"orange", color:"white", borderRadius :"5%"}}
                                    onClick={() => handleNumberClick(8)}
                                >
                                    8
                                </Button>
                                <Button
                                    // className='bg-orange-600 text-white rounded-lg p-4'
                                    sx={{bgcolor:"orange", color:"white", borderRadius :"5%"}}
                                    onClick={() => handleNumberClick(9)}
                                >
                                    9
                                </Button>
                                <Button
                                    // className='bg-orange-600 text-white rounded-lg p-4'
                                    sx={{bgcolor:"white", color:"black", borderRadius:"5%"}}
                                    onClick={() => dispatch(Division())}
                                >
                                    /
                                </Button>

                                <Button
                                    // className='bg-orange-600 text-white rounded-lg p-4'
                                    sx={{bgcolor:"orange", color:"white", borderRadius :"5%"}}
                                    onClick={() => handleNumberClick(4)}
                                >
                                    4
                                </Button>
                                <Button
                                    // className='bg-orange-600 text-white rounded-lg p-4'
                                    sx={{bgcolor:"orange", color:"white", borderRadius :"5%"}}
                                    onClick={() => handleNumberClick(5)}
                                >
                                    5
                                </Button>
                                <Button
                                    // className='bg-orange-600 text-white rounded-lg p-4'
                                    sx={{bgcolor:"orange", color:"white", borderRadius :"5%"}}
                                    onClick={() => handleNumberClick(6)}
                                >
                                    6
                                </Button>
                                <Button
                                    // className='bg-orange-600 text-white rounded-lg p-4'
                                    sx={{bgcolor:"white", color:"black", borderRadius:"5%"}}
                                    onClick={() => dispatch(Multiplication())}
                                >
                                    *
                                </Button>

                                <Button
                                    // className='bg-orange-600 text-white rounded-lg p-4'
                                    sx={{bgcolor:"orange", color:"white", borderRadius :"5%"}}
                                    onClick={() => handleNumberClick(1)}
                                >
                                    1
                                </Button>
                                <Button
                                    // className='bg-orange-600 text-white rounded-lg p-4'
                                    sx={{bgcolor:"orange", color:"white", borderRadius :"5%"}}
                                    onClick={() => handleNumberClick(2)}
                                >
                                    2
                                </Button>
                                <Button
                                    // className='bg-orange-600 text-white rounded-lg p-4'
                                    sx={{bgcolor:"orange", color:"white", borderRadius :"5%"}}
                                    onClick={() => handleNumberClick(3)}
                                >
                                    3
                                </Button>
                                <Button
                                    // className='bg-orange-600 text-white rounded-lg p-4'
                                    sx={{bgcolor:"white", color:"black", borderRadius:"5%"}}
                                    onClick={() => dispatch(Subtraction())}
                                >
                                    -
                                </Button>

                                <Button
                                    // className='bg-orange-600 text-white rounded-lg p-4 col-span-2'
                                    sx={{bgcolor:"orange", color:"white", borderRadius :"5%"}}
                                    onClick={() => handleNumberClick(0)}
                                >
                                    0
                                </Button>
                                <Button
                                    // className='bg-orange-600 text-white rounded-lg p-4'
                                    sx={{bgcolor:"white", color:"black", borderRadius:"5%"}}
                                    onClick={() => dispatch(Addition())}
                                >
                                    +
                                </Button>
                                <Button
                                  sx={{bgcolor:"white", color:"black", borderRadius:"5%"}}
                                    onClick={() => dispatch(EqualsTo())}
                                >
                                    =
                                </Button>
                                <Button
                                    // className='bg-orange-600 text-white rounded-lg p-4 col-span-2'
                                    sx={{bgcolor:"white", color:"black", borderRadius:"5%"}}
                                    onClick={() => dispatch(Modulus())}
                                >
                                    %
                                </Button>
                                <Button
                                    // className='bg-red-600 text-white rounded-lg p-4'
                                    sx={{bgcolor:"rebeccapurple", color:"white", borderRadius:"3px", width:"280px"
                                        
                                    }}
                                    onClick={() => dispatch(Clear())}
                                >
                                    CLEAR
                                </Button>
                               
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Calculator;

