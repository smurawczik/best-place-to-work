import { Navigation } from "./Navigation";
import { UserMenu } from "./UserMenu";

export const Header = () => {
  return (
    <header className="dark:bg-slate-900 text-white items-center py-2 px-4 flex w-full justify-between">
      <div>logo</div>
      <Navigation />
      <UserMenu />
    </header>
  );
};