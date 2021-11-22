import { UNKNOWN } from "./messaging";

const shortDateFormatter = new Intl.DateTimeFormat("en-gb", {
  day: "2-digit",
  month: "2-digit",
  year: "numeric",
});

export function formatIsoDate(isoDate: string | null | undefined): string {
  if (!isoDate) {
    return "";
  }

  const date = new Date(isoDate);

  if (Number.isNaN(Number(date))) {
    return UNKNOWN;
  }

  return shortDateFormatter.format(date);
}
