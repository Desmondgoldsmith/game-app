export interface FetchResponseData<T> {
  count: number;
  next: string | null;
  results: T[];
}
