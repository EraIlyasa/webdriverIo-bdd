@login
Feature: Testing Curahealth

        @login-01
        Scenario Outline: As a user, I can log into the secure area
             When I login <method> curahealth
             Then I verify element text "Login failed! Please ensure the username and password are valid." is <verify>
             Then I verify element text "We Care About Your Health" is not exist

        Examples:
                  | method | verify    |
                  | valid  | not exist |
                  # | invalid | exist     |

        @login-02
        Scenario Outline: As a user, I can log into the secure area 2
             When I login <method> curahealth
             Then I verify element text "Login failed! Please ensure the username and password are valid." is <verify>
             Then I verify element text "We Care About Your Health" is <verify>

        Examples:
                  | method | verify |
                  # | valid   | not exist |
                  | invalid | exist |
          

        @login-03
        Scenario: