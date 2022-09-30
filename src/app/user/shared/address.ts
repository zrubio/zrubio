export class Address {
  private street: string;
  private suite: string;
  private city: string;
  private zipcode: string;
  private lat: number;
  private lon: number;
  constructor() { }
  public getStreet(): string {
    return this.street;
  }
  public setStreet(street: string): void {
    this.street = street;
  }
  public getSuite(): string {
    return this.suite;
  }
  public setSuite(suite: string): void {
    this.suite = suite;
  }
  public getCity(): string {
    return this.city;
  }
  public setCity(city: string): void {
    this.city = city;
  }
  public getZipcode(): string {
    return this.zipcode;
  }
  public setZipcode(zipcode: string): void {
    this.zipcode = zipcode;
  }
  public getLat(): number {
    return this.lat;
  }
  public setLat(lat: number): void {
    this.lat = lat;
  }
  public getLon(): number {
    return this.lon;
  }
  public setLon(lon: number): void {
    this.lon = lon;
  }
}