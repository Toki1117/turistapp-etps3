export interface Place {
  id?: number;
  name: string;
  description: string;
  img_src: string;
  location: string;
  lat: string;
  lon: string;
  website: string;
  tel: string;
  idMunicipio: number;
  idCateg: number;
  idDepart?: number;
}
