import moon from "../assets/icon-moon.svg";
import sun from "../assets/icon-sun.svg";

export default function Header({ setDark, toggle }) {
  return (
    <div className="mx-auto my-10 flex w-[40rem] items-center justify-between font-JosefinSans max-md:w-11/12">
      <h1 className="text-5xl font-bold tracking-extra-wide">TODO</h1>
      <a className="cursor-pointer">
        <img onClick={setDark} src={toggle ? sun : moon} />
      </a>
    </div>
  );
}
