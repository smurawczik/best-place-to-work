import { Input } from "@nextui-org/react";
import { json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";

import { getCurrencies } from "~/server/models/currencies/currencies.service";

export const loader = async () => {
  const currencies = await getCurrencies();
  return json({ currencies });
};

export default function SalariesIndexPage() {
  const { currencies } = useLoaderData<typeof loader>();

  console.log(currencies);

  return (
    <>
      <p>
        No salary selected. Select a note on the left, or{" "}
        <Link to="new" className="text-blue-500 underline">
          create a new salary.
        </Link>
      </p>
      <Input size="sm" type="email" label="Email" />
    </>
  );
}
