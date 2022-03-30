import { json, LoaderFunction } from "@remix-run/node";
import { redirect, useLoaderData } from "remix";

export const loader: LoaderFunction = ({ params }) => {
  const { collection } = params;

  if (collection) {
    return json({ collection });
  }
  return redirect("/");
};

export default function Index() {
  const { collection } = useLoaderData();
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>It's the playlist page route /playlist/{collection}</h1>
    </div>
  );
}
