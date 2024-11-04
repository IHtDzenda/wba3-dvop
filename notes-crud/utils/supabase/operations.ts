import { createClient } from "./client";

export interface Todo {
  id: string;
  title: string;
  is_complete: boolean;
  created_at: string;
}

const supabase = createClient();
// Create a new task
export async function addTodo(title: string): Promise<Todo | null> {
  const { data, error } = await supabase
    .from('todos')
    .insert([{ title }])
    .select()
    .single();

  if (error) {
    console.error('Error creating todo:', error);
    return null;
  }
  return data;
}

// Get all tasks
export async function getTodos(): Promise<Todo[]> {
  const { data, error } = await supabase
    .from('todos')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching todos:', error);
    return [];
  }
  return data;
}

// Update a task's completion status
export async function toggleTodo(id: string, isComplete: boolean): Promise<Todo | null> {
  const { data, error } = await supabase
    .from('todos')
    .update({ is_complete: isComplete })
    .eq('id', id)
    .select()
    .single();

  if (error) {
    console.error('Error updating todo:', error);
    return null;
  }
  return data;
}

// Delete a task
export async function deleteTodo(id: string): Promise<boolean> {
  const { error } = await supabase
    .from('todos')
    .delete()
    .eq('id', id);

  if (error) {
    console.error('Error deleting todo:', error);
    return false;
  }
  return true;
}

