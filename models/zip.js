const mongoose = require('mongoose');

const zipSchema = mongoose.Schema({

	Zipcode : Number,
	ZipCodeType : String,
	City : String,
	State : String,
	LocationType : String,
	Lat : Number,
	Long : Number,
	Location : String,
	Decommisioned : Boolean,
	TaxReturnsFiled : String,
	EstimatedPopulation : String,
	TotalWages : String

});

zipSchema.methods.apiRepr = function () {
    return {
        id : this.id,
        Zipcode : this.Zipcode,
        ZipCodeType : this.ZipCodeType,
        City : this.City,
        State : this.State,
        LocationType : this.LocationType,
        Lat : this.Lat,
        Long : this.Long,
        Location : this.Location,
        Decommisioned : this.Decommisioned,
        TaxReturnsFiled : this.TaxReturnsFiled,
        EstimatedPopulation : this.TaxReturnsFiled,
        TotalWages : this.totalWages
    };
};

/* alertSchema.statics.findByFlag = function (flag) {
    return this.find({ 'alert.removeFlag': flag });
}; */

const zip = mongoose.model('zip', zipSchema, 'zip');

module.exports = { zip };