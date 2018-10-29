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



Research for seo in react

To test on local for seo

https://www.aymen-loukil.com/en/blog-en/how-to-test-localhost-website-with-google-seo-tools/

1. Host using ngrock
http://16b350b7.ngrok.io/dist/

Check current seo rankings
https://sitechecker.pro/seo-report/http://16b350b7.ngrok.io/dist/



Alternatives to ssr for set optimization

https://hackernoon.com/leaner-alternatives-to-server-side-rendered-ssr-react-c5492a6cb212

Headless chrome service

https://medium.com/dev-channel/solving-seo-with-headless-chrome-for-your-client-side-framework-288e66fdd2b7
detect the user-agent and if it’s a bot then queue the request to a pool of Headless Chrome instances that will load the SPA like any user browser would, run it and return the HTML






Server side rendering for seo

https://medium.freecodecamp.org/server-side-rendering-your-react-app-in-three-simple-steps-7a82b95db82e
