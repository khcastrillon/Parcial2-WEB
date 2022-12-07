export class Banda {
  id: number;
  name: string;
  fundation_year: number;
  country: string;
  genre: string;
  description: string;
  image: string;

  constructor(id: number, name: string, fundation_year: number, country: string, genre: string, description: string, image: string) {
    this.id = id;
    this.name = name;
    this.fundation_year = fundation_year;
    this.country = country;
    this.genre = genre;
    this.description = description;
    this.image = image;
  }
}
