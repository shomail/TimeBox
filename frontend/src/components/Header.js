import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const StyledHeader = styled.header`
  display: flex;
  background-color: ${props => props.theme.lightgrey};
  h1 {
    font-size: 2rem;
    padding: 1rem;
  }

  ul {
    display: flex;
    padding: 1.5rem 1rem;
    margin-left: 10rem;

    li {
      margin-left: 3rem;
    }
  }
  a {
    color: ${props => props.theme.darkgrey};
    border-bottom: 1px solid transparent;
    padding-bottom: 0.5rem;
    transition: 0.3s all;
  }
  a:hover {
    color: ${props => props.theme.black};
    border-bottom: 1px solid ${props => props.theme.darkgrey};
  }

  .active {
    border-bottom: 1px solid ${props => props.theme.darkgrey};
  }
`;

const Header = () => (
  <StyledHeader>
    <h1>TimeBox</h1>
    <nav>
      <ul>
        <li>
          <NavLink activeClassName="active" to="/timesheet">
            Timesheet
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/projects">
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/clients">
            Clients
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/invoices">
            Invoices
          </NavLink>
        </li>
      </ul>
    </nav>
  </StyledHeader>
);

export default Header;
