export function googleDirectionsUrl(points: string[]) {
  const cleanPoints = points.map((point) => point.trim()).filter(Boolean);

  if (cleanPoints.length < 2) {
    return googleMapsSearchUrl(cleanPoints[0] ?? "Iceland");
  }

  const params = new URLSearchParams({
    api: "1",
    origin: cleanPoints[0],
    destination: cleanPoints.at(-1) ?? cleanPoints[0],
    travelmode: "driving"
  });

  if (cleanPoints.length > 2) {
    params.set("waypoints", cleanPoints.slice(1, -1).join("|"));
  }

  return `https://www.google.com/maps/dir/?${params.toString()}`;
}

export function googleMapsSearchUrl(query: string) {
  const params = new URLSearchParams({ api: "1", query });
  return `https://www.google.com/maps/search/?${params.toString()}`;
}

export function segmentDirectionsUrl(from: string, to: string) {
  return `${googleDirectionsUrl([`${from}, Iceland`, `${to}, Iceland`])}&dir_action=navigate`;
}
