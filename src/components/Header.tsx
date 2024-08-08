import { Menu, Search } from "lucide-react";
import logo from "../assets/youtube.svg";
import Button from "./Button";
const Header = () => {
  return (
    <div className="flex items-center justify-between gap-4 lg:gap-10">
      <div className="flex items-center space-x-4">
        <Button>
          <Menu />
        </Button>
        <img src={logo} alt="youtube" className="h-8 w-8" />
      </div>
      <div className="flex items-center space-x-4">
        <div className="border flex items-center">
          <input placeholder="Search" />
          <Search color="gray" size={18} />
        </div>
        <div></div>
      </div>
      <div></div>
    </div>
  );
};

export default Header;
