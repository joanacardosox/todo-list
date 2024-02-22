import { CheckCircle, Circle, Trash } from "phosphor-react";
import { NTask } from "../App";

interface ListTasksProps {
  tasks: NTask[];
  onTaskToggle: any;
  onTaskDelete: any;
  completedTasksCount: number;
  createdTasksCount: number;
}

export function ListTask({
  tasks,
  onTaskToggle,
  onTaskDelete,
  completedTasksCount,
  createdTasksCount,
}: ListTasksProps & {
  completedTasksCount: number;
  createdTasksCount: number;
}) {
  return (
    <>
      <div className="flex flex-row justify-between text-center  h-14 gap-20  md:mx-36 mx-9 p-10">
        <p className="text-blue-500 ">
          Created
          <span className="text-gray-600 rounded-md bg-neutral-900 p-1 ml-2">
            {createdTasksCount}
          </span>
        </p>
        <p className="text-pink-500 ">
          Completed
          <span className="text-gray-600 rounded-md bg-neutral-900 p-1 ml-2">
            {completedTasksCount}
          </span>
        </p>
      </div>

      {tasks.map((task) => {
        return (
          <div
            className="mt-2 md:mx-60 mx-9 p-4 rounded-md bg-neutral-900  gap-4 flex  flex-col "
            key={task.id}
          >
            <div className="flex text-slate-100 justify-between  bg-neutral-900 w-full  ">
              <button
                className="text-2xl"
                onClick={() => onTaskToggle(task.id)}
              >
                {task.isDone ? (
                  <CheckCircle style={{ color: "green" }} size={20} />
                ) : (
                  <Circle size={20} />
                )}
              </button>
              <span
                className={`strike-through ${
                  task.isDone ? "line-through opacity-5" : ""
                }`}
              >
                {task.content}
              </span>
              <button
                className=" hover:text-red-700 text-2xl"
                onClick={() => onTaskDelete(task.id)}
              >
                <Trash size={20} />
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
}
