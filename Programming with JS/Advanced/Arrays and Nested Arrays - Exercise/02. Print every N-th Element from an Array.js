function everyNEl (arr,n){
    const result = [];
for (let index = 0; index < arr.length; index+=n) {
    result.push(arr[index]);
}
return result
}

console.log(everyNEl(['5', 
'20', 
'31', 
'4', 
'20'], 
2
));