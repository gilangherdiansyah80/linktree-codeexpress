const Main = () => {
  return (
    <main className="w-full p-3 flex flex-col gap-y-5 md:w-4/5 xl:w-1/3">
      <section className="bg-[#000957] p-3 rounded-full flex gap-x-5 items-center justify-between duration-500 cursor-pointer hover:scale-105 hover:duration-50 group">
        <div className="bg-white rounded-full w-12 h-12">
          <img src="/images/logotext.png" alt="CodeExpress" />
        </div>
        <a href="" className="text-white">
          Order Website Anda
        </a>
        <img
          src="/images/website.png"
          alt=""
          className="w-10 grayscale group-hover:grayscale-0"
        />
      </section>

      <div className="flex flex-col gap-y-5">
        <h2 className="text-center text-white text-2xl font-bold">
          Contact Kami
        </h2>
        <section className="bg-[#000957] p-3 rounded-full flex gap-x-5 items-center justify-between duration-500 cursor-pointer hover:scale-105 hover:duration-50 group">
          <div className="bg-white rounded-full w-12 h-12">
            <img src="/images/logotext.png" alt="CodeExpress" />
          </div>
          <a href="https://wa.me/6283819249565" className="text-white">
            Whatsapp
          </a>
          <img
            src="/images/whatsapp.png"
            alt=""
            className="w-10 grayscale group-hover:grayscale-0"
          />
        </section>

        <section className="bg-[#000957] p-3 rounded-full flex gap-x-5 items-center justify-between duration-500 cursor-pointer hover:scale-105 hover:duration-50 group">
          <div className="bg-white rounded-full w-12 h-12">
            <img src="/images/logotext.png" alt="CodeExpress" />
          </div>
          <a
            href="https://www.instagram.com/codeexpress2025/"
            className="text-white"
          >
            Instagram
          </a>
          <img
            src="/images/instagram.png"
            alt=""
            className="w-10 grayscale group-hover:grayscale-0"
          />
        </section>
      </div>
    </main>
  );
};

export default Main;
