import React from "react";
import Input from "../Components/FormElements/Input";
import Button from "../Components/FormElements/Button";
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
  VALIDATOR_EMAIL,
} from "../Components/util/validators";
import { useForm } from "../Components/hooks/form-hook";

const Contact = () => {
  const [formState, inputHandler] = useForm(
    {
      name: {
        value: "",
        isValid: false,
      },
      business: {
        value: "",
        isValid: false,
      },
      email: {
        value: "",
        isValid: false,
      },
      phone: {
        value: "",
        isValid: false,
      },
      description: {
        value: "",
        isValid: false,
      },
    },
    false
  );
  const contactSubmitHandler = (event) => {
    event.preventDefault();
    console.log(formState.inputs);
  };
  return (
    <>
      <h2> Request Info</h2>
      <form onSubmit={contactSubmitHandler}>
        <Input
          id="name"
          element="input"
          type="text"
          label="Name"
          validators={[VALIDATOR_REQUIRE()]}
          errorText="Please enter a valid Name"
          onInput={inputHandler}
        />
        <Input
          id="business"
          element="input"
          type="text"
          label="Business"
          OnInput={inputHandler}
        />
        <Input
          id="email"
          element="input"
          type="email"
          label="E-Mail"
          validators={[VALIDATOR_EMAIL()]}
          errorText="Please enter a valid Name"
          onInput={inputHandler}
        />
        {/* <Input
          id="Phone"
          element="input"
          type="tel"
          label="phone"
          validators={[VALIDATOR_MINLENGTH(9)]}
          errorText="please enter a valid number"
          onInput={inputHandler}
        /> */}
        <Input
          id="description"
          element="textarea"
          label="Description"
          validators={[VALIDATOR_MINLENGTH(5)]}
          errorText="Please enter a valid description (at least 5 characters)."
          onInput={inputHandler}
        />
      </form>
      <Button type="submit" disabled={!formState.isValid}>
        SUBMIT
      </Button>
    </>
  );
};
export default Contact;
