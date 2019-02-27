/* Media */
/* eslint-disable no-param-reassign */
import { css } from 'styled-components'

const sizes = {
  tablet: 992,
  mobile: 576
}

export const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label] / 16}em) {
      ${css(...args)};
    }
  `
  return acc
}, {})

export const fontWeightLight = 200;
export const fontWeightMedium = 400;
export const fontWeightBold = 700;