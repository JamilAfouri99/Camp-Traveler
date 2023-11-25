import Link from "next/link";
import Image from "next/image";
import { NAV_LINKS } from "../utils/constants";
import Button from "./button";

// images | icons
import BoatImage from "@/public/svg/hilink-logo.svg";
import UserIcon from "@/public/svg/user.svg";
import MenuIcon from "@/public/svg/menu.svg";

const NavBar = () => (
  <nav className="flexBetween max-container padding-container relative z-30 py-10">
    <Logo />
    <Links />
    <LoginButton />
    <NavBarIcon />
  </nav>
);

const Logo = () => (
  <Link href={"/"}>
    <Image src={BoatImage} alt="logo" width={90} height={29} />
  </Link>
);

const Links = () => (
  <ul className="hidden h-full gap-12 lg:flex">
    {NAV_LINKS.map((link) => (
      <Link
        className="regular-16 text-gray-50 cursor-pointer pb-1.5 transition-all hover:font-semibold"
        href={link.href}
        key={link.key}
      >
        {link.label}
      </Link>
    ))}
  </ul>
);

const LoginButton = () => (
  <div className="lg:flexCenter hidden">
    <Button
      type="button"
      title="Login"
      icon={UserIcon}
      variant="btn_dark_green"
    />
  </div>
);

const NavBarIcon = () => (
  <Image
    src={MenuIcon}
    alt="menu"
    width={32}
    height={32}
    className="inline-block cursor-pointer lg:hidden"
  />
);

export default NavBar;
