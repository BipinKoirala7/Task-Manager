import React, { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import Loader from "./utils/Loader";
import Tooltip from "./utils/Tooltip";

const Tasks = () => {
  const authState = useSelector((state: any) => state.authReducer);
  const [tasks, setTasks] = useState([]);
  const [fetchData, fetchState] = useFetch();
  const loading = fetchState.loading;

  const fetchTasks = useCallback(() => {
    const config = {
      url: "/tasks",
      method: "get",
      headers: { Authorization: authState.token },
    };
    fetchData(config, { showSuccessToast: false }).then((data) =>
      setTasks(data.tasks),
    );
  }, [authState.token, fetchData]);

  useEffect(() => {
    if (!authState.isLoggedIn) return;
    fetchTasks();
  }, [authState.isLoggedIn, fetchTasks]);

  const handleDelete = (id) => {
    const config = {
      url: `/tasks/${id}`,
      method: "delete",
      headers: { Authorization: authState.token },
    };
    fetchData(config).then(() => fetchTasks());
  };

  return (
    <>
      <div className="my-2 mx-auto max-w-[700px] py-4">
        {tasks.length !== 0 && (
          <h2 className="my-2 ml-2 md:ml-0 text-xl font-semibold text-slate-800">
            Your tasks ({tasks.length})
          </h2>
        )}
        {loading ? (
          <Loader />
        ) : (
          <div>
            {tasks.length === 0 ? (
              <div className="w-[600px] h-[300px] flex items-center justify-center gap-4 rounded-2xl border border-slate-200 bg-white/80 shadow-sm">
                <span className="text-slate-600">No tasks found</span>
                <Link
                  to="/tasks/add"
                  className="bg-primary text-white hover:bg-primary-dark font-medium rounded-xl px-4 py-2 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
                >
                  + Add new task{" "}
                </Link>
              </div>
            ) : (
              tasks.map((task, index) => (
                <div
                  key={task._id}
                  className="bg-white/90 my-4 p-4 text-slate-700 rounded-2xl shadow-sm border border-slate-200 transition-all hover:shadow-md hover:border-slate-300"
                >
                  <div className="flex">
                    <span className="font-medium text-slate-800">
                      Task #{index + 1}
                    </span>

                    <Tooltip text={"Edit this task"} position={"top"}>
                      <Link
                        to={`/tasks/${task._id}`}
                        className="ml-auto mr-2 text-primary cursor-pointer transition-colors hover:text-primary-dark"
                      >
                        <i className="fa-solid fa-pen"></i>
                      </Link>
                    </Tooltip>

                    <Tooltip text={"Delete this task"} position={"top"}>
                      <span
                        className="text-slate-400 cursor-pointer transition-colors hover:text-rose-500"
                        onClick={() => handleDelete(task._id)}
                      >
                        <i className="fa-solid fa-trash"></i>
                      </span>
                    </Tooltip>
                  </div>
                  <div className="whitespace-pre">{task.description}</div>
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default Tasks;
