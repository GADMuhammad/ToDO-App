import check from "../assets/icon-check.svg";

export default function Circle({ checked, onChecked }) {
  return (
    <div
      className={`${checked ? "border-none bg-custom-gradient" : "hover:border-none hover:bg-hover-custom-gradient"} group mx-2 flex h-[1.75rem] w-[1.75rem] cursor-pointer justify-center self-center rounded-full border-[1px] border-gray300 transition-all duration-300`}
      onClick={onChecked}
    >
      <img
        src={check}
        className={`h-3 w-3 self-center ${checked ? "block" : "hidden group-hover:block"}`}
        alt="check mark"
      />
    </div>
  );
}
