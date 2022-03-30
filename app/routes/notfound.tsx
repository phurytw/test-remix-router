import { LoaderFunction } from "@remix-run/node";
import { redirect } from "remix";

export const loader: LoaderFunction = () => {
  // do country here
  return redirect("/fr");
};

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>It's the not found route /notfound</h1>
    </div>
  );
}
