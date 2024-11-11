import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $ } from '@wdio/globals'
import clickElement from '../../support/action/click-element';
import setValue from '../../support/action/set-value';
import page from '../../support/action/page';
import verify from '../../support/action/verify';
import currentPage from '../../support/libs/current-page';

Given(/^I am on the "(\w+)" page$/, page)

Given(/^I on the "(\w+)" page$/, currentPage)

When(/^I click "(.+)"$/, clickElement)

When(/^I input value in "(.+)" with "(.+)"$/, setValue)

Then(/^I should see a "(.+)" message saying "(.*)"$/, verify)

