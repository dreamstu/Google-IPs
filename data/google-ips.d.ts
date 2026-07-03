export interface GoogleIpsData {
  readonly countries: readonly string[];
  readonly ips: readonly string[];
  readonly byCountry: Readonly<Record<string, readonly string[]>>;
}

declare const data: GoogleIpsData;
export default data;
