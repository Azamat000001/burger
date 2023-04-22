import React from "react"
import { connect } from "react-redux"  
import Price from "./Price" 
import { toggleSuccess, updateAddress, updateNumber } from "./store/burger-reducer"
class PriceContainer extends React.Component{ 
   render(){ 
       return (<Price {...this.props}/>)
   }
}
const mapStateToProps = (state) => { 
   return{ 
      salat: state.burger.salat, 
      meat: state.burger.meat, 
      tomato: state.burger.tomato, 
      money: state.burger.money, 
       isSuccess: state.burger.isSuccess, 
       address: state.burger.address, 
       number: state.burger.number
   }
}
export default connect(mapStateToProps, {toggleSuccess,  updateAddress, updateNumber})(PriceContainer)