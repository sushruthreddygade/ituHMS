# ituHMS

# ituNetworkBuilders

Folks: 
Most important Commands to work with this directory.. 

#One time Setup : 
Download github, signup over there. 

**Windows Users :**
Go to git bash 
For Server Installation Instructions,  Please follow the instructions in the following link. 
https://httpd.apache.org/docs/2.2/platform/windows.html


**Mac Users :**
Go to terminal
Apache is by default installed on Mac. Please go to terminal and type which httpd? 


```
cd /path-to-your-repo/ (ex: cd C:\Apache\htdocs  for windows or cd ~/Library/WebServer/Documents for Mac or linux)
git clone https://github.com/sushruthreddygade/ituHMS.git
git status
cd ituHMS/

```

#For code checkins : 

It's a good practise to always check git status before you start coding. 

```
cd ~/Documents/ituHMS/
git branch -b [name_of_your_new_branch]   {note: ITU is standard prefix. Please make sure you work on differnt branch for each feature..}
 ex: git branch -b ITU-1
** Modify files **
git add --all
git commit -m "[name_of_your_new_branch]: gist-of-what-feature-youwork-on"
**Push the branch on github :**
$ git push -u origin [name_of_your_new_branch]
When you want to commit something in your branch, be sure to be in your branch.
```

I'll take care of merging branches to the master. 
#Please make sure you have backups before and after you start coding and pushing code to the server. 


#Purpose  

The purpose of this project is to apply and learn advanced software engineering   concepts gathering requirements for a software application that schedules the   hospital personnel and then derive use cases from them. This involves reviewing   of already existing software and learning website and derive requirements and   use cases based on the website primary features. The project also encompasses   construction of, sequence diagram, design class diagram, Collaboration diagrams   and other UML modeling diagrams based on the derived use cases. At the end,   high level planning is done for the whole project based on derived use cases by   Agile efforts estimation technique.  Scope   The project will consist of developing personnel scheduling software. Modules of   the website include a login feature, a schedule checker and a schedule planner.   Our innovative 100% web-based Scheduling &amp; Open Shift Management (OSM)   product can help managers efficiently schedule their staff, and also lets the staff   help managers fill open shifts online, see schedules and changes, request time-  off, swap shifts, etc, etc. All schedules, changes, approvals, and alerts not only   happen online in real-time, but also are sent out as emails and text messages to   cell phones. Our Software can cut manager time wasted on scheduling tasks by   50% or more and let them get back to MANAGING! Introduction to HMSS  When workforce includes hundreds of employees, open shifts are inevitable.   Without the right skills-based workforce management tools in place, nurse managers   and staffing managers spend a disproportionate amount of time trying to fill scheduling   gaps. Not only is this inefficient, but it leads to increased costs and reduced employee   satisfaction. 


