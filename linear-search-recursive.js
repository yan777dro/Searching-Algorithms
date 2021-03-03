// linear search recursive 
//time complexity O(n)

function linearSearch(arr, i, val){

    if(i < 0) return -1;  //base case if our value is not found return -1

    if(arr[i] === val) return i;  //if our value is found

    linearSearch(arr, i-1, val); // recursive call back


}