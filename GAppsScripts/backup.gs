// this outputs commands for GAM to change permission/owner of last quarter Progress Reports
function ArchiveQuarter() {

  var foldersToCheck = [];
  //foldersToCheck.push(""); // FY15, Q1, ???
  //foldersToCheck.push(""); // FY15, Q2, ???
  //foldersToCheck.push(""); // FY15, Q3, ???
  //foldersToCheck.push(""); // FY15, Q4, ???
  foldersToCheck.push("0B8RgM3B2REzvSDUxOTVFYjhrekU"); // FY15, Q1, Nicole
  foldersToCheck.push("0B8RgM3B2REzvZWFyUTg0Zkp4Tnc"); // FY15, Q2, Nicole
  foldersToCheck.push("0B8RgM3B2REzvflotazNObDlmY2ozZlF1NzBwNkR5R0JsOVVJeUJMcDhGczRlaUF0VVFkNnM"); // FY15, Q3, Nicole
  foldersToCheck.push("0B8RgM3B2REzvfmQzLWI4UzNfMDRhREpYdG1FX29KRlI1SzlXMVRZQlY3NG1RMW45UG5RU0U"); // FY15, Q4, Nicole
  foldersToCheck.push("0B8RgM3B2REzveFNrU2xqbDJTZlU"); // FY15, Q1, Krista
  foldersToCheck.push("0B8RgM3B2REzvdVdybU5JanRCdWs"); // FY15, Q2, Krista
  foldersToCheck.push("0B8RgM3B2REzvfnRNOVg2ZEZCYlVVeUE5dVBTQllwVURvNjVzYTAyYlFTS1JRTUFjM3ROcWs"); // FY15, Q3, Krista
  foldersToCheck.push("0B8RgM3B2REzvfm5IRUMzVk1sUVBscHJUajVSSFZnVnZRTTl5OFhhZ0JCZXVWSmFNTE1UWTA"); // FY15, Q4, Krista
  foldersToCheck.push("0B8RgM3B2REzveEFQVnJyTUZ1ekk"); // FY15, Q1, Darlene
  foldersToCheck.push("0B8RgM3B2REzvcW9wYVhtNHd3Y1E"); // FY15, Q2, Darlene
  foldersToCheck.push("0B8RgM3B2REzvfnZaclFMZmV3cUdMZ1lCaWVlTG9tQ20yeWU1Z21jNjl1MGRFaWFYNy1xMUE"); // FY15, Q3, Darlene
  foldersToCheck.push("0B8RgM3B2REzvfk9UZWRadXZLVmxFLV9ZVFBld3VJSXgzeFJpX0RwWlFwQzhidmc5T21DeXc"); // FY15, Q4, Darlene
  foldersToCheck.push("0B8RgM3B2REzveGVmUTlWaUt2a28"); // FY15, Q1, Cephus
  foldersToCheck.push("0B8RgM3B2REzvX19uMTdFOHMwSW8"); // FY15, Q2, Cephus
  foldersToCheck.push("0B8RgM3B2REzvfmdLYUc3TS1IMjdYNEVxNTlYdzZ2WGhTYzNBWVRqejZkd2tVS29uVTFIR1U"); // FY15, Q3, Cephus
  foldersToCheck.push("0B8RgM3B2REzvfnlCTm92TFo5Um1lRmpWekdaaXl4SVZQekw4UEVWazNsenlpcGFJdm5wT0U"); // FY15, Q4, Cephus
  foldersToCheck.push("0B8RgM3B2REzvbE8xcy1FdExXWVk"); // FY15, Q1, Velma
  foldersToCheck.push("0B8RgM3B2REzvMDk2XzdlYWdZRTg"); // FY15, Q2, Velma
  foldersToCheck.push("0B8RgM3B2REzvfnZDTTdhRGc2OS1IRFVNVmNJblVIR2lYNTBZbUdmeWl1amVMSlNVcXJqa0U"); // FY15, Q3, Velma
  foldersToCheck.push("0B8RgM3B2REzvflJaM2JsZkExQ2g0RG1kU0d6VDlOREZJTDJaODFHblFfUWlVRm1OV1lyeDQ"); // FY15, Q4, Velma
  foldersToCheck.push("0B8RgM3B2REzvcnFpZG1kOWoyRkU"); // FY15, Q1, Nora
  foldersToCheck.push("0B8RgM3B2REzvWEo3Yi15d3BNeWM"); // FY15, Q2, Nora
  foldersToCheck.push("0B8RgM3B2REzvfnJZUGxYUVRTd3JUUVF5WGl1cUhsTkpzWThsVTR4dDJndFp5QzE2NXg2TmM"); // FY15, Q3, Nora
  foldersToCheck.push("0B8RgM3B2REzvfk8wMjhhamVUR0dza1V0QnViM3gzekJGSnpGTk1uZE9odHlNaG9mUEtwYjA"); // FY15, Q4, Nora
  foldersToCheck.push("0B8RgM3B2REzvZ3U2QmtKREtQWkU"); // FY15, Q2, Kassandra
  foldersToCheck.push("0B8RgM3B2REzvfnhnaE4zM21GbFhjckl2YWVWS2lyclYwUmxBNG1HbTgyUVBJZmtseGFxc1E"); // FY15, Q4, Kassandra
  foldersToCheck.push("0B8RgM3B2REzvQkJPcHRrM3pWOTQ"); // FY15, Q1, June
  foldersToCheck.push("0B8RgM3B2REzvTWdUOWNZaGpWRnM"); // FY15, Q2, June
  foldersToCheck.push("0B8RgM3B2REzvflFrVmVrb0h5ZncxMlJOTUZpQVdaYThtVlpmeVVnU3U5amZHNmpjN2xvejA"); // FY15, Q3, June
  foldersToCheck.push("0B8RgM3B2REzvfjdjTjZYNW5XMWF5UC15bVlsQTQ5ZWVBOE4yczl3amVrbzVTaFB5d0JxNE0"); // FY15, Q4, June
  foldersToCheck.push("0B8RgM3B2REzvejVoVXZhdS1OSGc"); // FY15, Q2, Judy
  foldersToCheck.push("0B8RgM3B2REzvfnp0cG00YXcxMmdrX001N3dDd19udXk0cW1pUWJhZ2pVRFo0azZOdU5tZms"); // FY15, Q4, Judy
  foldersToCheck.push("0B8RgM3B2REzvWFg5QmZsU1g5UHc"); // FY15, Q1, Amy
  foldersToCheck.push("0B8RgM3B2REzvd05tWGwta0xVVEE"); // FY15, Q2, Amy
  foldersToCheck.push("0B8RgM3B2REzvfk5EMk1XWUFZTkxEdnRwemFvazlYUnpldVN4U21XT05CVkwzYklQWkE4SzQ"); // FY15, Q3, Amy
  foldersToCheck.push("0B8RgM3B2REzvflpJRkpVblVrcndibmQ1V2xQQ0RjaGlfU0V2enV4ZUFCWTBSTWNRc21JYTA"); // FY15, Q4, Amy

  var textForScript = '';
  var foldersToCheckLength = foldersToCheck.length;
  for (var i = 0; i < foldersToCheckLength; i++) {
    var currentFolderObject = DriveApp.getFolderById(foldersToCheck[i]);
    var currentFileObjects = currentFolderObject.getFiles();
    while (currentFileObjects.hasNext()) {
      var currentFile = currentFileObjects.next();
      var currentFileOwnerEmail = currentFile.getOwner().getEmail();
      if (currentFileOwnerEmail != 'admin.school@sscps.org') {
        var currentFileID = currentFile.getId();
        //python ./gam/gam.py user <docOwnerEmail> update drivefile id <docIDToChange> writerscantshare
        var textForScript = textForScript + 'python ./gam/gam.py user ' + currentFileOwnerEmail + ' update drivefile id ' + currentFileID + ' writerscantshare\r';
        //python ./gam/gam.py user <docOwnerEmail> delete drivefileacl <docIDToChange> thirsch@sscps.org
        var textForScript = textForScript + 'python ./gam/gam.py user ' + currentFileOwnerEmail + ' delete drivefileacl ' + currentFileID + ' thirsch@sscps.org\r';
        //python ./gam/gam.py user <docOwnerEmail> delete drivefileacl <docIDToChange> ddelaney@sscps.org
        var textForScript = textForScript + 'python ./gam/gam.py user ' + currentFileOwnerEmail + ' delete drivefileacl ' + currentFileID + ' ddelaney@sscps.org\r';
        //python ./gam/gam.py user <docOwnerEmail> delete drivefileacl <docIDToChange> rdegennaro@sscps.org
        var textForScript = textForScript + 'python ./gam/gam.py user ' + currentFileOwnerEmail + ' delete drivefileacl ' + currentFileID + ' rdegennaro@sscps.org\r';
        //python ./gam/gam.py user <docOwnerEmail> delete drivefileacl <docIDToChange> admin.sscps@sscps.org
        var textForScript = textForScript + 'python ./gam/gam.py user ' + currentFileOwnerEmail + ' delete drivefileacl ' + currentFileID + ' admin.sscps@sscps.org\r';
        //python ./gam/gam.py user <docOwnerEmail> update drivefileacl <docIDToChange> admin.school@sscps.org role owner transferownership true
        var textForScript = textForScript + 'python ./gam/gam.py user ' + currentFileOwnerEmail + '  update drivefileacl ' + currentFileID + ' admin.school@sscps.org role owner transferownership true\r';
        //python ./gam/gam.py user admin.school@sscps.org delete drivefileacl <docIDToChange> <docOwnerEmail>
        var textForScript = textForScript + 'python ./gam/gam.py user admin.school@sscps.org delete drivefileacl ' + currentFileID + ' ' + currentFileOwnerEmail + '\r';
        //python ./gam/gam.py user admin.school@sscps.org add drivefileacl <docIDToChange> group facstaff_l1@sscps.org role reader withlink
        var textForScript = textForScript + 'python ./gam/gam.py user admin.school@sscps.org add drivefileacl ' + currentFileID + ' group facstaff_l1@sscps.org role reader withlink\r';
        //python ./gam/gam.py user admin.school@sscps.org add drivefileacl <docIDToChange> group facstaff_l2@sscps.org role reader withlink
        var textForScript = textForScript + 'python ./gam/gam.py user admin.school@sscps.org add drivefileacl ' + currentFileID + ' group facstaff_l2@sscps.org role reader withlink\r';
        //python ./gam/gam.py user admin.school@sscps.org add drivefileacl <docIDToChange> group facstaff_admin@sscps.org role writer withlink
        var textForScript = textForScript + 'python ./gam/gam.py user admin.school@sscps.org add drivefileacl ' + currentFileID + ' group facstaff_admin@sscps.org role writer withlink\r';
      }
    }
  }
  //return ContentService.createTextOutput(textForScript).downloadAsFile('ProgressReportArchive.sh');
  var driveScriptFile = DocumentApp.create('ProgressReportArchive.sh').getBody().appendParagraph(textForScript);
}




// this renames files from "FirstName LastName" to "LastName, FirstName"
function ChangeNamesToLastFirst() {
  // change below based on student grades in Pod
  // Kindergarten
  //var thisQuarterFolderObject = DriveApp.getFolderById('0B8RgM3B2REzvc0I2SWxLVERVQXM');  // Amy & Kristen's Pod S2
  //var thisQuarterFolderObject = DriveApp.getFolderById('0B8RgM3B2REzvMmhlUC1ONjcya2M');  // Kassandra & Melissa's Pod S2
  // 1st & 2nd
  //var thisQuarterFolderObject = DriveApp.getFolderById('0B8RgM3B2REzvT0lGeTRXTHNIN1U');  // Jane & Beth's Pod Q3
  //var thisQuarterFolderObject = DriveApp.getFolderById('0B8RgM3B2REzvVkRhUktvb2dtSk0');  // June & Linda's Pod Q3
  //var thisQuarterFolderObject = DriveApp.getFolderById('0B8RgM3B2REzvcVFTN2RNTXMtamc');  // Nora, Matt and Marie's Pod Q3
  //var thisQuarterFolderObject = DriveApp.getFolderById('0B8RgM3B2REzvM2hhbmxzWXBITzg');  // Sheina, Amy & Annette's Pod Q3
  // 3rd & 4th
  //var thisQuarterFolderObject = DriveApp.getFolderById('0B8RgM3B2REzvZERtTGlKMzVTTWs');  // Darlene's Pod Q3
  //var thisQuarterFolderObject = DriveApp.getFolderById('0B8RgM3B2REzvYm5JT0p1TmoxN1E');  // John's Pod Q3
  //var thisQuarterFolderObject = DriveApp.getFolderById('0B8RgM3B2REzvLXktb0pManpYVms');  // Krista's Pod Q3
  var thisQuarterFolderObject = DriveApp.getFolderById('0B8RgM3B2REzvX0lQWi1ueEZjeDg');  // Nicole's Pod Q3
  var existingFiles = thisQuarterFolderObject.getFiles();
  while (existingFiles.hasNext()) {
    var currentFile = existingFiles.next();
    var currentFileName = currentFile.getName();
    var firstName = currentFileName.substring(0,currentFileName.indexOf(' '));
    var lastName = currentFileName.substring(currentFileName.indexOf(' '),currentFileName.indexOf(' ',currentFileName.indexOf(' ')+1));
    var restOfFileName = currentFileName.substring(currentFileName.indexOf(' ',currentFileName.indexOf(' ')+1));
    var newFileName = lastName + ', ' + firstName + ' ' + restOfFileName;
    //SpreadsheetApp.getUi().alert('New name:  ' + newFileName + '.');
    currentFile.setName(newFileName);
  }
}



