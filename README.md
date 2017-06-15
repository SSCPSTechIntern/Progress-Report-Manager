# Progress-Report-Manager

This comprises two components.  The first is JS for a Google Apps Sheet to create,
update and generally manage Google Docs that teachers enter their Progress Reports.
The second part downloads & prints the Google Doc files.

## Progress Report Manager Sheet
This is mostly a "brute force" style scripts.  There is some break down to make it
more modularized to create a full blown "App" in sheets.  That is slowly coming
along, but for now instructions are in the brute_force.gs file.

## Download And Print Scripts
There are actually two scripts.  One python script to download Progress
Reports as PDFs from Google Drive (using GAM).  And a bash script to print them.

The Google Apps Manager (or GAM) installation process has changed.  It is much
more automated and assumes the directory to install.  It is now found in ~/bin/gam/.

All other source files should look for GAM at that location.

Activated versions of GAM _MUST NOT_ be stored in GIT for security reasons.
The .gitignore file is set to ignore the ./gam/ directory.

To setup GAM on your workstation/server, please check out https://github.com/jay0lee/GAM/wiki.
