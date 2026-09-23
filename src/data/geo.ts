import { countries } from './content'

/** Approximate coordinates for the globe visualization — kept in sync with the `countries` list in content.ts. */
const COUNTRY_COORDS: Record<string, [number, number]> = {
  Poland: [52.2297, 21.0122],
  Malaysia: [3.139, 101.6869],
  'Dubai (UAE)': [25.2048, 55.2708],
  Oman: [23.588, 58.3829],
  Thailand: [13.7563, 100.5018],
  Ukraine: [50.4501, 30.5234],
}

export const HUB: { id: string; location: [number, number]; label: string } = {
  id: 'hub',
  location: [17.385, 78.4867],
  label: 'Hyderabad, India',
}

const origins = countries.filter((c) => COUNTRY_COORDS[c])

export const globeMarkers = [
  HUB,
  ...origins.map((c) => ({ id: c, location: COUNTRY_COORDS[c], label: c })),
]

export const globeArcs = origins.map((c) => ({
  id: `${c} — ${HUB.label}`,
  from: COUNTRY_COORDS[c],
  to: HUB.location,
}))
