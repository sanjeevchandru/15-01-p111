document.write("75.to create an array taking the middle elements of the two arrays of integer and each length 3."+"<br>");
function test75(arr1,arr2){
    var z=[];
    z.push(arr1[1]);
    z.push(arr2[1]);
    return z;
}
document.write("The array's are :[1,2,3], [1,2,3], ans :"+test75([1,2,3],[1,2,3])+"<br><br>");