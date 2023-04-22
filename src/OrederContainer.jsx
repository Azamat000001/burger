import React from "react"  
import Order from "./Order" 
import { connect } from "react-redux"
 class OrderContainer extends React.Component{ 
    render(){ 
        return (<Order {...this.props}/>)
    }
}
const mapStateToProps = (state) => { 
    return{ 
        address: state.burger.address, 
        number: state.burger.number
    }
} 
export default connect(mapStateToProps, {})(OrderContainer)