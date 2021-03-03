// linear search recursive 
//time complexity O(n)

function linearSearch(arr, element, val){

    if(element < 0) return -1;  //base case if our value is not found return -1

    if(arr[element] === val) return i;  //if our value is found

    linearSearch(arr, element-1, val); // recursive call back


}
