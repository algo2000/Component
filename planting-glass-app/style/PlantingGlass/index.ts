import { StyledComponent } from "styled-components";
import Card from "./Card";
import DayItem from "./DayItem";
import Grid from "./Grid";
import WeekGrid from "./WeekGrid";
import WeekItem from "./WeekItem";

type plantingGlassType = {
  Card: StyledComponent<"div", any, {}, never>,
  Grid: StyledComponent<"div", any, {}, never>,
  WeekGrid: StyledComponent<"div", any, {}, never>,
  WeekItem: StyledComponent<"div", any, {}, never>,
  DayItem: StyledComponent<"div", any, {}, never>
}

export const PlantingGlass: plantingGlassType = {
  Card : Card,
  Grid : Grid,
  WeekGrid : WeekGrid,
  WeekItem : WeekItem,
  DayItem : DayItem
}