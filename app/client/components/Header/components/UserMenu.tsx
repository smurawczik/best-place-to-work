import { Button } from "@nextui-org/react";
import { Form, Link } from "@remix-run/react";

import { useOptionalUser } from "~/client/hooks/useOptionalUser";

export const UserMenu = () => {
  const user = useOptionalUser();

  if (!user) {
    return (
      <div className="flex gap-2">
        <Link to="/login">
          <Button size="sm" radius="sm" color="primary">
            Sign in
          </Button>
        </Link>
        <Link to="/join">
          <Button size="sm" radius="sm" color="primary">
            Register
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <Form action="/logout" method="post">
      <Button color="default" size="sm" radius="sm" type="submit">
        Logout
      </Button>
    </Form>
  );
};
