"use client";

import { FormControl, FormField, FormItem, FormMessage } from "./ui/form";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { Step2, Step2Schema } from "@/types/auth";

import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { zodResolver } from "@hookform/resolvers/zod";

interface Step2Props {
  onNext: (id: string, password: string, passwordConfirm: string) => void;
}

const Step2Form = ({ onNext }: Step2Props) => {
  const form = useForm<Step2>({
    resolver: zodResolver(Step2Schema),
    defaultValues: {
      id: "",
      password: "",
      passwordConfirm: "",
    },
  });

  const onSubmit: SubmitHandler<Step2> = (values) => {
    onNext(values.id, values.password, values.passwordConfirm);
  };

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="id"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="아이디" type="text" {...field} />
              </FormControl>
              {form.formState.errors.id && (
                <FormMessage className="text-red-500" />
              )}
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  placeholder="비밀번호는 8자리 이상"
                  type="password"
                  {...field}
                />
              </FormControl>
              {form.formState.errors.password && (
                <FormMessage className="text-red-500" />
              )}
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="passwordConfirm"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  placeholder="비밀번호는 8자리 이상"
                  type="password"
                  {...field}
                />
              </FormControl>
              {form.formState.errors.passwordConfirm && (
                <FormMessage className="text-red-500" />
              )}
            </FormItem>
          )}
        />
        <Button type="submit">Next</Button>
      </form>
    </FormProvider>
  );
};

export default Step2Form;
