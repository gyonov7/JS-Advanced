function addAndRemove(arr) {
  const result = [];
  let currNum = 0;
  for (let index = 0; index < arr.length; index++) {
    const command = arr[index];
    currNum++;
    if (command == "add") {
      
      result.push(currNum);
    } else {
      result.pop();
    }
  }
  if (result.length>0) {
    console.log(result.join('\n'));
  } else {
    console.log("Empty");
  }
}

addAndRemove(['remove', 
'remove', 
'remove']
);
