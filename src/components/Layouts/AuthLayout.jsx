const AuthLayout = (props) => {
  // eslint-disable-next-line react/prop-types
  const { children } = props;
  return (
    <section className="bg-gradient-to-b from-[#344CB7] to-[#577BC1] h-screen flex flex-col items-center w-full gap-y-5">
      {children}
    </section>
  );
};

export default AuthLayout;
