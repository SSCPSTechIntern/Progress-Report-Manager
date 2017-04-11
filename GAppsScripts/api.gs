/**
 * API type functions
 *
 * Functions that are used by other functions, processes, etc.  This is mostly
 *     so it it better organized and easier to find functions that are used in
 *     other files.
 */

// will modify passed in table so that all of the passed in columns for each row (minus "header" rows)
//   are changed to the passed in color
function setTableCellColumnRange(workingTableObject, columnToStart, columntoEnd, colorToSet) {
  var workingTableNumRows = workingTableObject.getNumRows();
  for (i = 2; i < workingTableNumRows; i++) {
    var workingCurrentTableRow = workingTableObject.getRow(i);
    for (j = columnToStart; j < columntoEnd + 1; j++) {
      workingCurrentTableRow.getCell(j).setText('');
      workingCurrentTableRow.getCell(j).setBackgroundColor(colorToSet);
    }
  }
}

function setGreyOutForTerm(workingTableObject,currentTerm) {
  switch (currentTerm) {
    case "Q2":
      var greyOutEndRow = 4;
      break;
    case "Q3":
      var greyOutEndRow = 8;
      break;
    case "Q4":
      var greyOutEndRow = 12;
      break;
    default:
      var greyOutEndRow = "ERROR: incompatible term.";
      break;
  }
  setTableCellColumnRange(workingTableObject, 1, greyOutEndRow, '#666666');
}

