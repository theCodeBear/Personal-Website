
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
  console.log('current dirObjectory: ' + JSON.stringify(dir[currentDirectory[0]][currentDirectory[1]]) +', '+JSON.stringify(dir)+', '+currentDirectory);
  var curDirObj;
  switch (currentDirectory.length) {
    case 1:
      curDirObj = dir[currentDirectory[0]];
    break;
    case 2:
      curDirObj = dir[currentDirectory[0]][currentDirectory[1]];
    break;
    case 3:
      curDirObj = dir[currentDirectory[0]][currentDirectory[1]][currentDirectory[2]];
    break;
    case 4:
      curDirObj = dir[currentDirectory[0]][currentDirectory[1]][currentDirectory[2]][currentDirectory[3]];
    break;
  }
  if (curDirObj) {
    console.log("2: found current directory");
    var ls = Object.keys(curDirObj);// || "";
    console.log(ls);
    // ls = ls.split(",");
    for (item in ls) {
      console.log(ls[item]);
      if (ls[item] === path) {
        // console.log("3: found dir cd'ing to");
        // console.log('dir: ' +dir);
        // console.log('curdir: ' + currentDirectory);
        // console.log('path: ' + path);
        // console.log(dir[currentDirectory][path]);
        // console.log(Object.keys(dir[currentDirectory][path]));
        var keys = Object.keys(curDirObj[path]);
        var values = [];
        Object.keys(curDirObj[path]).forEach(function(e, i) {
          values.push(curDirObj[path][e]);
        });
        console.log(values);
        var htmlString = "";
        for (var i=0; i<values.length; i++) {
          htmlString += "<a href='"+values[i]+"'>"+keys[i]+"</a><br>";
        }
        // console.log(Object.values(dir[currentDirectory][path]));
        // return JSON.stringify(dir[currentDirectory][path]);
        currentDirectory.push(path);
        return htmlString;
      }
    }
    if (path === "..") {
      console.log("5: happens on ..");
      currentDirectory.pop();
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
  return currentDir.join("");
}

// shows a history of all the commands from the current session
function history() {
  var temp = "";
  for (var i=0; i<commandHistory.length-1; i++) {
    temp += commandHistory[i]+"<br>";
  }
  return temp;
}

$(function() {

});
