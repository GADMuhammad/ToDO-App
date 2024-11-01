import Circle from "./Circle";

export default function Input({ checked, onChecked, ifEnter }) {
  return (
    <div className="mx-auto mb-10 flex w-[40rem] rounded-md bg-slate200 py-2 pl-5 shadow-md transition-all max-md:w-11/12">
      <Circle checked={checked} onChecked={onChecked} />
      <input
        onKeyDown={ifEnter}
        placeholder="Create a new todo..."
        className="h-12 w-full rounded bg-inherit px-2 text-lg text-indigo700 caret-purple-500 focus:outline-none"
      />
    </div>
  );
}

// Consolas, 'Courier New', monospace, Operator Mono Lig
