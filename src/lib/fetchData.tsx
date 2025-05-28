import axios from "./axios";

export async function fetchPagesBySlug(slug: string) {
  try {
    const response = await axios.get(`/pitch/user/get/pitch/${slug}`);
    return response.data.pitchDeck;
  } catch (error) {
    console.error(`Failed to fetch product by slug (${slug}):`, error);
    return null;
  }
}
export async function fetchTemplateBySlug(slug: string) {
  try {
    const response = await axios.get(`/templates/search?name=${slug}`);
    return response.data[0];
  } catch (error) {
    console.error(`Failed to fetch template by slug (${slug}):`, error);
    return null;
  }
}