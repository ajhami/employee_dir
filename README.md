# Employee Directory

![Project Status](https://img.shields.io/badge/status-In_Progress-yellow)
![License](https://img.shields.io/badge/License-mit-blue)

### Click [here](https://ajhami.github.io/employee_dir/) to visit deployed application.

## Description
This Application is a simple employee directory, designed to demonstrate the implementation of a simple React.js application.

![Screenshot](./public/app_screenshot.PNG)

## Table of Contents
- Installation / Setup
- Usage

### Installation / Setup
In order to set up this application in React, find a location in your storage to install a directory for a new React.js application. Once that location is found, run the following code in your git bash terminal, replacing {name} with a desired name for the project:
```git
npx create-react-app {app}
```
In addition to the packages included with a basic React application, you will need to install axios as a dependency.
```git
npm install axios
```
Finally, take the `src` folder from this repository and copy/paste it to your new React application. You can start the application by running this in your terminal:
```git
npm start
```

### Usage
Currently, this application will grab 200 entries of employee data upon loading and insert them into an organized table. The user can search for employees by name in the search bar. There's also a button attatched to the table for sorting the employees by name, however, the functionality is not yet in place for that sort.



*© 2020 ajhami - Alexander James Hamilton. All Rights Reserved.*
