import { formatIsoDate } from "@/utils/date";

describe("Date Utilities", () => {

  describe("#formatIsoDate", () => {

    it("should return an empty string", () => {
      let input = null;

      expect(formatIsoDate(input)).toBe("");

      input = undefined;

      expect(formatIsoDate(input)).toBe("");

      input = "";

      expect(formatIsoDate(input)).toBe("");
    });

    it("should return `Unknown`", () => {
      let input = "21st December 1952";

      expect(formatIsoDate(input)).toBe("Unknown");

      input = "2021-W03-4";

      expect(formatIsoDate(input)).toBe("Unknown");
    });

    it("should return a short formatted date, in UK format", () => {
      let input = "1952-12-21 15:00:00.000";

      expect(formatIsoDate(input)).toBe("21/12/1952");

      input = "3012-01-01";

      expect(formatIsoDate(input)).toBe("01/01/3012");

      input = "2014-09-19T05:14+07:00";

      expect(formatIsoDate(input)).toBe("18/09/2014");
    });

  });

})