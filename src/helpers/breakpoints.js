import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'

const breakpoints = useBreakpoints(breakpointsTailwind)
export const sm = breakpoints.smaller('sm')
export const md = breakpoints.between('sm', 'md')
export const lg = breakpoints.between('md', 'lg')
export const xl = breakpoints.between('lg', 'xl')
export const xxl = breakpoints.between('xl', '2xl')
export const xxxl = breakpoints['2xl']

// const breakpoints = useBreakpoints({
//   tablet: 640,
//   laptop: 1024,
//   desktop: 1280,
// })

// export const laptop = breakpoints.between('laptop', 'desktop')