/**
 * Old code from menus
 *
 * Just stuff from the old sheet so I don't loose it.  I did not copy over the
 *     onOpen() stuff because the add-on functionality is overriden by it
 *     running in, inspect e.authMode.
 */

// ===========================
// = OLD Menu Item Functions =
// ===========================

//creates the reports for the current Quarter by:
//  1. from array of all students in the StudentList tab
//  2. checking for existing (valid) file & if not found uses template
//  3. if exists, make copy of file for current quarter
//TOTALLY not done, should probably redo
function menuItem_CAReports() {
  var valuesGlobalConfig = getVariablesFromSheet('GlobalConfig');
  var currentFolder = extractFrom2DArraySingleValue(valuesGlobalConfig, 'CurrentFolder');
  var currentYear = extractFrom2DArraySingleValue(valuesGlobalConfig, 'CurrentYear');
  if (currentFolder == '') {
    SpreadsheetApp.getUi().alert('Current Drive folder not defined, can not continue.');
  } else {
    if (currentYear == '') {
      SpreadsheetApp.getUi().alert('Current Year folder not defined, can not continue.');
    } else {
      var ui = SpreadsheetApp.getUi();
      var response = ui.alert('Confirmation', 'Are you sure you want to Create/Add Progress Reports?', ui.ButtonSet.YES_NO);
      if (response == ui.Button.YES) {
        var allTemplates = extractFrom2DArrayMultipleValues(valuesGlobalConfig, 'Template');
        // do more stuff here
        // check if no templates or if all templates are blank on value
        //if (!(allTemplates[index] != null) and ()) {
          //SpreadsheetApp.getUi().alert('No templates or all templates missing FileID, can not continue.');
        //} else {
          //var allClasses = getVariablesFromSheet('ClassConfig');
          // check if no ClassNames
          //if (!(allClasses[index] != null) and ()) {
            SpreadsheetApp.getUi().alert('At least one ClassName must be defined, can not continue.');
          //} else {
            // loop through each class
              // if ClassFolder empty
                // create ClassFolder in currentFolder
              // else
                // set ClassFolder = ClassName
            var allStudents = getVariablesFromSheet('StudentLists');
            var currentTemplate = '';
            var currentGrade = '';
            var previousGrade = 'Nothing yet searched, so should not exist.';
            // sort allStudents by grade & loop to check for template
              // currentGrade = allStudents[i][2];
              // if currentGrade != previousGrade, find currentTemplate
              // if currentTemplate != '', set allStudents[i][2] = currentTempalte, else allStudents[i][2] = '' & add message to errorStudents array
              // previousGrade = currentGrade
            var currentClassName = '';
            var currentClassFolder = '';
            var currentClassStudent = '';
            var previousClassStudent = 'Nothing yet searched, so should not exist.';
            // sort allStudents by ClassName & loop to check for ClassName
              // currentClassStudent = allStudents[i][0];
              // if currentClassStudent != previousClassStudent, find currentClassName & currentClassFolder
              // if currentClassName != '', set allStudents[i][0] = currentClassFolder, else allStudents[i][0] = '' & add message to errorStudents array
              // previousClassStudent = currentClassStudent
            // clean out array if empty ClassName or Grade
            // loop through students & create Progress Report
            // for (var i in allStudents) {
              // check if the file of currentStudentReportFile does not exist & create file
                //var templateProgressReport = DriveApp.getFileById(allStudents[i][2]);
                //var currentStudentReportName = allStudents[i][1] + ' - ' + currentYear + 'Progress Report'
                //var currentStudentReportFile = templateProgressReport.makeCopy('NewProgressReport',targetDirectory)
            //}

      } else {
        SpreadsheetApp.getUi().alert('Create/Add Progress Reports cancelled.');
      }
    }
  }
  // display erroredStudents array if not empty
}

// ============================
// = TEST Menu Item Functions =
// ============================

function menuItem_Test_GetTemplates() {
  var valuesGlobalConfig = getVariablesFromSheet('GlobalConfig');
  var allTemplates = extractFrom2DArrayMultipleValues(valuesGlobalConfig, 'Template')
  for (var i in allTemplates) {
    SpreadsheetApp.getUi().alert('Current template values: ' + allTemplates[i][0] + ", " + allTemplates[i][1]);
  }
}

function menuItem_Test_GetSingleKey() {
  var valuesGlobalConfig = getVariablesFromSheet('GlobalConfig');
  //var currentYearFolder = extractFrom2DArraySingleValue(valuesGlobalConfig, 'CurrentYearFolder')
  //SpreadsheetApp.getUi().alert('CurrentFolderID: ' + currentYearFolder);
  var currentYear = extractFrom2DArraySingleValue(valuesGlobalConfig, 'CurrentYear')
  SpreadsheetApp.getUi().alert('CurrentYear: ' + currentYear);
  var currentYearFolderID = extractFrom2DArraySingleValue(valuesGlobalConfig, 'CurrentYearFolder')
  var currentYearFolderName = DriveApp.getFolderById(currentYearFolderID).getName();
  SpreadsheetApp.getUi().alert('CurrentFolder: ' + currentYearFolderName + ", " + currentYearFolderID);
  var currentQuarter = extractFrom2DArraySingleValue(valuesGlobalConfig, 'CurrentQuarter')
  SpreadsheetApp.getUi().alert('CurrentQuarter: ' + currentQuarter);

  var currentTemplate1ID = extractFrom2DArraySingleValue(valuesGlobalConfig, 'Template1')
  var currentTemplate1Name = DriveApp.getFileById(currentTemplate1ID).getName();
  SpreadsheetApp.getUi().alert('CurrentTemplate1: ' + currentTemplate1Name + ", " + currentTemplate1ID);

  var currentTemplate2ID = extractFrom2DArraySingleValue(valuesGlobalConfig, 'Template2')
  var currentTemplate2Name = DriveApp.getFileById(currentTemplate2ID).getName();
  SpreadsheetApp.getUi().alert('CurrentTemplate2: ' + currentTemplate2Name + ", " + currentTemplate2ID);

  var currentTemplate3ID = extractFrom2DArraySingleValue(valuesGlobalConfig, 'Template3')
  var currentTemplate3Name = DriveApp.getFileById(currentTemplate3ID).getName();
  SpreadsheetApp.getUi().alert('CurrentTemplate3: ' + currentTemplate3Name + ", " + currentTemplate3ID);

  var currentTemplate4ID = extractFrom2DArraySingleValue(valuesGlobalConfig, 'Template4')
  var currentTemplate4Name = DriveApp.getFileById(currentTemplate4ID).getName();
  SpreadsheetApp.getUi().alert('CurrentTemplate4: ' + currentTemplate4Name + ", " + currentTemplate4ID);

  var currentTemplateKID = extractFrom2DArraySingleValue(valuesGlobalConfig, 'TemplateK')
  var currentTemplateKName = DriveApp.getFileById(currentTemplateKID).getName();
  SpreadsheetApp.getUi().alert('CurrentTemplateK: ' + currentTemplateKName + ", " + currentTemplateKID);
}

function menuItem_Test_NewFile() {
  var newProgressReport = DocumentApp.create('Document Name');
  SpreadsheetApp.getUi()
     .alert('Created new progress report!');
}

function menuItem_Test_NewPRInFolder() {
  SpreadsheetApp.getUi()
     .alert('Start create new progress report.');
  var targetDirectory = DriveApp.getFolderById('0B8RgM3B2REzvZEtZV2tmVlc0X3c');
  SpreadsheetApp.getUi()
     .alert('Got ' + targetDirectory.getName() + ' for target directory.');
  var templateProgressReport = DriveApp.getFileById('1ulHAZlYNK-oobY7ogi7yPv_6hU0EADfguphThREofoI');
  SpreadsheetApp.getUi()
     .alert('Got ' + templateProgressReport.getName() + ' for template.');
  //var newProgressReport = templateProgressReport.makeCopy('NewProgressReport')
  //var newProgressReport = templateProgressReport.makeCopy('0B8RgM3B2REzvZEtZV2tmVlc0X3c&usp')
  var newProgressReport = templateProgressReport.makeCopy('NewProgressReport',targetDirectory)
  SpreadsheetApp.getUi()
     .alert('Created ' + newProgressReport.getName() + '.');
}

function menuItem_Test_OpenDocByID() {
  SpreadsheetApp.getUi()
     .alert('You clicked OpenDocByID');
  var doc = DocumentApp.openById('1FrURS8hIkUpzQk_uV6IXQbAEIm4m8J_dJviGM6yFsXg');
}

function menuItem_Test_GetAllValues() {
  var valuesStudentList = getVariablesFromSheet('StudentLists');
  for (var i in valuesStudentList) {
    if (valuesStudentList[i][3] == '') {
      valuesStudentList[i][3] = '(null value)';
    }
    SpreadsheetApp.getUi().alert('Current values: ' + valuesStudentList[i][0] + ", " + valuesStudentList[i][1] + ", " + valuesStudentList[i][2] + ", " + valuesStudentList[i][3]);
  }
}

function menuItem_Test_DocTableManipulation() {
  var currentDocID = '1030eXtJO6ToAP3AiAnFDOBp8iT0u1ocFMPo__F3oVsk';
  var currentDocName = DriveApp.getFileById(currentDocID).getName();
  //SpreadsheetApp.getUi().alert('Current doc: ' + currentDocName + ", " + currentDocID);
  var currentDocObject = DocumentApp.openById(currentDocID);
  var currentDocObjectBody = currentDocObject.getBody();
  // find "Math"
  var workingTableObject = currentDocObjectBody.findText('Math').getElement().getParent().getParent().getParent().getParent();
  //SpreadsheetApp.getUi().alert('CurrentObject: ' + workingTableObject.getType() + ", " + workingTableObject.getText());
  // once get & open doc (above), should do the following:
  //   1.  set number of rows for quarter (including clearing all contents or each row & removing extra rows)
  setRowsOnTable(workingTableObject, 6, false)
  //   2.  put in current quarter descriptions
  //       row number matches description because header row = 0
  var styleForCellMark = {};
  styleForCellMark[DocumentApp.Attribute.HORIZONTAL_ALIGNMENT] = DocumentApp.HorizontalAlignment.LEFT;
  styleForCellMark[DocumentApp.Attribute.FONT_FAMILY] = DocumentApp.FontFamily.CALIBRI;
  styleForCellMark[DocumentApp.Attribute.FONT_SIZE] = 10;
  styleForCellMark[DocumentApp.Attribute.BOLD] = false;
  // don't forget the header is row 0
  //workingTableObject.getRow(1).getCell(0).setAttributes(styleForCellMark).setText('Row 1');
  //workingTableObject.getRow(2).getCell(0).setAttributes(styleForCellMark).setText('Row 2');
  //workingTableObject.getRow(3).getCell(0).setAttributes(styleForCellMark).setText('Row 3');
  //workingTableObject.getRow(4).getCell(0).setAttributes(styleForCellMark).setText('Row 4');
  //workingTableObject.getRow(5).getCell(0).setAttributes(styleForCellMark).setText('Row 5');
  //   3.  put previous quarter cells as red
  setTableCellColumnRange(workingTableObject, 1, 4, '#666666');
  // just for testing
  //var workingTableNumRows = workingTableObject.getNumRows();
  //for (i = 1; i < workingTableNumRows; i++) {
    //workingTableObject.getRow(i).getCell(0).setAttributes(styleForCellMark).setText('Row ' + i);
  //}
}

function menuItem_Test_DocHeaderManipulation() {
}

