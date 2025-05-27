export function createSlug(str: string): string {
  return str
    ?.toLowerCase() // Convert to lowercase
    .replace(/[^\w\s-]/g, "") // Remove non-word characters (excluding spaces and dashes)
    .replace(/\s+/g, "-") // Replace spaces with dashes
    .replace(/-+/g, "-") // Replace multiple dashes with a single dash
    .replace(/^-+|-+$/g, "") // Remove leading/trailing dashes
    .trim(); // Trim any leading or trailing spaces
}
