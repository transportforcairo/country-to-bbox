const bbox = require('./bbox.json');


module.exports = (country) => {
	return bbox[country]
}