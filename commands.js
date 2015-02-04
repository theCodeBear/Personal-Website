
function getDirObjPath() {
  var curDirObj;
  switch (currentDirectory.length) {
    case 1:
      curDirObj = directory[currentDirectory[0]];
    break;
    case 2:
      curDirObj = directory[currentDirectory[0]][currentDirectory[1]];
    break;
    case 3:
      curDirObj = directory[currentDirectory[0]][currentDirectory[1]][currentDirectory[2]];
    break;
    case 4:
      curDirObj = directory[currentDirectory[0]][currentDirectory[1]][currentDirectory[2]][currentDirectory[3]];
    break;
  }
  return curDirObj;
}

function portfolio() {
  return "this is portfolio";
}

function ls() {
  var curDirObj = getDirObjPath();
  if (curDirObj)
    return Object.keys(curDirObj).join("<br>");
  return '';
}

function cd(path, dir) {
  console.log("1: entered cd()");
  // console.log('current dirObjectory: ' + JSON.stringify(dir[currentDirectory[0]][currentDirectory[1]]) +', '+JSON.stringify(dir)+', '+currentDirectory);
  curDirObj = getDirObjPath();
  if (curDirObj) {
    console.log("2: found current directory");
    var ls = Object.keys(curDirObj);
    // console.log(ls);
    // ls = ls.split(",");
    for (item in ls) {
      // console.log(ls[item]);
      if (ls[item] === path) {
        // console.log("3: found dir cd'ing to");
        var keys = Object.keys(curDirObj[path]);
        var values = [];
        Object.keys(curDirObj[path]).forEach(function(e, i) {
          values.push(curDirObj[path][e]);
        });
        // console.log(values);
        // var htmlString = "";
        // for (var i=0; i<values.length; i++) {
        //   htmlString += "<a href='"+values[i]+"'>"+keys[i]+"</a><br>";
        // }
        currentDirectory.push(path);
        // return htmlString;
        return '';
      }
    }
    if (path === "..") {
      console.log("5: happens on ..");
      // prevent ability to "cd .." while in the root
      if (currentDirectory.join(",") === '/') return '';
      // pop a path off to go into parent directory
      currentDirectory.pop();
    } else if (path === "" || path === "~") {
      currentDirectory = currentDirectory.slice(0,1);
      return "";
    } else {
      return 'Error: Invalid input. For help run command: help';
    }
  } else {
    console.log("6: didn't find current directory");
    return 'Error: Invalid Input. For help run commmand: help';
  }
  console.log("4: didn't find dir cd'ing into");
  return 'Error: Could not find specified directory.';
}

function pwd(currentDir) {
  return currentDir.join("");
}

// shows a history of all the commands from the current session
function history() {
  var temp = "";
  for (var i=0; i<commandHistory.length; i++) {
    temp += commandHistory[i]+"<br>";
  }
  return temp;
}

$(function() {

});
