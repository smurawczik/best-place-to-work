import { User } from "~/server/models/users/user.service";

import { isUser } from "../helpers/user.helpers";

import { useMatchesData } from "./useMatchesData";

export function useOptionalUser(): User | undefined {
  const data = useMatchesData("root");
  if (!data || !isUser(data.user)) {
    return undefined;
  }
  return data.user;
}
