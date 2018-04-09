// various property statements
//var scriptProperties = PropertiesService.getScriptProperties();
//var userProperties = PropertiesService.getUserProperties();
//var documentProperties = PropertiesService.getDocumentProperties();

// this function just removes "Copy of" from the beginning of all files in a folder, if it exists
function RemoveCopyOfAllFilesInFolder() {
  //get needed variables
  var currentClassFolderObject = DriveApp.getFolderById("0B8RgM3B2REzvWUhUOEQyMC1qSHc");
  //var currentClassFolderObject = GetConfig("currentClassFolderObject");
  var existingFiles = currentClassFolderObject.getFiles();
  while (existingFiles.hasNext()) {
    var currentFile = existingFiles.next();
    var currentFileName = currentFile.getName();
    var newFileName = currentFileName;
    var testString = newFileName.substring(0, 8);
    if ('Copy of ' == testString) {
      newFileName = newFileName.substring(8, newFileName.length);
    }
    currentFile.setName(newFileName);
  }
}


// this function is similar to changing names, just define string to search for & string to replace at the top
//  maybe change this to be generic, i.e. give list of docs & pairs to search & replace?
function ChangeStringAllReportsPerPod() {
  // what to find and what to replace
  var stringToFind = "Nora's Pod";
  var stringToReplace = "Arbrenne's Pod";
  //get needed variables
  var currentYear = GetConfig("currentYear");
  var currentTerm = GetConfig("currentTerm");
  var currentClassName = GetConfig("currentClassName");
  var currentClassFolderObject = GetConfig("currentClassFolderObject");

  //now do stuff
  var ui = SpreadsheetApp.getUi();
  var result = ui.alert('Start processing Pod ' + currentClassName + ' to replace ' + String.fromCharCode(34) + stringToFind + String.fromCharCode(34) + ' with ' + String.fromCharCode(34) + stringToReplace + String.fromCharCode(34) + '?', ui.ButtonSet.YES_NO);
  if (result == ui.Button.YES) {
    SpreadsheetApp.getUi().alert('Starting replacement:  ' + currentClassName + '.');
    var existingFiles = currentClassFolderObject.getFiles();
    while (existingFiles.hasNext()) {
      var currentFile = existingFiles.next();
      var currentFileName = currentFile.getName();
      var currentStudentName = currentFileName.substring(0, currentFileName.indexOf("-") - 1);
      //SpreadsheetApp.getUi().alert('Current student: ' + currentStudentName + '.');
      var currentFileId = currentFile.getId();
      var currentDocumentObject = DocumentApp.openById(currentFileId);
      //use this for body
      var currentDocumentBody = currentDocumentObject.getBody();
      currentDocumentBody.replaceText(stringToFind,stringToReplace);
      //use this for footer
      var currentDocumentFooter = currentDocumentObject.getFooter();
      currentDocumentFooter.replaceText(stringToFind,stringToReplace);
    }
    SpreadsheetApp.getUi().alert('Finished replacement:  ' + currentClassName + '.');
  }
}


/**
 * The purpose of this is a sample of grabbing data from spreadsheet
 * and insert it into a drop-down select in HTML file.
 *
 */
function getOptionsFromGS() {
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
