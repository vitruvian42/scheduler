# scheduler
A todo app built in react

Have built the app considering user ease of use in mind.
The app structure is divided into two main components
- Header : header contains the box to add new todo's and filters to see labelled todo's
- Dashboard : consists of a view of the todos

Note :
- The todo will be submitted only when one of the label button is clicked. This helps in defining the label of the toda with as few click as possible and an interactive design
- when nothing is being added to the todo the label buttons act as filters and filter the specific colored todo's
- once a specific color is added, after you add a new todo is added the application moves to the main route again.

Tools used :
React - SPA Applicaton
Redux -  To maintain in application store
Local storage - To persist the redux store for data availability on browser restore
Bootstrap Grid - For responsive design
Material icon - For better visual asthetics
Webpack 4 and plugins - For creating an optimized production built and fast and easy to use development mode


To run the project on your local machine :
1) Clone the repository to a local folder - git clone https://github.com/vitruvian42/scheduler.git
2) run the following command to install dependencies : npm install
3) To run the dev script use the following command : npm run dev
  this will open the project on http://localhost:8080/#/ if port 8080 is not used by any other application
4) For production build run : npm run build
