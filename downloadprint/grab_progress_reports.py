#! /usr/bin/env python

# downloads Progress Reports for mass printing
# local folders need to be created manually
# see print_progress_reports.sh to print the downloaded files

# imports are required for both GAM & CSV processing
import os         # os.system for clearing screen and simple gam calls
import subprocess # subprocess.Popen is to capture gam output (needed for user info in particular)
import csv        # CSV is used to read output of drive commands that supply data in CSV form
import sys        # used for prompting user

# when pasting in variables from GAS, besure to adjust like below
#  varcurrentClassName = "Dee & Pam's Pod"
#  varcurrentClassFolderObject = `'0B8RgM3B2REzvWUhUOEQyMC1qSHc'`

# parent most directory for downloads
varDownloadFolder = "/home/sscpslocal/ProgressReports/"

  ## What is current year? FY####
varcurrentYear = 'FY2017';
  ## What is current term?
#varcurrentTerm = 'Q1';
#varcurrentTerm = 'Q2';
varcurrentTerm = 'Q3';
#varcurrentTerm = 'Q4';
#varcurrentTerm = 'S1';
#varcurrentTerm = 'S2';

  ##Folder Vars - Testing
varcurrentClassName = "Dee & Pam's Pod"
varcurrentClassFolderObject = `'0B8RgM3B2REzvWUhUOEQyMC1qSHc'`

  ##Folder Vars - Kindergarten
#varcurrentClassName = "Kassandra & Marie's Pod"
#varcurrentClassFolderObject = `'0B8RgM3B2REzvM3YtUGUxbDFFdlU'`

#varcurrentClassName = "Kristen & Linda's Pod";
#varcurrentClassFolderObject = `'0B8RgM3B2REzvdmRYSFZmS2tPdEk'`

#varcurrentClassName = "Melissa & Marie's Pod";
#varcurrentClassFolderObject = `'0B8RgM3B2REzva1pSTXVCMlBmMnc'`

#varcurrentClassName = "Amy & Linda's Pod";
#varcurrentClassFolderObject = `'0B8RgM3B2REzvb0RsWE04Tk1hRTA'`

  ##Folder Vars - 1st & 2nd Graders
#varcurrentClassName = "Deana & Niki's Pod"
#varcurrentClassFolderObject = `'0B8RgM3B2REzvd3paSHZzWncwcVE'`

#varcurrentClassName = "Jessica & Beth's Pod";
#varcurrentClassFolderObject = `'0B8RgM3B2REzvaEJ1cDd1R0lKYzg'`

#varcurrentClassName = "June & Amy's Pod";
#varcurrentClassFolderObject = `'0B8RgM3B2REzvMnUxYjJqcHczdlE'`

#varcurrentClassName = "Nora & Denise's Pod";
#varcurrentClassFolderObject = `'0B8RgM3B2REzvd0lqMXkzMUZLVUk'`

#varcurrentClassName = "Sheina's Pod";
#varcurrentClassFolderObject = `'0B8RgM3B2REzvN0pxOXVqcWdEMDg'`

  ##//Folder Vars - 3rd & 4th Graders
#varcurrentClassName = "Darlene's Pod"
#varcurrentClassFolderObject = `'0B8RgM3B2REzvX1UweVo4SldkWTA'`

#varcurrentClassName = "John's Pod";
#varcurrentClassFolderObject = `'0B8RgM3B2REzvRkhoN2x5NWJuRE0'`

#varcurrentClassName = "Krista's Pod";
#varcurrentClassFolderObject = `'0B8RgM3B2REzvT1Q2a1lOQ3QySnc'`

#varcurrentClassName = "Mariah's Pod";
#varcurrentClassFolderObject = `'0B8RgM3B2REzvVlFyelNyUW85Qlk'`

#varcurrentClassName = "Nicole's Pod";
#varcurrentClassFolderObject = `'0B8RgM3B2REzvSzlLLTVONU81MjA'`


