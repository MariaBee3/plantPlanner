# plantPlanner
Make to-do lists for all your plants

## Idea
This webapp was made as a ‘challenge project’ for the front-end engineer path of Codecademy. The assignment was to "use functional React components to create an app that manages contacts and appointments. The app consists of two pages: one to view and add contacts and one to view and add appointments." The assignment contained a series of open-ended requirements which described the project. 

I decided to give this assignment my own twist and build a 'Plant Planner' instead of an Appointment Planner. As can't be the only person always forgetting to water my plants or make them 'winter-ready'. Therefore I thought a Plant Planner might be a useful webapp. The basic idea of the assignment stayed the same, only instead of contacts you can add plants, including their 'details'. 

## Approach
The approach Codecademy recommended was to first build the stateful components (App, ToDoPage, PlantsPage) and work your way down to the stateless components, all the while passing values as props. However, I found that for me it works better to create the initial structure first, and then build all the functionalities one by one. This also enables me to test them along the way and ensure that everything works correctly before heading towards the next functionality. 

## Challenges
The main challenge was the syntax and necessary values of the Plant Picker. To give the right key to the plants and the 'default state' in order to avoid the same keynames had me struggling for a while. 

## Room to Improve
Though the requirements of the assignment are met, I still see much room to improve. 
+ The main drawback of the app is that cards are only saved in the browser. Once you refresh you loose everything. So in reality this means that app can't be used yet. In order to save the cards without any knowledge of setting up a back-end I'm exploring a goole sheet API to save the cards in a google sheet. 
+ The current app only has a minimal styling. This could be highly improved. 
+ It would be nice to open a calender when selecting the date on which the To Do needs to be executed. 