// will modify the passed in table to have number of rows passed,
// counted from zero, so essentially includes header
// because of formating requirements, will not go below 4 total rows
// each row will be formatted & empty as well
function setRowsOnTable(workingTableObject, numberOfRows, clearRows) {
  //SpreadsheetApp.getUi().alert('CurrentObject: ' + workingTableObject.getType() + ", " + workingTableObject.getText());
  if (numberOfRows < 4) {
    // "error" out & do nothing
    SpreadsheetApp.getUi().alert('Asked for ' + numberOfRows + ', while 4 is the minimum because of formating with copy & paste.');
  } else {
    var workingTableNumRows = workingTableObject.getNumRows();
    //SpreadsheetApp.getUi().alert('Asked for ' + numberOfRows + ', and ' + workingTableNumRows + ' rows exist.');
    if (workingTableNumRows < 4) {
      // "error" out & do nothing
      SpreadsheetApp.getUi().alert('Source table is ' + workingTableNumRows + ', so will cause problems because of formating with copy & paste.');
    } else {
      // setup style for new and/or all rows
      var styleForCellDesc = {};
      styleForCellDesc[DocumentApp.Attribute.HORIZONTAL_ALIGNMENT] = DocumentApp.HorizontalAlignment.LEFT;
      styleForCellDesc[DocumentApp.Attribute.FONT_FAMILY] = DocumentApp.FontFamily.CALIBRI;
      styleForCellDesc[DocumentApp.Attribute.FONT_SIZE] = 8;
      styleForCellDesc[DocumentApp.Attribute.BOLD] = false;
      var styleForCellMark = {};
      styleForCellMark[DocumentApp.Attribute.HORIZONTAL_ALIGNMENT] = DocumentApp.HorizontalAlignment.LEFT;
      styleForCellMark[DocumentApp.Attribute.FONT_FAMILY] = DocumentApp.FontFamily.CALIBRI;
      styleForCellMark[DocumentApp.Attribute.FONT_SIZE] = 11;
      styleForCellMark[DocumentApp.Attribute.BOLD] = false;
      // check if need to delete rows
      if (numberOfRows < workingTableNumRows) {
        //SpreadsheetApp.getUi().alert('Inside delete rows.');
        for (i = numberOfRows; i < workingTableNumRows; i++) {
          workingTableObject.removeRow(3);
        }
      }
      // check if need to add rows
      if (numberOfRows > workingTableNumRows) {
        //SpreadsheetApp.getUi().alert('Inside add rows.');
        // find row to copy & then insert a copy
        // now loop through number of rows to create
        for (i = workingTableNumRows; i < numberOfRows; i++) {
          var workingRowToCopy = workingTableObject.getRow(2);  //doing 2 rows down so line weight is properly preserved
          var workingCopiedRow = workingRowToCopy.copy();  //copy the row as a "detached" object
          var workingNumRowsCurrent = workingTableObject.getNumRows();
          var workingInsertedRow = workingTableObject.insertTableRow(workingNumRowsCurrent - 1, workingCopiedRow);   //now insert a table row as second to last row
          //need to insert at least 1 cell to complete row insert
          workingInsertedRow.getCell(0).setAttributes(styleForCellDesc).setText('').setBackgroundColor('#ffffff');
          workingInsertedRow.getCell(1).setAttributes(styleForCellMark).setText('').setBackgroundColor('#ffffff');
          workingInsertedRow.getCell(2).setAttributes(styleForCellMark).setText('').setBackgroundColor('#ffffff');
          workingInsertedRow.getCell(3).setAttributes(styleForCellMark).setText('').setBackgroundColor('#ffffff');
          workingInsertedRow.getCell(4).setAttributes(styleForCellMark).setText('').setBackgroundColor('#ffffff');
          workingInsertedRow.getCell(5).setAttributes(styleForCellMark).setText('').setBackgroundColor('#f2f2f2');
          workingInsertedRow.getCell(6).setAttributes(styleForCellMark).setText('').setBackgroundColor('#f2f2f2');
          workingInsertedRow.getCell(7).setAttributes(styleForCellMark).setText('').setBackgroundColor('#f2f2f2');
          workingInsertedRow.getCell(8).setAttributes(styleForCellMark).setText('').setBackgroundColor('#f2f2f2');
          workingInsertedRow.getCell(9).setAttributes(styleForCellMark).setText('').setBackgroundColor('#ffffff');
          workingInsertedRow.getCell(10).setAttributes(styleForCellMark).setText('').setBackgroundColor('#ffffff');
          workingInsertedRow.getCell(11).setAttributes(styleForCellMark).setText('').setBackgroundColor('#ffffff');
          workingInsertedRow.getCell(12).setAttributes(styleForCellMark).setText('').setBackgroundColor('#ffffff');
          workingInsertedRow.getCell(13).setAttributes(styleForCellMark).setText('').setBackgroundColor('#f2f2f2');
          workingInsertedRow.getCell(14).setAttributes(styleForCellMark).setText('').setBackgroundColor('#f2f2f2');
          workingInsertedRow.getCell(15).setAttributes(styleForCellMark).setText('').setBackgroundColor('#f2f2f2');
          workingInsertedRow.getCell(16).setAttributes(styleForCellMark).setText('').setBackgroundColor('#f2f2f2');
        }
      }
      // now empty each row
      var checkCellGroup4 = '24';
      var workingTableNumRows = workingTableObject.getNumRows();
      //SpreadsheetApp.getUi().alert('Now empty ' + workingTableNumRows + ' rows.');
      //SpreadsheetApp.getUi().alert('CurrentObject: ' + workingTableObject.getType() + ", " + workingTableObject.getText());
      for (i = 2; i < workingTableNumRows; i++) {
        //SpreadsheetApp.getUi().alert('Iteration ' + i + '.');
        var workingCurrentTableRow = workingTableObject.getRow(i);
        if (clearRows) {
          workingCurrentTableRow.getCell(0).setAttributes(styleForCellDesc).setText('').setBackgroundColor('#ffffff');
        } else {
          workingCurrentTableRow.getCell(0).setAttributes(styleForCellDesc).setBackgroundColor('#ffffff');
        }
        //SpreadsheetApp.getUi().alert('Iteration ' + i + ', currentObject: ' + workingCurrentTableRow.asText().getText());
        var workingTableNumCells = workingCurrentTableRow.getNumCells();
        for (j = 1; j < workingTableNumCells; j++) {
          //if (i == 2) {
            //SpreadsheetApp.getUi().alert('Cell is: ' + j + '\nDivide & round:  ' + Math.ceil(j / 4).toString() + '\nChange?  ' + checkCell4ths.indexOf(Math.ceil(j / 4).toString()));
          //};
          if (checkCellGroup4.indexOf(Math.ceil(j / 4).toString()) > -1) {
            if (clearRows) {
              workingCurrentTableRow.getCell(j).setAttributes(styleForCellMark).setText('').setBackgroundColor('#f2f2f2');
            } else {
              workingCurrentTableRow.getCell(j).setAttributes(styleForCellMark).setBackgroundColor('#f2f2f2');
            }
          } else {
            if (clearRows) {
              workingCurrentTableRow.getCell(j).setAttributes(styleForCellMark).setText('').setBackgroundColor('#ffffff');
            } else {
              workingCurrentTableRow.getCell(j).setAttributes(styleForCellMark).setBackgroundColor('#ffffff');
            }
          }
        }
      }
    }
  }
}

