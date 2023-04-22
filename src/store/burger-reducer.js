import { type } from '@testing-library/user-event/dist/type'
import meats from '../assets/meat.jpg' 
import salats from '../assets/salat.jpg' 
import tomatos from '../assets/tomato.jpg' 
 const defaultState ={ 

        salat:[{ 
            img: salats
        }],  
        meat: [{ 
            img: meats
        }], 
        tomato: [ { 
            img: tomatos
        }], 
        money: 30, 
        isSuccess: false,  
        address: '', 
        number: ''

        
    
} 
 let burgerReducer = (state = defaultState, action) =>{ 

switch(action.type){  
    case 'ADD_TOMATO':{  
        
        return {...state, 
        tomato: [...state.tomato, {img: tomatos}], 
        money: state.money + 10, 
        errorMessage: ''
        
    }
    }   
    case 'ADD_MEAT':{ 
        return {...state, 
        meat: [...state.meat, {img: meats}], 
        money: state.money + 15, 
        errorMessage: ''
    }
    }   
    case 'ADD_SALAT':{ 
        return {...state, 
        salat: [...state.salat, {img: salats}], 
        money: state.money + 5, 
        errorMessage: ''
    }
    } 
    case 'DELL_SALAT':{  
        if(state.salat.length !==0){ 
            return { 
                ...state, 
                ...state.salat.pop(), 
                money: state.money - 5
            }
        } 
        return {...state, errorMessage:  'You dont have any Salat'}
    } 
    case 'DELL_TOMATO': { 
        if(state.tomato.length !==0){ 
            return { 
                ...state, 
                ...state.tomato.pop(), 
                money: state.money - 10
            }
        } 
       
        return {...state,  errorMessage: 'You dont have any TOmato' }
    }
    case 'DELL_MEAT':{ 
        if(state.meat.length !==0){ 
            return { 
                ...state, 
                ...state.meat.pop(), 
                money: state.money - 15
            }
        } 
        return {...state,  errorMessage: 'You dont have any Meat'}
    }  
    case 'TOGGLE' :{ 
        return{ 
            ...state, 
            isSuccess: true
        }
    } 
    case 'UPDATE_ADDRESS' :{ 
        return{ 
            ...state, 
            address: action.data
        } 
     }
     case 'UPDATE_NUMBER' :{ 
        return{ 
            ...state, 
            number: action.data
        } 
    }
    default : { 
        return state
    }
}

}  
export const deleteTomatoAC = ()=>{ return{type: 'DELL_TOMATO'}} 
export const deleteMeatAC = ()=>{ return{type: 'DELL_MEAT'}} 
export const deleteSalatAC = ()=>{ return{type: 'DELL_SALAT'}}
export const addTomatoAC=()=>{ 
    return{ 
        type: 'ADD_TOMATO'
    }
} 
export const addMeatAC =()=> { 
    return{ 
        type: 'ADD_MEAT'
    }
}  
export const addSalat = () => { 
    return{ 
        type: 'ADD_SALAT'
    }
}  
export const toggleSuccess =() =>{ 
    return{type: 'TOGGLE'}
} 
export const updateAddress = (data) => { 
    return {type: 'UPDATE_ADDRESS', data}
} 
export const updateNumber = (data) => { 
    return {type: 'UPDATE_NUMBER', data}
}
export default burgerReducer