import { Link } from "solid-app-router";
import s from "./navbar.module.scss";

export const Navbar = () => {
  return (
    <div className={s.navbar}>
      <Link href="/">Home</Link>
      <Link href="/users">Users</Link>
      <Link href="/blog">Blog</Link>
      <Link href="/auth/sign-in">Kirish</Link>
    </div>
  );
};
