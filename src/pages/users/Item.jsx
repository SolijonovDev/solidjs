import s from "./users.module.scss";


export const UserItem = ({ user }) => {
  console.log(user);
  return (
    <div className={s.item}>
      <div className={s.inner}>
      <h1>Name: {user.name}</h1>
      <p>Username: {user.username}</p>
      <p>Work: {user.company.name}</p>
      <p>Email: {user.email}</p>
      <p>
        Address:
        <span>{user.address.street}</span>
        <span>{user.address.suite}</span>
      </p>
      </div>
    </div>
  );
};
