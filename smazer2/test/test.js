var expect = require('chai').expect;
var ex = require('./ex.js').load('./exercise.js');

var testPoints = [];
testPoints.push({x:0,y:0});
testPoints.push({x:0,y:10});
testPoints.push({x:10,y:0});
testPoints.push({x:10,y:10});

describe('Calculate Centroid', function() {
	it('Centroid matches expected', function() {
		var centroid = ex.calculateCentroid(testPoints);
	    expect(centroid.x).to.equal(5);
	    expect(centroid.y).to.equal(5);
	});
});