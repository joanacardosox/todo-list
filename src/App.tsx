import { useEffect, useState } from "react";
import { Header } from "./components/Header";
import { ListTask } from "./components/ListTask";
import { NewTask } from "./components/NewTask";
import { TasksClear } from "./components/TasksClear";

export interface NTask {
  content: string;
  id: string;
  isDone: boolean;
}

export function App() {
  const [tasks, setTasks] = useState<NTask[]>(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  const [completedTasksCount, setCompletedTasksCount] = useState(0);
  const [createdTasksCount, setCreatedTasksCount] = useState(0);

  useEffect(() => {
    setCompletedTasksCount(tasks.filter((task) => task.isDone).length);
    setCreatedTasksCount(tasks.length);

    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  function addTask(task: NTask) {
    setTasks((prevState) => [...prevState, task]);
  }

  function toggleTask(id: string) {
    setTasks((prevState) =>
      prevState.map((task) =>
        task.id === id ? { ...task, isDone: !task.isDone } : task
      )
    );
  }

  function toggleDelete(id: string) {
    setTasks((prevState) => prevState.filter((task) => task.id !== id));
  }

  return (
    <>
      <Header />
      <NewTask addTask={addTask} />
      {tasks.length === 0 && <TasksClear />}
      {tasks.length > 0 && (
        <ListTask
          tasks={tasks}
          onTaskToggle={toggleTask}
          onTaskDelete={toggleDelete}
          completedTasksCount={completedTasksCount}
          createdTasksCount={createdTasksCount}
        />
      )}
    </>
  );
}
