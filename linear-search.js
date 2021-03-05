//linear search.  Time Complexity O(n), performs at O(n) on smaller sorted or unsorted arrays.


/**For large arrays, binary search is ideal.
 * However, in order to implement binary search, our array must be sorted**/


 function linearSearch(arr, key){

    for(let item of arr){
        if(arr[item] === key) return item;
    }

    return -1


 }
