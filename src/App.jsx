import PasswordButtons from "./components/passwordButtons";
function App() {
  return (
    <>
      <div className="min-h-screen flex flex-col justify-center items-center">
        <div className="text-4xl font-bold">
          <h1>Gerador de senhas</h1>
        </div>
        <PasswordButtons />
      </div>
    </>
  );
}

export default App;
