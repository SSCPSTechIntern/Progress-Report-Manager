/**
 *
 * Code for manual runs but using newer API's.
 * NOTE:  Kindergarten should be run separately from other grades because they use S1/2 instead of Q1/2/3/4.
 *
 * Usage - SETUP of new year:
 *    1) Update "StudentList" sheet with current data.  Do not change layout.
 *    2) Check/update content of templates; i.e. change standards as necessary.
 *    3) Check/Update templates' variables for each grade in GetConfig().
 *    4) Check/Update currentYear & currentTerm variables in GetConfig().
 *    5) Check/Update Pod Names, folder id & level variables in GetConfig().
 *    6) For each Pod, run CreateAddReports() and then SetStudentPodNames().
 *       This is because Google will stop processing if asked to do too much.
 *
 * Usage - ARCHIVE term after teachers done (meaning archive Current Term):
 *    1) Run the export using GAM.  Found at:  https://github.com/SSCPS/Google-Apps-Script-Apps/tree/master/Progress-Report-Manager/downloadprint
 *    2) For each Pod, run ArchiveTerm().  Broken record...this is because Google likes smaller chunks to process.
 *    3) Change permissions so that reports in Pod folder & archive folder are read only by Level.
 *    4) Chnage permissions so that the Archive Folder & contents are owned by admin.school@sscps.org.
 *
 * Usage - NEW TERM creation:
 *    1) MAKE SURE the ArchiveTerm() step above was completed for all Pods.
 *    2) Check with 3rd & 4th grade teachers what the Math Standards are for current term.  Set in SetMathSkills().
 *    3) Check/Update currentTerm variable in GetConfig().
 *    4) For each Pod, run SetMathSkills().  Broken record...this is because Google likes smaller chunks to process.
 *    5) Change all Progress Reports in just the Pod folder to allow editing by level group.  DO NOT touch Archive folders.
 *    6) Wait till teachers "hand in" grades & goto ARCHIVE.
 *
 */


// ===========================
// = Functions =
// ===========================

/**
 *
 * Purpose: create report file per student based on templates.
 * Note: Kindergarten uses S1/2 for terms, 1st - 4th use Q1/2/3/4.
 *
 */
