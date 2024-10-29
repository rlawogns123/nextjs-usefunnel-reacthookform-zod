"use client";

import React from "react";

interface Step3Props {
  termsAccepted: { terms1: boolean; terms2: boolean; terms3: boolean };
  id: string;
  password: string;
  passwordConfirm: string;
}
const Step3Form = ({
  termsAccepted,
  id,
  password,
  passwordConfirm,
}: Step3Props) => {
  return (
    <div>
      <h2>Step3</h2>
      {termsAccepted.terms1 ? <p> terms1 true </p> : <p> terms1 false</p>}
      {termsAccepted.terms2 ? <p> terms2 true </p> : <p> terms2 false</p>}
      {termsAccepted.terms3 ? <p> terms3 true </p> : <p> terms3 false</p>}
      <p>{id}</p>
      <p>{password}</p>
      <p>{passwordConfirm}</p>
    </div>
  );
};

export default Step3Form;
