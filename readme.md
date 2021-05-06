# Mindset

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Contents

- [Overview](#Overview)
- [License](#License)
- [Database Structure](#Database_Structure)
- [API Structure](#API_Structure)
- [Users](#Users)
- [Go to live app](https://frozen-cliffs-96798.herokuapp.com/)
- [Contributing](#Contributing)
- [Future Development](#Future_Development)
- [Updates](#Updates)
- [Install or Run Localhost](#Install_or_Run_Localhost)
- [Questions](#Questions)

## Overview

This is an application designed to help high school students with their mental health. Track and monitor their daily mental health and have immediate access to coping skills such as meditations. Features also include connecting with a counselor to set up a Zoom Meeting or Google Meet, testing using the GAD-7 and PHQ-9 Psychologist approved tests for measuring anxiety and depression levels, guided meditation links and a mood survey. This app was made using React JS with hooks, Sequelize ORM with MySQL Dialect, Express, Express-sessions, NodeJS, Axios requests, MySQL database on the server-side, Bootstrap css library and custom CSS stylings, npm packages such as react-audio-player, survey-react, passportJS and bcrypt for authentication purposes.

## License

This app is using the **MIT** license. Is open source and free. For more information about the **MIT** license terms of use [_Licence_](https://opensource.org/licenses/MIT)

## Database_Structure

Before to start contributing take a moment to analyze the initial app database structure:
![Database Relationships](/Mindset.png)
[Link to open diagram online](https://dbdiagram.io/d/5fcec76d9a6c525a03ba2c8f)

## API_Structure

| Model/Route    | Method     | Uri                                              | Description                                                  | Response Type | Response Data                                    |
| :------------- | :--------- | :----------------------------------------------- | :----------------------------------------------------------- | :------------ | :----------------------------------------------- |
| User           | **GET**    | /api/user                                        | Get all the users                                            | JSON          | Return all users in database                     |
| User           | **GET**    | /api/user/{ID}                                   | Get the user data of the specific requested ID               | JSON          | Return the user                                  |
| User           | **GET**    | /api/user/student/school/{ID}                    | Get student users from a specific school                     | JSON          | Return school's ID user with student privilege   |
| User           | **GET**    | /api/user/counselor/school/{ID}                  | Get counselor users from a specific school                   | JSON          | Return school's ID user with counselor privilege |
| User           | **POST**   | /api/user/update/{ID}                            | Updates user info of a specific id                           | JSON          | Return the updated user information              |
| User           | **POST**   | /api/user/update/student/{ID}/score/{NEW_SCORES} | Updates scores of a specific student                         | JSON          | Return the updated scores information            |
| User           | **DELETE** | /api/user/{ID}                                   | Deletes permanently a specific user from database            | JSON          | Return the deleted user information              |
| Authentication | **POST**   | /api/login                                       | Post a user object with userName and password                | JSON          | Return the actual user if exist                  |
| Authentication | **POST**   | /api/signup                                      | Post a student type of user object                           | JSON          | Return 1, status code 200                        |
| Authentication | **POST**   | /api/signup/admin                                | Post a counselor type of user object                         | JSON          | Return 1, status code 200                        |
| Authentication | **GET**    | /logout                                          | Logout the current user signed in                            | JSON          | Redirect to home page                            |
| Authentication | **GET**    | /api/userdata                                    | Gets of the user object stored in the express-session        | JSON          | Return the current user object signed in         |
| TherapySession | **GET**    | /api/therapysession                              | Gets all the therapy session in database                     | JSON          | Return all the therapy sessions requested        |
| TherapySession | **GET**    | /api/therapysession/student/{ID}                 | Gets all the therapy session requested by a specific student | JSON          | Return all the therapy sessions of a student     |
| TherapySession | **GET**    | /api/therapysession/couselor/{ID}                | Gets all the therapy session submited to a counselor         | JSON          | Return all the therapy sessions of a counselor   |
| TherapySession | **GET**    | /api/therapysession/counselor/{ID}/{STATUS}      | Gets one therapy session by counselor id and status          | JSON          | Return the therapy session if exist              |
| TherapySession | **POST**   | /api/therapysession                              | Post a therapy session record                                | JSON          | Return the new therapy session created           |
| TherapySession | **POST**   | /api/therapysession/{ID}                         | Updates a therapy session                                    | JSON          | Return the therapy session updated               |
| TherapySession | **DELETE** | /api/therapysession/{ID}                         | Deletes permanently a therapy session from database          | JSON          | Return the deleted therapy session               |
| TestPHQ9       | **GET**    | /api/testphq9                                    | Get all the PHQ9 test in database                            | JSON          | Return all the PHQ9 tests                        |
| TestPHQ9       | **GET**    | /api/testphq9/{ID}                               | Get only the related PHQ9 test of student                    | JSON          | Return all the PHQ9 tests by student             |
| TestPHQ9       | **POST**   | /api/testphq9                                    | Post a new PHQ9 test to database                             | JSON          | Return the new created PHQ9 tests                |
| TestGAD7       | **GET**    | /api/testgad7                                    | Get all the GAD7 test in database                            | JSON          | Return all the GAD7 tests                        |
| TestGAD7       | **GET**    | /api/testgad7{ID}                                | Get only the related GAD7 test of student                    | JSON          | Return all the GAD7 tests by student             |
| TestGAD7       | **POST**   | /api/testgad7                                    | Post a new GAD7 test to database                             | JSON          | Return the new created GAD7 tests                |
| DailyStat      | **GET**    | /api/dailystat                                   | Get all the daily mood stats on database                     | JSON          | Return all the daily mood stats                  |
| DailyStat      | **POST**   | /api/dailystat                                   | Post a new daily mood stats object on database               | JSON          | Return the new created daily mood stat           |
| DailyStat      | **DELETE** | /api/dailystat/{ID}                              | Deletes a daily mood stats permanently on database           | JSON          | Return the deleted daily mood stat               |
| DailyStat      | **GET**    | /api/dailystat/student/{ID}                      | Gets all the daily mood stats related to a student id        | JSON          | Return all the daily mood stat of a student      |
| DailyStat      | **POST**   | /api/dailystat/{ID}                              | Updates a daily mood stats related to a student id           | JSON          | Return the updated daily mood stat object        |

**IMPORTANT:** On the development enverironment API routes are proxy to port 3001, so if you want to hit the endpoints you must change the base URL port. Example `http://localhost:3001/` instead of using `http://localhost:3000/` wich is running the React client

## Users

The app allows two types of users to interact with the login, and each type of user is able to access specific functionalities of the app.
The Counselor users may access student's:

- Test scores
- Point totals
- Mood data
- Respond to Meeting requests

The Student users have access to their:

- Daily mood survey
- GAD-7 and PHQ-9 tests
- Guided meditation resources
- Dashboard with statistics
- Request meetings with school counselors

By default we have the users set up on an array inside a seed file located in the root directory of the project. The file name is _seedDB.js_ look up on line _84_ of the file to see the array.

If you are running the app in the development/localhost environment and you want to add a new user, you can easily append a user object to the array of users before running the app server and seedDB bulk insert functions. Please follow the directions described on [Install_or_Run_Localhost](#Install_or_Run_Localhost) after modifying the seed file.

If you are runnig the living application you can create new users by hiting the appropiated API sign up authentication endpoints and submit your users body request in JSON format as follow:

```
{
    userName: "User Example",
    email: "example@mail.com",
    password: "Your Super Secret password",
    schoolId: 2,
    scores: 0
}
```

the API endpoint to create a student user is: `/api/signup`. To create a counselor user use: `/api/signup/admin`

There are two type of users with different privileges as is mentioned above. Please see an example of how these user's object are structured:

```
Counselor user:
{
    userName: "nate",
    email: "nate@example.com",
    password: "1234",
    admin: true,
    status: false,
    schoolId: 11,
    scores: 0
}

Student user:
{
    userName: "jorge",
    email: "jlcalderonfuentes@gmail.com",
    password: "1234",
    admin: false,
    status: false,
    schoolId: 9,
    scores: 0
}
```

For demonstration purposes the authentication functionalities still on development, by now you can login with the users predefined and simply hit the `/logout` API route on the address bar of your browser to return to the home page and switch users if you want, perhaps for the [future](#Future_Development) you will be able to create users by sign up functionalities on run time in the app.

## Contributing

Jorge Calderon, Isabell Danell, Anusha Dhamera, Lierin Hanuman, James Jorissen and Foos Mahamud were the initial contributors to this project. Please feel free to add contributions that may be beneficial to this open-source project, and help high school students and counselor deal with mental health issues.

## Future_Development

- [x] Get a custom domain name for this app
- [ ] Improve CSS styling and responsive behaviours any css framework or library is welcome
- [ ] Implement a higher level state management suchs a Redux/Saga
- [ ] Complete the authentication functionalities with user sign up with local strategies and SSO with major social media platforms
- [ ] Complete school registrations suscription to use the app
- [ ] Complete functionalities of displaying GAD7 and PHQ9 data to counselors
- [ ] Implement a live chat session between students and counselors
- [ ] Allow counselors to upload media or other resources for the students to be available
- [ ] Add unit testing for basic functionalities tests

## Updates

- Contributor Jorge Calderon bought a domain name **mind-set.app** for two years and changed the url of the living application to it on the deployment environment. The app can be reach now using this [domain](http://mind-set.app/)

## Install_or_Run_Localhost

To run this project on localhost follow these steps in order:

- 1. Create an empty database on MySQL using your prefered RDBMS IDE or CLI
- 2. Change the parameters of the development settings on line _2_ in the _config.json_ file located under the **config folder** with your: _database name_, _username_, _password_
- 3. In your terminal change your directory to the root of the project and run the command: **npm install** to get all the dependencies installed on your local environment
- 4. Up next in the same directory run the command: **npm start** to run the server and client for the first time and build the database structure
- 4. Open another instance of terminal and run the seed file to populate the database tables with the command: **npm run seed** once is done kill the process and terminal
- 5. Next, kill the process and terminal of the server that was made on step 3
- 6. Finally from the root directory run again **npm start**

## Questions

Any further questions about this project can be emailed directly to: <jlcalderonfuentes@gmail.com>, <jamesjorissen@gmail.com>.
