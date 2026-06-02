const COMPANY_DOMAINS: Record<string, string> = {
  Maersk: "maersk.com",
  "Hapag-Lloyd": "hapag-lloyd.com",
  "Bolloré Logistics": "bollore-logistics.com",
  Bolloré: "bollore.com",
  "NYK Line": "nykline.com",
  NYK: "nyk.com",
  DSV: "dsv.com",
  "CMA CGM": "cma-cgm.com",
  "CEVA Logistics": "cevalogistics.com",
  MSC: "msc.com",
  Geodis: "geodis.com",
  "Kuehne+Nagel": "kuehne-nagel.com",
  DHL: "dhl.com",
  ONE: "one-line.com",
  COSCO: "coscoshipping.com",
  "DP World": "dpworld.com",
  "L'Oréal": "loreal.com",
  "Saint-Gobain": "saint-gobain.com",
  "Samsung Electronics": "samsung.com",
  "Suez Canal Container Terminal": "scct.com.eg",
};

export function companyLogoUrl(company: string): string | null {
  const domain = COMPANY_DOMAINS[company];
  if (!domain) return null;
  return `https://www.google.com/s2/favicons?domain=${domain}&sz=128`;
}
