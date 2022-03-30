import { json, LoaderFunction, useLoaderData } from "remix";

export const loader: LoaderFunction = ({ params }) => {
  return json({ query: params.query, searchPage: params.searchPage });
};

export default function Index() {
  const loaderData = useLoaderData();
  const query = loaderData?.query;
  const searchPage = loaderData?.searchPage;

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>
        It's the search query route /search/{query}/{searchPage}
      </h1>
    </div>
  );
}
