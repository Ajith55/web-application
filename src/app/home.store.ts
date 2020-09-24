import { ActionReducerMap } from '@ngrx/store'
import { SAVE_ROLE, SAVE_USERNAME } from './actions';

export interface HomeState {
    userName : string;
    role : string;

}
export const HOME_INITIALSTATE = {
    userName:"",
    role:""
}
export function homeReducer(state= HOME_INITIALSTATE, action){
        switch (action.type) {
            case SAVE_USERNAME: return {...state,userName:action.payload};
            case SAVE_ROLE: return{...state,role:action.payload}
        
        default : return state;

    }}


