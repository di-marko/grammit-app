import styled from 'styled-components';

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  width: 100%;
  background-color: #111;
  color: #fff;
  padding: 0 20px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
`;

export const NavbarLinks = styled.div`
  display: flex;
  align-items: center;
  width: 1100px;
  padding: 0 20px;
`;

export const NavbarLink = styled.a`
  cursor: pointer;
  margin-right: 20px;
`;
