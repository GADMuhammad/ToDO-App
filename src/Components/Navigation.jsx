const linksStyles = "cursor-pointer transition-all duration-300";

export default function Navigation({
  tasksNumber,
  showActiveTasks,
  showCompletedTasks,
  showAllTasks,
  clearCompleted,
  shown,
  className,
  ...props
}) {
  const sorts = [
    { sort: "All Tasks", onClick: showAllTasks },
    { sort: "Active", onClick: showActiveTasks },
    { sort: "Completed", onClick: showCompletedTasks },
  ];
  // What is(useMemo)

  const navigationButtons = sorts.map((sort) => (
    <li key={sort.sort}>
      <a
        onClick={sort.onClick}
        className={`${linksStyles} ${
          shown === sort.sort
            ? "border-b-2 border-indigo700 pb-[0.05rem] tracking-widest text-indigo700"
            : "text-gray-400 hover:tracking-wide hover:text-slate600"
        }`}
      >
        {sort.sort}
      </a>
    </li>
  ));

  return (
    <>
      <div {...props} className={`${className} rounded-b-md`}>
        <h3 className="text-gray-400">{tasksNumber} items left</h3>

        <ul className="flex gap-5 max-md:hidden">{navigationButtons}</ul>

        <a
          onClick={clearCompleted}
          className={`${linksStyles} text-gray-400 hover:tracking-wide hover:text-indigo700`}
        >
          Clear Completed
        </a>
      </div>

      <ul
        className={`flex-wrap justify-around gap-5 rounded-md max-md:flex ${className} hidden`}
      >
        {navigationButtons}
      </ul>
    </>
  );
}
