import styled from 'styled-components'
import { withDynamicTag } from './DynamicTag'

// TODO Adjust font weight and line height based on tag h1, h2, h3, ...
export const HeaderTag = withDynamicTag(styled.h1`
  margin: 0;
`)
