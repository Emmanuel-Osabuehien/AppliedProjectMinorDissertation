import React, { useState } from 'react';
import { Jumbotron } from 'react-bootstrap';
import { ResetPassword } from '../../components/forget-password/ForgetPasswordComponent';
import { LoginForm } from '../../components/login/LoginComponent'

import './EntryPage.css';

export const Entry = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [frmLoad, setFrmLoad] = useState("login");

	const handleOnChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        break;
    }
  };

  const handleOnSubmit = (e) => {
		e.preventDefault();

    if (!email || !password) {
			return alert("Please enter details into required fields");
    }
    console.log(email, password);
  };

  const handleOnResetSubmit = (e) => {
		e.preventDefault();

    if (!email ) {
			return alert("Please enter email");
    }
    console.log(email);
  };
  
  const formSwitcher = (frmType) => {
    setFrmLoad(frmType);
  }
  
  
	return (
    <div className="entry-page bg-info">
      <Jumbotron className="form-box">
        {frmLoad === 'login' && (<LoginForm
        handleOnChange={handleOnChange}
        handleOnSubmit={handleOnSubmit}
        formSwitcher={formSwitcher}
        email={email}
        pass={password}
        />
      )}

{frmLoad === 'reset' && ( <ResetPassword 
        handleOnChange={handleOnChange}
        handleOnResetSubmit={handleOnResetSubmit}
        formSwitcher={formSwitcher}
        email={email}
        pass={password}
        />
      )}
      </Jumbotron>
    </div>
  )
};