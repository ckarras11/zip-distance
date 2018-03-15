export const SET_ZIP1 = 'SET_ZIP1';
export const setZip1 = (zip) => ({
    type: SET_ZIP1,
    zip
});

export const SET_ZIP2 = 'SET_ZIP2';
export const setZip2 = (zip) => ({
    type: SET_ZIP2,
    zip
});

export const FETCH_LOCATIONS_INITIATED = 'FETCH_LOCATIONS_INITIATED';
export const fetchLocationsInitiated = () => ({
    type: FETCH_LOCATIONS_INITIATED
});

export const FETCH_LOCATIONS_SUCCESS = 'FETCH_LOCATIONS_SUCCESS';
export const fetchLocationsSuccess = (res) => ({
    type: FETCH_LOCATIONS_SUCCESS,
    res
});

// Triggered when app loads and when refresh button is clicked
// Gets current price
export const fetchLocations = (zip1, zip2) => dispatch => {
    dispatch(fetchLocationsInitiated());
    return fetch(`/api/?zip1=${zip1}&zip2=${zip2}`)
        .then(res => res.json())
        .then(json => {
            if(json.length < 2) {
                alert('Please make sure the zipcodes are valid')
            } else {
                dispatch(fetchLocationsSuccess(json));
            }
            
        });
}
