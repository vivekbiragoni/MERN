import React, { useContext, useState } from "react";

import "./Auth.css";
import Card from "../../shared/components/UIElements/Card";
import Input from "../../shared/components/FormElements/Input";
import {
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "../../shared/util/validators";
import { useForm } from "../../shared/hooks/form-hook";
import Button from "../../shared/components/FormElements/Button";
import { AuthContext } from "../../shared/context/auth-context";

const Auth = (props) => {
    const auth = useContext(AuthContext);
  const [isLoginMode, setIsLoginMode] = useState(true);

  const [formState, inputHandler, setFormData] = useForm(
    {
      email: {
        value: "",
        isValid: false,
      },
      password: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  const switchModeHandler = () => {
    if(!isLoginMode){
        setFormData({
            ...formState.inputs,
            name: undefined
        }, formState.inputs.email.isValid && formState.inputs.password.isValid);
    } else{
        setFormData({
            ...formState.inputs,
            name:{
                value: "",
                isValid: false
            }
        }, false);
    }
    setIsLoginMode((prevMode) => !prevMode);
  };
  const authSubmitHandler = (event) => {
    event.preventDefault();
    console.log(formState);
    auth.login();
  };
  return (
    <Card className="authentication">
      <h2>Login Required</h2>
      <hr />
      <form className="place-form" onSubmit={authSubmitHandler}>
        {!isLoginMode && (
            <Input
            element="input"
            id = "name"
            type = "text"
            label = "Your Name" 
            validators  = {[VALIDATOR_REQUIRE]}
            errorText = "Please enter a name"
            onInput = {inputHandler} 
            />
        )}
        <Input
          element="input"
          id="email"
          type="email"
          label="E-Mail"
          validators={[VALIDATOR_EMAIL()]}
          errorText="Please enter a valid email address"
          onInput={inputHandler}
        />
        <Input
          element="input"
          id="password"
          type="password"
          label="Password"
          validators={[VALIDATOR_MINLENGTH(8)]}
          errorText="Please enter a valid Password (of atlease 8 characters)."
          onInput={inputHandler}
        />
        <Button type="submit" disables={!formState.isValid}>
          {isLoginMode ? "Login" : "Sign UP"}
        </Button>
      </form>
      <Button inverse onClick={switchModeHandler}>
        Switch to {isLoginMode ? "SignUp" : "Login"}
      </Button>
    </Card>
  );
};

export default Auth;