function menuItem_Test_DocFooterManipulation() {
  var styleForFooter = {};
  styleForFooter[DocumentApp.Attribute.HORIZONTAL_ALIGNMENT] = DocumentApp.HorizontalAlignment.RIGHT;
  styleForFooter[DocumentApp.Attribute.FONT_FAMILY] = DocumentApp.FontFamily.CALIBRI;
  styleForFooter[DocumentApp.Attribute.FONT_SIZE] = 10;
  //styleForFooter[DocumentApp.Attribute.BOLD] = true;

  var currentDocID = '1dcHef2-TopcZoWjcKyb86OtaPhUu6DemMrpDX5WAQf4';
  var currentDocName = DriveApp.getFileById(currentDocID).getName();
  var currentDocObject = DocumentApp.openById(currentDocID);
  //SpreadsheetApp.getUi().alert('Current doc: ' + currentDocName + ", " + currentDocID);

  var currentDocObjectBody = currentDocObject.getBody();
  var elementToMove = currentDocObjectBody.findText('STUDENT NAME:  ').getElement().getParent();
  //build footer
  var footerBuilderStudentLine = elementToMove.copy();
  SpreadsheetApp.getUi().alert('Current object: ' + footerBuilderStudentLine + '\n' + 'Contents:  ' + footerBuilderStudentLine.getText());


  //clean up other parts
  //elementToMove.removeFromParent();

  //insert footer



  //var parentToMove = elementToMove.getParent();
  //SpreadsheetApp.getUi().alert('Current object: ' + parentToMove);
  //var contentsToInsert = parentToMove.setAlignment(DocumentApp.HorizontalAlignment.RIGHT);
  //currentDocObject.getFooter().setText('');
  //currentDocObject.getFooter().setAttributes(styleForFooter);
  //currentDocObject.getFooter().appendHorizontalRule();
  //currentDocObject.getFooter().insertParagraph(contentsToInsert, 1);
}

function menuItem_Test_DupeFiles() {
  //var currentClassFolderObject = DriveApp.getFolderById('0B8RgM3B2REzvd05tWGwta0xVVEE');  // Amy and Beth's Pod
  //var currentClassFolderObject = DriveApp.getFolderById('0B8RgM3B2REzvTWdUOWNZaGpWRnM');  // June and Deana's Pod
  //var currentClassFolderObject = DriveApp.getFolderById('0B8RgM3B2REzvWEo3Yi15d3BNeWM');  // Nora and Amy's Pod
  //var currentClassFolderObject = DriveApp.getFolderById('0B8RgM3B2REzvMDk2XzdlYWdZRTg');  // Velma and Sheina's Pod
  //var currentClassFolderObject = DriveApp.getFolderById('0B8RgM3B2REzvX19uMTdFOHMwSW8');  // Cephus' Pod
  //var currentClassFolderObject = DriveApp.getFolderById('0B8RgM3B2REzvcW9wYVhtNHd3Y1E');  // Darlene's Pod
  //var currentClassFolderObject = DriveApp.getFolderById('0B8RgM3B2REzvdVdybU5JanRCdWs');  // Krista's Pod
  //var currentClassFolderObject = DriveApp.getFolderById('0B8RgM3B2REzvZWFyUTg0Zkp4Tnc');  // Nicole's Pod
  var currentClassFolderObject = DriveApp.getFolderById('0B8RgM3B2REzvejVoVXZhdS1OSGc');  // Judy, Danielle and Marie's Pod
  //var currentClassFolderObject = DriveApp.getFolderById('0B8RgM3B2REzvZ3U2QmtKREtQWkU');  // Kassandra, Melissa, and Matt's Pod
  var existingFiles = currentClassFolderObject.getFiles();
  while (existingFiles.hasNext()) {
    var currentFile = existingFiles.next();
    var currentFileName = currentFile.getName();
    // below is for 1st - 4th (truncates 'Math OK')
    //var newFileName = currentFileName.substring(0, currentFileName.length - 10) + '3';
    // below is for K, as don't have 'Math OK' at the end)
    var newFileName = currentFileName.substring(0, currentFileName.length - 1) + '3';
    currentFile.makeCopy(newFileName, currentClassFolderObject);
  }
}


function menuItem_Test_CopyTempalate() {
  //var currentClassFolderObject = DriveApp.getFolderById('0B-w1oc030L_MbjJmcUdsRFE5aFE');  // Amy and Beth's Pod
  //var currentClassFolderObject = DriveApp.getFolderById('0B6EANyf3ruh4VTA1RG5VSjhLN1U');  // Judy, Danielle and Marie's Pod
  //var currentClassFolderObject = DriveApp.getFolderById('0B6DnJcIdwabudEZIMHhWQWtrNjQ');  // June and Deana's Pod
  var currentClassFolderObject = DriveApp.getFolderById('0BwW84SuOfwDTTUg3RDFleEN0aDQ');  // Kassandra, Melissa, and Matt's Pod
  //var currentClassFolderObject = DriveApp.getFolderById('0B32vYtKMZAluQk9lSWpKZExfbjg');  // Nora and Amy's Pod
  //var currentClassFolderObject = DriveApp.getFolderById('0B__r4r8A8JL_ZTl1Qm8yUXQwQk0');  // Velma and Sheina's Pod
  //var currentClassFolderObject = DriveApp.getFolderById('0B3Kv0Iu02DZKRGVseFRQc0t1Q2s');  // Cephus' Pod
  //var currentClassFolderObject = DriveApp.getFolderById('0Bwa-IFmh5X7fSUJENG5sT2RhdEU');  // Darlene's Pod
  //var currentClassFolderObject = DriveApp.getFolderById('0B3DQDZd7vXbXTmdDU181MEN5Rlk');  // Krista's Pod
  //var currentClassFolderObject = DriveApp.getFolderById('0B0Y5uTtZHJtBRmhJUUdvSXFiaW8');  // Nicole's Pod
  //var currentTemplateOverrideID = '1E77m_3czAOs3i0tbTVIMfsbtAKSxQtYIMlzQ4DmI2t4' // Judy, Danielle and Marie's Pod
  var currentTemplateOverrideID = '1TQO93UDy8fS4oWLlddvw3vve2UkB2cC_9c0MUOGHCCY' // Kassandra, Melissa, and Matt's Pod
  //var currentStudentList = getVariablesFromSheet('StudentLists-Judy');
  var currentStudentList = getVariablesFromSheet('StudentLists-Kassandra');
  // no start doing stuff
  var currentTemplateOverrideObject = DriveApp.getFileById(currentTemplateOverrideID);
  for (i in currentStudentList) {
    if (i == 0) { continue }
    var newFileDriveObject = currentTemplateOverrideObject.makeCopy(currentStudentList[i] + ' - Progress Report FY2015, Q2', currentClassFolderObject);
    //var newFileDriveObjectID = newFileDriveObject.getId();
    //var newFileDocObject = DocumentApp.openById(newFileDriveObjectID);
    //var newFileDocObjectFooter = newFileDocObject.getFooter();
    //newFileDocObjectFooter.replaceText('{{NAME}}', currentStudentList[i]);
  }
}



// =======================
// = Menu Item Functions =
// =======================

function menuItem_CreateAddReports_SanityCheck() {
  SpreadsheetApp.getUi().alert('Sanity Checks not coded yet.');
  // check for files for quarter being worked on
  // check that all file & folder ID's refer to existing file/folder
  // students who are not in correct folder
  // check to make sure Math is found, number of rows is cool (log problem files)
}

function menuItem_CreateAddReports_Q1() {
  SpreadsheetApp.getUi().alert('Quarter 1 Creation not coded yet.');
}

// this does all lookup manually and by if's for grade/class
function menuItem_CreateAddReports_Q2V3() {
  var ui = SpreadsheetApp.getUi();
  var result = ui.alert('Start Quarter 2 report creation?', ui.ButtonSet.YES_NO);
  if (result == ui.Button.YES) {
    var currentYear = 'FY2015';
    var currentYearFolderID = '0B8RgM3B2REzvUUFXMEtpVW9Jdjg';
    var currentYearFolderName = DriveApp.getFolderById(currentYearFolderID).getName();
    var currentQuarter = 'Q2';
    var templateKID = '1c89hm2F3hu8P0vyqAXsVkGV-oKgP80V8Utab6tOaycI';
    var template1ID = '1BTwLffoJn3ewWDjk47VSZcG5nxpHnzMWxNn1m2_GWIM';
    var template2ID = '1N6YNo-iXJybs2BnOW2-ICYltNR6cv3P3J_2BvVNExZw';
    var template3ID = '1DL-zdTcVZgO4QjX2z3SLMO8hrj6uFOXjtHDHF-d8Cjs';
    var template4ID = '1owWQfohB_9QoB9T3rw6ND5HheTN-SKD7RMvDol1tFjg';
    //var classInfoArray = [];
    //classInfoArray.push('Ted\'s Pod', 'Ted Hirsch', '0B8RgM3B2REzvMFJRWmJ1VHpxVjQ', '1WpuRKrgV0McINHExCaDB7dyfVTIbpHr6mxPKJcD6x2I');
    //classInfoArray.push('Dee\'s Pod', 'Dee Delaney', '0B8RgM3B2REzvZEtZV2tmVlc0X3c', '1ZizgM4yf60gok0wG9ZFxjiTCS1M--qOIPTornJgu2B8');
    //classInfoArray.push('Rio\'s Pod', 'Ralph deGennaro', '0B8RgM3B2REzveWF5OGRrM1BlMFk', '');
    //classInfoArray.push('Joe\'s Pod', 'Joe Mcsheffrey', '0B8RgM3B2REzvQU5NMlFzdExqMTQ', '');
    var classInfoArray = [
      ['Ted\'s Pod', 'Ted Hirsch', '0B8RgM3B2REzvMFJRWmJ1VHpxVjQ', '1WpuRKrgV0McINHExCaDB7dyfVTIbpHr6mxPKJcD6x2I'],
      ['Dee\'s Pod', 'Dee Delaney', '0B8RgM3B2REzvZEtZV2tmVlc0X3c', '1ZizgM4yf60gok0wG9ZFxjiTCS1M--qOIPTornJgu2B8'],
      ['Rio\'s Pod', 'Ralph deGennaro', '0B8RgM3B2REzveWF5OGRrM1BlMFk', ''],
      ['Joe\'s Pod', 'Joe Mcsheffrey', '0B8RgM3B2REzvQU5NMlFzdExqMTQ', '']
      ];
    //SpreadsheetApp.getUi().alert('classInfoArray: ' + classInfoArray[0]);
    //SpreadsheetApp.getUi().alert('classInfoArray: ' + classInfoArray[1]);
    //SpreadsheetApp.getUi().alert('classInfoArray: ' + classInfoArray[2]);
    //SpreadsheetApp.getUi().alert('classInfoArray: ' + classInfoArray[3]);
    var valuesStudentLists = getVariablesFromSheet('StudentLists');
    for (i in valuesStudentLists) {
      //skip header row
      if (i == 0) { continue }
      var currentStudentClassID = valuesStudentLists[i][0];
      var currentStudentName = valuesStudentLists[i][1];
      //SpreadsheetApp.getUi().alert('currentStudentName: ' + currentStudentName);
      var currentStudentGradeLevel = valuesStudentLists[i][2];
      var currentStudentFileNamePreviousQuarter = valuesStudentLists[i][1] + ' - Progress Report ' + currentYearFolderName + ', Q1';
      var currentStudentFileNameWorkingQuarter = valuesStudentLists[i][1] + ' - Progress Report ' + currentYearFolderName + ', Q2';
      // set correct class info
      if (currentStudentClassID == 'Ted\'s Pod') {
        var currentClassTeacherName = classInfoArray[0][1];
        var currentClassFolderID = classInfoArray[0][2];
        var currentClassTemplateOverrideID = classInfoArray[0][3];
      } else if (currentStudentClassID == 'Dee\'s Pod') {
        var currentClassTeacherName = classInfoArray[1][1];
        var currentClassFolderID = classInfoArray[1][2];
        var currentClassTemplateOverrideID = classInfoArray[1][3];
      } else if (currentStudentClassID == 'Rio\'s Pod') {
        var currentClassTeacherName = classInfoArray[2][1];
        var currentClassFolderID = classInfoArray[2][2];
        var currentClassTemplateOverrideID = classInfoArray[3][3];
      } else {
        var currentClassTeacherName = classInfoArray[3][1];
        var currentClassFolderID = classInfoArray[3][2];
        var currentClassTemplateOverrideID = classInfoArray[3][3];
      }
      // check for existing file from previous quarter file
      //SpreadsheetApp.getUi().alert('currentClassFolderID: ' + currentClassFolderID);
      var currentClassFolderObject = DriveApp.getFolderById(currentClassFolderID);
      var checkExistingFiles = currentClassFolderObject.getFilesByName(currentStudentFileNameWorkingQuarter);
      if (checkExistingFiles.hasNext()) { continue }
      // no working quarter file, so create one
      var checkExistingFiles = currentClassFolderObject.getFilesByName(currentStudentFileNamePreviousQuarter);
      if (checkExistingFiles.hasNext()) {
        // has previous quarter file so copy it
        var existingPreviousQuarterFile = checkExistingFiles.next();
        existingPreviousQuarterFile.makeCopy(currentStudentFileNameWorkingQuarter, currentClassFolderObject)
      } else {
        // no previous quarter file
        if (currentClassTemplateOverrideID != null) {
          // override value exists, so use it
          var currentTemplateToUseID = currentClassTemplateOverrideID;
        } else {
          // override value not exists, so use grade
          if (currentStudentGradeLevel == 'K') {
            var currentTemplateToUseID = templateKID;
          } else if (currentStudentGradeLevel == '1') {
            var currentTemplateToUseID = template1ID;
          } else if (currentStudentGradeLevel == '2') {
            var currentTemplateToUseID = template2ID;
          } else if (currentStudentGradeLevel == '3') {
            var currentTemplateToUseID = template3ID;
          } else {
            var currentTemplateToUseID = template4ID;
          }
        }
        // now copy the correct Template
        var newFileObject = DriveApp.getFileById(currentTemplateToUseID).makeCopy(currentStudentFileNameWorkingQuarter, currentClassFolderObject);
      }
    }
  }
}


