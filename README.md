# DevTinder


- Create a Vite + React application
- Remove unnecessary code and create hello world app
- Install Tailwindcss
- Install DaisyUi 
- Add Navbar component to app.jsx
- Create a NavBar.jsx separate component file
- Install react router domain
- Create BrowserROuter > Routes > Route=/ Body > RouteChildren
- Create an outlet in your copy component
- Create a Footer
- Create login page
- Install axios
- CORS - install cors in backend -> add middleware to with configurations: origin, credentials : true
- Whenever you're making api call pass => { withCredentials : true }
- install react-redux + @reduxjs/toolkit => - https://redux-toolkit.js.org/tutorials/quick-start
- ConfigureStore => Provider => createSlice => add reducer to store
- Add redux devtools in chrome
- Login and see if your data is coming properly in the store
- Navbar should update as soon as user logs in
- Refactor our code to add constants file + create a component folder

- You should not able to access other routes without login
- If token is not present, redirect user to login page
- Logout
- Get the feed and add the feed in the store
- build the user card on feed
- Edit profile feature
- Show toast message on save of profile
- See all my connections

Body    
    NavBar
    Route=/ => Feed
    Router=/login => login
    Router=/connections => Connections
    Router=/profile => Profile
