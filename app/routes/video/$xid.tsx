import { json, LoaderFunction } from "@remix-run/node";
import { redirect, useLoaderData } from "remix";

export const loader: LoaderFunction = ({ params }) => {
  const { xid } = params;

  if (xid) {
    return json({ xid });
  }
  return redirect("/");
};

export default function Index() {
  const { xid } = useLoaderData();
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>It's the watching page route yo /video/{xid}</h1>
    </div>
  );
}
