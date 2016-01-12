# ituHMS


Folks: Most important Commands to work with this directory..
One time Setup :

Download github, signup over there.

Windows Users : Go to git bash

Mac Users : Go to terminal

cd /path-to-your-repo/ (ex: cd C:\Apache\htdocs  for windows or cd ~/Library/WebServer/Documents for Mac or linux)
git clone https://github.com/sushruthreddygade/ituHMS.git
git status
cd ituHMS/

For code checkins :

It's a good practise to always check git status before you start coding.

cd ~/Documents/ituHMS/
git branch -b [name_of_your_new_branch]   {note: ITU is standard prefix. Please make sure you work on differnt branch for each feature..}
 ex: git branch -b ITU-1
** Modify files **
git add --all
git commit -m "[name_of_your_new_branch]: gist-of-what-feature-youwork-on"
**Push the branch on github :**
$ git push -u origin [name_of_your_new_branch]
When you want to commit something in your branch, be sure to be in your branch.

I'll take care of merging branches to the master.
Please make sure you have backups before and after you start coding and pushing code to the server.



Purpose  
The purpose of this project is to apply and learn advanced software engineering   concepts gathering requirements for a software application that schedules the   hospital personnel and then derive use cases from them. This involves reviewing   of already existing software and learning website and derive requirements and   use cases based on the website primary features. The project also encompasses   construction of, sequence diagram, design class diagram, Collaboration diagrams   and other UML modeling diagrams based on the derived use cases. At the end,   high level planning is done for the whole project based on derived use cases by   Agile efforts estimation technique.  Scope   The project will consist of developing personnel scheduling software. Modules of   the website include a login feature, a schedule checker and a schedule planner.   Our innovative 100% web-based Scheduling &amp; Open Shift Management (OSM)   product can help managers efficiently schedule their staff, and also lets the staff   help managers fill open shifts online, see schedules and changes, request time-  off, swap shifts, etc, etc. All schedules, changes, approvals, and alerts not only   happen online in real-time, but also are sent out as emails and text messages to   cell phones. Our Software can cut manager time wasted on scheduling tasks by   50% or more and let them get back to MANAGING! Introduction to HMSS  When workforce includes hundreds of employees, open shifts are inevitable.   Without the right skills-based workforce management tools in place, nurse managers   and staffing managers spend a disproportionate amount of time trying to fill scheduling   gaps. Not only is this inefficient, but it leads to increased costs and reduced employee   satisfaction.  Advantages of having online scheduling system  2.1.   ● Save Money  Reduce premium labor costs by leveraging the most cost-effective, qualified staff   to fill open shifts. Stop wasting time you don’t have on scheduling. Decrease the   time it takes you to create a weekly schedule for your team by over 75 percent   with HMSS.  ● Save Time  Save countless hours using instant communication strategies to fill open shifts.  ● Keep Workers Happy  Increase employee satisfaction by empowering them to choose when they want   to work based on experience, competencies, and skills.  ● Faster, Easier Scheduling  Healthcare staff scheduling has never been easier. Spend minutes instead of   hours organizing shifts for your nurses and other medical staff.  ● Monitor Attendance  Hospital Management System (Personal Scheduling System) – SWE 600 (Fall 2015) Prof.                               Instructors: Dr. R.   Riehle &amp; Q Asghar   See which employees are coming in late or missing shifts. Send shift reminders   automatically to make sure everyone is on the same page.  ● Give Staff More Independence  Take some work off your own plate with collaborative healthcare staff   scheduling options. Allow your employees to request shift trades and swaps on   their own so you don’t have to micromanage them.  ● Avoid Human Error  Humans make mistakes, but HMSS doesn’t. If you forget to fill a shift or   overbook one, the software immediately notifies you of your error, allowing you   to rectify it right away.  ● Create Perfect Timesheets  Export perfect timesheets to create perfect attendance and work reports. Better   healthcare staff scheduling means easier payroll processing as well.  To deliver the best care possible to patients, we must begin with the best   possible workforce management solution for our staff. With HMSS, we help   control labor costs, minimize compliance risk, improve workforce productivity,   and deliver quality, cost-effective care. Here’s how:  • Physician coverage scheduling enables the effective and equitable deployment   of physicians and other clinician providers – your group, your rules, to build your   schedules  • Advanced staffing supports the safest and most appropriate assignment of   caregiver staff to patients, and balances workload distribution in the best   interests of patients and staff  • Intelligently forecast volume to build optimal schedules helps ensure proper   staff coverage for every shift, every day, across your entire organization  • On-demand visibility with labor analytics controls labor costs and allows   organizations to make evidence-based decisions  • Mobile management supports paperless workflow and employee self-service for   your on-the-go workforce
