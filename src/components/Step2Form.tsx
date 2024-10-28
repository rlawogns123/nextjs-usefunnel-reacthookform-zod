"use client";
import React, { useState } from "react";

interface Step2Props {
  onNext: (id: string, password: string, passwordConfirm: string) => void;
}

const Step2Form = ({ onNext }: Step2Props) => {
  const [id, setId] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordConfirm, setPasswordConfirm] = useState<string>("");
  return (
    <div>
      <h2>Step2</h2>
      <label>
        <p>id</p>
        <input type="text" required onChange={(e) => setId(e.target.value)} />
      </label>
      <label>
        <p>password</p>
        <input
          type="text"
          required
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <label>
        <p>passwordConfirm</p>
        <input
          type="text"
          required
          onChange={(e) => setPasswordConfirm(e.target.value)}
        />
      </label>
      <button
        onClick={() => {
          onNext(id, password, passwordConfirm);
        }}
      >
        Next
      </button>
    </div>
  );
};

export default Step2Form;
