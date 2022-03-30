import { json, LoaderFunction } from "remix";
import Search from "./$query.$searchPage";

export const loader: LoaderFunction = ({ params }) => {
  return json({ query: params.query });
};

export default Search;
