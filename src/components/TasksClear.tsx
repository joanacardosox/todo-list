import Clipboard from "../assets/Clipboard.svg";

export function TasksClear() {
  return (
    <div className="flex flex-col items-center md:mx-60 mx-9 p-12">
      <div className="flex flex-row justify-between items-center w-full h-14 p-4 gap-20">
        <p className="text-blue-500 ">
          Created
          <span className="text-gray-600 rounded-md bg-neutral-900 p-1 ml-2">
            0
          </span>
        </p>
        <p className="text-pink-500 ">
          Completed
          <span className="text-gray-600 rounded-md bg-neutral-900 p-1 ml-2">
            0
          </span>
        </p>
      </div>
      <main className="text-zinc-700 grid place-items-center mt-11 text-center ">
        <img className="mb-3" src={Clipboard} alt="" />
        <strong>You don't have tasks registered yet</strong>
        <p>Create tasks and organize your to-do items</p>
      </main>
    </div>
  );
}
