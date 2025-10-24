import { use, useState } from "react";

export default function useGenerate() {
  const [password, setPassword] = useState("");
  const [copyText, setCopyText] = useState("Copiar");

  function generatePassword() {
    const characters =
      "'1234567890-=!@#$%¨&*()_+qwertyuiop[asdfghjklç~]zxcvbnm,.;/QWERTYUIOP{ASDFGHJKLÇ^}ZXCVBNM<>:?";
    const length = 12;
    let newPassword = "";
    for (let i = 0; i < length; i++) {
      const position = Math.floor(Math.random() * characters.length);
      newPassword += characters[position];
    }
    setPassword(newPassword);
    setCopyText("Copiar");
  }

  function copyToClipboard() {
    if (!password.length) {
      alert("Gere uma senha para copiar.");
      return;
    }
    window.navigator.clipboard.writeText(password);
    setCopyText("Copiado");
  }

  function clearPassword() {
    setPassword("");
    setCopyText("Copiar");
  }

  return {
    password,
    copyText,
    generatePassword,
    copyToClipboard,
    clearPassword,
  };
}
