import styled from 'styled-components';
import {Link} from 'react-router-dom';
export const FooterContainer = styled('footer')`
  display: grid;
  grid-template-columns: 70% 30%;
  justify-items: center;
`

export const NavFooter = styled('nav')`
  grid-column-start: 1;
  grid-column-end: 2;
`
export const UlFooter = styled('ul')`
  display: flex;
  flex-direction: row;
`
export const LiFooter = styled('li')`
  margin-right: 15px;
`
export const LinkFooter = styled(Link)`
  text-decoration: none;
  color: rgb(0,68,128);
  font-weight: 600;
  font-size: 12px;
`
export const BusinessName= styled('span')`
  color: rgb(142, 142, 142);
  grid-column-start: 2;
  grid-column-end: 3;
  font-weight: 600;
  font-size: 12px;
  align-self: center;
  justify-self: left;
`

