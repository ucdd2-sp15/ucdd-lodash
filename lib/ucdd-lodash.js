/**
 * Gets the first element of `array`.
 *
 * @example
 *
 * _.first([1, 2, 3]);
 * // => 1
 *
 * _.first([]);
 * // => undefined
 */
function first(array) {
    if (array.length === 0)
        return undefined
    else
        return array[0]
}

/**
 * Gets all but the first element of `array`.
 *
 * @example
 *
 * _.rest([1, 2, 3]);
 * // => [2, 3]
 */
	  
function rest(array) 
{//create an empty array to hold the rest of the values in the original array
    var newArray = []
    if (array.length <= 1)
    {//if the array only has 1 value, then we return an empty array
        return newArray
    }
    else
    {//otherwise, we loop through the array and push the values into the newArray
        for (var i = 1; i < array.length; ++i) 
        {
            newArray.push(array[i])
        };
        //once complete, we return the newArray
        return newArray
    };
}

/**
 * Gets the index at which the first occurrence of `value` is found in `array`
 *
 * @example
 *
 * _.indexOf([1, 2, 3, 1, 2, 3], 2);
 * // => 1
 *
 */
function indexOf(array, value) 
{//Create a for loop that will loop through the size of the array
    for (var i = 0; i < array.length; i++) 
    {//I check to see if the values match
        if (array[i] == value) 
            {//at the very first instance the value matches, I return the index
                return i
            };
    };//Otherwise, the value is not found in the array
    return "Value does not exist in array"
    //return "not yet implemented"
}

/**
 * Creates an array with all falsey values removed. The values `false`, `null`,
 * `0`, `""`, `undefined`, and `NaN` are falsey.
 *
 * @example
 *
 * _.compact([0, 1, false, 2, '', 3]);
 * // => [1, 2, 3]
 */
function compact(array) {
 var array_1 = [];
 for (var i=0; i<array.length ; i++)
 {	index=array[i];
 	if (index!=null && index!= false && index != 0 &&index!= "" && index != undefined && index != NaN) 
		array_1.splice(i,0,array[i])
	}

	return array_1; 
}

/**
 * Gets the value of a specified property from all objects in an array
 *
 *  @example
 *
 * var users = [
 *   { 'user': 'barney', 'age': 36 },
 *   { 'user': 'fred',   'age': 40 }
 * ];
 *
 * _.pluck(users, 'user');
 * // => ['barney', 'fred']
 *
 */
function pluck(array, key) { 
    var retArr = [];
    array.forEach(function(obj){
        if(obj[key]) {
            retArr.push(obj[key])
        }
    })
    return retArr;
}


/**
 * Creates an array excluding all provided values 
 *
 * @example
 *
 * _.without([1, 2, 1, 0, 3, 1, 4], 0, 1);
 * // => [2, 3, 4]
 */
function without(array) {
    // Hint: Read this article about using the "arguments" variable
    // to access all provided values
    //
    // http://www.w3schools.com/js/js_function_parameters.asp
    //
    //
    //create an empty array to be returned
    var newArray = [];

	for(var j = 0; j < array.length; j++){
		
		var x = array[j];

    	var shouldAdd = true;
    	for(var i = 1; i < arguments.length; i++){
    		if(x == arguments[i]){
    			shouldAdd = false;
    			break;
    		}
    	}

    	if(shouldAdd==true)
    		newArray.push(x);
	};

    return newArray;
}

// Export functions
var lib = {}
lib.first = first
lib.rest = rest
lib.indexOf = indexOf
lib.compact = compact
lib.without = without
lib.pluck = pluck

module.exports = lib
