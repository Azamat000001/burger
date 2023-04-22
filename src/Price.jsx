import { NavLink } from "react-router-dom"
const Price = (props) => { 
    const toggle = () => { 
        props.toggleSuccess()
    } 
    const updateAddress = (e) =>{ 
        props.updateAddress(e)
    } 
    const updateNumber = (e) => { 
        props.updateNumber(e)
    }
    return( 
        <div>  
            <ul> 
        <li>  Meat: {props.meat.length} </li>
        <li> Tomato: {props.tomato.length} </li>
        <li> Salat: {props.salat.length} </li>
        <li>Price: {props.money}</li>
           
            
            </ul> 
            <form> 
                <input onChange={(e)=> {updateAddress(e.currentTarget.value)}} type="text" placeholder="Your Address"/> 
                <input onChange={(e)=> {updateNumber(e.currentTarget.value)}} type="text" placeholder="Your Telephone"/> 
                <button onClick={toggle}><NavLink to={'/order'}>Submit</NavLink> </button>
            </form> 
       
        </div>
    )
} 
export default Price