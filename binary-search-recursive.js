//binary search recursive solution


function binarySearch(arr, val, start, end){

    if(start > end ) return false;  // base case
    
    const middle = Math.floor((start + end) / 2);
    
    if(arr[middle] === val) return middle;  //we found our value
    
    if(arr[middle] > val) 
    return binarySearch(arr, val, start, middle -1);
    //recursive callback to search from the start towards the middle
    
    //if middle is greater than val, we start searching from the end and ignore everything from middle to start
    
    else
    return binarySearch(arr, val, middle + 1, end);
    //recursive callback to search from the end towards the middle
    /**otherwise, if middle is less than val, we start searching from the start towards the middle
    and ignore eveyrhting from the middle to the end**/
    
    }
