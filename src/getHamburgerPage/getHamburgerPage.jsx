const getHamburgerPage = (props) => {
    return(
        <div>
            <div className='burger'>  
                <div className='top'>  
                    <img src={top}></img>
                </div>
                <div className='salat'> 
                    {props.salat.map((i) => (<img className='salat' src={i.img} /> ))}
                </div> 
                <div className='meat'> 
                    {props.meat.map((item) => (<img src={item.img} /> ))}
                </div> 
                <div className='tomato'> 
                    {props.tomato.map((item) => (<img src={item.img}/>  ))}
                </div> 
                <div> 
                    <img src={bottom}></img>
                </div>
            </div> 
            <strong>Адрес для доставки</strong>
            <div className="inputs">
                <input type="text" />
                <input type="text" />
                <input type="text" />
            </div>
            

        </div>

    )
}

export default getHamburgerPage;