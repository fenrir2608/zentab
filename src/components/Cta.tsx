import { Button } from "./ui/button";


const downloadFile = () => {

  const zipFileUrl = './src/ZENTAB.zip';
  
  const element = document.createElement("a");
  element.href = zipFileUrl;
  element.download = "ZENTAB.zip";

  document.body.appendChild(element);
  element.click();

  document.body.removeChild(element);
}

const redirect = () => {
  window.open('https://github.com/fenrir2608/zentab', '_blank'); 
};

export const Cta = () => {
  return (
    <section
      id="cta"
      className="bg-muted/50 py-16 my-24 sm:my-32"
    >
      <div className="container lg:grid lg:grid-cols-2 place-items-center">
        <div className="lg:col-start-1">
          <h2 className="text-3xl md:text-4xl font-bold ">
            Simplify Your Browsing Experience<br/>
            <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
              {" "}
              with One Click.{" "}
            </span>
          </h2>
          <p className="text-muted-foreground text-xl mt-4 mb-8 lg:mb-0">
          Manage your Browser's tabs effortlessly.All Chromium browsers supported. Try ZenTab now!
          </p>
        </div>

        <div className="space-y-4 lg:col-start-2">
          <Button onClick= {downloadFile} className="w-full md:mr-4 md:w-auto">Download</Button>
          <Button
            onClick={redirect}
            variant="outline"
            className="w-full md:w-auto"
          > 
            Contribute to the project
          </Button>
        </div>
      </div>
    </section>
  );
};
