import { getIdFromUrl } from "@/utils/api";

describe("API Utilities", () => {
  describe("#getIdFromUrl", () => {
    it("should return an empty string", () => {
      const input = "";

      expect(getIdFromUrl(input)).toBe("");
    });

    it("should return `-1`", () => {
      let input = "/this/is/not/a/valid/id/url";

      expect(getIdFromUrl(input)).toBe(-1);

      input = "hello";

      expect(getIdFromUrl(input)).toBe(-1);
    });

    it("should return a valid id", () => {
      let input = "/people/3";

      expect(getIdFromUrl(input)).toBe(3);

      input = "/planets/21";

      expect(getIdFromUrl(input)).toBe(21);

      input = "/vehicles/55/";

      expect(getIdFromUrl(input)).toBe(55);
    });
  });
});
