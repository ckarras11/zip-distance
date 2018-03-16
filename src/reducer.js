import {
    SET_ZIP1,
    SET_ZIP2,
    FETCH_LOCATIONS_SUCCESS,
} from './actions';
import {
   haversine 
} from './haversine'

const initialState = {
    zip1: null,
    zip2: null,
    distance: null,
    location1: '',
    location2: ''

};

const reducer = (state = initialState, action) => {
    if(action.type === SET_ZIP1) {
        state = Object.assign({}, state, {
            zip1: action.zip
        })
        return state;
    }
    if(action.type === SET_ZIP2) {
        state = Object.assign({}, state, {
            zip2: action.zip
        })
        return state;
    }
    if(action.type === FETCH_LOCATIONS_SUCCESS) {
        let lat1 = action.res[0].Lat;
        let lng1 = action.res[0].Long;
        let lat2 = action.res[1].Lat;
        let lng2 = action.res[1].Long;
        let loc1 = action.res[0].City;
        let loc2 = action.res[1].City;
        let d = haversine(lat1, lng1, lat2, lng2)
        state = Object.assign({}, state, {
            distance: d,
            location1: loc1,
            location2: loc2
        })
        return state;
    }
    return state;
};

export default reducer;
