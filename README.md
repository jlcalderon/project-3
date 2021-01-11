# Mindset
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Contents
* [Overview](#Overview)
* [License](#License)
* [Contributing](#Contributing)
* [Database Structure](#Database_Structure)
* [Privilege](#Privilege)
* [Demo](#Demo)
* [Questions](#Questions)
* [Go to live app](https://frozen-cliffs-96798.herokuapp.com/)

## Overview
This is an application designed to help high school students with their mental health. Track and monitor their daily mental health and have immediate access to coping skills such as meditations. Features also include connecting with a counselor to set up a Zoom Meeting or Google Meet, testing using the GAD-7 and PHQ-9 Psychologist approved tests for measuring anxiety and depression levels, guided meditation links and a mood survey. This app was made using React JS with hooks, Sequelize ORM with MySQL Dialect, Express, NodeJS, Axios requests, Bootstrap css library and custom CSS stylings, npm packages; react-audio-player and  survey-react.


## License
This app is using the **MIT** license. For more information about the **MIT** license terms of use [*Licence*](https://opensource.org/licenses/MIT)

## Contributing
Jorge Calderon, Isabell Danell, Anusha Dhamera, Lierin Hanuman, James Jorissen and Foos Mahamud were the initial contributors to this project. Please feel free to add contributions that may be beneficial to this open-source project, and help high school students and counselor deal with mental health issues.

## Database_Structure
Before to start contributing take a moment to analyze the initial app database structure:
![Database Relationships](/Mindset.png)
[Link to open diagram online](https://dbdiagram.io/d/5fcec76d9a6c525a03ba2c8f)

## Privilege
The app allows two types of users to interact with the login, and each type of user is able to access specific functions. The two users are the counselor/Admin and the student.
- Counselor/Admin
- Student

The Counselor users may access student's: 
- Test scores
- Point totals
- Mood data 
- Meeting requests

The Student users have access to:
- A daily mood survey
- GAD-7 and PHQ-9 tests
- Guided meditations
- Dashboard with their statistics 

## Users

By default we have two users set up for this project. one with Couselor/Admin privileges and one with Student access. Please see the user details below:

```
Couselor user:
{ 
    userName: "nate",
    password: "1234"
}

Student User:
{ 
    userName: "lierin",
    password: "1234"
}
```

Once you run the app you can create new student users by following the sign-up links on the main screen.

## Questions
Any further questions about this project can be emailed directly to: <jlcalderonfuentes@gmail.com>, <jamesjorissen@gmail.com>.