import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://mbcreditconsulting.com.au";

  return [
    { url: baseUrl, lastModified: new Date(), priority: 1.0 },
    { url: `${baseUrl}/contact`, lastModified: new Date(), priority: 0.8 },
    { url: `${baseUrl}/calculators/repayments`, lastModified: new Date(), priority: 0.7 },
    { url: `${baseUrl}/calculators/stamp-duty`, lastModified: new Date(), priority: 0.7 },
  ];
}
