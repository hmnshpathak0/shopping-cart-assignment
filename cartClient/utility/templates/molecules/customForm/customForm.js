import React from 'react';
import { Form as WrappedForm }  from 'react-advanced-form';
import {Input ,Button} from  'react-advanced-form-addons'

function CustomForm(props){

    return (
        <div>
            <WrappedForm>
                
            <Input
          name="userEmail"
          type="email"
          label="Email"
          required
        />
        <Input name="userPassword" label="Password" type="password" required />
        <Button>Register</Button>
                </WrappedForm>
        </div>
    )

}

export default CustomForm;