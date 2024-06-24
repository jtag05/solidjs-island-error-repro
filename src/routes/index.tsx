import { Title } from "@solidjs/meta";
import { action } from "@solidjs/router";

const serverAction = action(async () => {
  "use server";
  console.log("Server Action");
});

export default function Home() {
  return (
    <main>
      <Title>Hello World</Title>
      <h1>Hello world!</h1>
      <form action={serverAction} method="post">
        <button type="submit">Trigger Action</button>
      </form>
    </main>
  );
}
