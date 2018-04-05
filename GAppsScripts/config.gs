/**
 *
 * Code to get/process configs.  All configs are in specifically named sheets.
 *
 */


// ===========================
// = Functions =
// ===========================


/**
 *
 * Purpose: to put all configuration in one location.  This is in use, but to be legacy code.
 *
 */
function GetConfig(whichConfig) {
  // List docid for template files for each grade
  var templateGrade0K = '1hbNwl98lfYCAyXcQ8abDydDtLrVcwFMBXstgbEHS_qw';
  var templateGrade01 = '1oyNmotft9HN0cBbI6C-7L5iG4OtHTzh64yo_2uJaqn4';
  var templateGrade02 = '1zakG7IyWZMqP0uAkZSIsW-1mZXJUMPwl6o0Qs6YIlA0';
  var templateGrade03 = '1RURdvjx74G4-44YUsAxKrHEsZEnnWxcw4gwdTHLNrkE';
  var templateGrade04 = '1wxgKgut6Oh1448Z-hJq7tDkStvI_GOOtU0AVY0aFN_c';

  // What is current year? FY####
  var currentYear = 'FY2018';

  // What are terms?
  //var currentTerm = 'S1';
  //var nextTerm = 'S2';
  //var currentTerm = 'Q1';
  //var nextTerm = 'Q2';
  //var currentTerm = 'Q2';
  //var nextTerm = 'Q3';
  var currentTerm = 'Q3';
  var nextTerm = 'Q4';
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
  //var currentClassName = "Amy's Pod";
  //var currentClassFolderID = '0B8RgM3B2REzvOUp4NzZ6aVY5Z1k';
  //var currentClassLevel = "L1";

  //var currentClassName = "Kassandra's Pod";
  //var currentClassFolderID = '0B8RgM3B2REzvOWdhSE9fNW9jcUE';
  //var currentClassLevel = "L1";

  //var currentClassName = "Kristen E's Pod";
  //var currentClassFolderID = '0B8RgM3B2REzvQkNnTGdRcVdjMVk';
  //var currentClassLevel = "L1";

  //var currentClassName = "Melissa's Pod";
  //var currentClassFolderID = '0B8RgM3B2REzvci1fMjJ4ZHdtQlU';
  //var currentClassLevel = "L1";

  //Folder Vars - 1st & 2nd Graders
  //var currentClassName = "Arbrenne's Pod";
  //var currentClassFolderID = '0B8RgM3B2REzvQTRQalVoSkl4T2c';
  //var currentClassLevel = "L1";

  //var currentClassName = "Deana's Pod";
  //var currentClassFolderID = '0B8RgM3B2REzvLUJuYUVUMFBTMVk';
  //var currentClassLevel = "L1";

  //var currentClassName = "Derek's Pod";
  //var currentClassFolderID = '0B8RgM3B2REzvdGI3RWZxWm02Zjg';
  //var currentClassLevel = "L1";

  //var currentClassName = "Jessica's Pod";
  //var currentClassFolderID = '0B8RgM3B2REzvb3ROSGFZWlNCYUU';
  //var currentClassLevel = "L1";

  //var currentClassName = "June's Pod";
  //var currentClassFolderID = '0B8RgM3B2REzvS1M3TmJrVVNZVDg';
  //var currentClassLevel = "L1";

  //var currentClassName = "Sheina's Pod";
  //var currentClassFolderID = '0B8RgM3B2REzvLXNTdTNjMFY2a1U';
  //var currentClassLevel = "L1";

  //Folder Vars - 3rd & 4th Graders
  //var currentClassName = "Darlene's Pod";
  //var currentClassFolderID = '0B8RgM3B2REzvS21mTFJuYmpJc1U';
  //var currentClassLevel = "L2";

  var currentClassName = "John's Pod";
  var currentClassFolderID = '0B8RgM3B2REzvQkZyck1uZzFLNGM';
  var currentClassLevel = "L2";

  //var currentClassName = "Kelsey's Pod";
  //var currentClassFolderID = '0B8RgM3B2REzvaHdxQTFZVlpKU2s';
  //var currentClassLevel = "L2";

  //var currentClassName = "Kristen H's Pod";
  //var currentClassFolderID = '0B8RgM3B2REzvNnVsV2dXeGlyb3M';
  //var currentClassLevel = "L2";

  //var currentClassName = "Mariah's Pod";
  //var currentClassFolderID = '0B8RgM3B2REzvcjlQMVY3MHF0bGs';
  //var currentClassLevel = "L2";

  //var currentClassName = "Nicole's Pod";
  //var currentClassFolderID = '0B8RgM3B2REzvRkJkWF9CVWtrRjA';
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
 * Purpose: for passed in config, return config from sheet
 *
 */
function GetConfigMisc(whichConfig) {

  // find value from sheet

}

/**
 *
 * Purpose: for passed in Pod return value from sheet.
 *
 */
function GetConfigPod(podName,whichConfig) {

  // get lastPodSelected

  // define empty arrays
  var arrayClassName = {};
  var arrayClassFolderID = {};
  var arrayClassLevel = {};

  // get all rows from sheet
  // populate each array from columns
}

/**
 *
 * Purpose: for passed in grade & term, return array of relevant skills
 *
 */
function GetConfigGradeSkills(grade) {

  // find values from sheet

}
