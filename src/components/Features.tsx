import { Badge } from "./ui/badge";
import {
  Card,
  CardContent,
  // CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
//import image from "../assets/growth.png";
//import image3 from "../assets/reflecting.png";
//import image4 from "../assets/looking-ahead.png";

interface FeatureProps {
  title: string;
  description: string;
  //image: string;
}

const features: FeatureProps[] = [
  {
    title: "Cache All Tabs",
    description:
      "Easily cache all your open tabs with a single click, so you can quickly restore your browsing session later.",
    //image: image4,
  },
  {
    title: "Reopen with One Click",
    description:
      "Reopen all your cached tabs with a single click, saving you time and effort.",
    //image: image3,
  },
  {
    title: "Declutter Your Workspace",
    description:
      "Reduce clutter and improve your productivity by keeping your open tabs organized and easily accessible.",
    //image: image,
  },
];

const featureList: string[] = [
  "Minimalist design",
  "Simple and clean",
  "Lightweight",
  "Zen",
  "Open-source",
];

export const Features = () => {
  return (
    <section
      id="features"
      className="container py-12 sm:py-16 space-y-8"
    >
      <h2 className="text-3xl lg:text-4xl font-bold md:text-center">
      Key Features of {" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
        ZenTab
        </span>
      </h2>

      <div className="flex flex-wrap md:justify-center gap-4">
        {featureList.map((feature: string) => (
          <div key={feature}>
            <Badge
              variant="secondary"
              className="text-sm"
            >
              {feature}
            </Badge>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map(({ title, description }: FeatureProps) => (
          <Card key={title}>
            <CardHeader>
              <CardTitle>{title}</CardTitle>
            </CardHeader>

            <CardContent>{description}</CardContent>
{/* 
            <CardFooter>
              <img
                src={image}
                alt="About feature"
                className="w-[200px] lg:w-[300px] mx-auto"
              />
            </CardFooter> */}
          </Card>
        ))}
      </div>
    </section>
  );
};
