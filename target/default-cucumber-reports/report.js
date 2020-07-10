$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/Crm.feature");
formatter.feature({
  "name": "User should be able to use create,delete, drag\u0026drop opportunities and filter table features on CRM page",
  "description": "",
  "keyword": "Feature"
});
formatter.background({
  "name": "User should be on the CRM page",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on the login page and page title is \"Login | Best ERP solution for startups\"",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefinitions.user_is_on_the_login_page_and_page_title_is(String)"
});
formatter.result({
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[Login | Best ERP solution for startups]\u003e but was:\u003c[34.220.250.213]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat odoo.step_definitions.LoginStepDefinitions.user_is_on_the_login_page_and_page_title_is(LoginStepDefinitions.java:17)\r\n\tat ✽.user is on the login page and page title is \"Login | Best ERP solution for startups\"(file:src/test/resources/features/Crm.feature:5)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user enters \"eventscrmmanager49@info.com\" username and \"eventscrmmanager\" password",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinitions.user_enters_username_and_password(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user able to navigate \"CRM\" module",
  "keyword": "And "
});
formatter.match({
  "location": "CrmStepDefinitions.userAbleToNavigateModule(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "\"Pipeline\" title is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "CrmStepDefinitions.title_is_displayed(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Verify that user able to create an activity",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@actvity_types"
    }
  ]
});
formatter.step({
  "name": "user able to navigate Activity Types page",
  "keyword": "Given "
});
formatter.match({
  "location": "ActivityTypesStepDefinitions.user_able_to_navigate_Activity_Types_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user able to click on Create button",
  "keyword": "Then "
});
formatter.match({
  "location": "ActivityTypesStepDefinitions.user_able_to_click_on_Create_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user able to set name \"Hasan Oz\" on the table",
  "keyword": "And "
});
formatter.match({
  "location": "ActivityTypesStepDefinitions.user_able_to_set_name_on_the_table(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks Category",
  "keyword": "Then "
});
formatter.match({
  "location": "ActivityTypesStepDefinitions.user_clicks_Category()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user able to see two options",
  "rows": [
    {
      "cells": [
        "Other"
      ]
    },
    {
      "cells": [
        "Meeting"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "ActivityTypesStepDefinitions.user_able_to_see_two_options(String\u003e)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user able to select Meeting option",
  "keyword": "Then "
});
formatter.match({
  "location": "ActivityTypesStepDefinitions.user_able_to_select_Meeting_option()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user able to write \"All CRM Activities\" on the Summary section",
  "keyword": "Then "
});
formatter.match({
  "location": "ActivityTypesStepDefinitions.user_able_to_write_on_the_Summary_section(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user able to write \"3 days\" on the Days section",
  "keyword": "Then "
});
formatter.match({
  "location": "ActivityTypesStepDefinitions.user_able_to_write_on_the_Days_section(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks Recommended Next Activities",
  "keyword": "And "
});
formatter.match({
  "location": "ActivityTypesStepDefinitions.user_clicks_Recommended_Next_Activities()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user able to select for select TestDemo option",
  "keyword": "Then "
});
formatter.match({
  "location": "ActivityTypesStepDefinitions.user_able_to_select_for_select_TestDemo_option()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user able to save table.",
  "keyword": "And "
});
formatter.match({
  "location": "ActivityTypesStepDefinitions.user_able_to_save_table()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded0.png", null);
formatter.after({
  "status": "passed"
});
});