import { createEffect, createSignal } from "solid-js";
import { UserItem } from "./Item";
import s from "./users.module.scss";

const Users = () => {
  const [data, setData] = createSignal([]);
  const [loading, setLoading] = createSignal(false);

  createEffect(async () => {
    setLoading(true);
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    setLoading(false);
    setData(data);
  });

  return (
    <div className={s.users}>
      <h1>Users</h1>
      {loading() && <div>Loading ... </div>}
      {!loading() && (
        <div className={s.items}>
          <For className={s.for} each={data()}>
            {(item) => <UserItem user={item} />}
          </For>
        </div>
      )}
    </div>
  );
};

export default Users;
