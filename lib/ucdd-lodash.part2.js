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
  var toReturn = [];
  if (end){ //User gave start and end
    var myStart = start;
    var myEnd = end;
  }
  else { //No specified end
    var myStart = 0;
    var myEnd = start;
  }
  //build return array
  for (i = myStart; i < myEnd; i++){
    toReturn.push(i);
  }
  return toReturn;
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
  toReturn = {}
  if (propertyNames){
    for (i in propertyNames){
      toReturn[propertyNames[i]] =  object[propertyNames[i]]
    }
  }
  return toReturn 
}


/**
 * Checks if `predicate` returns truthy for **any** element of `collection`.
 * The function returns as soon as it finds a passing value and does not iterate
 * over the entire collection. The predicate is invoked with (value)
 */
function some(collection, predicate) {
    toReturn = false
    for (i in collection){
      if (predicate(collection[i])) {
        return true  
      }
    }
    return false
}

/**
 * Checks if the given callback returns truthy value for **all** elements of a collection.
 */
function every(collection, predicate) {
    toReturn = true
    for (i in collection){
      toReturn = toReturn && predicate(collection[i]) 
    }
    return toReturn
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
    var toReturn = {}
    //examine each item in collection individually
    for (i in collection){
      //examine each field in object individually
//Some kinky goto break for when object has multiple requirements
myloop:
      for (var key in object){
        if (collection[i][key] == object[key]) {
          return collection[i]
        }
        else {
          break myloop
        }
      }
    } 
    return false
}

// Export functions
var lib = {}
lib.range = range
lib.pick = pick
lib.some = some
lib.every = every
lib.find = find

module.exports = lib
