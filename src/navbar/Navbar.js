import { navItems } from "./navItems";
import MenuItems from "./MenuItems";
const Navbar = () => {
  return (
    <nav>
      <ul className="menus">
        {navItems.map((menu, index) => {
          const depthLevel = 0;
          return <MenuItems items={menu} key={index} depthLevel={depthLevel} />;
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
