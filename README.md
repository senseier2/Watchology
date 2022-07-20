Members and Roles:
Ryan Schubert - https://github.com/RyanSchu
Kaluki Musau - https://github.com/KCMusau 
Eric McGhee - https://github.com/senseier2
Nahian Bari - https://github.com//Bnahian 

Project Name: 
GitHub Repo: 
ERD: 
Wireframe: 
Presentation: 

The Pitch: 


Team Rules:
Support Each Other
Communicate at all times
Pitch idea before applying
Celebrate the successes
Laugh and have fun
Learn from each other 
Ask questions 
Don’t say sorry. 
Talk out all conflicts

Primary Roles (everyone has a realm that oversee, but still participate in all)

Research  Person Responsible for looking up new tech, libraries, etc.also making sure we are following the Rubric and MVC file structure.   
Layout & Design - Styling and layout of the page
Javascript functionality - Adding responsive elements to the page
Quality Assurance - making sure all buttons work as intended etc. and on different resolutions
GitHub Responsible for updating Kanban, monitoring progress, making sure commits are even across the board

Schedule: 
Week 0: right now
Draft basic working agreement
Start thinking of application ideas
Think of 1-2 ideas each
Outline how each might meet technical acceptance criteria and what APIs used

Week 1:  July 18th-21st
A detailed plan of action with the following:
An overview of the intended application and WHY you feel it’s valuable.
A breakdown of roles by group member.
A schedule for completion of various tasks.
Test APIs early
Wireframe
Decide on a css library
Coherent styling

Week 2: July 25th - 26th
Finish application
presentation

Format of meetings
Meet after class for a few hours
Start with current status 
How is your coding going
What worked 
What needs debugging
Set action items for the night 
What are our tasks
Who is doing what


## Pseudocode

```
#landing page coding to do

* sidebar + welcome modal
* sidebar 
    * header element with website title
    * form accepts birthdate, movie sort options, button and event listener
        * potentially also widget for date selection
    * div to output recently searched birthdays
    * help button - summons help modal
    * about button - summons about modal
* welcome modal 
    * shows up if nothing in local storage, or noted in local storage
    * contains header
    * contains text elements
* help modal & about modal
    * optional separate modals


#event listener main function

* take in user birthday
* take in any user sort options
* get the users zodiac
* get list of dates corresponding to zodiac sign
* query the on this day API for each date to get a list of famous births
* Render astrological sign to upper card
* render some of those celebrites to the upper card (limit to ~5 random celebrities)
* celebrity info is a link to the below movie card
* query the imdb api using celebrity names to get movies 
* get top rated movie for each celebrity
* render movie information to lower card
* save the user inputs to local storage
* render birthday into recently searched birthday (could potentially be button?)

#codify some stretch goals

* make it pretty
* add real gold to website
* make birthdays stored into buttons that execute the api call
* grab celebrity image - need an API for this?
* grab movie trailer from youtube
* calendar date select widget
* help modal
* about modal
* astrological symbols on upper card

```