function menuItem_CreateAddReports_Q2V2() {
  var ui = SpreadsheetApp.getUi();
  var result = ui.alert('Start Quarter 2 report creation?', ui.ButtonSet.YES_NO);
  if (result == ui.Button.YES) {
    // get generic values
    var valuesGlobalConfig = getVariablesFromSheet('GlobalConfig');
    var currentYearFolderID = extractFrom2DArraySingleValue(valuesGlobalConfig, 'CurrentYearFolder')
    var currentYearFolderName = DriveApp.getFolderById(currentYearFolderID).getName();
    var currentQuarter = extractFrom2DArraySingleValue(valuesGlobalConfig, 'CurrentQuarter')
    // create list of classes to loop through
    var valuesClassLists = getVariablesFromSheet('ClassLists');
    for (i in valuesClassLists) {
      //skip header row
      if (i == 0) { continue }
      var currentClassID = valuesClassLists[i][0];
      var currentClassTeacherName = valuesClassLists[i][1];
      var currentClassFolderID = valuesClassLists[i][2];
      var currentClassTemplateOverrideID = valuesClassLists[i][3];
      // now get list of students per class {{here}}
      var valuesStudentLists = getVariablesFromSheet('StudentLists');
      for (i in valuesStudentLists) {
        // check if student entry is of current class
        if (currentClassID != valuesStudentLists[i][0]) { continue }
        // check for existing file
        var currentFileNameQuarterWorking = valuesStudentLists[i][1] + ' - Progress Report ' + currentYearFolderName + ', Q2';
        var currentClassFolderObject = DriveApp.getFolderById(currentClassFolderID);
        var checkExistingFiles = currentClassFolderObject.getFilesByName(currentFileNameQuarterWorking);
        if (checkExistingFiles.hasNext()) { continue }
        // check for previous quarter file
        var currentFileNameQuarterPrevious = valuesStudentLists[i][1] + ' - Progress Report ' + currentYearFolderName + ', Q1';
        var checkExistingFiles = currentClassFolderObject.getFilesByName(currentFileNameQuarterPrevious);
        if (checkExistingFiles.hasNext()) {
          // has previous quarter file so copy it
          var existingPreviousQuarterFile = checkExistingFiles.next();
          existingPreviousQuarterFile.makeCopy(currentFileNameQuarterWorking, currentClassFolderObject)
        } else {
          // no previous quarter file
          if (currentClassTemplateOverrideID != null) {
            // override value exists, so use it
            var currentTemplateToUseID = currentClassTemplateOverrideID;
          } else {
            // override value not exists, so use grade
            var currentTemplateToUseID = extractFrom2DArraySingleValue(valuesGlobalConfig, 'Template' + valuesStudentLists[i][2]);
          }
          // now copy the correct Template
          var newFileObject = DriveApp.getFileById(currentTemplateToUseID).makeCopy(currentFileNameQuarterWorking, currentClassFolderObject);
        }
      }
    }
  }
}

function menuItem_CreateAddReports_Q2() {
  var ui = SpreadsheetApp.getUi();
  var result = ui.alert('Start Quarter 2 report creation?', ui.ButtonSet.YES_NO);
  if (result == ui.Button.YES) {
    var valuesGlobalConfig = getVariablesFromSheet('GlobalConfig');
    var currentYearFolderID = extractFrom2DArraySingleValue(valuesGlobalConfig, 'CurrentYearFolder')
    var currentYearFolderName = DriveApp.getFolderById(currentYearFolderID).getName();
    var currentQuarter = extractFrom2DArraySingleValue(valuesGlobalConfig, 'CurrentQuarter')
    var valuesClassLists = getVariablesFromSheet('ClassLists');
    var valuesClassListsTeacherNames = extractFromArray2DArray(valuesClassLists, 0, 1);
    var valuesClassListsClassFolders = extractFromArray2DArray(valuesClassLists, 0, 2);
    var valuesClassListsTemplateOverrides = extractFromArray2DArray(valuesClassLists, 0, 3);
    var valuesStudentLists = getVariablesFromSheet('StudentLists');
    //SpreadsheetApp.getUi().alert('All global config \n' + valuesGlobalConfig);
    //SpreadsheetApp.getUi().alert('All students \n' + valuesStudentLists);
    // go through list of students
    for (i in valuesStudentLists) {
      //skip header row
      if (i == 0) { continue }
      //SpreadsheetApp.getUi().alert(valuesStudentLists[i]);
      var currentFileNameQ2 = valuesStudentLists[i][1] + ' - Progress Report ' + currentYearFolderName + ', Q2';
      var currentStudentGradeLevel = valuesStudentLists[i][2];
      var currentTeacherName = extractFrom2DArraySingleValue(valuesClassListsTeacherNames,valuesStudentLists[i][0]);
      var currentClassFolderID = extractFrom2DArraySingleValue(valuesClassListsClassFolders,valuesStudentLists[i][0]);
      var currentClassFolderObject = DriveApp.getFolderById(currentClassFolderID);
      // check to see if Q2 file exists
      var checkExistingNewQuarterFile = currentClassFolderObject.getFilesByName(currentFileNameQ2);
      if (!checkExistingNewQuarterFile.hasNext()) {
        var currentClassFolderFiles = currentClassFolderObject.getFiles();
        //SpreadsheetApp.getUi().alert('Student Name:  ' + valuesStudentLists[i][1]);
        var foundQ1File = false;
        var currentFileToSearch = valuesStudentLists[i][1] + ' - Progress Report ' + currentYearFolderName + ', Q1';
        while (currentClassFolderFiles.hasNext()) {
          var currentFileToCheck = currentClassFolderFiles.next();
          //SpreadsheetApp.getUi().alert('Searching for: ' + currentFileToSearch + '\nFound:  ' + currentFileToCheck.getName());
          if (currentFileToCheck == currentFileToSearch) {
            currentFileToCheck.makeCopy(currentFileNameQ2, currentClassFolderObject);
            foundQ1File = true;
          }
          // once matching file done, use it and break out of loop
          if (foundQ1File) { break }
        }
        //SpreadsheetApp.getUi().alert('Found Q1 File: ' + foundQ1File);
        if (!foundQ1File) {
          //find correct template
          var currentTemplateGradeID = extractFrom2DArraySingleValue(valuesGlobalConfig, 'Template' + currentStudentGradeLevel);
          var currentTemplateClassID = extractFrom2DArraySingleValue(valuesClassListsTemplateOverrides, valuesStudentLists[i][0]);
          if (currentTemplateClassID != null) {
            //make copy of override
            var newFileObject = DriveApp.getFileById(currentTemplateClassID).makeCopy(currentFileNameQ2, currentClassFolderObject);
            var currentDocObjectBody = DocumentApp.openById(newFileObject.getId()).getBody();
            currentDocObjectBody.replaceText('{{Student Name}}', valuesStudentLists[i][1]);
            //SpreadsheetApp.getUi().alert('Quarter number only: ' + currentQuarter.substr(currentQuarter.length - 1));
            currentDocObjectBody.replaceText('{{QT}}', currentQuarter.substr(currentQuarter.length - 1));
          } else {
            //make copy of grade template
            var newFileObject = DriveApp.getFileById(currentTemplateGradeID).makeCopy(currentFileNameQ2, currentClassFolderObject);
            var currentDocObjectBody = DocumentApp.openById(newFileObject.getId()).getBody();
            currentDocObjectBody.replaceText('{{Student Name}}', valuesStudentLists[i][1]);
            currentDocObjectBody.replaceText('{{Teacher Name}}', currentTeacherName);
            //SpreadsheetApp.getUi().alert('Quarter number only: ' + currentQuarter.substr(currentQuarter.length - 1));
            currentDocObjectBody.replaceText('{{QT}}', currentQuarter.substr(currentQuarter.length - 1));
          }
        }
      }
    }
  } else {
    SpreadsheetApp.getUi().alert('Cancelled Quarter 2 Progress Report creation.');
  }
}

function menuItem_FixFY2015Footer() {
  //SpreadsheetApp.getUi().alert('Footer fixes for FY2015 not coded yet.');
  //var currentClassFolderObject = DriveApp.getFolderById('0B8RgM3B2REzvfmpoLUw2eDBEY203Q3RhSFE2RGVIb00zTGhwdm1CTy1HWDIzVFpxb2FZSWc'); // Dee's Test Pod Q2
  //var currentClassName = 'Dee\'s Test Pod'; // Dee's Test Pod Q2
  //var currentClassFolderObject = DriveApp.getFolderById('0B8RgM3B2REzvd05tWGwta0xVVEE');  // Amy and Beth's Pod Q2
  //var currentClassName = 'Amy and Beth\'s Pod'; // Amy and Beth's Pod Q2
  //var currentClassFolderObject = DriveApp.getFolderById('0B8RgM3B2REzvejVoVXZhdS1OSGc');  // Judy, Danielle and Marie's Pod Q2
  //var currentClassName = 'Judy, Danielle and Marie\'s Pod'; // Judy, Danielle and Marie's Pod Q2
  //var currentClassFolderObject = DriveApp.getFolderById('0B8RgM3B2REzvTWdUOWNZaGpWRnM');  // June and Deana's Pod Q2
  //var currentClassName = 'June and Deana\'s Pod'; // June and Deana's Pod Q2
  //var currentClassFolderObject = DriveApp.getFolderById('0B8RgM3B2REzvZ3U2QmtKREtQWkU');  // Kassandra, Melissa, and Matt's Pod Q2
  //var currentClassName = 'Kassandra, Melissa, and Matt\'s Pod'; // Kassandra, Melissa, and Matt's Pod Q2
  //var currentClassFolderObject = DriveApp.getFolderById('0B8RgM3B2REzvWEo3Yi15d3BNeWM');  // Nora and Amy's Pod Q2
  //var currentClassName = 'Nora and Amy\'s Pod'; // Nora and Amy's Pod Q2
  //var currentClassFolderObject = DriveApp.getFolderById('0B8RgM3B2REzvMDk2XzdlYWdZRTg');  // Velma and Sheina's Pod Q2
  //var currentClassName = 'Velma and Sheina\'s Pod'; // Velma and Sheina's Pod Q2
  //var currentClassFolderObject = DriveApp.getFolderById('0B8RgM3B2REzvX19uMTdFOHMwSW8');  // Cephus' Pod Q2
  //var currentClassName = 'Cephus\' Pod'; // Cephus' Pod Q2
  //var currentClassFolderObject = DriveApp.getFolderById('0B8RgM3B2REzvcW9wYVhtNHd3Y1E');  // Darlene's Pod Q2
  //var currentClassName = 'Darlene\'s Pod'; // Darlene's Pod Q2
  //var currentClassFolderObject = DriveApp.getFolderById('0B8RgM3B2REzvdVdybU5JanRCdWs');  // Krista's Pod Q2
  //var currentClassName = 'Krista\'s Pod'; // Krista's Pod Q2
  var currentClassFolderObject = DriveApp.getFolderById('0B8RgM3B2REzvZWFyUTg0Zkp4Tnc');  // Nicole's Pod Q2
  var currentClassName = 'Nicole\'s Pod'; // Nicole's Pod Q2
  // setup style for footer
  var styleForFooter = {};
  styleForFooter[DocumentApp.Attribute.HORIZONTAL_ALIGNMENT] = DocumentApp.HorizontalAlignment.RIGHT;
  styleForFooter[DocumentApp.Attribute.LINE_SPACING] = 0;
  styleForFooter[DocumentApp.Attribute.SPACING_AFTER] = 0;
  styleForFooter[DocumentApp.Attribute.SPACING_BEFORE] = 0;
  styleForFooter[DocumentApp.Attribute.FONT_FAMILY] = DocumentApp.FontFamily.CALIBRI;
  styleForFooter[DocumentApp.Attribute.FONT_SIZE] = 8;
  styleForFooter[DocumentApp.Attribute.BOLD] = true;
  var existingFiles = currentClassFolderObject.getFiles();
  while (existingFiles.hasNext()) {
    var currentFileObject = existingFiles.next();
    var currentFileName = currentFileObject.getName();
    //SpreadsheetApp.getUi().alert('currentFileName: ' + currentFileName);
    var currentFileID = currentFileObject.getId();
    var currentStudentName = currentFileName.substring(0, currentFileName.indexOf(" -"));
    var currentDocObject = DocumentApp.openById(currentFileID);
    var currentDocObjectFooter = currentDocObject.getFooter();
    // replace {{NAME}}
    var currentDocObjectFooterChild1 = currentDocObjectFooter.getChild(1);
    currentDocObjectFooterChild1.replaceText('{{NAME}}', currentStudentName);
    // find grade so can adjust footer for 1 - 4 grades
    var currentDocObjectHeader = currentDocObject.getHeader().copy();
    var workingGradeElement = currentDocObjectHeader.findText(' Progress Report').getElement();
    var workingGradeAsText = workingGradeElement.asText().getText().trim().substring(0,1);
    if ((workingGradeAsText == '1') || (workingGradeAsText == '2') || (workingGradeAsText == '3') || (workingGradeAsText == '4')) {
      currentDocObjectFooter.insertParagraph(1, 'POD:  ' + currentClassName);
      currentDocObjectFooter.insertParagraph(1, 'STUDENT NAME:  ' + currentStudentName);
      //SpreadsheetApp.getUi().alert('currentFileName: ' + currentFileName
      //                              + '\n' + 'currentStudentName: ' + currentStudentName
      //                              + '\n' + 'currentDocObjectFooterChild1: ' + currentDocObjectFooterChild1.getText());
    }
    //set style for footer
    var currentDocObjectFooterNumChildren = currentDocObjectFooter.getNumChildren();
    for (i = 0; i < currentDocObjectFooterNumChildren; i++) {
      currentDocObjectFooter.getChild(i).setAttributes(styleForFooter);
    };
  }
  SpreadsheetApp.getUi().alert('Done with all footers.');
}


