var oatts = require('oatts');

var options = {
    // see "Options" section below for available options
    "spec": "./openAPI/openapi.yaml",
    "customValuesFile": "./openAPI/customValues.json",
    "writeTo": "./test/."
};

var tests = oatts.generate('./openAPI/openapi.yaml', options);

console.log(tests)
