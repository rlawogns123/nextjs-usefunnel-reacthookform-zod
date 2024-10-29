"use client";

import Step1Form from "./Step1Form";
import Step2Form from "./Step2Form";
import Step3Form from "./Step3Form";
import { useFunnel } from "@use-funnel/browser";

const SignupForm = () => {
  const funnel = useFunnel<{
    step1: {
      termsAccepted?: { terms1: boolean; terms2: boolean; terms3: boolean };
      id?: string;
      password?: string;
      passwordConfirm?: string;
    };
    step2: {
      termsAccepted: { terms1: boolean; terms2: boolean; terms3: boolean };
      id?: string;
      password?: string;
      passwordConfirm?: string;
    };
    step3: {
      termsAccepted: { terms1: boolean; terms2: boolean; terms3: boolean };
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
            onNext={({ terms1, terms2, terms3 }) => {
              history.push("step2", {
                termsAccepted: { terms1, terms2, terms3 },
              });
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
