import { Form, Link } from "@remix-run/react";

import { useOptionalUser } from "~/client/hooks/useOptionalUser";

import { Button } from "../../Button";

export const UserMenu = () => {
  const user = useOptionalUser();

  if (!user) {
    return (
      <div className="flex gap-2">
        <Link to="/login">
          <Button>Sign in</Button>
        </Link>
        <Link to="/join">
          <Button>Register</Button>
        </Link>
      </div>
    );
  }

  return (
    <Form action="/logout" method="post">
      <Button>Logout</Button>
    </Form>
  );
};
