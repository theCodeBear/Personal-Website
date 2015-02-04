
function portfolio() {
  return "this is portfolio";
}

function ls() {
  if (directory[currentDirectory])
    return Object.keys(directory[currentDirectory]).join("<br>");
  return '';
}

function cd(path, dir) {
  console.log("1: entered cd()");
  console.log('current Directory: ' + dir[currentDirectory]+','+dir+','+currentDirectory);
  if (dir[currentDirectory]) {
    console.log("2: found current directory");
    var ls = Object.keys(dir[currentDirectory]);// || "";
    console.log(ls);
    // ls = ls.split(",");
    for (item in ls) {
      console.log(ls[item]);
      if (ls[item] === path) {
        console.log("3: found dir cd'ing to");
        console.log('dir: ' +dir);
        console.log('curdir: ' + currentDirectory);
        console.log('path: ' + path);
        console.log(dir[currentDirectory][path]);
        console.log(Object.keys(dir[currentDirectory][path]));
        var keys = Object.keys(dir[currentDirectory][path]);
        var values = [];
        Object.keys(dir[currentDirectory][path]).forEach(function(e, i) {
          values.push(dir[currentDirectory][path][e]);
        });
        console.log(values);
        var htmlString = "";
        for (var i=0; i<values.length; i++) {
          htmlString += "<a href='"+values[i]+"'>"+keys[i]+"</a><br>";
        }
        // console.log(Object.values(dir[currentDirectory][path]));
        // return JSON.stringify(dir[currentDirectory][path]);
        currentDirectory += path;
        return htmlString;
      }
    }
    if (path === "..") {
      console.log("5: happens on ..");
      alert("..");
      return "went up";
    }
  } else {
    console.log("6: didn't find current directory");
    return 'Error: Invalid Input. For help run commmand: help';
  }
  console.log("4: didn't find dir cd'ing into");
  return 'Error: Invalid Input. For help run commmand: help';
}

function pwd(currentDir) {
  return currentDir;
}


$(function() {

});
