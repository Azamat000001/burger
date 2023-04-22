const Order = (props) =>{ 
    return(     
        <div> <h1>Вы успешно заказали</h1> 
    <h3>Address {props.address}</h3> 
    <h3>Number {props.number}</h3>
        </div>

    )
} 
export default Order