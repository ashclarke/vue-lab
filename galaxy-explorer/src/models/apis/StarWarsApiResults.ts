export interface StarWarsApiListResult<T> {
  count: number;
  next: string;
  previous: string | null;
  results: Array<T>;
}