function menuItem_CreateAddReports_Q3() {
  SpreadsheetApp.getUi().alert('Quarter 3 Creation not coded yet.');
}

function menuItem_FixFY2015Q1Q3() {
  //SpreadsheetApp.getUi().alert('Start Quarter 2 fixes for FY2015.');
  var currentClassFolderObject = DriveApp.getFolderById('0B8RgM3B2REzvfk5EMk1XWUFZTkxEdnRwemFvazlYUnpldVN4U21XT05CVkwzYklQWkE4SzQ');  // Amy and Beth's Pod Q3
  //var currentClassFolderObject = DriveApp.getFolderById('0B8RgM3B2REzvflFrVmVrb0h5ZncxMlJOTUZpQVdaYThtVlpmeVVnU3U5amZHNmpjN2xvejA');  // June and Deana's Pod Q3
  //var currentClassFolderObject = DriveApp.getFolderById('0B8RgM3B2REzvfnJZUGxYUVRTd3JUUVF5WGl1cUhsTkpzWThsVTR4dDJndFp5QzE2NXg2TmM');  // Nora and Amy's Pod Q3
  //var currentClassFolderObject = DriveApp.getFolderById('0B8RgM3B2REzvfnZDTTdhRGc2OS1IRFVNVmNJblVIR2lYNTBZbUdmeWl1amVMSlNVcXJqa0U');  // Velma and Sheina's Pod Q3
  //var currentClassFolderObject = DriveApp.getFolderById('0B8RgM3B2REzvfmdLYUc3TS1IMjdYNEVxNTlYdzZ2WGhTYzNBWVRqejZkd2tVS29uVTFIR1U');  // Cephus' Pod Q3
  //var currentClassFolderObject = DriveApp.getFolderById('0B8RgM3B2REzvfnZaclFMZmV3cUdMZ1lCaWVlTG9tQ20yeWU1Z21jNjl1MGRFaWFYNy1xMUE');  // Darlene's Pod Q3
  //var currentClassFolderObject = DriveApp.getFolderById('0B8RgM3B2REzvfnRNOVg2ZEZCYlVVeUE5dVBTQllwVURvNjVzYTAyYlFTS1JRTUFjM3ROcWs');  // Krista's Pod Q3
  //var currentClassFolderObject = DriveApp.getFolderById('0B8RgM3B2REzvflotazNObDlmY2ozZlF1NzBwNkR5R0JsOVVJeUJMcDhGczRlaUF0VVFkNnM');  // Nicole's Pod Q3
  //var currentClassFolderObject = DriveApp.getFolderById('0B8RgM3B2REzvejVoVXZhdS1OSGc');  // Judy, Danielle and Marie's Pod Q2
  //var currentClassFolderObject = DriveApp.getFolderById('0B8RgM3B2REzvZ3U2QmtKREtQWkU');  // Kassandra, Melissa, and Matt's Pod Q2
  var existingFiles = currentClassFolderObject.getFiles();
  while (existingFiles.hasNext()) {
    var currentFileObject = existingFiles.next();
    var currentFileName = currentFileObject.getName();
    //SpreadsheetApp.getUi().alert('currentFileName: ' + currentFileName);
    var currentFileID = currentFileObject.getId();
    var currentStudentName = currentFileName.substring(0, currentFileName.indexOf("-") - 1);
    var currentDocObject = DocumentApp.openById(currentFileID);
    var currentDocObjectHeader = currentDocObject.getHeader().copy();
    // find grade
    var workingGradeElement = currentDocObjectHeader.findText(' Progress Report').getElement();
    var workingGradeAsText = workingGradeElement.asText().getText().trim().substring(0,1);
    if (workingGradeAsText == '2') {
      var currentDocObjectBody = currentDocObject.getBody();
      // find "Math"
      var workingTableObject = currentDocObjectBody.findText('Math').getElement().getParent().getParent().getParent().getParent();
      //SpreadsheetApp.getUi().alert('CurrentObject: ' + workingTableObject.getType() + ", " + workingTableObject.getText());
      // once get & open doc (above), should do the following:
      //   1.  set number of rows for quarter (including clearing all contents or each row & removing extra rows)
      setRowsOnTable(workingTableObject, 11, false)
      //   2.  put in current quarter descriptions
      //       row number matches description because header row = 0
      var styleForCellMark = {};
      styleForCellMark[DocumentApp.Attribute.HORIZONTAL_ALIGNMENT] = DocumentApp.HorizontalAlignment.LEFT;
      styleForCellMark[DocumentApp.Attribute.FONT_FAMILY] = DocumentApp.FontFamily.CALIBRI;
      styleForCellMark[DocumentApp.Attribute.FONT_SIZE] = 8;
      styleForCellMark[DocumentApp.Attribute.BOLD] = false;
      // don't forget the header is row 0
      workingTableObject.getRow(8).getCell(0).setAttributes(styleForCellMark).setText('Measurements');
      workingTableObject.getRow(9).getCell(0).setAttributes(styleForCellMark).setText('Money');
      //   3.  put previous quarter cells as red
      // not doing for Grade Level 2
    } else if (workingGradeAsText == '3') {
      var currentDocObjectBody = currentDocObject.getBody();
      // find "Math"
      var workingTableObject = currentDocObjectBody.findText('Math').getElement().getParent().getParent().getParent().getParent();
      //SpreadsheetApp.getUi().alert('CurrentObject: ' + workingTableObject.getType() + ", " + workingTableObject.getText());
      // once get & open doc (above), should do the following:
      //   1.  set number of rows for quarter (including clearing all contents or each row & removing extra rows)
      setRowsOnTable(workingTableObject, 8, true)
      //   2.  put in current quarter descriptions
      //       row number matches description because header row = 0
      var styleForCellMark = {};
      styleForCellMark[DocumentApp.Attribute.HORIZONTAL_ALIGNMENT] = DocumentApp.HorizontalAlignment.LEFT;
      styleForCellMark[DocumentApp.Attribute.FONT_FAMILY] = DocumentApp.FontFamily.CALIBRI;
      styleForCellMark[DocumentApp.Attribute.FONT_SIZE] = 8;
      styleForCellMark[DocumentApp.Attribute.BOLD] = false;
      // don't forget the header is row 0
      workingTableObject.getRow(1).getCell(0).setAttributes(styleForCellMark).setText('Fractions:  To identify fractions and to find fractions of a whole.');
      workingTableObject.getRow(2).getCell(0).setAttributes(styleForCellMark).setText('Fractions:  To compare and order fractions.');
      workingTableObject.getRow(3).getCell(0).setAttributes(styleForCellMark).setText('Fractions:  To find equivalent fractions.');
      workingTableObject.getRow(4).getCell(0).setAttributes(styleForCellMark).setText('Fractions:  To locate and label fractions on a number line.');
      workingTableObject.getRow(5).getCell(0).setAttributes(styleForCellMark).setText('Measurement:  To measure lengths using rulers with halves and fourths of an inch.');
      workingTableObject.getRow(6).getCell(0).setAttributes(styleForCellMark).setText('Data:  To create and analyze a line plot.');
      workingTableObject.getRow(7).getCell(0).setAttributes(styleForCellMark).setText('Participation / Perserverence / Focus.');
      //   3.  put previous quarter cells as red
      setTableCellColumnRange(workingTableObject, 1, 8, '#666666');
    } else if (workingGradeAsText == '4') {
      var currentDocObjectBody = currentDocObject.getBody();
      // find "Math"
      var workingTableObject = currentDocObjectBody.findText('Math').getElement().getParent().getParent().getParent().getParent();
      //SpreadsheetApp.getUi().alert('CurrentObject: ' + workingTableObject.getType() + ", " + workingTableObject.getText());
      // once get & open doc (above), should do the following:
      //   1.  set number of rows for quarter (including clearing all contents or each row & removing extra rows)
      setRowsOnTable(workingTableObject, 8, true)
      //   2.  put in current quarter descriptions
      //       row number matches description because header row = 0
      var styleForCellMark = {};
      styleForCellMark[DocumentApp.Attribute.HORIZONTAL_ALIGNMENT] = DocumentApp.HorizontalAlignment.LEFT;
      styleForCellMark[DocumentApp.Attribute.FONT_FAMILY] = DocumentApp.FontFamily.CALIBRI;
      styleForCellMark[DocumentApp.Attribute.FONT_SIZE] = 8;
      styleForCellMark[DocumentApp.Attribute.BOLD] = false;
      // don't forget the header is row 0
      workingTableObject.getRow(1).getCell(0).setAttributes(styleForCellMark).setText('Geometry:  To recognize lines of symmetry in two-dimensional shapes.');
      workingTableObject.getRow(2).getCell(0).setAttributes(styleForCellMark).setText('Geometry:  To classify two-dimensional shapes based on attributes.');
      workingTableObject.getRow(3).getCell(0).setAttributes(styleForCellMark).setText('Measurement:  To find the perimeter of a rectangle when given the area and one length.');
      workingTableObject.getRow(4).getCell(0).setAttributes(styleForCellMark).setText('Measurement:  To find the area of a rectangle when given the perimeter and one length.');
      workingTableObject.getRow(5).getCell(0).setAttributes(styleForCellMark).setText('Number and Operations:  To use decimal notation for fractions with denominators of 10 or 100.');
      workingTableObject.getRow(6).getCell(0).setAttributes(styleForCellMark).setText('Number and Operations:  To convert fractions into decimals when the denominators are not 10 or 100.');
      workingTableObject.getRow(7).getCell(0).setAttributes(styleForCellMark).setText('Participation / Perserverence / Focus.');
      //   3.  put previous quarter cells as red
      setTableCellColumnRange(workingTableObject, 1, 8, '#666666');
    } // nothing to do for K & 1st graders
    currentFileObject.setName(currentFileName + ', Math OK');
  }
}

