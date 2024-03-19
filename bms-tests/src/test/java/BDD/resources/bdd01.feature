Feature: App Status
  Everybody wants to know if App can be opened

  Scenario: App status check
    Given app is close
    When I navigate to url
    Then I should see "Book Hub"