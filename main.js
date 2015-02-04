var currentDirectory = Object.keys(directory);
var commandHistory = [];
var commandHistoryIndex = 0;

$(function() {
  // set the focus to the terminal input (textbox) when the page loads
  $("input").focus();

  // holds the latest input from the user
  var input;
  var display;

  // click anywhere on screen and the focus returns to the current terminal input
  $(document).on("click", function() {
    $('input').last().focus();
  });

  // on enter press execute command
  $(document).keydown(function(event) {


    if (event.which == 13) {                // on ENTER press execute command
      input = $("input").last().val();
      // adds latest user input to the history array if it wasn't empty
      if (input)
        commandHistory.push(input);
      // call commands function to get actions to commands
      display = commands(input);
      // display the results of the commands
      $('body').append($('<div class="orange indent">'+display+'</div>'));
      // make the textbox readonly since the user has already pressed enter on it
      $('input').last().prop('readonly', true);
      // create the next command line prompt and put focus on its textbox
      $('body').append($('<div>[User@ToddKronenbergWebsite] $ <input type="textbox" name="cli" id="cli" ></div>'));
      $('input').last().focus();
      // set commandHistoryIndex to end of commandHistory array for use on next prompt
      commandHistoryIndex = commandHistory.length;
    } else if (event.which == 38) {         // on UP arrow press traverse back through history of commands
      commandHistoryIndex === 0 ? commandHistoryIndex : commandHistoryIndex--;
      $('input').last().val(commandHistory[commandHistoryIndex]);
    } else if (event.which == 40) {         // on DOWN arrow press traverse back through history of commands
      commandHistoryIndex === commandHistory.length-1 ? $('input').last().val("") : $('input').last().val(commandHistory[++commandHistoryIndex]);
    }

  });


  function commands(command) {
    var arg;
    if (command.match(/^cd\s\S*/)) {
      arg = command.split(" ")[1];
      console.log('arg: ' + arg);
      return cd(arg, directory);
    } else {
      switch(command) {
        case 'help':
          return "Commands:<br><span class=indent>help, ls, cd, pwd, history</span><br><a href='#'>This colored text is a link</a>";
        break;
        case 'portfolio':
          return portfolio();
        break;
        case 'ls':
          return ls();
        break;
        case 'pwd':
          return pwd(currentDirectory);
        break;
        case 'experience':
          return "";
        break;
        case 'history':
          return history();
        break;
        default:
          return 'Error: Invalid Input. For help run commmand: help';
      }
    }
  }

});
