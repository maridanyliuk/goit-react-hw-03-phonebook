import { createGlobalStyle } from 'styled-components';
export const GlobalStyle = createGlobalStyle`
  a {
  text-decoration: none;
  color: inherit;
  cursor: pointer;
}

ul {
  margin: 0;
  padding: 0;
}

li {
  list-style: none;
  text-decoration: none;
  color: inherit;
  display: flex;
  align-items: center;
  margin: 16px 0px;
}

h1,
h3,
h4,
h5,
h6,
p {
  margin: 0;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
}

button {
  border: none;
  cursor: pointer;
}

* {
  box-sizing: border-box;
}
body {
  font-family: 'Roboto', sans-serif;
  background-color: #F1E3F3;
  position: relative;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 40px;
}
button {
  background-color: #820263;
  border-radius: 4px;
  color: white;
  padding: 6px 8px;
  margin: 8px;
  font-size: 16px;
  display: flex;
  justify-content: center;
  }
input {
  border: 1px solid black;
  border-radius: 8px;
  padding: 4px; 
  margin: 8px 0px;
}
`;