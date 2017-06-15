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
 * Purpose: to put all configuration in one location.
 *
 */
function GetConfig(whichConfig) {
  // List docid for template files for each grade
  //var templateGrade0K = '17LcLGP7ByaGe8Bs3jMh63mntpY1v9AXc2_Z3C_kgErE'; // Semester 1
  var templateGrade0K = '1-8V4ueBRxlWf85gKGu90-SMR9uAvdMHBP-IafBBM7Dg'; // Semester 2
  var templateGrade01 = '15xsZJuD-gY9k9Rd_Mo_fFqKl0_H_Yyhp6nf2k0ccjew';
  var templateGrade02 = '1R-79kk-VmLbAthq38HAc66HvJa_I5Z0QgstmS4b9k3M';
  var templateGrade03 = '1TERrr2xbMnQdnnFzxXGaMI8_2MHW8btnawbbUPLiUv8';
  var templateGrade04 = '11y1f5Ra_Jl1Zkj0XqYuSwM9vHW5Q5RsMDs49vFr8VU4';

  // What is current year? FY####
  var currentYear = 'FY2017';

  // What are terms?
  var currentTerm = 'T1';
  var nextTerm = 'T2';
  //var currentTerm = 'Q1';
  //var nextTerm = 'Q2';
  //var currentTerm = 'Q3';
  //var nextTerm = 'Q4';
  //var currentTerm = 'Q4';
  //var nextTerm = 'NA';
  //var currentTerm = 'S1';
  //var nextTerm = 'S2';
  //var currentTerm = 'S2';
  //var nextTerm = 'NA';

  //Folder Vars - Testing
  //var currentClassName = "Dee & Pam's Pod";
  //var currentClassFolderID = '0B8RgM3B2REzvWUhUOEQyMC1qSHc';  // Dee's Pod
  //var currentClassLevel = "L2";

  //Folder Vars - Kindergarten
  //var currentClassName = "Amy & Linda's Pod";
  //var currentClassFolderID = '0B8RgM3B2REzvb0RsWE04Tk1hRTA';
  //var currentClassLevel = "L1";

  //var currentClassName = "Kassandra & Marie's Pod";
  //var currentClassFolderID = '0B8RgM3B2REzvM3YtUGUxbDFFdlU';
  //var currentClassLevel = "L1";

  //var currentClassName = "Kristen & Linda's Pod";
  //var currentClassFolderID = '0B8RgM3B2REzvdmRYSFZmS2tPdEk';
  //var currentClassLevel = "L1";

  //var currentClassName = "Melissa & Marie's Pod";
  //var currentClassFolderID = '0B8RgM3B2REzva1pSTXVCMlBmMnc';
  //var currentClassLevel = "L1";

  //Folder Vars - 1st & 2nd Graders
  //var currentClassName = "Deana & Niki's Pod";
  //var currentClassFolderID = '0B8RgM3B2REzvd3paSHZzWncwcVE';
  //var currentClassLevel = "L1";

  //var currentClassName = "Jessica & Beth's Pod";
  //var currentClassFolderID = '0B8RgM3B2REzvaEJ1cDd1R0lKYzg';
  //var currentClassLevel = "L1";

  //var currentClassName = "June & Amy's Pod";
  //var currentClassFolderID = '0B8RgM3B2REzvMnUxYjJqcHczdlE';
  //var currentClassLevel = "L1";

  //var currentClassName = "Nora & Denise's Pod";
  //var currentClassFolderID = '0B8RgM3B2REzvd0lqMXkzMUZLVUk';
  //var currentClassLevel = "L1";

  //var currentClassName = "Sheina's Pod";
  //var currentClassFolderID = '0B8RgM3B2REzvN0pxOXVqcWdEMDg';
  //var currentClassLevel = "L1";

  //Folder Vars - 3rd & 4th Graders
  //var currentClassName = "Darlene's Pod";
  //var currentClassFolderID = '0B8RgM3B2REzvX1UweVo4SldkWTA';
  //var currentClassLevel = "L2";

  //var currentClassName = "John's Pod";
  //var currentClassFolderID = '0B8RgM3B2REzvRkhoN2x5NWJuRE0';
  //var currentClassLevel = "L2";

  //var currentClassName = "Krista's Pod";
  //var currentClassFolderID = '0B8RgM3B2REzvT1Q2a1lOQ3QySnc';
  //var currentClassLevel = "L2";

  //var currentClassName = "Mariah's Pod";
  //var currentClassFolderID = '0B8RgM3B2REzvVlFyelNyUW85Qlk';
  //var currentClassLevel = "L2";

  //var currentClassName = "Nicole's Pod";
  //var currentClassFolderID = '0B8RgM3B2REzvSzlLLTVONU81MjA';
  //var currentClassLevel = "L2";

  // now create the variable for when called
  var currentClassFolderObject = DriveApp.getFolderById(currentClassFolderID);

  // defaut value
  var foundConfig = "ERROR: initialized foundConfig, but not changed by switch/case.";

  switch (whichConfig) {
    case "templateGrade0K":
      var foundConfig = templateGrade0K;
      break;
    case "templateGrade01":
      var foundConfig = templateGrade01;
      break;
    case "templateGrade02":
      var foundConfig = templateGrade02;
      break;
    case "templateGrade03":
      var foundConfig = templateGrade03;
      break;
    case "templateGrade04":
      var foundConfig = templateGrade04;
      break;
    case "currentYear":
      var foundConfig = currentYear;
      break;
    case "currentTerm":
      var foundConfig = currentTerm;
      break;
    case "nextTerm":
      var foundConfig = nextTerm;
      break;
    case "currentClassName":
      var foundConfig = currentClassName;
      break;
    case "currentClassFolderObject":
      var foundConfig = currentClassFolderObject;
      break;
    case "currentClassLevel":
      var foundConfig = currentClassLevel;
      break;
    default:
      var foundConfig = "ERROR: asking for config that is not found.";
      break;
  }
  return foundConfig;
}



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
//!!IMPORTANT NOTE!!
//  Sometimes teachers accidentally alter the tables.  This will cause this function to error out.
//  The only way to fix it is move all files to temp folder & process them one at a time.
//  Copy a known good table to the problem file(s).  Don't forget to move processed files out the way too.
//
// below are each Q's standards, move into function & update as needed, Q1 is assumed to be in template
// these values are here because Google Apps Scripts has a limit on function "size" with # of characters including comments
  // Q2 - 3rd grade standards
  //var numberOfStandards3rdMath = 7;
  //var arrayOfStandards3rdMath = [];
  //arrayOfStandards3rdMath.push("Number Sense:  Adding and subtracting multi-digit numbers with regrouping.");
  //arrayOfStandards3rdMath.push("Number Sense:  Estimate by rounding to the nearest 10 or 100.");
  //arrayOfStandards3rdMath.push("Measurement:  Measure time intervals in minutes by representing the problem on a number line.");
  //arrayOfStandards3rdMath.push("Measurement:  Measure and estimate liquid volumes and masses of objects using standard units or grams, kilograms, and liters.");
  //arrayOfStandards3rdMath.push("Number Sense:  Multiply and divide up to 7's.");
  //arrayOfStandards3rdMath.push("Problem Solving:  Use the four operations to solve word problems involving masses or volumes that are given in the same units.");
  //arrayOfStandards3rdMath.push("Participation / Perseverance / Focus.");
  // Q2 - 4th grade standards
  //var numberOfStandards4thMath = 7;
  //var arrayOfStandards4thMath = [];
  //arrayOfStandards4thMath.push("Number Sense: Multiply whole numbers by one digit using different multiplication models.");
  //arrayOfStandards4thMath.push("Number Sense: Find quotient and remainders with one digit divisors.");
  //arrayOfStandards4thMath.push("Measurement:  Find the perimeter of a rectangle when given the area and one length.");
  //arrayOfStandards4thMath.push("Measurement:  Find the area of a rectangle when given the perimeter and one length.");
  //arrayOfStandards4thMath.push("Number Sense: Multiply two digit by two digit whole numbers.");
  //arrayOfStandards4thMath.push("Problem Solving: Solve multi-step word problems posed with whole numbers and having whole-number answers using the four operation.");
  //arrayOfStandards4thMath.push("Participation / Perseverance / Focus.");
  // Q3 - 3rd grade standards
  //var numberOfStandards3rdMath = 7;
  //var arrayOfStandards3rdMath = [];
  //arrayOfStandards3rdMath.push("Operations: To solve equations using parentheses.");
  //arrayOfStandards3rdMath.push("Operations: To solve equations with a letter standing for the unknown quantity.");
  //arrayOfStandards3rdMath.push("Number Sense: To fluently multiply and divide single digits.");
  //arrayOfStandards3rdMath.push("Measurement: To find the area of a rectangle with whole number side lengths.");
  //arrayOfStandards3rdMath.push("Measurement: To find the area of rectangular shapes by decomposing them into non-overlapping rectangles.");
  //arrayOfStandards3rdMath.push("Problem Solving: Use the four operations to solve word problems.");
  //arrayOfStandards3rdMath.push("Participation / Perseverance / Focus.");
  // Q3 - 4th grade standards
  //var numberOfStandards4thMath = 7;
  //var arrayOfStandards4thMath = [];
  //arrayOfStandards4thMath.push("Geometry: To draw and identify points, lines, line segments, rays, angles, parallel and perpendicular lines.");
  //arrayOfStandards4thMath.push("Measurement: To measure and draw angles using a protractor");
  //arrayOfStandards4thMath.push("Measurement: To recognize angle measurements as additives.");
  //arrayOfStandards4thMath.push("Geometry: To recognize lines of symmetry for two-dimensional figures.");
  //arrayOfStandards4thMath.push("Geometry: To recognize different types of triangles based on attributes.");
  //arrayOfStandards4thMath.push("Problem Solving:  Use the four operations to solve word problems.");
  //arrayOfStandards4thMath.push("Participation / Perseverance / Focus.");
  // Q4 - 3rd grade standards
  //var numberOfStandards3rdMath = 5;
  //var arrayOfStandards3rdMath = [];
  //arrayOfStandards3rdMath.push("Number Sense: To compare two fractions with like numerators or denominators.");
  //arrayOfStandards3rdMath.push("To represent fractions on a number line.");
  //arrayOfStandards3rdMath.push("To display and analyze data on a line plot.");
  //arrayOfStandards3rdMath.push("To draw and read a scaled bar graph.");
  //arrayOfStandards3rdMath.push("Participation / Perseverance / Focus.");
  // Q4 - 4th grade standards
  //var numberOfStandards4thMath = 6;
  //var arrayOfStandards4thMath = [];
  //arrayOfStandards4thMath.push("Geometry: To add and subtract fractions with like and unlike denominators.");
  //arrayOfStandards4thMath.push("Geometry: To compare two fractions with like and unlike denominators.");
  //arrayOfStandards4thMath.push("Measurement: To express a fraction as a decimal.");
  //arrayOfStandards4thMath.push("Measurement: To compare two decimals to the hundredths place.");
  //arrayOfStandards4thMath.push("Measurement: To display and analyze data on line plots in fractions of a unit.");
  //arrayOfStandards4thMath.push("Participation / Perseverance / Focus.");
