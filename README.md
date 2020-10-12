# React Native for Tracking

This application is supported with NodeJS (express)  backend along with MongoDb to store the user location 
coordinates<br >

Repo of NodeJs server can be found at https://github.com/venkateshnalla94/Express-Maps.git <br >

To Run the APP <br >

1.yarn install <br >
2.yarn start to start server <br >
3.yarn android to start server in android emulator <br >
4.yarn ios to start server in iOS simulator <br >

For Temporary deployment of the server we are using ngrok <br >
so run
ngrok http 3000
(if your server port is running at 3000)

Every time if you run ngrok, please change the baseUrl in src/api/tracker.js
currently .env files are not introduced.

#Server Code Available at 

https://github.com/venkateshnalla94/Express-Maps.git

This app contains JWT authentication for Sign Up and SignIn process



#You need to have expo to run the app
