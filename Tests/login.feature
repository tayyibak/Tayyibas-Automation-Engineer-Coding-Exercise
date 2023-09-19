Feature: Herokuapp

Scenario: Verify login fields are enabled
    Given I am on login page
    Then I verify login username field is enabled
    Then I enter tomsmith 
    And I verify login password field is enabled
    Then I enter SuperSecretPassword!
    And I verify login button field is enabled
    Then I click on login button 
    Then I click log out button

