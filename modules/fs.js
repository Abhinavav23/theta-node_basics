// const fs = require('fs');
console.log("start");
const {
  mkdir,
  mkdirSync,
  readdir,
  rmdir,
  writeFile,
  appendFile,
  readFile,
  rm
} = require("fs");
/*
// can create a new directory
// a. asyc way
// 1. path name
// 2. callback --> recieves a parameter err which can tell you about the error

fs.mkdir("./new", (err) => {
    // console.log("err", err);
    if(err){
        console.log("Err:", err)
    }else{
        console.log("dir created successfully");
    }
})

// b. sync way
// try{
//     fs.mkdirSync("./new");
// }catch(err){
//     console.log('err');
// }
 
// --------------
// reading a dir
readdir("./new", (err, dirs) => {
    if (err) {
      console.log("Err:", err);
    } else {
      console.log("dir read successfully", dirs);
    }
})

// delete a dir
rmdir("./new", { recursive: true }, (err, dirs) => {
  if (err) {
    console.log("Err:", err);
  } else {
    console.log("dir delete successfully", dirs);
  }
});



// file creation
// if file not there --> will create a new file and write the content
// if file is there --> will write content in the file
// it will always overwrite the content
writeFile("./userList.txt", "Abhinav ", (err) => {
  if (err) {
    console.log("Err:", err);
  } else {
    console.log("file created successfully");
  }
});

appendFile("./userList.txt", "Abhijeet ", (err) => {
  if (err) {
    console.log("Err:", err);
  } else {
    console.log("file created successfully");
  }
});
*/

readFile("./userList.txt", "utf-8", (err, content) => {
  if (err) {
    console.log(`Err: ${err}`);
  } else {
    // console.log("content", content.toString());
    console.log("content", content);
  }
});

console.log("end");
