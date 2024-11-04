import { createClient } from "@/utils/supabase/server";
import {  login, signup } from "./actions";
import { redirect } from "next/navigation";

export default async function Index() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();


  if (user) {
    return redirect("/notes");
  }


  return (
    <>
      <main className="flex-1 flex flex-col gap-6 px-4">
        <h1 className="text-2xl font-bold">Welcome to simple notes</h1>
        <p>If you want to use the app please sign in.</p>
        <form className="text-black">
          <label htmlFor="email">Email:</label>
          <input id="email" name="email" type="email" required />
          <label htmlFor="password">Password:</label>
          <input id="password" name="password" type="password" required />
          <button className="text-white" formAction={login}>Log in</button>
          <button  className="text-white" formAction={signup}>Sign up</button>
        </form>
      </main>
    </>
  );
}
