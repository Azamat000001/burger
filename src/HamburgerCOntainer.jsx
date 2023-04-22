import { connect } from "react-redux";
import { addTomatoAC,  addSalat, addMeatAC, deleteMeatAC, deleteTomatoAC, deleteSalatAC } from "./store/burger-reducer";
import React from "react";
import Hamburger from "./Hamburger";
class HamburgerCOntainer extends React.Component{ 
    render(){ 
        return( 
            <div>  
                <Hamburger  
                money={this.props.money} 
                errorMessage={this.props.errorMessage}
                deleteMeatAC={this.props.deleteMeatAC} deleteSalatAC={this.props.deleteSalatAC} deleteTomatoAC = {this.props.deleteTomatoAC} 
                salat={this.props.salat} meat={this.props.meat} tomato={this.props.tomato} addTomatoAC={this.props.addTomatoAC} addMeatAC={this.props.addMeatAC} addSalat={this.props.addSalat}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => { 
    return{ 
        salat: state.burger.salat, 
        meat: state.burger.meat, 
        tomato: state.burger.tomato, 
        errorMessage: state.burger.errorMessage, 
        money : state.burger.money
    }
}
export default connect(mapStateToProps, {addTomatoAC, addSalat, addMeatAC,deleteMeatAC, deleteTomatoAC, deleteSalatAC})(HamburgerCOntainer)