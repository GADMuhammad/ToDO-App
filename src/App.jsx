import { createContext, useEffect, useState } from "react";
import Header from "./Components/Header";
import Input from "./Components/Input";
import Task from "./Components/Task";
import Navigation from "./Components/Navigation";

export const AppContext = createContext();

function App() {
  const [checked, setChecked] = useState(false);
  const [shown, setShown] = useState("All Tasks");

  const tempToLoad = (varName, primaryValue) => {
    const savedMode = localStorage.getItem(varName);
    return savedMode
      ? JSON.parse(savedMode)
      : localStorage.setItem(varName, JSON.stringify(primaryValue)) ||
          primaryValue;
  };

  const [tasks, setTasks] = useState(() => tempToLoad("tasks", {}));

  const hiddenUpdate = (updatedTasks) => {
    if (shown === "Active") {
      ActiveTasks();
    } else if (shown === "Completed") {
      CompletedTasks();
    } else if (shown === "All Tasks") {
      setTasks(updatedTasks);
    }
  };

  const ifEnter = (event) => {
    if (event.key === "Enter" && event.target.value.trim() !== "") {
      const updatedTasks = {
        [event.target.value]: checked,
        ...JSON.parse(localStorage.getItem("tasks")),
      };

      localStorage.setItem("tasks", JSON.stringify(updatedTasks));
      setTimeout(() => (event.target.value = ""), 10);

      hiddenUpdate(updatedTasks);
    }
  };

  const changeState = (task) => {
    const allTasks = JSON.parse(localStorage.getItem("tasks"));

    const updatedTasks = {
      ...allTasks,
      [task]: !allTasks[task],
    };
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));

    hiddenUpdate(updatedTasks);
  };

  const onDeleteTask = (deletedTask) => {
    const allTasks = JSON.parse(localStorage.getItem("tasks"));

    const updatedTasks = Object.keys(allTasks).reduce((acc, task) => {
      if (task !== deletedTask) acc[task] = allTasks[task];
      return acc;
    }, {});

    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    hiddenUpdate(updatedTasks);
  };

  const ActiveTasks = (remove = false) => {
    if (!remove) setShown("Active");
    const allTasks = JSON.parse(localStorage.getItem("tasks"));

    const updatedTasks = Object.keys(allTasks).reduce((acc, task) => {
      if (!allTasks[task]) acc[task] = allTasks[task];
      return acc;
    }, {});

    if (remove) localStorage.setItem("tasks", JSON.stringify(updatedTasks));

    if (shown === "Completed" && remove) {
      CompletedTasks();
    } else {
      setTasks(updatedTasks);
    }
  };

  const CompletedTasks = () => {
    setShown("Completed");
    const allTasks = JSON.parse(localStorage.getItem("tasks"));

    const updatedTasks = Object.keys(allTasks).reduce((acc, task) => {
      if (allTasks[task]) acc[task] = allTasks[task];
      return acc;
    }, {});

    setTasks(updatedTasks);
  };

  const showAllTasks = () => {
    setShown("All Tasks");
    const allTasks = JSON.parse(localStorage.getItem("tasks"));
    setTasks(allTasks);
  };

  const [toggleDarkMode, setToggleDarkMode] = useState(() =>
    tempToLoad("darkMode", false),
  );

  useEffect(() => {
    const body = document.body;

    if (toggleDarkMode) body.classList.add("dark");
    else body.classList.remove("dark");

    localStorage.setItem("darkMode", toggleDarkMode);
  }, [toggleDarkMode]);

  return (
    <AppContext.Provider value={{ changeState, onDeleteTask }}>
      <Header
        toggle={toggleDarkMode}
        setDark={() => setToggleDarkMode((previous) => !previous)}
      />
      <Input
        ifEnter={ifEnter}
        checked={checked}
        onChecked={() => setChecked((prev) => !prev)}
      />
      <div className="mx-auto mb-5 w-[40rem] rounded-md bg-slate200 shadow-lg max-md:w-11/12">
        {Object.keys(tasks).length === 0 ? (
          <p className="p-5 text-xl tracking-wider text-gray-400">
            No task to display.
          </p>
        ) : (
          Object.entries(tasks).map(([task, isChecked]) => (
            <Task
              key={task}
              // change={changeState}
              task={task}
              primaryValue={isChecked}
              // onDelete={onDeleteTask}
            />
          ))
        )}

        <Navigation
          // prettier-ignore
          tasksNumber={ Object.values(JSON.parse( localStorage.getItem("tasks") )).filter( (sort) => !sort, ).length }
          showActiveTasks={() => ActiveTasks()}
          showCompletedTasks={CompletedTasks}
          showAllTasks={showAllTasks}
          clearCompleted={() => ActiveTasks(true)}
          className={`${Object.keys(tasks).length === 0 ? "border-t-2 border-gray300" : ""} mb-2 flex flex-wrap justify-between p-5`}
          shown={shown}
        />
      </div>
    </AppContext.Provider>
  );
}

export default App;
