Feature:
  Testing some features from WebDriverIO framework page

  Background:
    Given I maximize the browser window

  @menu
  Scenario: WebDriverIO Developer Guide option
    When I go to the WebDriverIO home page
    And I go to the Developer Guide section
    Then I should see the title of the page as "Developer Guide"
    And I should see the menu guide with the following options
      | Options     |
      | Get Started |
      | Usage       |
      | Testrunner  |
      | Reporters   |
      | Services    |
      | Plugins     |
      | Examples    |
    When I click on "Get Started" option in menu
    Then I should see the "Get Started" menu guide with the following options
      | Options             |
      | Install             |
      | Configuration       |
      | Boilerplate         |
      | Standalone Vs. WDIO |
      | What Is New?        |
      | Upgrade Version     |

  @search
  Scenario: WebDriverIO Developer Guide option
    When I go to the WebDriverIO home page
    And  I search for "Reporters"
    And I select the first suggestion
    Then I should see the title of the page as "What's new in WebdriverIO?"
    When I click on link "wdio-cucumber-framework"
    Then A new tab is being opened
    And I should see the title of the page as "GitHub - webdriverio/wdio-cucumber-framework: A WebdriverIO plugin."

