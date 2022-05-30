import { REMOVE_CIRCLE_FROM_QUEUE,REMOVED_FROM_CONTAINER,REMOVE_FROM_CONTAINER_ADD_IN_QUEUE,ADD_CIRCLE_IN_CONTAINER  } from './actionType'
import  { circleData  } from '../Mockdata/Circledata'
const initialState = {
    circleData:circleData,
    container:[],
}
export const reducer =(state=initialState, action)=>{
    const {payload, type}=action;
    console.log("reducer : ", action)

    switch(type){
        case  REMOVE_CIRCLE_FROM_QUEUE :
            return{
                ...state, circleData:payload
            }
        case ADD_CIRCLE_IN_CONTAINER:
            return{
                ...state, container:[...state.container, payload]
            }
        case REMOVED_FROM_CONTAINER:
            return{
                ...state, container: state.container.filter((item)=>item.id!=payload)
            }
        case REMOVE_FROM_CONTAINER_ADD_IN_QUEUE:
            return{
                ...state, circleData:[...state.circleData, payload].sort((a,b)=>a.id-b.id)
            }
        default:
            return(state)
    }
}