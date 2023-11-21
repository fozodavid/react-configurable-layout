import { ResizeHandle } from 'react-resizable'

export type Layout = {
  x: number
  y: number
  w: number
  h: number
  i: string
  resizeHandles?: ResizeHandle[]
}