function menuItem_CreateAddReports_Q4() {
  // change below based on student grades in Pod, really only works if K is separate from the rest.
  var isPodK = false;
  //var currentClassFolderObject = DriveApp.getFolderById('0B8RgM3B2REzvflpJRkpVblVrcndibmQ1V2xQQ0RjaGlfU0V2enV4ZUFCWTBSTWNRc21JYTA');  // Amy and Beth's Pod Q4
  //var currentClassFolderObject = DriveApp.getFolderById('0B8RgM3B2REzvfjdjTjZYNW5XMWF5UC15bVlsQTQ5ZWVBOE4yczl3amVrbzVTaFB5d0JxNE0');  // June and Deana's Pod Q4
  //var currentClassFolderObject = DriveApp.getFolderById('0B8RgM3B2REzvfk8wMjhhamVUR0dza1V0QnViM3gzekJGSnpGTk1uZE9odHlNaG9mUEtwYjA');  // Nora and Amy's Pod Q4
  //var currentClassFolderObject = DriveApp.getFolderById('0B8RgM3B2REzvflJaM2JsZkExQ2g0RG1kU0d6VDlOREZJTDJaODFHblFfUWlVRm1OV1lyeDQ');  // Velma and Sheina's Pod Q4
  //var currentClassFolderObject = DriveApp.getFolderById('0B8RgM3B2REzvfnlCTm92TFo5Um1lRmpWekdaaXl4SVZQekw4UEVWazNsenlpcGFJdm5wT0U');  // Cephus' Pod Q4
  //var currentClassFolderObject = DriveApp.getFolderById('0B8RgM3B2REzvfk9UZWRadXZLVmxFLV9ZVFBld3VJSXgzeFJpX0RwWlFwQzhidmc5T21DeXc');  // Darlene's Pod Q4
  //var currentClassFolderObject = DriveApp.getFolderById('0B8RgM3B2REzvfm5IRUMzVk1sUVBscHJUajVSSFZnVnZRTTl5OFhhZ0JCZXVWSmFNTE1UWTA');  // Krista's Pod Q4
  //var currentClassFolderObject = DriveApp.getFolderById('0B8RgM3B2REzvfmQzLWI4UzNfMDRhREpYdG1FX29KRlI1SzlXMVRZQlY3NG1RMW45UG5RU0U');  // Nicole's Pod Q4
  //var currentClassFolderObject = DriveApp.getFolderById('0B8RgM3B2REzvfnp0cG00YXcxMmdrX001N3dDd19udXk0cW1pUWJhZ2pVRFo0azZOdU5tZms');  // Judy, Danielle and Marie's Pod Q4
  //var currentClassFolderObject = DriveApp.getFolderById('0B8RgM3B2REzvfnhnaE4zM21GbFhjckl2YWVWS2lyclYwUmxBNG1HbTgyUVBJZmtseGFxc1E');  // Kassandra, Melissa, and Matt's Pod Q4
  var existingFiles = currentClassFolderObject.getFiles();
  while (existingFiles.hasNext()) {
    var currentFile = existingFiles.next();
    var currentFileName = currentFile.getName();
    var newFileName = currentFileName;
    var testString = newFileName.substring(0, 8);
    if ('Copy of ' == testString) {
      newFileName = newFileName.substring(8, newFileName.length);
    }
    if (isPodK) {
      // below is for K, as don't have 'Math OK' at the end)
      var testString = newFileName.substring(newFileName.length - 2, newFileName.length)
      if ('Q2' == testString) {
        newFileName = newFileName.substring(0, newFileName.length - 1) + '4';
      }
      //var newFileName = currentFileName.substring(0, currentFileName.length - 1) + '4';
    } else {
      // below is for 1st - 4th (truncates 'Math OK')
      var testString = newFileName.substring(newFileName.length - 11, newFileName.length)
      if (testString == 'Q3, Math OK') {
        newFileName = newFileName.substring(0, newFileName.length - 10) + '4';
      }
      //var newFileName = currentFileName.substring(0, currentFileName.length - 10) + '4';
    }
    currentFile.setName(newFileName);
  }
}

function menuItem_FixFY2015Q1Q4() {
  //SpreadsheetApp.getUi().alert('Start Quarter 4 fixes for FY2015.');
  //var currentClassFolderObject = DriveApp.getFolderById('0B8RgM3B2REzvflpJRkpVblVrcndibmQ1V2xQQ0RjaGlfU0V2enV4ZUFCWTBSTWNRc21JYTA');  // Amy and Beth's Pod Q4
  //var currentClassFolderObject = DriveApp.getFolderById('0B8RgM3B2REzvfjdjTjZYNW5XMWF5UC15bVlsQTQ5ZWVBOE4yczl3amVrbzVTaFB5d0JxNE0');  // June and Deana's Pod Q4
  //var currentClassFolderObject = DriveApp.getFolderById('0B8RgM3B2REzvfk8wMjhhamVUR0dza1V0QnViM3gzekJGSnpGTk1uZE9odHlNaG9mUEtwYjA');  // Nora and Amy's Pod Q4
  var currentClassFolderObject = DriveApp.getFolderById('0B8RgM3B2REzvflJaM2JsZkExQ2g0RG1kU0d6VDlOREZJTDJaODFHblFfUWlVRm1OV1lyeDQ');  // Velma and Sheina's Pod Q4
  //var currentClassFolderObject = DriveApp.getFolderById('0B8RgM3B2REzvfnlCTm92TFo5Um1lRmpWekdaaXl4SVZQekw4UEVWazNsenlpcGFJdm5wT0U');  // Cephus' Pod Q4
  //var currentClassFolderObject = DriveApp.getFolderById('0B8RgM3B2REzvfk9UZWRadXZLVmxFLV9ZVFBld3VJSXgzeFJpX0RwWlFwQzhidmc5T21DeXc');  // Darlene's Pod Q4
  //var currentClassFolderObject = DriveApp.getFolderById('0B8RgM3B2REzvfm5IRUMzVk1sUVBscHJUajVSSFZnVnZRTTl5OFhhZ0JCZXVWSmFNTE1UWTA');  // Krista's Pod Q4
  //var currentClassFolderObject = DriveApp.getFolderById('0B8RgM3B2REzvfmQzLWI4UzNfMDRhREpYdG1FX29KRlI1SzlXMVRZQlY3NG1RMW45UG5RU0U');  // Nicole's Pod Q4
  //var currentClassFolderObject = DriveApp.getFolderById('0B8RgM3B2REzvfnp0cG00YXcxMmdrX001N3dDd19udXk0cW1pUWJhZ2pVRFo0azZOdU5tZms');  // Judy, Danielle and Marie's Pod Q4
  //var currentClassFolderObject = DriveApp.getFolderById('0B8RgM3B2REzvfnhnaE4zM21GbFhjckl2YWVWS2lyclYwUmxBNG1HbTgyUVBJZmtseGFxc1E');  // Kassandra, Melissa, and Matt's Pod Q4
  var existingFiles = currentClassFolderObject.getFiles();
  while (existingFiles.hasNext()) {
    var currentFileObject = existingFiles.next();
    var currentFileName = currentFileObject.getName();
    //SpreadsheetApp.getUi().alert('currentFileName: ' + currentFileName);
    var currentFileID = currentFileObject.getId();
    var currentStudentName = currentFileName.substring(0, currentFileName.indexOf("-") - 1);
    var currentDocObject = DocumentApp.openById(currentFileID);
    var currentDocObjectHeader = currentDocObject.getHeader().copy();
    // find grade
    var workingGradeElement = currentDocObjectHeader.findText(' Progress Report').getElement();
    var workingGradeAsText = workingGradeElement.asText().getText().trim().substring(0,1);
    if (workingGradeAsText == '2') {
      var currentDocObjectBody = currentDocObject.getBody();
      // find "Math"
      var workingTableObject = currentDocObjectBody.findText('Math').getElement().getParent().getParent().getParent().getParent();
      //SpreadsheetApp.getUi().alert('CurrentObject: ' + workingTableObject.getType() + ", " + workingTableObject.getText());
      // once get & open doc (above), should do the following:
      //   1.  set number of rows for quarter (including clearing all contents or each row & removing extra rows)
      setRowsOnTable(workingTableObject, 16, false)
      //   2.  put in current quarter descriptions
      //       row number matches description because header row = 0
      var styleForCellMark = {};
      styleForCellMark[DocumentApp.Attribute.HORIZONTAL_ALIGNMENT] = DocumentApp.HorizontalAlignment.LEFT;
      styleForCellMark[DocumentApp.Attribute.FONT_FAMILY] = DocumentApp.FontFamily.CALIBRI;
      styleForCellMark[DocumentApp.Attribute.FONT_SIZE] = 8;
      styleForCellMark[DocumentApp.Attribute.BOLD] = false;
      // don't forget the header is row 0
      workingTableObject.getRow(10).getCell(0).setAttributes(styleForCellMark).setText('Time');
      workingTableObject.getRow(11).getCell(0).setAttributes(styleForCellMark).setText('Fractions');
      workingTableObject.getRow(12).getCell(0).setAttributes(styleForCellMark).setText('Shapes');
      workingTableObject.getRow(13).getCell(0).setAttributes(styleForCellMark).setText('Area');
      workingTableObject.getRow(14).getCell(0).setAttributes(styleForCellMark).setText('Arrays');
      //   3.  put previous quarter cells as red
      // not doing for Grade Level 2
    } else if (workingGradeAsText == '3') {
      var currentDocObjectBody = currentDocObject.getBody();
      // find "Math"
      var workingTableObject = currentDocObjectBody.findText('Math').getElement().getParent().getParent().getParent().getParent();
      //SpreadsheetApp.getUi().alert('CurrentObject: ' + workingTableObject.getType() + ", " + workingTableObject.getText());
      // once get & open doc (above), should do the following:
      //   1.  set number of rows for quarter (including clearing all contents or each row & removing extra rows)
      setRowsOnTable(workingTableObject, 10, true)
      //   2.  put in current quarter descriptions
      //       row number matches description because header row = 0
      var styleForCellMark = {};
      styleForCellMark[DocumentApp.Attribute.HORIZONTAL_ALIGNMENT] = DocumentApp.HorizontalAlignment.LEFT;
      styleForCellMark[DocumentApp.Attribute.FONT_FAMILY] = DocumentApp.FontFamily.CALIBRI;
      styleForCellMark[DocumentApp.Attribute.FONT_SIZE] = 8;
      styleForCellMark[DocumentApp.Attribute.BOLD] = false;
      // don't forget the header is row 0
      workingTableObject.getRow(1).getCell(0).setAttributes(styleForCellMark).setText('Geometry: To classify two-dimensional shapes based on attributes.');
      workingTableObject.getRow(2).getCell(0).setAttributes(styleForCellMark).setText('Measurement: To measure areas by counting unit squares.');
      workingTableObject.getRow(3).getCell(0).setAttributes(styleForCellMark).setText('Measurement: To find the area of a rectangle by multiplying side lengths.');
      workingTableObject.getRow(4).getCell(0).setAttributes(styleForCellMark).setText('Measurement: To find areas of rectilinear shapes by decomposing them into non-overlapping rectangles and adding the two areas.');
      workingTableObject.getRow(5).getCell(0).setAttributes(styleForCellMark).setText('Measurement: To find the perimeter of a shape by adding the side lengths.');
      workingTableObject.getRow(6).getCell(0).setAttributes(styleForCellMark).setText('Measurement: To find the perimeter of a shape by finding the unknown side length.');
      workingTableObject.getRow(7).getCell(0).setAttributes(styleForCellMark).setText('Measurement: To tell and write time to the nearest minute.');
      workingTableObject.getRow(8).getCell(0).setAttributes(styleForCellMark).setText('Measurement: To measure time intervals in minutes by representing the problem on a number line diagram.');
      workingTableObject.getRow(9).getCell(0).setAttributes(styleForCellMark).setText('Participation / Perserverence / Focus.');
      //   3.  put previous quarter cells as red
      setTableCellColumnRange(workingTableObject, 1, 12, '#666666');
    } else if (workingGradeAsText == '4') {
      var currentDocObjectBody = currentDocObject.getBody();
      // find "Math"
      var workingTableObject = currentDocObjectBody.findText('Math').getElement().getParent().getParent().getParent().getParent();
      //SpreadsheetApp.getUi().alert('CurrentObject: ' + workingTableObject.getType() + ", " + workingTableObject.getText());
      // once get & open doc (above), should do the following:
      //   1.  set number of rows for quarter (including clearing all contents or each row & removing extra rows)
      setRowsOnTable(workingTableObject, 9, true)
      //   2.  put in current quarter descriptions
      //       row number matches description because header row = 0
      var styleForCellMark = {};
      styleForCellMark[DocumentApp.Attribute.HORIZONTAL_ALIGNMENT] = DocumentApp.HorizontalAlignment.LEFT;
      styleForCellMark[DocumentApp.Attribute.FONT_FAMILY] = DocumentApp.FontFamily.CALIBRI;
      styleForCellMark[DocumentApp.Attribute.FONT_SIZE] = 8;
      styleForCellMark[DocumentApp.Attribute.BOLD] = false;
      // don't forget the header is row 0
      workingTableObject.getRow(1).getCell(0).setAttributes(styleForCellMark).setText('Number and Operations: To round decimal numbers to the nearest whole number and to one decimal place.');
      workingTableObject.getRow(2).getCell(0).setAttributes(styleForCellMark).setText('Number and Operations: To add multi-digit decimals numbers using standard algorithms.');
      workingTableObject.getRow(3).getCell(0).setAttributes(styleForCellMark).setText('Number and Operations: To subtract multi-digit decimals numbers using standard algorithms.');
      workingTableObject.getRow(4).getCell(0).setAttributes(styleForCellMark).setText('Number and Operations: To multiply decimals with one and two decimal places by whole numbers using standard algorithms.');
      workingTableObject.getRow(5).getCell(0).setAttributes(styleForCellMark).setText('Number and Operations: To find decimal quotients with up to two decimal place dividends and one-digit divisors.');
      workingTableObject.getRow(6).getCell(0).setAttributes(styleForCellMark).setText('Measurement: To find the volume of a shape by counting cubic squares.');
      workingTableObject.getRow(7).getCell(0).setAttributes(styleForCellMark).setText('Measurement: To find the volume of a rectangular prism by multiplying side lengths.');
      workingTableObject.getRow(8).getCell(0).setAttributes(styleForCellMark).setText('Participation / Perserverence / Focus.');
      //   3.  put previous quarter cells as red
      setTableCellColumnRange(workingTableObject, 1, 12, '#666666');
    } // nothing to do for K & 1st graders
    currentFileObject.setName(currentFileName + ', Math OK');
  }
}


