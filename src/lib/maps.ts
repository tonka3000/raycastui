import { open } from "@raycast/api";

export interface Coordinates {
  long: number;
  lat: number;
}

export type MapType = "Standard" | "Satellite" | "Hybrid" | "Transit";

export interface MapsQuery {
  coordinates?: Coordinates;
  mapType?: MapType;
}

const mapTypeMapping: Record<string, string> = {
  Standard: "m",
  Satellite: "k",
  Hybrid: "h",
  Transit: "r",
};

export async function openInMaps({ coordinates: c, mapType }: MapsQuery) {
  // schema see https://developer.apple.com/library/archive/featuredarticles/iPhoneURLScheme_Reference/MapLinks/MapLinks.html
  const up = new URL("maps://maps.apple.com/");
  const mt = mapType ? mapTypeMapping[mapType] : undefined;
  if (c) {
    up.searchParams.set("ll", `${c.long},${c.lat}`);
  }
  if (mt) {
    up.searchParams.set("t", mt);
  }
  const url = up.toString();
  return open(url);
}
