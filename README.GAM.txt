Google Apps Manager (or GAM) used to reside here, in a directory named
"gam".  The installation process has changed.  It is much more automated
and assumes the directory to install.  It is now found in ~/bin/gam/.

All other source files should look for GAM at that location.

Activated versions of GAM _MUST NOT_ be stored in GIT for security reasons.
The .gitignore file is set to ignore the ./gam/ directory.

To setup GAM on your workstation/server, please check out https://github.com/jay0lee/GAM/wiki.
