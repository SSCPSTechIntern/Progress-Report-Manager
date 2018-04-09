/**
 * Creates a menu entry in the Google Docs UI when the document is opened.
 *
 * @param {object} e The event parameter for a simple onOpen trigger. To
 *     determine which authorization mode (ScriptApp.AuthMode) the trigger is
 *     running in, inspect e.authMode.
 */
function onOpen(e) {
  // create menu item to open Plugin sidebar
  SpreadsheetApp.getUi().createAddonMenu()
      .addItem('Start', 'showSidebar')
      .addToUi();
  // set DEV_MODE property to 0 because that page doesn't load by default
  var userProperties = PropertiesService.getUserProperties();
  var propUserDevMode = userProperties.getProperty('DEV_MODE');
  userProperties.setProperty('DEV_MODE', '0');
  var propUserDevMode = '0';
}

/**
 * Runs when the add-on is installed.
 *
 * @param {object} e The event parameter for a simple onInstall trigger. To
 *     determine which authorization mode (ScriptApp.AuthMode) the trigger is
 *     running in, inspect e.authMode. (In practice, onInstall triggers always
 *     run in AuthMode.FULL, but onOpen triggers may be AuthMode.LIMITED or
 *     AuthMode.NONE.)
 */
function onInstall(e) {
  onOpen(e);
}

/**
 * Used to open only the first sidebar.
 */
function showSidebar() {
  var ui = HtmlService.createHtmlOutputFromFile('Sidebar01')
      .setTitle('Progress Report Start');
  SpreadsheetApp.getUi().showSidebar(ui);
  var userProperties = PropertiesService.getUserProperties();
  var propUserDevMode = userProperties.getProperty('DEV_MODE');
  userProperties.setProperty('DEV_MODE', '0');
  var propUserDevMode = '0';
}

/**
 * Used to open only the development sidebar used to test coding.
 */
function showSidebarDEV() {
  var ui = HtmlService.createHtmlOutputFromFile('SidebarDEV')
      .setTitle('Development Sidebar');
  SpreadsheetApp.getUi().showSidebar(ui);
  var userProperties = PropertiesService.getUserProperties();
  var propUserDevMode = userProperties.getProperty('DEV_MODE');
  userProperties.setProperty('DEV_MODE', '1');
  var propUserDevMode = '1';
}


/**
 * Asks the user for the password defined below.  Not much for security, as it
 * assumes if you know how to get into the script editor.  But it gives easy
 * access for people to test stuff, the button & all can always be commented out
 * or for production use.  If the "devMode" property is enabled, no password is
 * requested.
 *
 * changes the property & variable to enable "devMode", loads the SidebarDEV
 */
function confirmDevMode() {
  // if DevMode already enabled, don't need to do anything, but should at least tell the user
  var userProperties = PropertiesService.getUserProperties();
  var propUserDevMode = userProperties.getProperty('DEV_MODE');
  if (propUserDevMode != '1') {
    var pwdVar = 'tworkshop';
    var ui = SpreadsheetApp.getUi();
    var devModeDialogResult = ui.prompt(
        'Enable Dev Mode?',
        'This will enable the developer sidebar.  Do not run those processes'
        + '\nunless you know what they do.  BE CAREFUL!'
        + '\nEnter password to enable:',
        ui.ButtonSet.OK_CANCEL);
    // grab the user's response.
    var devModeDialogResultButtonVal = devModeDialogResult.getSelectedButton();
    var devModeDialogResultTextVal = devModeDialogResult.getResponseText();
    // process the user's response.
    if (devModeDialogResultButtonVal == ui.Button.OK) {
      // User clicked "OK".
      if (devModeDialogResultTextVal == pwdVar) {
        userProperties.setProperty('DEV_MODE', '1');
        var propUserDevMode = '1';
      } else {
        ui.alert('Incorrect value, Dev Mode not enabled.');
        userProperties.setProperty('DEV_MODE', '0');
        var propUserDevMode = '0';
      }
    } else {
      userProperties.setProperty('DEV_MODE', '0');
      var propUserDevMode = '0';
    }
  }
  if (propUserDevMode != '1') {
    showSidebar();
  } else {
    showSidebarDEV();
  }
}

/**
 * The purpose of this is the bring the user back to the beginning and to turn
 * off "devMode".
 *
 * changes the property to disable "devMode"
 * load Sidebar01.html
 */
function leaveDevMode() {
  var userProperties = PropertiesService.getUserProperties();
  userProperties.setProperty('DEV_MODE', '0');
  var propUserDevMode = '0';
  //SpreadsheetApp.getUi().alert('Dev Mode disabled.');
  showSidebar();
}

/**
 * The purpose of this is a sample of grabbing data from spreadsheet
 * and insert it into a drop-down select in HTML file.
 *
 */
function getSelectTermOptionsFromGS() {
  //SpreadsheetApp.getUi().alert('Inside getOptionsFromGS().');
  //var buildArray = new Array("A", "B", "C", "D", "E","F");
  var dataArrayFromSheet = getVariablesFromSheet('Standards Config');
  var buildArray = [];
  for(var i = 0; i < dataArrayFromSheet.length; i++) {
    if (dataArrayFromSheet[i][1] == 'X1') {
      buildArray.push(dataArrayFromSheet[i][2]);
    }
  };
  return (buildArray);
}
