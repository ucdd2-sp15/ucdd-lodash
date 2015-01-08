var theirLodash = require('lodash')
var ourLodash = require('../lib/ucdd-lodash.js')

var debug = require('debug')('test')
var chalk = require('chalk')

// test data
var users = [{
    user: 'barney',
    age: 36
}, {
    user: 'fred',
    age: 40
}]

// helper function to test a given expression using our implementation and their implementation
// of lodash library methods, and show the results as debug messages
function test(expression) {
    var _, ourResult, theirResult

    // bind the variable _ to our implementation
    _ = ourLodash
    ourResult = eval(expression)

	// bind the variable _ to their implementation
    _ = theirLodash
    theirResult = eval(expression)

    debug(chalk.green(expression))
    debug("\tTheirs: " + theirResult)
    debug("\tOurs  : " + ourResult)
}

function test_first() {
    test('_.first([1,2,3])')
    test('_.first([1,])')
    test('_.first([])')
}

function test_rest() {
    test("_.rest([1,2,3])")
    test("_.rest([2,3])")
    test("_.rest([3])")
    test("_.rest([])")    
}

function test_indexOf() {
	test("_.indexOf([1, 2, 3, 1, 2, 3], 2)")
	test("_.indexOf([1, 2, 3, 1, 2, 3], 3)")
}

function test_compact() {
	test("_.compact([0, 1, false, 2, '', 3, undefined])")
	test("_.compact([0, 1, 2])")
}

function test_without() {
	test("_.without([1, 2, 1, 0, 3, 1, 4], 0, 1)")
	test("_.without(['good','good','bad','good'], 'bad')")	
}


function test_pluck() {
    test("_.pluck(users, 'age')")
    test("_.pluck(users, 'user')")
}

test_first()
test_rest()
test_indexOf()
test_without()
test_compact()
test_pluck()