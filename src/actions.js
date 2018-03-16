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

export const FETCH_LOCATIONS_SUCCESS = 'FETCH_LOCATIONS_SUCCESS';
export const fetchLocationsSuccess = (res) => ({
    type: FETCH_LOCATIONS_SUCCESS,
    res
});

export const fetchLocations = (zip1, zip2) => dispatch => {
    return fetch(`/api/?zip1=${zip1}&zip2=${zip2}`)
        .then(res => res.json())
        .then(json => {
            json.length < 2 ?
             alert('Please make sure the zipcodes are valid') :
             dispatch(fetchLocationsSuccess(json)) 
        });
}
