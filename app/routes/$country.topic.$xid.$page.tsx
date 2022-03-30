import { json, LoaderFunction } from "@remix-run/node";
import { redirect, useLoaderData } from "remix";

export const loader: LoaderFunction = ({ params }) => {
  const { xid, country, page } = params;

  if (xid && country && page) {
    return json({ xid, country, page });
  }
  return redirect("/");
};

export default function Index() {
  const { xid, country, page } = useLoaderData();
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>
        It's the topic page route {country}/topic/{xid}/{page}
      </h1>
    </div>
  );
}
