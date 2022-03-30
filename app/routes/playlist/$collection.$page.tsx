import { json, LoaderFunction } from "@remix-run/node";
import { redirect, useLoaderData } from "remix";

export const loader: LoaderFunction = ({ params }) => {
  const { collection, page } = params;

  if (collection) {
    return json({ collection, page });
  }
  return redirect("/");
};

export default function Index() {
  const { collection, page } = useLoaderData();
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>
        It's the playlist page route /playlist/{collection}/{page}
      </h1>
    </div>
  );
}
