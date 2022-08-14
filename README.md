
## Development and Installation

### Install Backend Dependencies
- `npm install`

### Install Frontend Dependencies
- `npm run client-install`

### Setup up dev_keys for database
- Either run local MongoServer or,
- Setup Mongo Server at online platform like mlab and Create a keys_dev.js file in [config](https://github.com/rishijain07/Hostel-Management/tree/master/config) folder and set up:-
``` 
module.exports = {
  mongoURI: YOUR_LOCAL_MONGO_SERVER_URI,
	secretOrKey: YOUR_SECRET
}; 
```
### Run the application
- `npm run dev`

**Find API Documentation [here](https://github.com/rishijain07/Hostel-Management/blob/master/API_Endpoints.md).**

### Screenshots

![Home Page](https://github.com/rishijain07/Hostel-Management/blob/master/home.png)

![Dashboard](https://github.com/rishijain07/Hostel-Management/blob/master/dashboard.png)

![Room Cleaning](https://github.com/rishijain07/Hostel-Management/blob/master/room%20cleaning.png)

