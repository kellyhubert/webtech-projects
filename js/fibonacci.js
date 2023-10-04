
function fibonacci(n){
var output =[];
    if(n === 1){
 return output =[0];
    }
    else if (n === 2){
        return output =[0,1]; 
    }
    else {
        for(i =2; i<n; i++){
            output.push(output[output.leng-2] + output[output.length-1]);
        }
    }
       return output ;
    
}
output= fibonacci(5);
console.log(output);  