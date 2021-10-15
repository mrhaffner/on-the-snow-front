export type ResortNameObj = {
  id: string;
  name: string;
  state_slug: string;
};

export type ResortInfo = {
  average_snowfall: number | null;
  base: number;
  days_open_last_year: number | null;
  double: number | null;
  fast_eights: number | null;
  fast_quads: number | null;
  fast_sixes: number | null;
  id: string;
  longest_run: number | null;
  mi_night_skiing: number | null;
  mi_pistes: number | null;
  mi_snow_making: number | null;
  name: string;
  night_skiing: 1 | 0;
  projected_days_open: number | null;
  quad: number | null;
  runs: number | null;
  skiable_terrain: number | null;
  snow_making: number | null;
  state: string;
  summit: number;
  surface: number | null;
  terrain_parks: number | null;
  total: number | null;
  trams: number | null;
  triple: number | null;
  url: string | null;
  vertical_drop: number;
  years_open: number | null;
};

type ParamsObj = {
  [key: string]: string;
};

export interface StaticProps {
  params: ParamsObj;
}