function CreateAddReports() {
  //get needed variables
  var currentYear = GetConfig("currentYear");
  var currentTerm = GetConfig("currentTerm");
  var currentClassName = GetConfig("currentClassName");
  var currentClassFolderObject = GetConfig("currentClassFolderObject");
  var templateGrade0K = GetConfig('templateGrade0K');
  var templateGrade01 = GetConfig('templateGrade01');
  var templateGrade02 = GetConfig('templateGrade02');
  var templateGrade03 = GetConfig('templateGrade03');
  var templateGrade04 = GetConfig('templateGrade04');

  //now do stuff
  //SpreadsheetApp.getUi().alert(currentClassName);
  var ui = SpreadsheetApp.getUi();
  var result = ui.alert('Start Progress Report Creation for ' + currentClassName + '?', ui.ButtonSet.YES_NO);
  if (result == ui.Button.YES) {
    SpreadsheetApp.getUi().alert('Started creating ' + currentClassFolderObject.getName() +' files for ' + currentClassName + '.');
    var currentSpreadsheet = SpreadsheetApp.getActiveSpreadsheet();
    var currentSheet = currentSpreadsheet.setActiveSheet(currentSpreadsheet.getSheetByName('StudentList'));
    var currentRange = currentSheet.getDataRange();
    var data = currentRange.getValues();
    for (i in data) {
      var currentStudent = data[i];
      var currentStudentPod = currentStudent[0];
      var currentStudentName = currentStudent[1];
      var currentStudentGrade = currentStudent[2];
      var currentStudentLevel = currentStudent[3];
      if (currentStudentPod == currentClassName) {
        //SpreadsheetApp.getUi().alert('Pod:  ' + currentStudentPod + ', Name:  ' + currentStudentName + ', Grade:  ' + currentStudentGrade);
        switch (currentStudentGrade) {
          case "0K": // Kindergarten
            var newFileName = currentStudentName + ' - Kindergarten Progress Report ' + currentYear + ', ' + currentTerm;
            //SpreadsheetApp.getUi().alert('New filename:  ' + newFileName);
            DriveApp.getFileById(templateGrade0K).makeCopy(newFileName,currentClassFolderObject);
            //SpreadsheetApp.getUi().alert('Is student grade of ' + currentStudentGrade + ' equal to 0K?');
            break;
          case "01": // 1st grade
            var newFileName = currentStudentName + ' - 1st Grade Progress Report ' + currentYear + ', ' + currentTerm;
            DriveApp.getFileById(templateGrade01).makeCopy(newFileName,currentClassFolderObject);
            //SpreadsheetApp.getUi().alert('Is student grade of ' + currentStudentGrade + ' equal to 01?');
            break;
          case "02": // 2nd grade
            var newFileName = currentStudentName + ' - 2nd Grade Progress Report ' + currentYear + ', ' + currentTerm;
            DriveApp.getFileById(templateGrade02).makeCopy(newFileName,currentClassFolderObject);
            //SpreadsheetApp.getUi().alert('Is student grade of ' + currentStudentGrade + ' equal to 02?');
            break;
          case "03": // 3rd grade
            var newFileName = currentStudentName + ' - 3rd Grade Progress Report ' + currentYear + ', ' + currentTerm;
            DriveApp.getFileById(templateGrade03).makeCopy(newFileName,currentClassFolderObject);
            //SpreadsheetApp.getUi().alert('Is student grade of ' + currentStudentGrade + ' equal to 03?');
            break;
          case "04": // 4th grade
            var newFileName = currentStudentName + ' - 4th Grade Progress Report ' + currentYear + ', '+ currentTerm;
            DriveApp.getFileById(templateGrade04).makeCopy(newFileName,currentClassFolderObject);
            //SpreadsheetApp.getUi().alert('Is student grade of ' + currentStudentGrade + ' equal to 04?');
            break;
          default:
            SpreadsheetApp.getUi().alert('Invalid grade for ' + currentStudentName + '!!!');
            break;
        }
      }
    }
    SpreadsheetApp.getUi().alert('Finished creating ' + currentClassFolderObject.getName() +' files for ' + currentClassName + '.');
  }
}


/**
 *
 * Purpose: sets names inside the file based on the file name.
 * Note: Kindergarten uses S1/2 for terms, 1st - 4th use Q1/2/3/4.
 *
 */
function SetStudentPodNames() {
  //get needed variables
  var currentYear = GetConfig("currentYear");
  var currentTerm = GetConfig("currentTerm");
  var currentClassName = GetConfig("currentClassName");
  var currentClassFolderObject = GetConfig("currentClassFolderObject");

  //now do stuff
  var ui = SpreadsheetApp.getUi();
  var result = ui.alert('Start setting Student and Pod names for ' + currentClassName + '?', ui.ButtonSet.YES_NO);
  if (result == ui.Button.YES) {
    SpreadsheetApp.getUi().alert('Starting name replacement:  ' + currentClassName + '.');
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
      currentDocumentBody.replaceText('{{STUDENT NAME}}', currentStudentName);
      currentDocumentFooter.replaceText('{{STUDENT NAME}}', currentStudentName);
      currentDocumentFooter.replaceText('{{POD NAME}}', currentClassName);
    }
    SpreadsheetApp.getUi().alert('Finished name replacement:  ' + currentClassName + '.');
  }
}


/**
 *
 * Purpose: sets names inside the file based on the file name.
 * Note: Kindergarten uses S1/2 for terms, 1st - 4th use Q1/2/3/4.
 *
 */
