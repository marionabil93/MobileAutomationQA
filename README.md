# MobileAutomationQA

This project automates the login functionality of a mobile application using **Appium**. It supports both **iOS** and **Android** native applications. The project is built using the **Cucumber BDD** framework and **WebDriverIO**. The **Page Object Model (POM)** design pattern is used for better maintainability, and **Allure Reports** are integrated to generate reports after test execution.

## Project Overview

This project automates the **login functionality** of a mobile application using **Appium** and supports both **iOS** and **Android** devices. The project follows the **Page Object Model (POM)** pattern, which helps in maintaining reusable code for the login page and other page elements.

### Features:
- Automates the login functionality for both iOS and Android apps.
- Uses **Cucumber BDD** for writing test cases in a human-readable format.
- Implements **WebDriverIO** as the test framework.
- Generates **Allure Reports** for better test reporting and visualization.
- Supports both **Android and iOS** platforms using Appium.

## Technologies Used

- **Appium**: Mobile automation framework for iOS and Android.
- **WebDriverIO**: Automation test framework for browser and mobile apps.
- **Cucumber**: BDD framework to write tests in a readable, business-friendly format.
- **Allure Report**: A test report framework that provides a detailed and interactive report.
- **Page Object Model**: Design pattern used for enhancing code maintainability.

## Project Setup

### Prerequisites
Before setting up the project, ensure that you have the following installed on your machine:

- **Node.js** (Version 14 or higher)
- **npm** (Node Package Manager)
- **Appium** (For mobile test automation)
- **Android SDK** and **Xcode** for Android and iOS test environments
- **Cucumber CLI** for running BDD tests
- **Allure Commandline** to generate Allure reports

### Install Dependencies
Follow these steps to set up the project:

1. Install the required dependencies:

   ```npm install```

2. Install WebDriverIO dependencies:
Install WebDriverIO and its essential packages:

```npm install @wdio/cli --save-dev```

```npx wdio config```

3. Install Appium drivers (for Android and iOS):

For Android:

```appium driver install uiautomator2```

For iOS:

```appium driver install xcuitest```

4. Install Appium and Cucumber  dependencies:

```npm install @wdio/cucumber-framework --save-dev```

```npm install appium --save-dev```

5. Install Allure commandline for reporting:

```npm install allure-commandline --save-dev```

## Running Tests

To run the tests in this project, execute the following command:

### Run Tests with WebDriverIO & Cucumber

For Android: 
```npm run android```

For IOS: 
```npm run ios```

This will run the tests using Cucumber BDD. The test scenarios defined in .feature files will be executed.

### Allure Reports
After running your tests, Allure reports can be generated as follows:

1. To generate the Allure report:

     ```allure generate allure-results --clean```

2. To view the Allure report in your browser:
     
    ```allure open```

### Page Object Model (POM)
Page Objects are stored in the /pageobjects folder

### Screenshots and Videos

#### For Android: 
<img width="1470" alt="Screenshot For Android AM" src="https://github.com/user-attachments/assets/20cd3852-f6a2-43ba-921b-9d685f9c2fe9">


#### For IOS:
<img width="1470" alt="ScreenshotForIOS" src="https://github.com/user-attachments/assets/25653f9d-c70b-47cb-b026-8be291a7279c">
