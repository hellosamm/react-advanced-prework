import React from "react";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  return (
    <div onClick={() => navigate("/")} className="header">
      <h1>encylopedia of cats</h1>
    </div>
  );
}
