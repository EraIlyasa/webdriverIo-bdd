Feature: The Internet Guinea Pig Website

  Scenario Outline: As a user, I can log into the secure area
    Given I am on the "login" page
    Given I on the "login" page
     When I click "fieldUsername"
      And I input value in "fieldUsername" with "<username>"
      And I click "fieldPassword"
      And I input value in "fieldPassword" with "<password>"
      And I click "btnSubmit"
     Then I should see a "flashAlert" message saying "<message>"

    Examples:
      | username | password             | message                        |
      | tomsmith | SuperSecretPassword! | You logged into a secure area! |
      | foobar   | barfoo               | Your username is invalid!      |
