import React from "react";
import * as C from "./styles";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Home = () => {
  const { signout } = useAuth();
  const navigate = useNavigate();
  return (
    <C.Container>
      <C.Title>Home</C.Title>
      <Button Text="sair" onClick={() => [signout(), navigate("/")]}>
        sair
      </Button>
    </C.Container>
  );
};

export default Home;
