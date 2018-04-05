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
