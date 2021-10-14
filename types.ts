export type ResortNameObj = {
  id: string;
  name: string;
  state_slug: string;
};

export type ResortInfo = {
  average_snowfall: number | null;
  base: number | null;
  days_open_last_year: number | null;
  double: number | null;
  fast_eights: number | null;
  fast_quads: number | null;
  fast_sixes: number | null;
  id: string | null;
  longest_run: number | null;
  mi_night_skiing: number | null;
  mi_pistes: number | null;
  mi_snow_making: number | null;
  name: string | null;
  night_skiing: 1 | 0;
  projected_days_open: number | null;
  quad: number | null;
  runs: number | null;
  skiable_terrain: number | null;
  snow_making: number | null;
  state: string | null;
  summit: number | null;
  surface: number | null;
  terrain_parks: number | null;
  total: number | null;
  trams: number | null;
  triple: number | null;
  url: string | null;
  vertical_drop: number | null;
  years_open: number | null;
};
