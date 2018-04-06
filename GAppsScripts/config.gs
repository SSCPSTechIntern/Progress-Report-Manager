/**
 *
 * Code to get/process configs.  All configs will be in specifically named sheets.
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
  var currentClassName = "Dee & Pam's Pod";
  var currentClassFolderID = '0B8RgM3B2REzvWUhUOEQyMC1qSHc';  // Dee's Pod
  var currentClassLevel = "L2";

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

  //var currentClassName = "John's Pod";
  //var currentClassFolderID = '0B8RgM3B2REzvQkZyck1uZzFLNGM';
  //var currentClassLevel = "L2";

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
function GetConfigGradeTermStandards(passedGrade, passedTerm) {
  // eventually find values from sheet, but for now is brute forcish
  // get usual variables
  var currentYear = GetConfig("currentYear");
  var currentTerm = GetConfig("currentTerm");
  var currentClassName = GetConfig("currentClassName");
  var currentClassFolderObject = GetConfig("currentClassFolderObject"); // was thisQuarterFolderObject
  var currentClassLevel = GetConfig("currentClassLevel");
  //function specific variables
  var arrayOfStandards = [];
  arrayOfStandards.push("ERROR: arrayOfStandards initialized, but not changed.");
  switch (passedTerm) {
    // this first case is just for testing, be sure to keep it as "X1" in production
    case "X1":
    //case "Q3":
      if (passedGrade == '3') {
        var arrayOfStandards = [];
        arrayOfStandards.push("Standard 7 for 3rd graders.");
        arrayOfStandards.push("Standard 6 for 3rd graders.");
        arrayOfStandards.push("Standard 5 for 3rd graders.");
        arrayOfStandards.push("Standard 4 for 3rd graders.");
        arrayOfStandards.push("Standard 3 for 3rd graders.");
        arrayOfStandards.push("Standard 2 for 3rd graders.");
        arrayOfStandards.push("Standard 1 for 3rd graders.");
        arrayOfStandards.push("Participation / Perseverance / Focus.");
      } else if (passedGrade == '4') {
        var arrayOfStandards = [];
        arrayOfStandards.push("Standard 10 for 4th graders.");
        arrayOfStandards.push("Standard 9 for 4th graders.");
        arrayOfStandards.push("Standard 8 for 4th graders.");
        arrayOfStandards.push("Standard 7 for 4th graders.");
        arrayOfStandards.push("Standard 6 for 4th graders.");
        arrayOfStandards.push("Standard 5 for 4th graders.");
        arrayOfStandards.push("Standard 4 for 4th graders.");
        arrayOfStandards.push("Standard 3 for 4th graders.");
        arrayOfStandards.push("Standard 2 for 4th graders.");
        arrayOfStandards.push("Standard 1 for 4th graders.");
        arrayOfStandards.push("Participation / Perseverance / Focus.");
      } else {
        var arrayOfStandards = [];
        var errorMessage = "ERROR: Grade " + passedGrade + " is not defined."
        arrayOfStandards.push(errorMessage);
        SpreadsheetApp.getUi().alert(errorMessage);
      }
      break;
    case "Q1":
      var arrayOfStandards = [];
      var errorMessage = "ERROR: Q1 is defined in template, please do not ask for it. :-)"
      arrayOfStandards.push(errorMessage);
      SpreadsheetApp.getUi().alert(errorMessage);
      break;
    case "Q2":
      if (passedGrade == '3') {
        var arrayOfStandards = [];
        arrayOfStandards.push("Number Sense:  Adding and subtracting multi-digit numbers with regrouping.");
        arrayOfStandards.push("Number Sense:  Estimate by rounding to the nearest 10 or 100.");
        arrayOfStandards.push("Measurement:  Measure time intervals in minutes by representing the problem on a number line.");
        arrayOfStandards.push("Measurement:  Measure and estimate liquid volumes and masses of objects using standard units or grams, kilograms, and liters.");
        arrayOfStandards.push("Number Sense:  Multiply and divide up to 7's.");
        arrayOfStandards.push("Problem Solving:  Use the four operations to solve word problems involving masses or volumes that are given in the same units.");
        arrayOfStandards.push("Participation / Perseverance / Focus.");
      } else if (passedGrade == '4') {
        var arrayOfStandards = [];
        arrayOfStandards.push("Number Sense: Multiply whole numbers by one digit using different multiplication models.");
        arrayOfStandards.push("Number Sense: Find quotient and remainders of 2-digit numbers with one digit divisors.");
        arrayOfStandards.push("Measurement:  Find the perimeter of a rectangle when given the area and one length.");
        arrayOfStandards.push("Measurement:  Find the area of a rectangle when given the perimeter and one length.");
        arrayOfStandards.push("Problem Solving: Solve multi-step word problems posed with whole numbers and having whole-number answers using the four operation.");
        arrayOfStandards.push("Participation / Perseverance / Focus.");
      } else {
        var arrayOfStandards = [];
        var errorMessage = "ERROR: Grade " + passedGrade + " is not defined."
        arrayOfStandards.push(errorMessage);
        SpreadsheetApp.getUi().alert(errorMessage);
      }
      break;
    case "Q3":
      if (passedGrade == '3') {
        var arrayOfStandards = [];
        arrayOfStandards.push("Operations: To solve equations using parentheses.");
        arrayOfStandards.push("Operations: To solve equations with a letter standing for the unknown quantity.");
        arrayOfStandards.push("Number Sense: To fluently multiply and divide single digits.");
        arrayOfStandards.push("Measurement: To find the area of a rectangle with whole number side lengths.");
        arrayOfStandards.push("Measurement: To find the area of rectangular shapes by decomposing them into non-overlapping rectangles.");
        arrayOfStandards.push("Problem Solving: Use the four operations to solve word problems.");
        arrayOfStandards.push("Participation / Perseverance / Focus.");
      } else if (passedGrade == '4') {
        var arrayOfStandards = [];
        arrayOfStandards.push("Number Sense: Find quotient and remainders with one digit divisors.");
        arrayOfStandards.push("Number Sense: Multiply two-digit by two-digit whole numbers.");
        arrayOfStandards.push("Number Sense: Find all factor pairs for a whole number.");
        arrayOfStandards.push("Number Sense: To determine whether a whole number is prime or composite.");
        arrayOfStandards.push("Number Sense: To recognize and generate equivalent fractions.");
        arrayOfStandards.push("Number Sense: To compare two fractions with like and unlike denominators.");
        arrayOfStandards.push("Number Sense: To add and subtract fraction with like and unlike denominators.");
        arrayOfStandards.push("Participation / Perseverance / Focus.");
      } else {
        var arrayOfStandards = [];
        var errorMessage = "ERROR: Grade " + passedGrade + " is not defined."
        arrayOfStandards.push(errorMessage);
        SpreadsheetApp.getUi().alert(errorMessage);
      }
      break;
    case "Q4":
      if (passedGrade == '3') {
        var arrayOfStandards = [];
        arrayOfStandards.push("Number Sense: To compare two fractions with like numerators or denominators.");
        arrayOfStandards.push("To represent fractions on a number line.");
        arrayOfStandards.push("To display and analyze data on a line plot.");
        arrayOfStandards.push("To draw and read a scaled bar graph.");
        arrayOfStandards.push("Participation / Perseverance / Focus.");
      } else if (passedGrade == '4') {
        var arrayOfStandards = [];
        arrayOfStandards.push("Geometry: To add and subtract fractions with like and unlike denominators.");
        arrayOfStandards.push("Geometry: To compare two fractions with like and unlike denominators.");
        arrayOfStandards.push("Measurement: To express a fraction as a decimal.");
        arrayOfStandards.push("Measurement: To compare two decimals to the hundredths place.");
        arrayOfStandards.push("Measurement: To display and analyze data on line plots in fractions of a unit.");
        arrayOfStandards.push("Participation / Perseverance / Focus.");
      } else {
        var arrayOfStandards = [];
        var errorMessage = "ERROR: Grade " + passedGrade + " is not defined."
        arrayOfStandards.push(errorMessage);
        SpreadsheetApp.getUi().alert(errorMessage);
      }
      break;
    default:
      var arrayOfStandards = [];
      var errorMessage = "ERROR: Term " + passedTerm + " does not exist."
      arrayOfStandards.push(errorMessage);
      SpreadsheetApp.getUi().alert(errorMessage);
      break;
  }
  return(arrayOfStandards);
}
