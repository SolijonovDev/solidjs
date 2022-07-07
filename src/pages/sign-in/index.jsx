import { Form } from "solid-js-form";
import * as Yup from "yup";
import { Input } from "../../components/Input";
import s from "./auth.module.scss";

const SignIn = () => {
  return (
    <div className={s.auth}>
      <Form
        initialValues={{ emai: "", username: "", password: "" }}
        validation={{
          email: Yup.string()
            .default("solijonovqodirjon@gmail.com")
            .email("Email noto'g'ri kiritildi")
            .required("Bu maydon to'ldirilishi shart"),
          username: Yup.string()
          .max(20,"Foydalanuvchi nomi 20 ta belgidan ko'p bo'lmasligi kerak")
          .required("Bu maydon to'ldirilishi shart"),
          password: Yup.string()
            .min(4, "Min 4 ta belgi")
            .max(12, "Max 12 ta belgi")
            .required("Bu maydon to'ldirilishi shart"),
        }}
        onSubmit={async (form) => {
          console.log(form.values);
        }}
      >
        <Input name="email" label="Email" />
        <Input name="username" label="Foydalanuvchi nomi" />
        <Input name="password" label="Parol" />
        <button type="submit">Submit</button>
      </Form>
    </div>
  );
};

export default SignIn;
