import { json, LoaderFunction } from "@remix-run/node";
import { redirect } from "remix";

export const loader: LoaderFunction = ({ request }) => {
  if (request.url.includes("authenticated")) {
    return redirect("/fr");
  }

  return json({});
};

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>It's the password reset code route /password/reset</h1>
    </div>
  );
}
