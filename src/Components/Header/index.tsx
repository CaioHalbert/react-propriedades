import React from "react";

type Props = {
    tittle: string;
}

const Header : React.FC<Props> = ({tittle} : Props) => {
  return (
    <header>
      <h2>{tittle}</h2>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/login">Login</a></li>
        </ul>
        </nav>
    </header>
  );
};

export default Header;