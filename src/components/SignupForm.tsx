"use client";

import { useFunnel } from "@use-funnel/browser";
import React from "react";
import { boolean, z } from "zod";
import Step2Form from "./Step2Form";
import Step3Form from "./Step3Form";
import Step1Form from "./Step1Form";

export const SignUpSchema = z.object({
  termsAccepted: z.object({
    terms1: z.boolean(),
    terms2: z.boolean(),
  }),
  id: z.string().min(3, "아이디는 최소 3글자 이상이어야 합니다."),
  password: z.string().min(8, "비밀번호는 최소 8글자 이상이어야 합니다."),
  passwordConfirm: z.string(),
});

export const Step1Schema = SignUpSchema.pick({ termsAccepted: true }).refine(
  (data) => {
    const { terms1, terms2 } = data.termsAccepted;
    return terms1 === true && terms2 === true;
  },
  {
    message: "모든 약관에 동의해야 합니다.",
    path: ["termsAccepted"],
  }
);
export const Step2Schema = SignUpSchema.pick({
  id: true,
  password: true,
  passwordConfirm: true,
}).refine((data) => data.password === data.passwordConfirm, {
  message: "비밀번호가 일치하지 않습니다.",
  path: ["passwordConfirm"],
});

export type Signup = z.infer<typeof SignUpSchema>;
export type Step1 = z.infer<typeof Step1Schema>;
export type Step2 = z.infer<typeof Step2Schema>;

const SignupForm = () => {
  const funnel = useFunnel<{
    step1: {
      termsAccepted?: { terms1: boolean; terms2: boolean };
      id?: string;
      password?: string;
      passwordConfirm?: string;
    };
    step2: {
      termsAccepted: { terms1: boolean; terms2: boolean };
      id?: string;
      password?: string;
      passwordConfirm?: string;
    };
    step3: {
      termsAccepted: { terms1: boolean; terms2: boolean };
      id: string;
      password: string;
      passwordConfirm: string;
    };
  }>({
    id: "use-funnel",
    initial: {
      step: "step1",
      context: {},
    },
  });
  return (
    <section>
      <funnel.Render
        step1={({ history }) => (
          <Step1Form
            onNext={({ terms1, terms2 }) => {
              history.push("step2", { termsAccepted: { terms1, terms2 } });
            }}
          />
        )}
        step2={({ history, context }) => (
          <Step2Form
            onNext={(id, password, passwordConfirm) => {
              history.push("step3", {
                ...context,
                id: id,
                password: password,
                passwordConfirm: passwordConfirm,
              });
            }}
          />
        )}
        step3={({ context }) => (
          <Step3Form
            termsAccepted={context.termsAccepted}
            id={context.id}
            password={context.password}
            passwordConfirm={context.passwordConfirm}
          />
        )}
      />
    </section>
  );
};

export default SignupForm;
