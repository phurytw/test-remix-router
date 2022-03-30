import { json, LoaderFunction } from "@remix-run/node";
import { redirect, useLoaderData } from "remix";

export const loader: LoaderFunction = ({ params }) => {
  const { xid, country } = params;

  if (xid && country) {
    return json({ xid, country });
  }
  return redirect("/");
};

export default function Index() {
  const { xid, country } = useLoaderData();
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>
        It's the topic page route {country}/topic/{xid}
      </h1>
    </div>
  );
}
