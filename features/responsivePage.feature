Feature:
  Testing responsive page

  @menu
  Scenario: Page is responsive when resolution is smaller
    Given I resize the page resolution to width 500 and height 600
    When I go to the WebDriverIO home page
    And I go to the Developer Guide section
    And I click on the hamburger icon menu
    And I should see the menu guide with the following options
      | Options     |
      | Get Started |
      | Usage       |
      | Testrunner  |
      | Reporters   |
      | Services    |
      | Plugins     |
      | Examples    |
    And I click on "Get Started" option in menu
    Then I should see the "Get Started" menu guide with the following options
      | Options             |
      | Install             |
      | Configuration       |
      | Boilerplate         |
      | Standalone Vs. WDIO |
      | What Is New?        |
      | Upgrade Versionx     |