function ArchiveTerm() {
  var currentTerm = GetConfig("currentTerm");
  var nextTerm = GetConfig("nextTerm");
  var currentClassName = GetConfig("currentClassName");
  var currentClassFolderObject = GetConfig("currentClassFolderObject"); // was thisQuarterFolderObject
  var currentClassLevel = GetConfig("currentClassLevel");
  SpreadsheetApp.getUi().alert('Started archiving Progress Reports for ' + currentClassName + '.');
  var foundTermArchiveFolder = false;
  var currentArchiveFolder;
  // get list of subfolders
  var existingSubfolders = currentClassFolderObject.getFolders();
  while (existingSubfolders.hasNext()) {
    var currentFolder = existingSubfolders.next();
    var currentFolderName = currentFolder.getName();
    //SpreadsheetApp.getUi().alert('Folder name:  ' + currentFolderName + '.');
    // 1) see if Q# folder exists, see if has contents.  If so, don't do anything & warn user.
    if ( currentFolderName == currentTerm + " Archive" ) {
      foundTermArchiveFolder = true;
      currentArchiveFolder = currentFolder;
    }
  }
  // 2) if Q# doesn't exist, create it
  //SpreadsheetApp.getUi().alert('Found archive folder:  ' + foundTermArchiveFolder + '.');
  if ( foundTermArchiveFolder == false ) {
    currentArchiveFolder = currentClassFolderObject.createFolder(currentTerm + " Archive");
    //SpreadsheetApp.getUi().alert('Creating folder:  ' + currentTerm + 'Archive.');
  }
  // 3) change permissions on folder to:
  //       3a) enabled for "Prevent editors from changing access and adding new people"
  currentArchiveFolder.setShareableByEditors(false);
  //currentArchiveFolder.addEditor('sg-emp-pre@sscps.org');
  //       3c) facstaff_level = read-only
  //currentArchiveFolder.removeEditor('facstaff_l1@sscps.org');
  //currentArchiveFolder.removeEditor('facstaff_l2@sscps.org');
  //if ( currentClassLevel == "L1" ) {
  //  currentArchiveFolder.addViewer('facstaff_l1@sscps.org');
  //} else {
  //  currentArchiveFolder.addViewer('facstaff_l2@sscps.org');
  //}
  //       3d) admin.school = owner
  //currentArchiveFolder.setOwner('admin.school@sscps.org');
  // 4) copy each file in main folder to Q# folder
  var existingFiles = currentClassFolderObject.getFiles();
  while (existingFiles.hasNext()) {
    var currentFile = existingFiles.next();
    var currentFileName = currentFile.getName();
    //SpreadsheetApp.getUi().alert('Copying file:  ' + currentFileName + '.');
    var newFileObject = currentFile.makeCopy(currentFileName, currentArchiveFolder);
    // 5) change permissions on all files to:
    //       5a) enabled for "Prevent editors from changing access and adding new people"
    //newFileObject.setShareableByEditors(false);
    //       5b) sg-emp-pre@sscps.org = editor
    //newFileObject.addEditor('sg-emp-pre@sscps.org');
    //       5c) facstaff_level = read-only
    //newFileObject.removeEditor('facstaff_l1@sscps.org');
    //newFileObject.removeEditor('facstaff_l2@sscps.org');
    //if ( currentClassLevel == "L1" ) {
    //  newFileObject.addViewer('facstaff_l1@sscps.org');
    //} else {
    //  newFileObject.addViewer('facstaff_l2@sscps.org');
    //}
    //       5d) admin.school = owner
    //newFileObject.setOwner('admin.school@sscps.org');
    // 6) rename "master" file to next term
    currentFile.setName(currentFileName.substring(0, currentFileName.length - 4) + ", " + nextTerm);
  }
  SpreadsheetApp.getUi().alert('Done archiving, please check permissions for class: ' + currentClassName + '.');
}


/**
 *
 * Purpose: For 3rd & 4th grade, math standards change quarterly.  This adjusts that table.
 *
 */
