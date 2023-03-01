# Description
HotelDeskReservation_AutomatedTests goal is to provide automated tests coverage for Hotel Desk Reservation application that is available under following links : 

[Hotel Desk Reservation QA](https://appianqa.zimpatica.com/suite/sites/hotel-desk-reservation)

[Hotel Desk Reservation DEV](https://appianinnovation.zimpatica.com/suite/sites/hotel-desk-reservation)


Hotel Desk Reservation application is written in Appian which is is a low-code automation platform that allows organizations to build enterprise-grade applications quickly and easily. It provides a range of tools and features to help businesses automate their processes, improve productivity, and streamline their operations.

Automation is created using **JavaScript** language and **Cypress** testing framework. 


# Cypress
Cypress is an open-source end-to-end testing framework for web applications. It allows developers and QA engineers to write automated tests that simulate user interactions with a website or web application, and then assert that the expected behavior occurs. Cypress is unique in that it runs directly in the browser, providing real-time feedback as tests are run. It also has a user-friendly API, and allows developers to easily debug and troubleshoot their tests. Cypress is popular among web developers and QA engineers because it is fast, reliable, and easy to use.

Cypress offers rich documentation when it comes to installation and its usage :
[Cypress official documentation](https://docs.cypress.io/guides/overview/why-cypress/)

# Installation
If you pull the code from remote repository, there is no need to install cypress, because its libraries are already included within node_modules folder.

If you would like to install Cypress on you own, run 

```javascript
npm install cypress --save-dev
```
in project root using terminal.


# Testing environment setup

In order to run tests successfully, few system environmental variables must be set in order to define test users and their passwords, because storing user's credentials inside the code is bad practice.

System environment variables that must be set :

| Variable                | Value                  |
|-------------------------|------------------------|
| CYPRESS_APPIAN_ADMIN_PW | {Admin password}       |
| CYPRESS_APPIAN_ADMIN_USERNAME           | {Admin username}       |
| CYPRESS_APPIAN_HDR_MANAGER_PW            | {HRD Manager password} |
| CYPRESS_APPIAN_HDR_USER_PW            | {HDR User password}    |

For details how to add or change environmental variables check : 

[Windows instruction](https://docs.oracle.com/en/database/oracle/machine-learning/oml4r/1.5.1/oread/creating-and-modifying-environment-variables-on-windows.html)

[MacOs instruction](https://phoenixnap.com/kb/set-environment-variable-mac)

[Linux instruction](https://www.serverlab.ca/tutorials/linux/administration-linux/how-to-set-environment-variables-in-linux/)


After setting up all necessary environmental variables, tests can be successfully executed. Make note that there might be a need to restart you computer after setting / modifying environmental variables.

# Running tests

Running tests should take place from project root of HotelDeskReservation_AutomatedTests.

In order to run tests in headed mode run:
```javascript
cypress run --headed
```
or 
```javascript
npx cypress open
```
if you want to stay connected to Cypress UI and debugger. 

In order to run tests in headless mode run : 

```javascript
cypress run --browser chrome
```
Command above executes tests within specific browser. In this case it's Chrome.

Detailed documentation regarding running tests in Cypress can be found here : [Cypress tests execution documentation](https://docs.cypress.io/guides/guides/command-line)

# Overview of project structure

### A typical top-level directory layout

    HotelDeskReservation_AutomatedTests
    ├── cypress                 # Main Cypress catalog
    │   ├── downloads           # Any files downloaded while testing an application
    │   ├── e2e                 # Place where End to End tests are stored
    │   ├── fixtures            # Fixtures are used as external pieces of static data that can be used by your tests
    │   ├── screenshots         # Catalog where screenshots are stored when triggered by cy.screenshot() or when test fails
    │   ├── support             # Code that needs to be included before tests execution
    │   └── videos              # Catalog for tests execution videos
    ├──  cypress-visual-report  # If image assertions are made - the report will be avaialble in this catalog after tests execution
    ├──  cypress-visual-screenshots
    │   ├── baseline            # Catalog for baseline images
    │   ├── comparison          # Catalog for images taken during tests
    │   └── diff                # Catalog for iamges that include differences between baseline and comparison images
    ├──  node_modules           # Directory that contains all the dependencies required by a Node.js project. Dependencies refer to external libraries and modules that are required by a Node.js project to run.
    ├──  cypress.config.js      # Configuration file that allows to customize Cypress to fit the needs of the project.
    ├──  package.json           # Metadata file that contains various information about the project and its dependencies
    ...


### cypress.config.js
The cypress.config.js file is a configuration file used by the Cypress testing framework. It is a JavaScript file that allows  to customize the behavior of Cypress for specific project.

When Cypress runs, it looks for a cypress.config.js file in the root directory of your project. If it finds one, it reads the contents of the file and uses the settings specified to configure its behavior.

Some of the things you can configure using the cypress.config.js file include:

The base URL of your application
The default viewport size for your tests
The location of your integration tests directory
The location of your plugins file
The location of your support file
cypress.config.js file can also be used to define custom configuration options that can be accessed from within Cypress tests.

Overall, the cypress.config.js file is a powerful tool that allows to customize Cypress to fit the needs of a project.


