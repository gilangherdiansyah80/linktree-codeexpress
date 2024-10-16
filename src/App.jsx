import AuthLayout from "./components/Layouts/AuthLayout";
import Header from "./components/Fragments/Header";
import Main from "./components/Fragments/Main";

const App = () => {
  return (
    <AuthLayout>
      <Header />
      <Main />
    </AuthLayout>
  );
};

export default App;
