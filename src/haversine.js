export const haversine = function(lat1, lng1, lat2, lng2) {
    // radius of the earth
    let r = 3959;
    //convert to radians
    let rlat1 = Math.PI/180 * lat1
    let rlng1 = Math.PI/180 * lng1
    let rlat2 = Math.PI/180 * lat2
    let rlng2 = Math.PI/180 * lng2
    let deltaLat = rlat2 - rlat1;
    let deltaLng = rlng2 - rlng1;
    // Haversine Formula
    // a is everything under the square root
    // d is everything outside of the parenthesis
    // https://en.wikipedia.org/wiki/Haversine_formula
    let a = Math.pow(Math.sin(deltaLat/2), 2) + Math.cos(rlat1) * Math.cos(rlat2) * Math.pow(Math.sin(deltaLng/2), 2);
    let d = 2*Math.asin(Math.sqrt(a));
    let dr = d * r
    return Math.round(dr * 100) / 100;
}
