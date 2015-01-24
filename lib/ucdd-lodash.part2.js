/**
 * Creates an array of numbers (positive and/or negative) progressing from
 * `start` up to, but not including, `end`.
 *
 * _.range(4);
 * // => [0, 1, 2, 3]
 *
 * _.range(1, 5);
 * // => [1, 2, 3, 4]
 *
 * _.range(0);
 * // => []
 */
function range(start, end) {
	var myArray = [];
	var i = start;
	if (end == NULL) {

		if (start == 0) {
			return myArray;
		} else {
			i = 0;
			var end = start;
		}
	}

    for (i; i < end; i++) {
    	myArray.push(i);
    }

    return myArray;
}


/**
 * Creates an object composed of the picked `object` properties. Property
 * names may be specified as individual arguments or as arrays of property
 * names.
 *
 * var object = { 'user': 'fred', 'age': 40 };
 *
 * _.pick(object, 'user');
 * // => { 'user': 'fred' }
 *
 */
function pick(object, propertyNames) {
	var myArray = propertyNames;
	var finalArray = [];
	for (i = 0; i < propertyNames.length; i++) {
		finalArray.push(object[propertyNames[i]].property);
	}
    return finalArray;
}


/**
 * Checks if `predicate` returns true for **any** element of `collection`.
 * The function returns as soon as it finds a passing value and does not iterate
 * over the entire collection. The predicate is invoked with (value)
 */
function some(collection, predicate) {
    for (i = 0; i < collection.length; i++) {
    	if (collection[i] == predicate(value)) {
    		return collection[i];
    	}
    }
    return false;
}

/**
 * Checks if the given callback returns true value for **all** elements of a collection.
 */
function every(collection, predicate) {
	var val = 0;
    for (i = 0; i < collection.length; i++) {
    	if (collection[i] == predicate(value)) {
    		val++;
    	}
    }
    if (val == collection.length) {
    	return true;
    } else{
    	return false;
    }
}

/**
 * Iterates over elements of `collection`, returning the first element
 * that have the properties of the given
 * object, else `false`.
 *
 * var users = [
 *   { 'user': 'barney',  'age': 36, 'active': false },
 *   { 'user': 'fred',    'age': 40, 'active': true },
 *   { 'user': 'pebbles', 'age': 1,  'active': false }
 * ];
 *
 *
 * _.find(users, { 'age': 1 })
 * // => { 'user': 'pebbles', 'age': 1,  'active': false }
 *
 */
function find(collection, object) {
	var myArray = collection;

	for (i = 0; i < myArray.length; i++) {
		if (myArray[i].match(object)) {
			return myArray[i]
		}
	}

	return false;
}

// Export functions
var lib = {}
lib.range = range
lib.pick = pick
lib.some = some
lib.every = every
lib.find = find

module.exports = lib