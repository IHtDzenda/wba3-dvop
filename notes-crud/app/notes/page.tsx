import { getTodos } from "@/utils/supabase/operations";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { TodoList } from "./todo";

export default async function ProtectedPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();


  if (!user) {
    return redirect("/");
  }
  const todos = await getTodos();

  return <TodoList todos={todos} />;
}
