import Logo from "../../atoms/Logo";

const NavBar = () => {
  return (
    <nav className="flex-between">
      <Logo />
      <button className="z-50 px-4 py-2 rounded-full border font-semibold hover-effect bg-white text-primary-blue cursor-pointer">
        Sign-Up
      </button>
    </nav>
  );
};

export default NavBar;
