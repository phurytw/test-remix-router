import { LoaderFunction } from "@remix-run/node";
import { redirect } from "remix";

export const loader: LoaderFunction = ({ request }) => {
  const query = request.url.split("?")[1];
  const searchParams = new URLSearchParams(query);

  const redirectUri = searchParams.get("redirect_uri");
  if (redirectUri) {
    return redirect(redirectUri);
  }
  return redirect("/");
};

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>It's the register activate route /register/activate</h1>
    </div>
  );
}
