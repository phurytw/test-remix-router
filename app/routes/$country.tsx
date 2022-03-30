import { json, LoaderFunction, useLoaderData } from "remix";
import HomeComponent from "./index";

export const loader: LoaderFunction = ({ params }) => {
  if (params.country && params.country.length < 3) {
    return json({ page: "home", country: params.country });
  }
  return json({ page: "channel", channel: params.country });
};

export function Channel() {
  const loaderData = useLoaderData();
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>It's the channel route /{loaderData?.channel}</h1>
    </div>
  );
}

export default function Index() {
  const { page } = useLoaderData();

  switch (page) {
    case "home":
      return <HomeComponent />;
    default:
      return <Channel />;
  }
}
