import { Navigation } from "./Navigation";
import { UserMenu } from "./UserMenu";

export const Header = () => {
  return (
    <header className="items-center py-2 px-4 flex bg-stone-100 w-full justify-between shadow-md shadow-stone-300">
      <div>logo</div>
      <Navigation />
      <UserMenu />
    </header>
  );
};
