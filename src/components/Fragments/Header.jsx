const Header = () => {
  return (
    <header className="flex flex-col gap-y-5 items-center mt-14 md:w-4/5 xl:w-1/3">
      <div className="bg-black rounded-full w-24 h-24">
        <img src="/images/logo.png" alt="CodeExpress" />
      </div>
      <h1 className="text-white text-2xl font-bold">CodeExpress</h1>
    </header>
  );
};

export default Header;
