import { IMAGES_URL } from "../constants";
export const posterLoader = ({ src, width, quality }) => {
   return `${IMAGES_URL}${src}?w=${width}&q=${quality || 75}`;
}