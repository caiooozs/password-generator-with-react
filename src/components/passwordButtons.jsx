import useGenerate from "../hook/useGenerate";

const PasswordButtons = () => {
  const {
    password,
    copyText,
    generatePassword,
    copyToClipboard,
    clearPassword,
  } = useGenerate();
  return (
    <>
      <div className="grid grid-cols-3 gap-4 p-4">
        <button
          onClick={generatePassword}
          className="bg-gray-900 text-white font-semibold w-32 h-12 rounded-4xl cursor-pointer transition-all transform hover:scale-110"
        >
          Gerar Senha
        </button>
        <button
          onClick={copyToClipboard}
          className="bg-gray-900 text-white font-semibold w-32 h-12 rounded-4xl cursor-pointer transition-all transform hover:scale-110"
        >
          {copyText}
        </button>
        <button
          onClick={clearPassword}
          className="bg-gray-900 text-white font-semibold w-32 h-12 rounded-4xl cursor-pointer transition-all transform hover:scale-110"
        >
          Limpar senha
        </button>
      </div>
      <div className="bg-gray-800 w-1/6 h-12 flex justify-center items-center text-center rounded-4xl">
        <p className="text-2xl font-bold text-white">{password}</p>
      </div>
    </>
  );
};

export default PasswordButtons;
