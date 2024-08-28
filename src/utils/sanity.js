import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
const PROJECT_ID = process.env.SANITY_PROJECT_ID;
console.log(PROJECT_ID, "project_id");

export const client = createClient({
  projectId: "do6mpxi3", // replace with your actual project ID
  dataset: "production", // replace with your dataset name
  apiVersion: "2024-07-01", // use current date (YYYY-MM-DD) to ensure the latest version
  useCdn: true, // `false` if you want to ensure fresh data
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => {
  return builder.image(source);
};
