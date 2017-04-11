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
  var stringToFind = "Subatizing";
  var stringToReplace = "Subitizing";
  //get needed variables
  var currentYear = GetConfig("currentYear");
  var currentTerm = GetConfig("currentTerm");
  var currentClassName = GetConfig("currentClassName");
  var currentClassFolderObject = GetConfig("currentClassFolderObject");

  //now do stuff
  var ui = SpreadsheetApp.getUi();
  var result = ui.alert('Start processing Pod ' + currentClassName + ' to replace ' + stringToFind + ' with ' + stringToReplace + '?', ui.ButtonSet.YES_NO);
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
      var currentDocumentBody = currentDocumentObject.getBody();
      var currentDocumentFooter = currentDocumentObject.getFooter();
      currentDocumentBody.replaceText(stringToFind,stringToReplace);
      //use this for footer
      //currentDocumentFooter.replaceText(stringToFind,stringToReplace);
    }
    SpreadsheetApp.getUi().alert('Finished replacement:  ' + currentClassName + '.');
  }
}

// NOT COMPLETE
// giving up on this idea right now, going to use GAM & python...
// reason is that Google Docs can't have different header every X pages, just the first page
function PrintByPod() {
  //get needed variables
  var currentYear = GetConfig("currentYear");
  var currentTerm = GetConfig("currentTerm");
  var currentClassName = GetConfig("currentClassName");
  var currentClassFolderObject = GetConfig("currentClassFolderObject");
  var currentFolderCombinedPodFilesID = GetConfig("currentFolderCombinedPodFilesID");

  // set some derived variables from the start
  var currentFileNameCombinedPod = "Combined Progress Reports for " + currentClassName + ", " + currentYear + ", " + currentTerm;
  var currentFolderCombinedPodFilesObject = DriveApp.getFolderById(currentFolderCombinedPodFilesID);


  // create combined file for the pod & get object to it
  var currentFileCombinedPod = currentFolderCombinedPodFilesObject.createFile(currentFileNameCombinedPod,"");

  var ui = SpreadsheetApp.getUi();
  var result = ui.alert('Create combined file for ' + currentClassName + '?', ui.ButtonSet.YES_NO);
  if (result == ui.Button.YES) {
  // now cycle through files for a Pod
    var existingFiles = currentClassFolderObject.getFiles();
    while (existingFiles.hasNext()) {
      var currentFileObject = existingFiles.next();
      var currentFileName = currentFileObject.getName();
      //SpreadsheetApp.getUi().alert('currentFileName: ' + currentFileName);
      var currentFileID = currentFileObject.getId();

      // though the function works, the idea won't.  the footer can't change every few pages.
      //var numberOfPagesInDoc = countPages(currentFileObject);
      //SpreadsheetApp.getUi().alert("There are " + numberOfPagesInDoc + " pages for the " + currentFileName + " document.");

      // instead, can I create PDF for printing for each file?
      currentFileObject.getAs('application/pdf');
    }
  }
}
