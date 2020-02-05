import React from 'react';
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux';
import 'bootstrap/scss/bootstrap.scss';
import {store} from './store';
import { FormProvider } from 'react-advanced-form';
import rules from './utility/utils/formValidation/validationRules';
import messages from './utility/utils/formValidation/validationMessage'
import App from './App'

ReactDOM.render( <Provider store={store}>
  <FormProvider rules={rules} messages={messages}><App /></FormProvider>
</Provider>, document.getElementById('root'));