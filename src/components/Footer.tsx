import { LogoIcon } from "./Icons";

export const Footer = () => {
  return (
    <footer id="footer">
      <hr className="w-11/12 mx-auto" />

      <section className="container py-20 grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-x-12 gap-y-8">
        <div className="col-span-full xl:col-span-2">
          <a
            rel="noreferrer noopener"
            href="/"
            className="font-bold text-xl flex"
          >
            <LogoIcon />
            ZenTab
          </a>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Follow Me</h3>
          <div>
            <a
              rel="noreferrer noopener"
              href="https://github.com/fenrir2608"
              target="_blank"
              className="opacity-60 hover:opacity-100"
            >
              Github
            </a>
          </div>

          <div>
            <a
              rel="noreferrer noopener"
              href="https://x.com/tooharrsh"
              target="_blank"
              className="opacity-60 hover:opacity-100"
            >
              Twitter
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">About</h3>
          <div>
            <a
              rel="noreferrer noopener"
              href="#features"
              className="opacity-60 hover:opacity-100"
            >
              Features
            </a>
          </div>

          <div>
            <a
              rel="noreferrer noopener"
              href="https://github.com/sponsors/fenrir2608"
              target="_blank"
              className="opacity-60 hover:opacity-100"
            >
              Sponsor Me
            </a>
          </div>

        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Community</h3>
          <div>
            <a
              rel="noreferrer noopener"
              href="https://www.youtube.com/@Fenrir26"
              target="_blank"
              className="opacity-60 hover:opacity-100"
            >
              Youtube
            </a>
          </div>

          <div>
            <a
              rel="noreferrer noopener"
              href="https://discord.com/invite/HA2G98uQYK"
              target="_blank"
              className="opacity-60 hover:opacity-100"
            >
              Discord
            </a>
          </div>

        </div>
      </section>

      <section className="container pb-14 text-center">
        <h3>
          &copy; 2024 | Made by{" "}
          <a
            rel="noreferrer noopener"
            target="_blank"
            href="https://github.com/fenrir2608"
            className="text-primary transition-all border-primary hover:border-b-2"
          >
            Fenrir
          </a>
        </h3>
      </section>
    </footer>
  );
};
