import { Button } from "./ui/button";
import { buttonVariants } from "./ui/button";
import { HeroCards } from "./HeroCards";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

const downloadFile = () => {

  const zipFileUrl = './src/ZENTAB.zip';
  
  const element = document.createElement("a");
  element.href = zipFileUrl;
  element.download = "ZENTAB.zip";

  document.body.appendChild(element);
  element.click();

  document.body.removeChild(element);
}

export const Hero = () => {
  return (
    <section className="container grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10">
      <div className="text-center lg:text-start space-y-6">
        <main className="text-5xl md:text-6xl font-bold">
          <h1 className="inline">
            <span className="inline bg-gradient-to-r from-[#F596D3]  to-[#D247BF] text-transparent bg-clip-text">
              Cache
            </span>{" "}
            and
          </h1>{" "}
          <h2 className="inline">
            <span className="inline bg-gradient-to-r from-[#61DAFB] via-[#1fc0f1] to-[#03a3d7] text-transparent bg-clip-text">
              Reopen
            </span>{" "}
            all your tabs anytime.
          </h2>
        </main>

        <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
        Declutter your workspace and regain control of your browsing experience with ZenTab. Save RAM and focus on what's important.
        </p>

        <div className="space-y-4 md:space-y-0 md:space-x-4">
          <Button onClick={downloadFile}  className="w-full md:w-1/3">Get ZenTab</Button>

          <a
            rel="noreferrer noopener"
            href="https://github.com/fenrir2608/zentab"
            target="_blank"
            className={`w-full md:w-1/3 ${buttonVariants({
              variant: "outline",
            })}`}
          >
            Github Repository
            <GitHubLogoIcon className="ml-2 w-5 h-5" />
          </a>
        </div>
      </div>

      {/* Hero cards sections */}
      <div className="z-10">
        <HeroCards />
      </div>

      {/* Shadow effect */}
      <div className="shadow"></div>
    </section>
  );
};