// this copies & renames files from previous quarter to next quarter
function DONOTUSE_DuplicateReports() {
  // TODO: the 3 variables below should be in GetConfig(), especially with thisQ & lastQ programmatically determined
  var isMathMod = true;
  var lastQuarterString = '3';
  var thisQuarterString = '4';

  //get needed variables
  var currentYear = GetConfig("currentYear");
  var currentTerm = GetConfig("currentTerm");
  var currentClassName = GetConfig("currentClassName");
  var currentClassFolderObject = GetConfig("currentClassFolderObject"); // was thisQuarterFolderObject
  var lastTermArchiveFolderObject = GetConfig("lastTermArchiveFolderObject"); // was lastQuarterFolderObject
  var existingFiles = lastQuarterFolderObject.getFiles();
  while (existingFiles.hasNext()) {
    var currentFile = existingFiles.next();
    var currentFileName = currentFile.getName();
    var newFileName = currentFileName;
    // clean up any manual copies
    var testString = newFileName.substring(0, 8);
    if ('Copy of ' == testString) {
      newFileName = newFileName.substring(8, newFileName.length);
    }
    // get correct name for new file
    if (isMathMod == false) {
      // below is for any grade where Math is not update, i.e. doesn't have 'Math OK' at the end)
      var newFileName = currentFileName.substring(0, currentFileName.length - 1) + thisQuarterString;
    } else {
      // below is for any grade that modifies Math standards, i.e. truncates 'Math OK')
      var newFileName = currentFileName.substring(0, currentFileName.length - 10) + thisQuarterString;
    }
    // make copy of file to new name & location
    currentFile.makeCopy(newFileName, thisQuarterFolderObject);
  }
}


// this function is to adjust just the term's math standards.  try to remove this and use above one
// that combines everything
function DONOTUSE_SetMathSkills_Q1() {
  //var thisQuarterFolderObject = DriveApp.getFolderById('0B8RgM3B2REzvM3hQREV0aERjVk0');  // Dee's Pod Q1
  //var currentClassName = "Dee's Pod";

  //SpreadsheetApp.getUi().alert(currentClassName);
  var existingFiles = thisQuarterFolderObject.getFiles();
  while (existingFiles.hasNext()) {
    var currentFileObject = existingFiles.next();
    var currentFileName = currentFileObject.getName();
    //SpreadsheetApp.getUi().alert('currentFileName: ' + currentFileName);
    var currentFileID = currentFileObject.getId();
    var currentStudentName = currentFileName.substring(0, currentFileName.indexOf("-") - 1);
    var currentDocObject = DocumentApp.openById(currentFileID);
    var currentDocObjectHeader = currentDocObject.getHeader().copy();
    // find grade
    var workingGradeElement = currentDocObjectHeader.findText(' Progress Report').getElement();
    var workingGradeAsText = workingGradeElement.asText().getText().trim().substring(0,1);
    // removed grade 2 as they are keeping list the same, look at backup.gs if necessary to bring back
    if (workingGradeAsText == '3') {
      var currentDocObjectBody = currentDocObject.getBody();
      // find "Math"
      var workingTableObject = currentDocObjectBody.findText('Math').getElement().getParent().getParent().getParent().getParent();
      //SpreadsheetApp.getUi().alert('CurrentObject: ' + workingTableObject.getType() + ", " + workingTableObject.getText());
      // once get & open doc (above), should do the following:
      //   1.  set number of rows for quarter (including clearing all contents or each row & removing extra rows)
      setRowsOnTable(workingTableObject, 7, true)
      //   2.  put in current quarter descriptions
      //       row number matches description because header row = 0
      var styleForCellMark = {};
      styleForCellMark[DocumentApp.Attribute.HORIZONTAL_ALIGNMENT] = DocumentApp.HorizontalAlignment.LEFT;
      styleForCellMark[DocumentApp.Attribute.FONT_FAMILY] = DocumentApp.FontFamily.CALIBRI;
      styleForCellMark[DocumentApp.Attribute.FONT_SIZE] = 8;
      styleForCellMark[DocumentApp.Attribute.BOLD] = false;
      // don't forget the header is row 0 & 1
      workingTableObject.getRow(2).getCell(0).setAttributes(styleForCellMark).setText("Number Sense: solve multiplication problems through the use of arrays.");
      workingTableObject.getRow(3).getCell(0).setAttributes(styleForCellMark).setText("Number Sense: solve division problems by relating the unknown to either the size of the group or the number of groups.");
      workingTableObject.getRow(4).getCell(0).setAttributes(styleForCellMark).setText("Number Sense: solve multiplication and division word problems through the use of model drawing.");
      workingTableObject.getRow(5).getCell(0).setAttributes(styleForCellMark).setText("Number Sense: apply commutative and distributive properties to solve multiplication and division problems.");
      workingTableObject.getRow(6).getCell(0).setAttributes(styleForCellMark).setText("Participation / Perseverance / Focus.");
      //   3.  put previous quarter cells as red, not needed Q1
      //setTableCellColumnRange(workingTableObject, 1, 12, '#666666');
    } else if (workingGradeAsText == '4') {
      var currentDocObjectBody = currentDocObject.getBody();
      // find "Math"
      var workingTableObject = currentDocObjectBody.findText('Math').getElement().getParent().getParent().getParent().getParent();
      //SpreadsheetApp.getUi().alert('CurrentObject: ' + workingTableObject.getType() + ", " + workingTableObject.getText());
      // once get & open doc (above), should do the following:
      //   1.  set number of rows for quarter (including clearing all contents or each row & removing extra rows)
      setRowsOnTable(workingTableObject, 10, true)
      //   2.  put in current quarter descriptions
      //       row number matches description because header row = 0
      var styleForCellMark = {};
      styleForCellMark[DocumentApp.Attribute.HORIZONTAL_ALIGNMENT] = DocumentApp.HorizontalAlignment.LEFT;
      styleForCellMark[DocumentApp.Attribute.FONT_FAMILY] = DocumentApp.FontFamily.CALIBRI;
      styleForCellMark[DocumentApp.Attribute.FONT_SIZE] = 8;
      styleForCellMark[DocumentApp.Attribute.BOLD] = false;
      // don't forget the header is row 0 & 1
      workingTableObject.getRow(2).getCell(0).setAttributes(styleForCellMark).setText("Place Value: able to read and write multi-digit numbers in standard, expanded and word form.");
      workingTableObject.getRow(3).getCell(0).setAttributes(styleForCellMark).setText("Place Value: compare and order multi-digit numbers.");
      workingTableObject.getRow(4).getCell(0).setAttributes(styleForCellMark).setText("Place Value: round multi-digit numbers to any place value.");
      workingTableObject.getRow(5).getCell(0).setAttributes(styleForCellMark).setText("Number Sense: fluently add multi-digit whole numbers.");
      workingTableObject.getRow(6).getCell(0).setAttributes(styleForCellMark).setText("Number Sense: fluently subtract multi-digit whole numbers.");
      workingTableObject.getRow(7).getCell(0).setAttributes(styleForCellMark).setText("Number Sense: solve multi-step word problems using adding and subtracting and assessing the reasonableness of the answer.");
      workingTableObject.getRow(8).getCell(0).setAttributes(styleForCellMark).setText("Measurement: Know relative sizes of measurement units within the metric system.");
      workingTableObject.getRow(9).getCell(0).setAttributes(styleForCellMark).setText("Participation / Perseverance / Focus.");
      //   3.  put previous quarter cells as red, not needed Q1
      //setTableCellColumnRange(workingTableObject, 1, 12, '#666666');
    } // nothing to do for K & 1st graders
    currentFileObject.setName(currentFileName + ', Math OK');
  }
}

// this function is to adjust just the term's math standards.  try to remove this and use above one
// that combines everything
function DONOTUSE_SetMathSkills_Q4() {
  //var thisQuarterFolderObject = DriveApp.getFolderById('0B8RgM3B2REzvM3hQREV0aERjVk0');  // Dee's Pod Q4
  //var currentClassName = "Dee's Pod";
  //var thisQuarterFolderObject = DriveApp.getFolderById('0B8RgM3B2REzvWnBxdlVybm1vdTg');  // Darlene's Pod Q4
  //var currentClassName = "Darlene's Pod";
  //var thisQuarterFolderObject = DriveApp.getFolderById('0B8RgM3B2REzvTHd0N2RtaTZPZGs');  // John's Pod Q4
  //var currentClassName = "John's Pod";
  //var thisQuarterFolderObject = DriveApp.getFolderById('0B8RgM3B2REzvaXRFVDYtZ1ZtTTg');  // Krista's Pod Q4
  //var currentClassName = "Krista's Pod";
  var thisQuarterFolderObject = DriveApp.getFolderById('0B8RgM3B2REzvS09STG44M2FUQUk');  // Nicole's Pod Q4
  var currentClassName = "Nicole's Pod";

  //SpreadsheetApp.getUi().alert(currentClassName);
  var existingFiles = thisQuarterFolderObject.getFiles();
  while (existingFiles.hasNext()) {
    var currentFileObject = existingFiles.next();
    var currentFileName = currentFileObject.getName();
    //SpreadsheetApp.getUi().alert('currentFileName: ' + currentFileName);
    var currentFileID = currentFileObject.getId();
    var currentStudentName = currentFileName.substring(0, currentFileName.indexOf("-") - 1);
    var currentDocObject = DocumentApp.openById(currentFileID);
    var currentDocObjectHeader = currentDocObject.getHeader().copy();
    // find grade
    var workingGradeElement = currentDocObjectHeader.findText(' Progress Report').getElement();
    var workingGradeAsText = workingGradeElement.asText().getText().trim().substring(0,1);
    // removed grade 2 as they are keeping list the same, look at backup.gs if necessary to bring back
    if (workingGradeAsText == '3') {
      var currentDocObjectBody = currentDocObject.getBody();
      // find "Math"
      var workingTableObject = currentDocObjectBody.findText('Math').getElement().getParent().getParent().getParent().getParent();
      // set number of rows for quarter: clearing all contents for each row, removing extra rows.  add 2 rows for title & header
      setRowsOnTable(workingTableObject, 6, true)
      // set format for all rows
      var styleForCellMark = {};
      styleForCellMark[DocumentApp.Attribute.HORIZONTAL_ALIGNMENT] = DocumentApp.HorizontalAlignment.LEFT;
      styleForCellMark[DocumentApp.Attribute.FONT_FAMILY] = DocumentApp.FontFamily.CALIBRI;
      styleForCellMark[DocumentApp.Attribute.FONT_SIZE] = 8;
      styleForCellMark[DocumentApp.Attribute.BOLD] = false;
      // put in current quarter descriptions, don't forget the header is row 0 & 1
      workingTableObject.getRow(2).getCell(0).setAttributes(styleForCellMark).setText("Number Sense: To be able to understand a fraction as a fraction on a number line.");
      workingTableObject.getRow(3).getCell(0).setAttributes(styleForCellMark).setText("Number Sense: To be able to compare two fractions with the same numerator or same denominator by reasoning about their size.");
      workingTableObject.getRow(4).getCell(0).setAttributes(styleForCellMark).setText("Number Sense: To be able to  understand fractions as part of a whole.");
      workingTableObject.getRow(5).getCell(0).setAttributes(styleForCellMark).setText("Participation / Perseverance / Focus.");
      //   3.  put previous quarter cells as red, not needed Q1
      setTableCellColumnRange(workingTableObject, 1, 12, '#666666');
    } else if (workingGradeAsText == '4') {
      var currentDocObjectBody = currentDocObject.getBody();
      // find "Math"
      var workingTableObject = currentDocObjectBody.findText('Math').getElement().getParent().getParent().getParent().getParent();
      // set number of rows for quarter: clearing all contents for each row, removing extra rows.  add 2 rows for title & header
      setRowsOnTable(workingTableObject, 7, true)
      // set format for all rows
      var styleForCellMark = {};
      styleForCellMark[DocumentApp.Attribute.HORIZONTAL_ALIGNMENT] = DocumentApp.HorizontalAlignment.LEFT;
      styleForCellMark[DocumentApp.Attribute.FONT_FAMILY] = DocumentApp.FontFamily.CALIBRI;
      styleForCellMark[DocumentApp.Attribute.FONT_SIZE] = 8;
      styleForCellMark[DocumentApp.Attribute.BOLD] = false;
      // put in current quarter descriptions, don't forget the header is row 0 & 1
      workingTableObject.getRow(2).getCell(0).setAttributes(styleForCellMark).setText("Geometry: To be able to draw and identify points, lines, line segments, rays, and angles.");
      workingTableObject.getRow(3).getCell(0).setAttributes(styleForCellMark).setText("Geometry: To be able to identify parallel and perpendicular lines.");
      workingTableObject.getRow(4).getCell(0).setAttributes(styleForCellMark).setText("Measurement: To be able to measure and draw angles using a protractor.");
      workingTableObject.getRow(5).getCell(0).setAttributes(styleForCellMark).setText("Measurement: To be able to recognize angle measure as additive.");
      workingTableObject.getRow(6).getCell(0).setAttributes(styleForCellMark).setText("Participation / Perseverance / Focus.");
      //   3.  put previous quarter cells as red, not needed Q1
      setTableCellColumnRange(workingTableObject, 1, 12, '#666666');
    } // nothing to do for K & 1st graders
    currentFileObject.setName(currentFileName + ', Math OK');
  }
}