function SetMathSkills() {
  // Q4 - 3rd grade standards
  var numberOfStandards3rdMath = 5;
  var arrayOfStandards3rdMath = [];
  arrayOfStandards3rdMath.push("Number Sense: To compare two fractions with like numerators or denominators.");
  arrayOfStandards3rdMath.push("To represent fractions on a number line.");
  arrayOfStandards3rdMath.push("To display and analyze data on a line plot.");
  arrayOfStandards3rdMath.push("To draw and read a scaled bar graph.");
  arrayOfStandards3rdMath.push("Participation / Perseverance / Focus.");
  // Q4 - 4th grade standards
  var numberOfStandards4thMath = 6;
  var arrayOfStandards4thMath = [];
  arrayOfStandards4thMath.push("Geometry: To add and subtract fractions with like and unlike denominators.");
  arrayOfStandards4thMath.push("Geometry: To compare two fractions with like and unlike denominators.");
  arrayOfStandards4thMath.push("Measurement: To express a fraction as a decimal.");
  arrayOfStandards4thMath.push("Measurement: To compare two decimals to the hundredths place.");
  arrayOfStandards4thMath.push("Measurement: To display and analyze data on line plots in fractions of a unit.");
  arrayOfStandards4thMath.push("Participation / Perseverance / Focus.");
  // get other needed variables
  var arrayOfStandards3rdMathLength = arrayOfStandards3rdMath.length;
  var arrayOfStandards4thMathLength = arrayOfStandards4thMath.length;
  var currentYear = GetConfig("currentYear");
  var currentTerm = GetConfig("currentTerm");
  var currentClassName = GetConfig("currentClassName");
  var currentClassFolderObject = GetConfig("currentClassFolderObject"); // was thisQuarterFolderObject
  var currentClassLevel = GetConfig("currentClassLevel");

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
      setRowsOnTable(workingTableObject, numberOfStandards3rdMath + 2, true);
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
      setRowsOnTable(workingTableObject, numberOfStandards4thMath + 2, true);
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
