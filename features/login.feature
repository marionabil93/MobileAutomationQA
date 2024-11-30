# login.feature

Feature: Login Functionality

 Scenario: User logs in with a locked account
    Given I am on the login page
    When the user enters the username and password for a "LOCKED" user
     And clicks on the login button
    Then an error message should be displayed

  Scenario: User logs in with a non-matching username and password
    Given I am on the login page
    When the user enters the username and password for a "NO_MATCH" user
    And clicks on the login button
    Then an error message should be displayed

 Scenario: User logs in with no user details
    Given I am on the login page
    When the user enters the username and password for a "NO_USER_DETAILS" user
    And clicks on the login button
    Then an error message should be displayed

 Scenario: User logs in with no password
    Given I am on the login page
    When the user enters the username and password for a "NO_PASSWORD" user
    And clicks on the login button
    Then an error message should be displayed

 Scenario: User logs in with a valid username and password
    Given I am on the login page
    When the user enters the username and password for a "STANDARD" user
    And clicks on the login button
    Then the user should be logged in successfully