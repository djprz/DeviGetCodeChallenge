Feature:
  Testing some features from WebDriverIO page

  Scenario: WebDriverIO Developer Guide option
    When I go to the WebDriverIO page
    And I click on "Developer Guide" option
    Then I should see the title of the page be "DEVELOPER GUIDE"
    Then I should see the menu guide with the following options
      | Get Started |
      | Usage       |
      | Testrunner  |
      | Reporters   |
      | Services    |
      | Plugins     |
      | Examples    |
    When I click on "Get Started" option
    Then I should see the inner menu guide with the following options
      | Install            |
      | Configuration      |
      | Boilerplate        |
      | Standalon Vs. WDIO |
      | What Is New?       |
      | Upgrade Version    |
