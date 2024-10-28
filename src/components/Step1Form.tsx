"use client";

import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Step1 } from "./SignupForm";

interface Step1Props {
  onNext: (termsAccepted: { terms1: boolean; terms2: boolean }) => void;
}

const Step1Form = ({ onNext }: Step1Props) => {
  const { control, handleSubmit } = useForm<Step1>({
    defaultValues: { termsAccepted: { terms1: false, terms2: false } },
  });
  // const [terms1, setTerms1] = useState<boolean>(false);
  // const [terms2, setTerms2] = useState<boolean>(false);

  const onSubmit = (data: { terms1: boolean; terms2: boolean }) => {
    onNext(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Step1</h2>
      <label>
        <Controller
          name="terms1"
          control={control}
          render={({ field }) => (
            <input
              type="checkbox"
              {...field}
              onChange={(e) => field.onChange(e.target.checked)}
            />
          )}
        />
        <p>약관 1에 동의합니다</p>
      </label>
      <label>
        <Controller
          name="terms2"
          control={control}
          render={({ field }) => (
            <input
              type="checkbox"
              {...field}
              onChange={(e) => field.onChange(e.target.checked)}
            />
          )}
        />
        <p>약관 2에 동의합니다.</p>
      </label>
      <button type="submit">Next</button>
    </form>
    // <div>
    //   <h2>Step1</h2>
    //   <label>
    //     <input
    //       type="checkbox"
    //       required
    //       onChange={(e) => setTerms1(e.target.checked)}
    //     />
    //     <p>약관 1에 동의합니다.</p>
    //   </label>
    //   <label>
    //     <input
    //       type="checkbox"
    //       required
    //       onChange={(e) => setTerms2(e.target.checked)}
    //     />
    //     <p>약관 2에 동의합니다.</p>
    //   </label>
    //   <button
    //     onClick={() => {
    //       onNext({ terms1, terms2 });
    //     }}
    //   >
    //     Next
    //   </button>
    // </div>
  );
};

export default Step1Form;
