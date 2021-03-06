
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

function ls() {
  var curDirObj = getDirObjPath();
// if there is something in the folder
  if (curDirObj) {
    var values = [];
    Object.keys(curDirObj).forEach(function(e,i) {
      values.push(curDirObj[e]);
    });
    var htmlString = "";
    var keys = Object.keys(curDirObj);
    for (var i=0; i< values.length; i++) {
    // console.log(JSON.stringify(values[i]) + ": " + typeof(values[i]));
      if (typeof(values[i]) === 'string' && values[i].match(/^http/)) {
        htmlString += "<a class='terminal-a' href='" + values[i] + "'>" + values[i] + "</a><br>";
      } else if (typeof(values[i]) === 'string' && values[i].match(/^..\/img/)) {
        htmlString += "<img class='terminal-img' width='300px' src='" + values[i] + "'><br>";
      } else if (typeof(values[i]) === 'string') {
          htmlString += "<span>"+values[i]+"</span><br>";
      } else {
        htmlString += "<span>"+keys[i]+"</span><br>";
      }
    }
    return htmlString;
  }
// if there is nothing in the folder
  return '';
}

function cd(path, dir) {
  var curDirObj = getDirObjPath();
  if (curDirObj) {
    var ls = Object.keys(curDirObj);
    if (curDirObj.title && path !== ".." && path !== "~" && path !== "") {
      return 'Cannot cd. This is not a directory';
    }
    for (item in ls) {
      if (ls[item] === path) {
        currentDirectory.push(path);
        return '';
      }
    }
    if (path === "..") {
      if (currentDirectory.join(",") === 'home') return '';        // prevent ability to "cd .." while in the root
      currentDirectory.pop();                                   // pop a path off to go into parent directory
      return '';
    } else if (path === "" || path === "~") {
      currentDirectory = currentDirectory.slice(0,1);
      return '';
    } else {
      return 'Error: Invalid input. For help run command: man';
    }
  } else {
    console.log("6: didn't find current directory");
    return 'Error: Invalid Input. For help run commmand: man';
  }
  console.log("4: didn't find dir cd'ing into");
  return 'Error: Could not find specified directory.';
}

function pwd(currentDir) {
  return currentDir.join("/");
}

// shows a history of all the commands from the current session
function history() {
  var temp = "";
  for (var i=0; i<commandHistory.length; i++) {
    temp += commandHistory[i]+"<br>";
  }
  return temp;
}
