'use strict';
var mocha = require('mocha');
var chakram = require('chakram');
var request = chakram.request;
var expect = chakram.expect;

describe('tests for /industrialcodes', function() {
    describe('tests for get', function() {
        it('should respond 200 for "A list of industrial codes."', function() {
            var response = request('get', 'http://localhost:8080/industrialcodes', { 
                'headers': {"Content-Type":"application/json","Accept":"application/json"},
                'time': true
            });

            expect(response).to.have.status(200)
            expect(response).to.have.schema({"type":"array","items":{"type":"object","required":["id","industrialcode","description"],"properties":{"id":{"type":"integer","format":"int64"},"industrialcode":{"type":"string"},"description":{"type":"string"}}}});
            return chakram.wait();
        });    
    });
    
    describe('tests for post', function() {
        it('should respond 201 for "Created"', function() {
            var response = request('post', 'http://localhost:8080/industrialcodes', { 
                'body': {"industrialcode":"nostrud D","description":"Duis ullamco sunt laboris"},
                'headers': {"Content-Type":"application/json","Accept":"application/json"},
                'time': true
            });

            expect(response).to.have.status(201)
            return chakram.wait();
        });    
    });
});