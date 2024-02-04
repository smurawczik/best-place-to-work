import { FC, PropsWithChildren } from "react";
import { useAuth } from "../hooks/useAuth";

export const Authentication: FC<PropsWithChildren> = ({ children }) => {
  useAuth();

  return <>{children}</>;
};
