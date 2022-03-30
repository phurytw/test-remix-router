import { LoaderFunction } from "@remix-run/node";
import { redirect, useLoaderData } from "remix";

export const loader: LoaderFunction = () => {
  // do country here
  return redirect("/fr");
};

export default function Index() {
  const loaderData = useLoaderData();
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>It's the index route /{loaderData?.country}</h1>
    </div>
  );
}
