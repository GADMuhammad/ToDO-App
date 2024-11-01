import { useContext, useState } from "react";
import Circle from "./Circle";
import x from "../assets/icon-cross.svg";
import { AppContext } from "../App";

export default function Task({ primaryValue, task }) {
  const { changeState, onDeleteTask } = useContext(AppContext);
  const [taskChecked, setTaskChecked] = useState(primaryValue);

  const handleCheck = () => {
    setTaskChecked((prev) => !prev);
    if (changeState) changeState(task);
  };

  return (
    <div className="animate-up group mx-auto flex items-center border-b-2 border-gray300 px-6 py-5 opacity-100 transition-all">
      <Circle checked={taskChecked} onChecked={handleCheck} />
      <h1
        className={`${taskChecked ? "text-gray-500 line-through" : "text-slate600"}`}
      >
        {task}
      </h1>
      <button
        onClick={() => onDeleteTask(task)}
        className="ml-auto opacity-0 transition-all duration-300 hover:!opacity-100 group-hover:opacity-50 max-xl:opacity-100"
      >
        <img src={x} />
      </button>
    </div>
  );
}
