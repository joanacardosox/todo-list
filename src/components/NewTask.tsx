import { PlusCircle } from "phosphor-react";
import { NTask } from "../App";
import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";
import { v4 as uuidv4 } from "uuid";

interface NewTaskProps {
  addTask: (task: NTask) => void;
}

export function NewTask({ addTask }: NewTaskProps) {
  const [inputValue, setInputValue] = useState("");

  const task: NTask = {
    id: uuidv4(),
    isDone: false,
    content: inputValue,
  };

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    setInputValue("");

    addTask(task);
  }

  function handleTaskChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity("");
    setInputValue(event.target.value);
  }

  function handleInvalidForm(event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity("Add task, please!");
  }

  return (
    <>
      <div className="-mt-9 flex flex-row justify-center">
        <form
          onSubmit={handleSubmit}
          className="md:mx-36 mx-8 w-screen gap-4 flex md:flex-row flex-col"
        >
          <input
            className="w-full h-14 p-4 bg-neutral-900 outline-none border-0 focus:border-blue-400 rounded-md  text-slate-400 font-medium  "
            type="text"
            placeholder="Add a task"
            value={inputValue}
            onChange={handleTaskChange}
            onInvalid={handleInvalidForm}
            required
          />
          <button
            className="bg-blue-500 p-4 text-slate-100 rounded-md flex flex-row justify-center items-center gap-2"
            type="submit"
          >
            Create
            <PlusCircle size={20} />
          </button>
        </form>
      </div>
    </>
  );
}
