import React from "react";

type Props = {
    metodo: string;
    isSignUp: boolean;
}

const Form : React.FC<Props> = ({metodo, isSignUp}: Props) => {
  return (
    <form method={metodo}>
      <input type="text" placeholder="Name" />
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />
      {isSignUp ? <input type="password" placeholder="Confirm Password" /> : <br/>}
      {isSignUp ? <button type="submit">Cadastrar</button> : <button type="submit">Login</button>}
    </form>
  );
};

export default Form;