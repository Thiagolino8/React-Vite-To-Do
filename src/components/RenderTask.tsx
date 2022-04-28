import { useNavigate } from "react-router-dom";
import { CgClose, CgInfo, CgTrash } from "react-icons/cg";
import { AiOutlineCheck } from "react-icons/ai";
import { useStore } from "../store";
import type { Task } from "../store";
import { useState } from "react";

interface Props {
  task: Task;
}

const TaskRender = ({ task }: Props) => {
  const [value, setValue] = useState(task.title);
  const navigate = useNavigate();
  const { deleteTask, toggleTask, updateTask, getTaskById, formatTaskTitle } = useStore();
  return (
    <div
      className={`${
        task.completed ? "border-l-8 border-solid border border-lime-400" : ""
      } bg-zinc-700 px-1 py-2 my-3 flex rounded-md justify-between items-center`}
    >
      <div className="px-1 py-2">
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onBlur={(e) => {
            if (formatTaskTitle(e.currentTarget.value) !== formatTaskTitle(task.title)) {
              updateTask(task.id, e.currentTarget.value);
            }
            setValue(getTaskById(task.id)?.title ?? '');
          }}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              e.currentTarget.blur();
            }
          }}
          className="text-2xl font-bold text-left truncate rounded-md outline-none pointer bg-zinc-700 focus:outline-lime-400 focus:bg-zinc-600"
        />
      </div>
      <div className="flex items-end">
        <button
          className="border-none text-2xl text-lime-400 m-1.5 pointer bg-zinc-700"
          onClick={() => toggleTask(task.id)}
        >
          {task.completed ? <CgClose /> : <AiOutlineCheck />}
        </button>
        <button
          className="border-none text-2xl text-lime-400 m-1.5 pointer bg-zinc-700"
          onClick={() => deleteTask(task.id)}
        >
          <CgTrash />
        </button>
        <button
          className="border-none text-2xl text-lime-400 m-1.5 pointer bg-zinc-700"
          onClick={() => navigate(`/details/${task.title}`)}
        >
          <CgInfo />
        </button>
      </div>
    </div>
  );
};

export default TaskRender;