// this function is to adjust just the term's math standards.  try to remove this and use above one
// that combines everything
function DONOTUSE_SetMathSkills_Q3() {
  //var thisQuarterFolderObject = DriveApp.getFolderById('0B8RgM3B2REzvM3hQREV0aERjVk0');  // Dee's Pod Q3
  //var currentClassName = "Dee's Pod";

  //SpreadsheetApp.getUi().alert(currentClassName);
  var existingFiles = thisQuarterFolderObject.getFiles();
  while (existingFiles.hasNext()) {
    var currentFileObject = existingFiles.next();
    var currentFileName = currentFileObject.getName();
    //SpreadsheetApp.getUi().alert('currentFileName: ' + currentFileName);
    var currentFileID = currentFileObject.getId();
    var currentStudentName = currentFileName.substring(0, currentFileName.indexOf("-") - 1);
    var currentDocObject = DocumentApp.openById(currentFileID);
    var currentDocObjectHeader = currentDocObject.getHeader().copy();
    // find grade
    var workingGradeElement = currentDocObjectHeader.findText(' Progress Report').getElement();
    var workingGradeAsText = workingGradeElement.asText().getText().trim().substring(0,1);
    // removed grade 2 as they are keeping list the same, look at backup.gs if necessary to bring back
    if (workingGradeAsText == '3') {
      var currentDocObjectBody = currentDocObject.getBody();
      // find "Math"
      var workingTableObject = currentDocObjectBody.findText('Math').getElement().getParent().getParent().getParent().getParent();
      // set number of rows for quarter: clearing all contents for each row, removing extra rows.  add 2 rows for title & header
      setRowsOnTable(workingTableObject, 7, true)
      // set format for all rows
      var styleForCellMark = {};
      styleForCellMark[DocumentApp.Attribute.HORIZONTAL_ALIGNMENT] = DocumentApp.HorizontalAlignment.LEFT;
      styleForCellMark[DocumentApp.Attribute.FONT_FAMILY] = DocumentApp.FontFamily.CALIBRI;
      styleForCellMark[DocumentApp.Attribute.FONT_SIZE] = 8;
      styleForCellMark[DocumentApp.Attribute.BOLD] = false;
      // put in current quarter descriptions, don't forget the header is row 0 & 1
      workingTableObject.getRow(2).getCell(0).setAttributes(styleForCellMark).setText("Number Sense:  To be able to fluently multiply within 100 using different strategies.");
      workingTableObject.getRow(3).getCell(0).setAttributes(styleForCellMark).setText("Number Sense:  To be able to fluently divide within 100 using different strategies.");
      workingTableObject.getRow(4).getCell(0).setAttributes(styleForCellMark).setText("Number Sense: To be able to solve 2-step word problems using multiplication and division.");
      workingTableObject.getRow(5).getCell(0).setAttributes(styleForCellMark).setText("Number Sense: To be able to use parenthesis to solve multi-operation equations.");
      workingTableObject.getRow(6).getCell(0).setAttributes(styleForCellMark).setText("Participation / Perseverance / Focus.");
      //   3.  put previous quarter cells as red, not needed Q1
      setTableCellColumnRange(workingTableObject, 1, 8, '#666666');
    } else if (workingGradeAsText == '4') {
      var currentDocObjectBody = currentDocObject.getBody();
      // find "Math"
      var workingTableObject = currentDocObjectBody.findText('Math').getElement().getParent().getParent().getParent().getParent();
      // set number of rows for quarter: clearing all contents for each row, removing extra rows.  add 2 rows for title & header
      setRowsOnTable(workingTableObject, 8, true)
      // set format for all rows
      var styleForCellMark = {};
      styleForCellMark[DocumentApp.Attribute.HORIZONTAL_ALIGNMENT] = DocumentApp.HorizontalAlignment.LEFT;
      styleForCellMark[DocumentApp.Attribute.FONT_FAMILY] = DocumentApp.FontFamily.CALIBRI;
      styleForCellMark[DocumentApp.Attribute.FONT_SIZE] = 8;
      styleForCellMark[DocumentApp.Attribute.BOLD] = false;
      // put in current quarter descriptions, don't forget the header is row 0 & 1
      workingTableObject.getRow(2).getCell(0).setAttributes(styleForCellMark).setText("Number Sense: To be able to multiply two 2-digit numbers using different strategies.");
      workingTableObject.getRow(3).getCell(0).setAttributes(styleForCellMark).setText("Number Sense: To be able to find whole number quotients and remainders.");
      workingTableObject.getRow(4).getCell(0).setAttributes(styleForCellMark).setText("Number Sense: To be able to add and subtract fractions with like and unlike denominators.");
      workingTableObject.getRow(5).getCell(0).setAttributes(styleForCellMark).setText("Number Sense: To be able to compare two fractions with different numerators or different denominators.");
      workingTableObject.getRow(6).getCell(0).setAttributes(styleForCellMark).setText("Number Sense: To be able to plot fractions accurately on a number line.");
      workingTableObject.getRow(7).getCell(0).setAttributes(styleForCellMark).setText("Participation / Perseverance / Focus.");
      //   3.  put previous quarter cells as red, not needed Q1
      setTableCellColumnRange(workingTableObject, 1, 8, '#666666');
    } // nothing to do for K & 1st graders
    currentFileObject.setName(currentFileName + ', Math OK');
  }
}


// this function is to adjust just the term's math standards.  try to remove this and use above one
// that combines everything
function DONOTUSE_SetMathSkills_Q2() {
  //var thisQuarterFolderObject = DriveApp.getFolderById('0B8RgM3B2REzvM3hQREV0aERjVk0');  // Dee's Pod Q2
  //var currentClassName = "Dee's Pod";

  //SpreadsheetApp.getUi().alert(currentClassName);
  var existingFiles = thisQuarterFolderObject.getFiles();
  while (existingFiles.hasNext()) {
    var currentFileObject = existingFiles.next();
    var currentFileName = currentFileObject.getName();
    //SpreadsheetApp.getUi().alert('currentFileName: ' + currentFileName);
    var currentFileID = currentFileObject.getId();
    var currentStudentName = currentFileName.substring(0, currentFileName.indexOf("-") - 1);
    var currentDocObject = DocumentApp.openById(currentFileID);
    var currentDocObjectHeader = currentDocObject.getHeader().copy();
    // find grade
    var workingGradeElement = currentDocObjectHeader.findText(' Progress Report').getElement();
    var workingGradeAsText = workingGradeElement.asText().getText().trim().substring(0,1);
    // removed grade 2 as they are keeping list the same, look at backup.gs if necessary to bring back
    if (workingGradeAsText == '3') {
      var currentDocObjectBody = currentDocObject.getBody();
      // find "Math"
      var workingTableObject = currentDocObjectBody.findText('Math').getElement().getParent().getParent().getParent().getParent();
      // set number of rows for quarter: clearing all contents for each row, removing extra rows.  add 2 rows for title & header
      setRowsOnTable(workingTableObject, 9, true)
      // set format for all rows
      var styleForCellMark = {};
      styleForCellMark[DocumentApp.Attribute.HORIZONTAL_ALIGNMENT] = DocumentApp.HorizontalAlignment.LEFT;
      styleForCellMark[DocumentApp.Attribute.FONT_FAMILY] = DocumentApp.FontFamily.CALIBRI;
      styleForCellMark[DocumentApp.Attribute.FONT_SIZE] = 8;
      styleForCellMark[DocumentApp.Attribute.BOLD] = false;
      // put in current quarter descriptions, don't forget the header is row 0 & 1
      workingTableObject.getRow(2).getCell(0).setAttributes(styleForCellMark).setText("Number Sense:  Adding and subtracting multi-digit numbers with regrouping.");
      workingTableObject.getRow(3).getCell(0).setAttributes(styleForCellMark).setText("Number Sense:  Estimate by rounding to the nearest 10 or 100.");
      workingTableObject.getRow(4).getCell(0).setAttributes(styleForCellMark).setText("Measurement:  Measure time intervals in minutes by representing the problem on a number line.");
      workingTableObject.getRow(5).getCell(0).setAttributes(styleForCellMark).setText("Measurement:  Measure and estimate liquid volumes and masses of objects using standard units or grams, kilograms, and liters.");
      workingTableObject.getRow(6).getCell(0).setAttributes(styleForCellMark).setText("Number Sense:  Multiply and divide up to 7's");
      workingTableObject.getRow(7).getCell(0).setAttributes(styleForCellMark).setText("Problem Solving:  Use the four operations to solve word problems involving masses or volumes that are given in the same units.");
      workingTableObject.getRow(8).getCell(0).setAttributes(styleForCellMark).setText("Participation / Perseverance / Focus.");
      //   3.  put previous quarter cells as red, not needed Q1
      setTableCellColumnRange(workingTableObject, 1, 4, '#666666');
    } else if (workingGradeAsText == '4') {
      var currentDocObjectBody = currentDocObject.getBody();
      // find "Math"
      var workingTableObject = currentDocObjectBody.findText('Math').getElement().getParent().getParent().getParent().getParent();
      // set number of rows for quarter: clearing all contents for each row, removing extra rows.  add 2 rows for title & header
      setRowsOnTable(workingTableObject, 9, true)
      // set format for all rows
      var styleForCellMark = {};
      styleForCellMark[DocumentApp.Attribute.HORIZONTAL_ALIGNMENT] = DocumentApp.HorizontalAlignment.LEFT;
      styleForCellMark[DocumentApp.Attribute.FONT_FAMILY] = DocumentApp.FontFamily.CALIBRI;
      styleForCellMark[DocumentApp.Attribute.FONT_SIZE] = 8;
      styleForCellMark[DocumentApp.Attribute.BOLD] = false;
      // put in current quarter descriptions, don't forget the header is row 0 & 1
      workingTableObject.getRow(2).getCell(0).setAttributes(styleForCellMark).setText("Number Sense: multiply whole numbers by one digit using different multiplication models.");
      workingTableObject.getRow(3).getCell(0).setAttributes(styleForCellMark).setText("Number Sense: find quotient and remainders with one digit divisors.");
      workingTableObject.getRow(4).getCell(0).setAttributes(styleForCellMark).setText("Measurement:  find the perimeter of a rectangle when given the area and one length.");
      workingTableObject.getRow(5).getCell(0).setAttributes(styleForCellMark).setText("Measurement:  find the area of a rectangle when given the perimeter and one length.");
      workingTableObject.getRow(6).getCell(0).setAttributes(styleForCellMark).setText("Number Sense - multiply two digit by two digit whole numbers.");
      workingTableObject.getRow(7).getCell(0).setAttributes(styleForCellMark).setText("Problem Solving: solve multi-step word problems posed with whole numbers and having whole-number answers using the four operation.");
      workingTableObject.getRow(8).getCell(0).setAttributes(styleForCellMark).setText("Participation / Perseverance / Focus.");
      //   3.  put previous quarter cells as red, not needed Q1
      setTableCellColumnRange(workingTableObject, 1, 4, '#666666');
    } // nothing to do for K & 1st graders
    currentFileObject.setName(currentFileName + ', Math OK');
  }
}
