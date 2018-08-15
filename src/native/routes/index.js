import React from 'react';
import { Scene, Tabs, Stack, Modal } from 'react-native-router-flux';
import { Icon } from 'native-base';

import DefaultProps from '../constants/navigation';
import AppConfig from '../../constants/config';

import RecipesContainer from '../../containers/Recipes';
import RecipesComponent from '../components/Recipes';
import RecipeViewComponent from '../components/Recipe';

import SignUpContainer from '../../containers/SignUp';
import SignUpComponent from '../components/SignUp';

import LoginContainer from '../../containers/Login';
import LoginComponent from '../components/Login';

import ForgotPasswordContainer from '../../containers/ForgotPassword';
import ForgotPasswordComponent from '../components/ForgotPassword';

import LocaleContainer from '../../containers/Locale';
import LocaleComponent from '../components/Locale';

import UpdateProfileContainer from '../../containers/UpdateProfile';
import UpdateProfileComponent from '../components/UpdateProfile';

import MemberContainer from '../../containers/Member';
import ProfileComponent from '../components/Profile';

import DashboardContainer from '../../containers/Dashboard';
import DashboardComponent from '../components/Dashboard';


import TransactionsContainer from '../../containers/Transactions';
import TransactionsComponent from '../components/Transactions';

import InvoicesContainer from '../../containers/Invoices';
import InvoicesComponent from '../components/Invoices';

import TransactionContainer from '../../containers/Transaction';
import TransactionComponent from '../components/Transaction';

import InvoiceContainer from '../../containers/Invoice';
import InvoiceComponent from '../components/Invoice';

const Index = (
  <Modal>
    <Stack>
      <Scene hideNavBar>
        <Tabs
          key="tabbar"
          swipeEnabled
          type="replace"
          showLabel={false}
          {...DefaultProps.tabProps}
        >
          <Stack
            key="dashboard"
            title={AppConfig.appName.toUpperCase()}
            icon={() => <Icon name="planet" {...DefaultProps.icons} />}
            {...DefaultProps.navbarProps}
          >
            <Scene key="dashboard" component={DashboardContainer} Layout={DashboardComponent} />
          </Stack>

          <Stack
            key="transactions"
            title="TRANSACTIONS"
            icon={() => <Icon name="book" {...DefaultProps.icons} />}
            {...DefaultProps.navbarProps}
          >
            <Scene key="transactions" component={TransactionsContainer} Layout={TransactionsComponent} />
            <Scene key="transaction" component={TransactionContainer} Layout={TransactionComponent} />
          </Stack>

          <Stack
            key="invoices"
            title="INVOICES"
            icon={() => <Icon name="book" {...DefaultProps.icons} />}
            {...DefaultProps.navbarProps}
          >
            <Scene key="invoices" component={InvoicesContainer} Layout={InvoicesComponent} />
            <Scene key="invoice" component={InvoiceContainer} Layout={InvoiceComponent} />
          </Stack>
          <Stack
            key="profile"
            title="PROFILE"
            icon={() => <Icon name="contact" {...DefaultProps.icons} />}
            {...DefaultProps.navbarProps}
          >
            <Scene key="profileHome" component={MemberContainer} Layout={ProfileComponent} />
            <Scene
              back
              key="signUp"
              title="SIGN UP"
              {...DefaultProps.navbarProps}
              component={SignUpContainer}
              Layout={SignUpComponent}
            />
            <Scene
              back
              key="login"
              title="LOGIN"
              {...DefaultProps.navbarProps}
              component={LoginContainer}
              Layout={LoginComponent}
            />
            <Scene
              back
              key="forgotPassword"
              title="FORGOT PASSWORD"
              {...DefaultProps.navbarProps}
              component={ForgotPasswordContainer}
              Layout={ForgotPasswordComponent}
            />
            <Scene
              back
              key="locale"
              title="CHANGE LANGUAGE"
              {...DefaultProps.navbarProps}
              component={LocaleContainer}
              Layout={LocaleComponent}
            />
            <Scene
              back
              key="updateProfile"
              title="UPDATE PROFILE"
              {...DefaultProps.navbarProps}
              component={UpdateProfileContainer}
              Layout={UpdateProfileComponent}
            />
          </Stack>
        </Tabs>
      </Scene>

      <Scene
        back
        clone
        key="recipe"
        title="RECIPE"
        {...DefaultProps.navbarProps}
        component={RecipesContainer}
        Layout={RecipeViewComponent}
      />
    </Stack>
  </Modal>
);

export default Index;
