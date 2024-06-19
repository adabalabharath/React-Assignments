import { Four, One, Three, Two } from "./actionType"

const initial={
    data:[]
}


export const reducer=(state=initial,action)=>{
    switch(action.type){
       case "ALL":
        return{
            ...state,
            data:action.payload
        }

        case Four:
            return{
                ...state,
                data:action.payload
            }
        case Three:
            return{
               ...state,
                data:action.payload  
            }
        case Two:
            return{
               ...state,
                data:action.payload  
            }
        case One:
            return{
               ...state,
                data:action.payload  
            }
        case 'Card':
            return{
                ...state,
                data:action.payload
            }
        case 'cash':
            return{
                ...state,
                data:action.payload
            }
        case 'upi':
            return{
                ...state,
                data:action.payload
            }
        case 'asc':
            return{
                ...state,
                data:action.payload
            }
        case 'des':
            return{
                ...state,
                data:action.payload
            }

        default :
        return state
    }
}