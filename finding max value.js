//finding largest number using minmax
function findMax(){
    let arr = [10,100,200,300,50,600];
    
    let maxValue = Math.max(...arr);
    console.log("largest number is " + maxValue);
}
findMax()


//finding largest number using for loop and if statement
function findMax(arr){
    let max = arr[0]
    for(i=0;i<arr.length;i++){
        if(arr[i] > max);
        max = arr[i];
    }
    return max
}
let arr = [1,1,3,5,6,8];
document.write("larg num is " + findMax(arr));
