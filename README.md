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
- New Page - see all my connections
- New Page - see all my connection requests
- Feature Accept/Reject Connection request

Remaining 
- Send/ignore the user card from feed
- SignUp new user
- E2E  Testing

Body    
    NavBar
    Route=/ => Feed
    Router=/login => login
    Router=/connections => Connections
    Router=/profile => Profile



Deployment

- SignUp on AWS
- Launch instance
- chmod 400 devTender-secret.pem
- ssh -i "devTender-secret.pem" ubuntu@ec2-15-206-187-112.ap-south-1.compute.amazonaws.com
- install node same as in local machine
- Git clone
- Frontend
  - npm install 
  - npm run build
  - Sudo apt update
  - sudo apt install nginx
  - sudo systemctl start nginx
  - sudo systemctl enable nginx
  - Copy code from dist(build file) to /var/www/html/ 
  - sudo scp -r dist/* /var/www/html/
  - Enable port 80 of your instance

-Backend
- update DB password
- allowed ec2 instance public IP on mongodb server 
- npm install pm2 -g
- pm2 start npm --name "devTinder-backend" -- start   (start npm start in background)
- pm2 logs
- pm2 list, pm2 flush <name>, pm2 stop <name>, pm2 delete <name>
- config nginx - /etc/nginx/config/sites-available/default
- restart nginx - sudo systemctl restart nginx
- Modify the BASEURL in frontend project to "/api"

Frontend = http://43.204.96.49/
Backend = http://43.204.96.49:7777/


nginx config: 
server_name 15.206.187.112

location /api/ {
        proxy_pass http://localhost:7777/;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }



# Adding a custom Domain Name

    - purchased domain name with any provider
    - signUp on cloudflare
    - change nameservers on provider and point it to cloudflare
    - wait for some time till your nameservers are updated
    - DNS record : A record in 
    - Enable SSL or website

# Sending Email via SES
    - Create IAM User
    - give access to amazonSESFullAccess
    - Amazon ses, Create identity 
    - verify domain name & email
    - Install AWS SDK v3
    - Code example https://github.com/awsdocs/aws-doc-sdk-examples/tree/main/javascriptv3/example_code/ses#code-examples
    - Setup SesClient
    - Access Credentials should be created in IAM under securityCredentials Tabs
    - Write code for SESClient
    - Write code for sending email address
    - Make the email dynamic by passing more params to the run application

# Scheduling cron jobs in Nodejs
    - Installing node-cron
    - Learning about cron expressions syntax - crontab-guru schedule a job
    - date-fns
    - Find all the unique email Id who have got connection request in previous day
    - Send email
    - Explore queue mechanism to send bulk emails
    - Amazon SES Bulk email
    - Make sndEmail function dynamic
    - bee-queue & bull npm package (queue mechanism)

# RazorPay payment gateway integration
    - Sign up on Razorpay & complate kyc
    - Created a UI for premium page
    - Creating an API for create order in backend
    - added my key and secret in env file
    - Initialized Razorpay in utils
    - creating order on Razorpay
    - Create schema and model
    - Saved the order in payments collection
    - make the api dynamic
    - Document Ref - https://razorpay.com/docs/payments/server-integration/nodejs/integration-steps/#integrate-with-other-razorpay-products
    - Ref -


# Real time chat using Websocket(Socket .io)
    - Build the UI for chat window on /chat/:targetUserId
    - Setup socket.io in backend
    - npm i socket.io
    - setup frontend socket.io-client
    - Initialise the chat
    - createSocketConnection
    - Lister to events
    - Homework, improve the UI
    - Homework: Fix Security Bug - Can i send message to a person who is not my friend
    - Homework: Fix bug - If i am not friend, then i should not be able to send message
    - Homework: feat: show green symbol when online ?? - [lastSeen 2 hours ago]
    - Homework: Limit messages when fetching from DB (infinite scroll)
    - Project Idea - 1 - Tic tac toe game
    - Project Idea -2 : Cheese game
    - 