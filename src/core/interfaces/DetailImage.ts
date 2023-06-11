export interface DetailImage {
  id: string;
  image: string;
  name: string;
  model: string;
  homeworld: string;
  eyeColor: string;
  skinColor: string;
  height: number;
  species: string;
  wiki: string;
}

export interface FormDetailImage {
  data: DetailImage;
}