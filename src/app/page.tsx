// import SignupForm from "@/components/SignupForm";

import dynamic from "next/dynamic";

const SignupForm = dynamic(() => import("../components/SignupForm"), {
  ssr: false,
});

export default function Home() {
  return (
    <main>
      <h1>Next.js App Router / use-funnel / react-hook-form / zod</h1>
      <SignupForm />
    </main>
  );
}
