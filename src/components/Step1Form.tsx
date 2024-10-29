"use client";

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { Step1, Step1Schema } from "@/types/auth";

import { Button } from "./ui/button";
import { Checkbox } from "./ui/checkbox";
import { zodResolver } from "@hookform/resolvers/zod";

interface Step1Props {
  onNext: (data: Step1) => void;
}

const Step1Form = ({ onNext }: Step1Props) => {
  const form = useForm<Step1>({
    resolver: zodResolver(Step1Schema),
    defaultValues: {
      terms1: false,
      terms2: false,
      terms3: false,
    },
  });

  const onSubmit: SubmitHandler<Step1> = (values) => {
    onNext(values);
  };

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="terms1"
          render={({ field }) => (
            <FormItem>
              <FormLabel>약관 1에 동의합니다.</FormLabel>
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={(checked) => field.onChange(checked)}
                />
              </FormControl>
              {form.formState.errors.terms1 && (
                <FormMessage className="text-red-500" />
              )}
            </FormItem>
          )}
        ></FormField>

        <FormField
          control={form.control}
          name="terms2"
          render={({ field }) => (
            <FormItem>
              <FormLabel>약관 2에 동의합니다.</FormLabel>
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={(checked) => field.onChange(checked)}
                />
              </FormControl>
              {form.formState.errors.terms2 && (
                <FormMessage className="text-red-500" />
              )}
            </FormItem>
          )}
        ></FormField>

        <FormField
          control={form.control}
          name="terms3"
          render={({ field }) => (
            <FormItem>
              <FormLabel>약관 3에 동의합니다.</FormLabel>
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={(checked) => field.onChange(checked)}
                />
              </FormControl>
              {form.formState.errors.terms3 && (
                <FormMessage className="text-red-500" />
              )}
            </FormItem>
          )}
        ></FormField>
        <Button type="submit">Next</Button>
      </form>
    </FormProvider>
  );
};

export default Step1Form;
