// performs better than linear search when searching through a large array
//However binary search can only be implemented on sorted arrays
//Time complexity O(log n)

function BinarySearch(arr, key){

    let start = 0;
    let end = arr.length -1;

    while(start <= end){ // while our start is less than the end, we have a middle

        const middle = Math.floor((start + end) / 2);  

        if(arr[middle] === key) return middle;  
    //if our value is found in the middle, return the middle

        if(arr[middle] > key ) end = middle -1; 
        else start = middle + 1;
    /**if the  value in the middle is greater than key, we ignore all the values from the start to the middle,
     and begin our search from the end. Otherwise, if the value in the middle is less than key, we ignore everything from the middle to the 
     end and begin our search from the start towards the midde.**/

    }

    return -1;

}
