import { z } from "zod";

export const Step1Schema = z.object({
  terms1: z.boolean().refine((val) => val === true, {
    message: "약관 1에 동의해야 합니다.",
  }),
  terms2: z.boolean().refine((val) => val === true, {
    message: "약관 2에 동의해야 합니다.",
  }),
  terms3: z.boolean().refine((val) => val === true, {
    message: "약관 3에 동의해야 합니다.",
  }),
});

export const Step2Schema = z
  .object({
    id: z.string().min(3, "아이디는 최소 3글자 이상이어야 합니다."),
    password: z.string().min(8, "비밀번호는 최소 8글자 이상이어야 합니다."),
    passwordConfirm: z.string(),
  })
  .superRefine((val, ctx) => {
    if (val.password !== val.passwordConfirm) {
      ctx.addIssue({
        message: "비밀번호가 일치하지 않습니다.",
        path: ["passwordConfirm"],
        code: z.ZodIssueCode.custom,
      });
    }
  });

export type Step1 = z.infer<typeof Step1Schema>;
export type Step2 = z.infer<typeof Step2Schema>;
