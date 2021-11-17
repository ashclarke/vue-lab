const shortDateFormatter = new Intl.DateTimeFormat("en-gb", {
  dateStyle: "short",
  year: "numeric"
});

export function formatIsoDate(isoDate: string | null | undefined): string {
  if (!isoDate) {
    return "";
  }

  const date = new Date(isoDate);

  if (Number.isNaN(Number(date))) {
    return "Unknown";
  }

  return shortDateFormatter.format(date);
}