//!!IMPORTANT INFO ABOUT ERRORS!!
//  Sometimes teachers accidentally alter the tables.  Doing so will cause this function to error out.
//  The only way to find the problem file is to move all files to temp folder & process them one at a time.
//  To fix, copy a known good table to the problem file(s).
//
//  Two gotchas:  removing comments if copied from another student.  And leaving processed files in the
//  temp folder.
//
function SetMathSkills() {
  var currentYear = GetConfig("currentYear");
  var currentTerm = GetConfig("currentTerm");
  var currentClassName = GetConfig("currentClassName");
  var currentClassFolderObject = GetConfig("currentClassFolderObject"); // was thisQuarterFolderObject
  var currentClassLevel = GetConfig("currentClassLevel");

  // set standards variables
  var arrayOfStandards3rdMath = GetConfigGradeTermStandards('3', currentTerm);
  var arrayOfStandards4thMath = GetConfigGradeTermStandards('4', currentTerm);
  var arrayOfStandards3rdMathLength = arrayOfStandards3rdMath.length;
  var arrayOfStandards4thMathLength = arrayOfStandards4thMath.length;
  //SpreadsheetApp.getUi().alert("3rd Math Array: " + arrayOfStandards3rdMath + ".");
  //SpreadsheetApp.getUi().alert("3rd Math Array Length: " + arrayOfStandards3rdMathLength + ".");
  //SpreadsheetApp.getUi().alert("4th Math Array: " + arrayOfStandards4thMath + ".");
  //SpreadsheetApp.getUi().alert("4th Math Array Length: " + arrayOfStandards4thMathLength + ".");

  SpreadsheetApp.getUi().alert("Setting Math Standards for: " + currentClassName + ".");
  SpreadsheetApp.getUi().alert("WARNING: If a teacher accidentally modifies tables, you will need to process files individually to find the one to fix.");
  var existingFiles = currentClassFolderObject.getFiles();
  while (existingFiles.hasNext()) {
    var currentFileObject = existingFiles.next();
    var currentFileName = currentFileObject.getName();
    var currentFileID = currentFileObject.getId();
    var currentStudentName = currentFileName.substring(0, currentFileName.indexOf("-") - 1);
    var currentDocObject = DocumentApp.openById(currentFileID);
    var currentDocObjectHeader = currentDocObject.getHeader().copy();
    // find grade
    var workingGradeElement = currentDocObjectHeader.findText(' Progress Report').getElement();
    var workingGradeAsText = workingGradeElement.asText().getText().trim().substring(0,1);
    // nothing to do for K - 2 graders
    if (workingGradeAsText == '3') {
      var currentDocObjectBody = currentDocObject.getBody();
      var workingTableObject = currentDocObjectBody.findText('Math').getElement().getParent().getParent().getParent().getParent();
      setRowsOnTable(workingTableObject, arrayOfStandards3rdMathLength + 2, true);
      var styleForCellMark = {};
      styleForCellMark[DocumentApp.Attribute.HORIZONTAL_ALIGNMENT] = DocumentApp.HorizontalAlignment.LEFT;
      styleForCellMark[DocumentApp.Attribute.FONT_FAMILY] = DocumentApp.FontFamily.CALIBRI;
      styleForCellMark[DocumentApp.Attribute.FONT_SIZE] = 8;
      styleForCellMark[DocumentApp.Attribute.BOLD] = false;
      for (i = 0; i < arrayOfStandards3rdMathLength; i++) {
        workingTableObject.getRow(i+2).getCell(0).setAttributes(styleForCellMark).setText(arrayOfStandards3rdMath[i]);
      }
      setGreyOutForTerm(workingTableObject, currentTerm);
    } else if (workingGradeAsText == '4') {
      var currentDocObjectBody = currentDocObject.getBody();
      var workingTableObject = currentDocObjectBody.findText('Math').getElement().getParent().getParent().getParent().getParent();
      setRowsOnTable(workingTableObject, arrayOfStandards4thMathLength + 2, true);
      var styleForCellMark = {};
      styleForCellMark[DocumentApp.Attribute.HORIZONTAL_ALIGNMENT] = DocumentApp.HorizontalAlignment.LEFT;
      styleForCellMark[DocumentApp.Attribute.FONT_FAMILY] = DocumentApp.FontFamily.CALIBRI;
      styleForCellMark[DocumentApp.Attribute.FONT_SIZE] = 8;
      styleForCellMark[DocumentApp.Attribute.BOLD] = false;
      for (i = 0; i < arrayOfStandards4thMathLength; i++) {
        workingTableObject.getRow(i+2).getCell(0).setAttributes(styleForCellMark).setText(arrayOfStandards4thMath[i]);
      }
      setGreyOutForTerm(workingTableObject, currentTerm);
    }
  }
  SpreadsheetApp.getUi().alert("Done setting Math Standards for: " + currentClassName + ".");
}
