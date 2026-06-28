import { describe, expect, it } from "vitest";
import { getJsonLd } from "@/lib/json-ld";
import { siteConfig } from "@/lib/site.config";

describe("getJsonLd", () => {
  const jsonLd = getJsonLd();

  it("returns public profile schemas", () => {
    expect(jsonLd).toHaveProperty("person");
    expect(jsonLd).toHaveProperty("website");
  });

  describe("Person schema", () => {
    it("has correct @context and @type", () => {
      expect(jsonLd.person["@context"]).toBe("https://schema.org");
      expect(jsonLd.person["@type"]).toBe("Person");
    });

    it("uses siteConfig.url for URLs", () => {
      expect(jsonLd.person.url).toBe(siteConfig.url);
      expect(jsonLd.person.image).toContain(siteConfig.url);
    });

    it("uses siteConfig.role as jobTitle", () => {
      expect(jsonLd.person.jobTitle).toBe(siteConfig.role);
    });

    it("includes sameAs social links", () => {
      expect(jsonLd.person.sameAs).toContain(siteConfig.links.linkedin);
      expect(jsonLd.person.sameAs).toContain(siteConfig.links.github);
    });
  });

  describe("WebSite schema", () => {
    it("has correct @context and @type", () => {
      expect(jsonLd.website["@context"]).toBe("https://schema.org");
      expect(jsonLd.website["@type"]).toBe("WebSite");
    });

    it("uses siteConfig.url", () => {
      expect(jsonLd.website.url).toBe(siteConfig.url);
    });
  });
});
