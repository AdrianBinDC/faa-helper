'use strict';

var chai = require('chai');

var chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);

var expect = chai.expect;

// FIXME: Potential fuckup lurking here, double check filepath once you're further along?
var FAADataHelper = require('../faa_data_helper');

chai.config.includeSlack = true; // What does this do?

describe('FAADataHelper', function() {

	var subject = new FAADataHelper();

	var airport_code; // declares airportCode

	describe('#getAirportStatus', function() {

		context('with a valid airport code', function() {
			it('returns matching airport code', function() {

				airport_code = 'SFO'; // Original code, works

				var value = subject.requestAirportStatus(airport_code).then(function(obj) {
					return obj.IATA;
				});

				return expect(value).to.eventually.eq(airport_code);
			});
		});

		context('with an invalid airport code', function() {
			it('returns invalid airport code', function() {
				airport_code = 'PUNKYBREWSTER';
				return expect(subject.requestAirportStatus(airport_code)).to.be.rejectedWith(Error);
			});
		});
	});
})










