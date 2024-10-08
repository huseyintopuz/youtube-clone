import {
  ArrowLeft,
  Bell,
  Menu,
  Mic,
  Search,
  Upload,
  User2Icon,
} from "lucide-react";
import logo from "../assets/youtube.svg";
import Button from "./Button";
import { useState } from "react";
const Header = () => {
  const [showFullWidthSearch, setShowFullWidthSearch] = useState(false);
  return (
    <div className="flex items-center justify-between gap-x-6">
      <div
        className={`${
          showFullWidthSearch ? "hidden" : "flex"
        } flex-shrink-0 items-center space-x-4`}
      >
        <Button variant="ghost" size="icon">
          <Menu />
        </Button>
        <img src={logo} alt="youtube" className="h-8 w-8" />
      </div>
      <form
        className={`${
          showFullWidthSearch ? "flex" : "hidden md:flex"
        }  flex-grow justify-center gap-x-3`}
      >
        {showFullWidthSearch && (
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setShowFullWidthSearch(false)}
          >
            <ArrowLeft />
          </Button>
        )}
        <div className="flex flex-grow max-w-[600px]">
          <input
            type="search"
            placeholder="Search"
            className="rounded-l-full border border-secondary-border shadow-inner shadow-secondary focus:border-blue-500 outline-none text-lg py-1 px-4 w-full "
          />
          <Button className="py-2 px-4 rounded-r-full border border-secondary-border border-l-0 flex-shrink-0">
            <Search />
          </Button>
        </div>
        <Button variant="ghost" size="icon">
          <Mic />
        </Button>
      </form>
      <div
        className={`${
          showFullWidthSearch ? "hidden" : "flex"
        } flex-shrink-0 items-center space-x-4`}
      >
        <Button
          onClick={() => setShowFullWidthSearch(true)}
          variant="ghost"
          size="icon"
          className="md:hidden"
        >
          <Search />
        </Button>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Mic />
        </Button>
        <Button variant="ghost" size="icon">
          <Upload />
        </Button>
        <Button variant="ghost" size="icon">
          <User2Icon />
        </Button>
        <Button variant="ghost" size="icon">
          <Bell />
        </Button>
      </div>
    </div>
  );
};

export default Header;
