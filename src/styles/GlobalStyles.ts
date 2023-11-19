import { createGlobalStyle, css } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
		scroll-behavior: smooth;
		box-sizing: border-box;
		font-family: inherit;
  }

path {
  ${({ theme }) => css`
		color: ${theme.color.icon};
  `}
}

p {
  font-size: 1rem;
  margin: 0;
}

h1, h2, h3, h4, h5, h6 {
  ${({ theme }) => css`
		color: ${theme.color.text};
		margin: 0;
		font-weight: 300;
  `}
  } 
  
  h1 { font-size: 1.5rem }
  h2 { font-size: 1.25rem }
  h3 { font-size: 1.125rem }
  h4 { font-size: 1rem }
  h5 { font-size: 0.875rem }
  h6 { font-size: 0.75rem }
  
a {
  color: ${({ theme }) => theme.color.primary};
  text-decoration: none; 
}

th { background-color: ${({ theme }) => theme.color.surface}; }

th, td {
  border: 1px solid #2e2e2e;
  padding: 0.5rem;
}

html,
body,
button,
textarea,
input {
  font-family: inherit;
  padding: 0;
  margin: 0;
}

@media (min-width: ${({ theme }) => theme.screen.laptop}) {
  ::-webkit-scrollbar {
    width: 1rem;
  }

  ::-webkit-scrollbar-track {
    border: 1px solid ${({ theme }) => theme.color.border};
  }

  ::-webkit-scrollbar-thumb {
    border: 1px solid ${({ theme }) => theme.color.border};
    background: ${({ theme }) => theme.color.surface};
    border-radius: 0.5rem;
  }
}
`;

export default GlobalStyle;