### Variables that are used more for config then processing
# setup to find GAM
varCommandGam = "/home/sscpslocal/bin/gam/gam"
# final destination of current file download
varCurrentClassNameCleaned = varcurrentClassName.strip('\n')
varCurrentClassNameCleaned = varCurrentClassNameCleaned.replace('\"','')
varCurrentClassNameCleaned = varCurrentClassNameCleaned.replace('\'','')
varCurrentClassNameCleaned = varCurrentClassNameCleaned.replace(' ','')
varCurrentClassNameCleaned = varCurrentClassNameCleaned.replace('&','')
varTargetDownloadFolder = varDownloadFolder + varcurrentYear + "/" + varcurrentTerm + "/" + varCurrentClassNameCleaned + "/"
#print "varTargetDownloadFolder:"
#print varTargetDownloadFolder
#input("check if above makes sense")

# what folder should GAM look for?
varFolderIDToFind = varcurrentClassFolderObject

os.system('clear')


# check if okay to to run the job
varRunJob = False
print "Current Year:     " + varcurrentYear
print "Current Quarter:  " + varcurrentTerm
print "Current Pod:      " + varcurrentClassName
print "Current Path:     " + varTargetDownloadFolder
varUserInput = raw_input("Go ahead and run the above specified job (y/N)? ")

if varUserInput.upper() == "Y":
    varRunJob = True
if varUserInput.upper() == "YES":
    varRunJob = True

# download all files in a folder
if varRunJob:
  varUserName = "rdegennaro@sscps.org"
  #
  # first get all files in the class folder
  if not os.path.exists(varTargetDownloadFolder):
    os.makedirs(varTargetDownloadFolder)
  varFolderNameQueryToPass = ' query "' + varFolderIDToFind + ' in parents and trashed = false"'
  varArgList=["user", varUserName, "show filelist", varFolderNameQueryToPass, " id"]
  #print "Argument list:"
  #print varArgList
  varCommandToExecute = varCommandGam + ' %s' % ' '.join(varArgList)
  #print "Command to execute:"
  #print varCommandToExecute
  varResultsProc = subprocess.Popen([varCommandToExecute], stdout=subprocess.PIPE, shell=True)
  (varResults, varErrors) = varResultsProc.communicate()
  #print "varResultS to follow:"
  #print varResults
  # now check to see if something in folder
  #print varResults.find(varUserName)
  if varResults.find(varUserName) < 0:
    print "Download Folder does not exist or is empty."
  else:
    #print "Starting to parse varResults"
    #print "varResult to follow:"
    #print varResults
    # setup to parse out ID of files to step through
    varCSVDataSet = csv.reader(varResults.split('\n'), delimiter=',')
    varCSVHeaders=[]
    varCSVData=[]
    varIDColumn = 999999
    varRowCount = 0
    for row in varCSVDataSet:
        #print row
        varColCount = 0
        if varRowCount != 0:
            for col in row:
                #print col
                if varColCount == 1:
                    #print col
                    varCSVData.append(col)
                varColCount += 1
        varRowCount += 1
    varCSVData.sort()
    #print "varCSVData to follow:"
    #print varCSVData
    # now step through list of file ID's & download each as PDF
    print "Starting to download files for:  " + varCurrentClassNameCleaned
    for i in varCSVData:
      varFileIDToDownload = chr(39) + i + chr(39)
      print 'Downloading:  ' + varFileIDToDownload
      varArgList=["user", varUserName, "get drivefile id", varFileIDToDownload, " format pdf targetfolder ", varTargetDownloadFolder]
      #print varArgList
      varCommandToExecute = varCommandGam + ' %s' % ' '.join(varArgList)
      #print varCommandToExecute
      varResultsProc = subprocess.Popen([varCommandToExecute], stdout=subprocess.PIPE, shell=True)
      (varResults, varErrors) = varResultsProc.communicate()
    print "Finished downloading files for:  " + varCurrentClassNameCleaned
