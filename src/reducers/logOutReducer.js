import actionTypes from '../constants/actionTypes';

const initialState = {};

export default function(state = initialState, action = {}){
    switch(action.type){
        case actionTypes.USER.LOGOUT:
            return { ...state,...action.payload};
        default:
            return state;
    }
}