import { createClient } from "next-sanity";

import { apiVersion, dataset, projectId } from "../env";

export const client = createClient({
  projectId: "do6mpxi3",
  dataset: "production",
  apiVersion,
  useCdn: false, // Set to false if statically generating pages, using ISR or tag-based revalidation
});
