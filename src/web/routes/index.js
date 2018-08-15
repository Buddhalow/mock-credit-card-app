import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Templates
import TemplateNothing from '../components/TemplateNothing';
import TemplateSidebar from '../components/TemplateSidebar';

// Routes
import Home from '../components/Home';

import RecipesContainer from '../../containers/Recipes';
import RecipesComponent from '../components/Recipes';
import RecipeViewComponent from '../components/Recipe';

import SignUpContainer from '../../containers/SignUp';
import SignUpComponent from '../components/SignUp';

import LoginContainer from '../../containers/Login';
import LoginComponent from '../components/Login';

import ForgotPasswordContainer from '../../containers/ForgotPassword';
import ForgotPasswordComponent from '../components/ForgotPassword';

import UpdateProfileContainer from '../../containers/UpdateProfile';
import UpdateProfileComponent from '../components/UpdateProfile';

import TransactionsContainer from '../../containers/Transactions';
import TransactionsComponent from '../components/Transactions';

import InvoicesContainer from '../../containers/Invoices';
import InvoicesComponent from '../components/Invoices';

import TransactionContainer from '../../containers/Transaction';
import TransactionViewComponent from '../components/Transaction';

import InvoiceContainer from '../../containers/Invoice';
import InvoiceViewComponent from '../components/Invoice';

import Error from '../components/Error';

const Index = () => (
  <Switch>
    <Route
      exact
      path="/"
      render={props => (
        <TemplateSidebar>
          <DashboardContainer {...props} Layout={DashboardComponent} />
        </TemplateSidebar>
      )}
    />
    <Route
      path="/sign-up"
      render={props => (
        <TemplateNothing>
          <SignUpContainer {...props} Layout={SignUpComponent} />
        </TemplateNothing>
      )}
    />
    <Route
      path="/login"
      render={props => (
        <TemplateNothing>
          <LoginContainer {...props} Layout={LoginComponent} />
        </TemplateNothing>
      )}
    />
    <Route
      path="/forgot-password"
      render={props => (
        <TemplateNothing>
          <ForgotPasswordContainer {...props} Layout={ForgotPasswordComponent} />
        </TemplateNothing>
      )}
    />
    <Route
      path="/update-profile"
      render={props => (
        <TemplateSidebar>
          <UpdateProfileContainer {...props} Layout={UpdateProfileComponent} />
        </TemplateSidebar>
      )}
    />
    <Route
      path="/transactions"
      render={props => (
        <TemplateSidebar>
          <TransactionsContainer {...props} Layout={TransactionsComponent} />
        </TemplateSidebar>
      )}
    />
    <Route
      path="/transaction/:id"
      render={props => (
        <TemplateSidebar>
          <TransactionContainer {...props} Layout={TransactionViewComponent} />
        </TemplateSidebar>
      )}
    />
    <Route
      path="/invoices"
      render={props => (
        <TemplateSidebar>
          <InvoicesContainer {...props} Layout={InvoicesComponent} />
        </TemplateSidebar>
      )}
    />
    <Route
      path="/invoice/:id"
      render={props => (
        <TemplateSidebar>
          <InvoiceContainer {...props} Layout={InvoiceViewComponent} />
        </TemplateSidebar>
      )}
    />
    <Route
      render={props => (
        <TemplateSidebar>
          <Error {...props} title="404" content="Sorry, the route you requested does not exist" />
        </TemplateSidebar>
      )}
    />
  </Switch>
);

export default Index;