// returns 2D array where first arugment is passed in array, second argument is first field and third argument is second field
function extractFromArray2DArray(arrayToLookThrough, fieldToExtractFirst, fieldToExtractSecond) {
  var returnArray = [];
  for (var i in arrayToLookThrough) {
    returnArray.push([arrayToLookThrough[i][fieldToExtractFirst], arrayToLookThrough[i][fieldToExtractSecond]])
  }
  return returnArray;
}

// returns subset array of passed in array where first part of key pair contain the second argument
function extractFrom2DArrayMultipleValues(arrayToLookThrough, keyToLookFor) {
  var returnArray = [];
  for (var i in arrayToLookThrough) {
    var compareValue = arrayToLookThrough[i][0].substring(0,keyToLookFor.length);
    if (compareValue == keyToLookFor) {
      returnArray.push([arrayToLookThrough[i][0], arrayToLookThrough[i][1]])
    }
  }
  return returnArray;
}

// returns string of second part of key pair array where second argument matches exactly
function extractFrom2DArraySingleValue(arrayToLookThrough, keyToLookFor) {
  var returnValue;
  for (var i in arrayToLookThrough) {
    if (arrayToLookThrough[i][0] == keyToLookFor) {
      returnValue = arrayToLookThrough[i][1];
      return returnValue;
    }
  }
}

// returns all values in a sheet as an array
function getVariablesFromSheet(sheetToSearch) {
  var currentSpreadSheet = SpreadsheetApp.getActiveSpreadsheet();
  var currentSheet = currentSpreadSheet.getSheetByName(sheetToSearch);
  var currentRange = currentSheet.getDataRange();
  return returnArray = currentRange.getValues();
}


// counts the number of pages in the passed-in document after getting it as a PDF
function countPages(passedDocumentObject) {
  var blob = passedDocumentObject.getAs("application/pdf");
  var data = blob.getDataAsString();
  var pages = parseInt(data.match(/ \/N (\d+) /)[1], 10);
  Logger.log("pages = " + pages);
  return pages;
}


// Convert spreadsheet to PDF file.
//function documentToPDF(id,name) {

  //var pdf = id.getFileById().getAs('application/pdf').getBytes();

  //https://docs.google.com/document/d/1CCF0sfPhPmuy38opWWMjnIHCjpHwZAiEmXi91kMkGyM/edit
  //https://docs.google.com/document/d/1CCF0sfPhPmuy38opWWMjnIHCjpHwZAiEmXi91kMkGyM/export?&fitw=true&exportFormat=pdf&format=pdf
  //DocumentApp.flush();

  //define usefull vars
  //var oauthConfig = UrlFetchApp.addOAuthService("google");
  //var scope = "https://docs.google.com/feeds/";

  //make OAuth connection
  //oauthConfig.setAccessTokenUrl("https://www.google.com/accounts/OAuthGetAccessToken");
  //oauthConfig.setRequestTokenUrl("https://www.google.com/accounts/OAuthGetRequestToken?scope="+scope);
  //oauthConfig.setAuthorizationUrl("https://www.google.com/accounts/OAuthAuthorizeToken");
  //oauthConfig.setConsumerKey("anonymous");
  //oauthConfig.setConsumerSecret("anonymous");

  //get request
  //var request = {
  //  "method": "GET",
  //  "oAuthServiceName": "google",
  //  "oAuthUseToken": "always",
  //  "muteHttpExceptions": true
  //};

  //define the params URL to fetch
  //var params = '&fitw=true&exportFormat=pdf&format=pdf';

  //fetching file url
  //var blob = UrlFetchApp.fetch("https://docs.google.com/document/d/"+id+"/export"+params, request);
  //blob = blob.getBlob().setName(name);

  //return file
  //return blob;
//}
