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
    var returnArr = [];
    if(arguments.length == 2) {
        for(var i = start; i < end; i++) {
            returnArr.push(i);
        }
    } else if(arguments.length == 1) {
        for(var i = 0; i < start; i++) {
            returnArr.push(i);
        }
    }
    return returnArr;
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
    var returnObj = {};
    if(propertyNames && propertyNames.length > 1) {
        propertyNames.forEach(function(prop) {
            if(object[prop]){
                returnObj[prop] = object[prop]; 
            }
        })
    } else if (propertyNames){
        if(object[propertyNames]){
            returnObj[propertyNames] = object[propertyNames]; 
        }
    }
    return returnObj;
}


/**
 * Checks if `predicate` returns truthy for **any** element of `collection`.
 * The function returns as soon as it finds a passing value and does not iterate
 * over the entire collection. The predicate is invoked with (value)
 */
function some(collection, predicate) {
    var found = false;
    collection.forEach(function(item) {
        found = predicate(item);
        if(found){
            return found;
        }
    })
    return found;
}

/**
 * Checks if the given callback returns truthy value for **all** elements of a collection.
 */
function every(collection, predicate) {
    var found = false;
    for(var i = 0; i < collection.length; i++) {
        found = predicate(collection[i]);
        if(!found)
            break;
    }
    return found;
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
    var returnObj = false;
    var keys = Object.keys(object);
    for(var i = 0; i < collection.length; i++) {
        var currentItem = collection[i];
        var found = false;
        for(var j = 0; j < keys.length; j++) {
            var key = keys[j];
            if(currentItem[key] == object[key]) {
                found = true;
            } else {
                break;
            }
        }
        if(found) {
            returnObj = currentItem;
            break;
        }
    }
    return returnObj;
}

// Export functions
var lib = {}
lib.range = range
lib.pick = pick
lib.some = some
lib.every = every
lib.find = find

module.exports = lib
