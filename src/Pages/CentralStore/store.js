import { createStore } from "redux";
import CalculatorReducer from "../Reducer/CalculatorReducer";



const Reduxstore = createStore(
   CalculatorReducer,
   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default Reduxstore;