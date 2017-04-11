# This bash script accompanies the python script that downloads progress reports as PDFs.
# It needs to be run once per pod per copy needed
#
# /home/sscpslocal/ProgressReports/FY2017/Q3/DarlenesPod/*
# /home/sscpslocal/ProgressReports/FY2017/Q3/DeanaNikkisPod/*
# /home/sscpslocal/ProgressReports/FY2017/Q3/JessicaBethsPod/*
# /home/sscpslocal/ProgressReports/FY2017/Q3/JohnsPod/*
# /home/sscpslocal/ProgressReports/FY2017/Q3/JuneAmysPod/*
# /home/sscpslocal/ProgressReports/FY2017/Q3/KassandraMariesPod/*
# /home/sscpslocal/ProgressReports/FY2017/Q3/KristasPod/*
# /home/sscpslocal/ProgressReports/FY2017/Q3/MariahsPod/*
# /home/sscpslocal/ProgressReports/FY2017/Q3/MelissaMariesPod/*
# /home/sscpslocal/ProgressReports/FY2017/Q3/NicolesPod/*
# /home/sscpslocal/ProgressReports/FY2017/Q3/NoraDenisesPod/*
# /home/sscpslocal/ProgressReports/FY2017/Q3/SheinasPod/*
#
clear
for file in /home/sscpslocal/ProgressReports/FY2017/Q3/SheinasPod/*
do
  echo "Printing $file"
  lp -d PrnAdmin "$file" >> results.out
done
