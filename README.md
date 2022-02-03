# Applied Project and Minor Dissertation

## Contents

* [Project Details](#details)
* [Introduction](#intro)
* [Overview](#overview)
* [Software Requirements](#requirements) 
* [Technologies](#tech)
* [Software Features](#features)
* [Deployment](#deploy)
* [Repository Structure](#repo)
* [Demo](#demo)
* [Dissertation](#dissertation)
* [Sprints](#sprints)
* [Conclusion](#conclusion)
* [References](#references)

## Project Details<a name = "details"></a>

|  Details   |     |
| --- | --- |
| **Title** | FastTrack  |
| **College** | Galway-Mayo Institute of Technology|
| **Course** | BSc (Hons) in Computing in Software Development  |
| **Module** |  Applied Project and Minor Dissertation |
| **Student** | Emmanuel Osabuehien (G00373559) |
| **Supervisor** | Joseph Corr |

## Introduction<a name = "intro"></a>

Hello, this repository exists to contain the files necessary for my Meal Planning Web Application built using MongoDB, ExpressJS, ReactJS and NodeJS and my dissertation developed using Latex. 

## Overview<a name = "overview"></a>

This is a Meal Planning Web Application which was developed using a MERN Stack (MongoDB, ExpressJS, ReactJS and NodeJS). The function is to provide users with a multi-user. functioning web application which allows them to plan out their daily meals, keep track of dietary requirements, provide nutrional education, plan out shopping list and keep track of their calories. The application also allows users to register and login to an account where this functionality will then become available for users to perform the aforementioned tasks. Users can search for meals that the application has provided, which will then allow them to add/delete from a list of meals which the user can then view. Users will also be provided with a table full of graphs which provided information regarding various diets and nutrional education which users can select to follow. Users can also create their personal ingredients list adding items and the quantity of said item to a list which they can utilize when they plan to complete their shopping. Users can also calculate their BMR (Basic Metabolic Rate) and calories needed based on the users personal details such as height, weight, gender, etc.

## Software Requirements<a name = "requirements"></a>

- MongoDB (Version 4.4+)
- NPM (Version 7.6.3+)
- Node (Version 14.16.0+)

## Technologies<a name = "tech"></a>

- **Languages**: 
    - JavaScript
    - CSS
    - HTML

- **Libraries**: 
    - Axios
    - Bcrypt
    - Bootstrap
    - ChartJS
    - Cors
    - Font-Awesome
    - FortAwesome/Free-Solid-Svg-Icons
    - JsonWebToken
    - Mongoose
    - Nodemon
    - React-Bootstrap
    - React-Router
    - React-Router-Dom
    - JsonWebToken

- **Frameworks**: 
    - Express
    - React

- **Databases**:
    - MongoDB

- **Environments**: 
    - NodeJs

- **Development Software**: 
    - Git 
    - Postman
    - Visual Studio Code   

## Software Features<a name = "features"></a>

The Main Features Of Our App Include:

* Users can create an account.
* Users can log into a registered account.
* Users can search for meals in system.
* Users can view details such as instructions and ingredients of meals in the system.
* When logged in, users can add meals to a listing page.
* When logged in, users can delete meals from a listing page.
* When logged in, users can add/delete items from their own personal, customized shopping list.
* When logged in, users can view various diets provided in the application.
* When logged in, users can calculate their BMI (Basic Metabolic Rate) and calories that are needed which is based on the users personal details such as height, weight, gender, etc.

## Deployment<a name = "deploy"></a>

1) Download All The Software Requirements Listed Above.
2) Download The Zip File Of This Repository.
3) Alternatively You Can Clone This Repository Using The Command:
```bash
git clone
```
4) Navigate Into 'meal-planning-system' Folder Of The Repostory.
5) Install All The React Libraries In Our Project Using The Command:
```bash
npm install
```
6) Deploy The Front End Of Our Application Using The Command:
```bash
npm start
```
7) Navigate Into 'backend' Folder In Our 'meal-planning-system' Folder Of The Repostory.
8) Deploy The Back End Of Our Application Using The Command:
```bash
node server.js
```
9) The Project Should Automatically Open The Project Browser, If Not You Can Mnaually Open The Browser By Entering The Url Of The React App `http://localhost:3000/`.

## Repository Structure<a name = "repo"></a>

* __meal-planning-system__: This folder contains the contents for both the front end and back end of my web application.
* __dissertation__: This folder contains the contents for the accompanying dissertation for my project.
* __LICENSE__: This file is an open source license which allows other people to contribute to the repository.
* __README.md__: This is a text file containing information used to introduce and explain the project, the README.md explains questions such as why this repository exists, what is in it and how to run the project.

## Demo<a name = "demo"></a>

Click here to view a quick demonstration of the application with a rundown of the project code and repository:

## Dissertation<a name = "dissertation"></a>

Click here to view the PDF of of my accompanying dissertation during the development of the application:

## Sprints<a name = "sprints"></a>

- **Sprint 1 (18th October 2021 - 1st November 2021)**: 
    - Create GitHub Repository
    - Research MERN Stack (MongoDB, ExpressJS, ReactJS, NodeJS)
    - Create MongoDB Database
    - Deploy Front End Of Application
    - Deploy Back End Of Application
    - Create Dashboard Page
    - Create 404 Error Page
    - Create Blank Latex Project For Dissertation

- **Sprint 2 (1st November 2021 - 15th November 2021)**:
    - Create Register Page
    - Create Login Page
    - Perform Register Functionality
    - Perform Login/Logout Functionality
    - Integrate Database
    - Create User Schema
    - Create Add User Router
    - Apply Encrypted Password To User Details
    - Write 'Introduction' Section Of Dissertation
    - Test Code

- **Sprint 3 (15th November 2021 - 29th November 2021)**:
    - Create Meal Landing Page
    - Set Up Backend Restful API
    - Perform Fetch A Meal Functionality
    - Perform Fetch All Meals Functionality
    - Create Get Meal Router
    - Write 'Context' Section Of Dissertation
    - Test Code

- **Sprint 4 (29th November 2021 - 13th December 2021)**:
    - Create Meal Listing Page
    - Perform Add Meal Functionality
    - Perform Delete Meal Functionality
    - Create Add Meal Router
    - Create Delete Meal Router
    - Write 'Methodology' Section Of Dissertation
    - Test Code

- **Sprint 5 (13th December 2021 - 27th December 2021)**:
    - Create Shopping List Page
    - Perform Add Ingredient Functionality
    - Perform Update Ingredient Functionality
    - Perform Delete Ingredient Functionality
    - Create Ingreidients Schema
    - Create Add Ingredient Router
    - Test Code

- **Sprint 6 (27th December 2021 - 10th January 2022)**:
    - Create Dietary Requirements Page
    - Integrate Graphs/Charts Based On Meal Diets
    - Stylize Graphs/Charts Into HTML Table
    - Add Hyperlinks Navigating Users To Diet Information Sites
    - Test Code

- **Sprint 7 (10th January 2022 - 24th January 2022)**:
    - Create BMR/Calories Page
    - Add BMR/Calories Needed Calculator
    - Add User Details To Calculator (Gender, Age, Height, Weight, Physical Activity)
    - Perform Calculate BMR (Basal Metabolic Rate) Functionality
    - Perform Calculate Calories Needed Functionality
    - Write First Half Of 'Technology Review' Section Of Dissertation
    - Test Code

- **Sprint 7 (24th January 2022 - 7th February 2022)**:
    - Add CSS Styling To All Web Pages
    - Brainstorm New Features To Add To Application
    - Finish Second Half Of 'Technology Review' Section Of Dissertation
    - Test Code   

## Conclusion<a name = "conclusion"></a>

- I have created a meal planning application.
- The application allows users to search for meals using RESTful API.
- The application requires users to register an account and log in to use key features.
- The application utilizes CRUD (Create, Read, Update and Delete) functionality.
- The application allows users to calculate their daily BMR (Basic Metabolic Rate) and the calories needed to be consumed in a day.
- The application provides users with charts providing nutrional education regrading various diets.
- Agile Methodology e.g. Scrum was used during the development of the application where I used two week sprints to implement a list of tasks to be completed.
- A dissertation is provided to document the developmental process of the application.
- To view a more clear, concise conclusion of the application view the accompanying dissertation and refer to the sections 'System Evaluation' and 'Conclusion'.

## References<a name = "references"></a>

[1] - https://nodejs.org/en/docs/

[2] - https://reactjs.org/docs/getting-started.html

[3] - https://expressjs.com/

[4] - https://docs.mongodb.com/

[5] - https://www.w3schools.com/nodejs/nodejs_intro.asp

[6] - https://www.c-sharpcorner.com/article/what-and-why-reactjs/

[7] - https://www.besanttechnologies.com/what-is-expressjs

[8] - https://www.guru99.com/what-is-mongodb.html

[9] - https://idratherbewriting.com/learnapidoc/

[10] - https://www.dcu.ie/engineeringandcomputing/final-year-projects-expo-2021

[11] - K. Chodorow, *MongoDB: the definitive guide: powerful and scalable data storage*, Newton, MA: O'Reilly Media, Inc, 2013

[12] - A. Mardan, *Express. js Guide: The Comprehensive Book on Express. js*, Berkeley, CA.: Springer, 2014

[13] - B. J. D'Mello, J. Krol and M. Satheesh, *Web development with MongoDB and NodeJs*, Birmingham, UK: Packt Publishing Ltd, 2015

[14] - P. Sonpatki and A.M. Vipul, *ReactJS by Example-Building Modern Web Applications with React*, Birmingham, UK: Packt Publishing Ltd, 2016

[15] - S. Hoque, *Full-Stack React Projects: Learn MERN stack development by building modern web apps using MongoDB, Express, React, and Node. js*, Birmingham, UK: Packt Publishing Ltd, 2020