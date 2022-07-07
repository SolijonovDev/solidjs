import { useField } from "solid-js-form";
import s from "./input.module.scss";

export const Input = (props) => {
  const { field, form } = useField(props.name);
  const formHandler = form.formHandler;

  return (
    <div className={s.box}>
      <label for={props.name}>
        {props.label}
        {field.required() ? " *" : ""}
      </label>
      <input name={props.name} value={field.value()} use:formHandler />
      <span>{field.error()}</span>
    </div>
  );
};
