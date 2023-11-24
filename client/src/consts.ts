import type { Layout } from 'react-grid-layout'

export const DEFAULT_GRID_LAYOUT = {
  className: "layout",
  items: 3,
  rowHeight: 20,
  margin: [20, 20],
  onLayoutChange: function () { },
  cols: 12,
}

export const BASIC_LAYOUT: Layout[] = [{
    x: 0,
    y: 0,
    w: 8,
    h: 21,
    i: "0",
},
{
    x: 8,
    y: 0,
    w: 4,
    h: 12,
    i: "1",
},
{
    x: 8,
    y: 12,
    w: 4,
    h: 9,
    i: "2",
},
{
    x: 0,
    y: 12,
    w: 3,
    h: 6,
    i: "3",
},
{
    x: 3,
    y: 12,
    w: 3,
    h: 6,
    i: "4",
},
]