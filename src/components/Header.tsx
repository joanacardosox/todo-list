import logo from "../assets/Logo.svg";


export function Header() {
  return (
    <>
      <header className="bg-zinc-950  h-56 flex justify-center items-center p-4">
        <img className="flex justify-center " src={logo} />
      </header>
      
    </>
  );
}
