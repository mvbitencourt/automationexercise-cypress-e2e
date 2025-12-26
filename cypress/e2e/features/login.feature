Feature: Login
    Quero fazer login no sistema
    Para acessar minha conta

  Background:
    Given I am on the login page

  Scenario: Login com credenciais válidas
    And I fill a valid email
    And I fill a valid password
    When I click on the login button
    Then I see the login message "Logged in as "

  Scenario: Login com email inválido
    And I fill an invalid email
    And I fill a valid password
    When I click on the login button
    Then the email field should be marked as invalid

  Scenario: Login com senha inválida
    And I fill a valid email
    And I fill an invalid password
    When I click on the login button
    Then I see the login message "Your email or password is incorrect!"

  Scenario: Login com email válido, porém não existente
    And I fill a non-existent valid email
    And I fill a valid password
    When I click on the login button
    Then I see the login message "Your email or password is incorrect!"

  Scenario: Login com senha vazia
    And I fill a valid email
    And I leave the password field empty
    When I click on the login button
    Then the password field should be marked as invalid
