import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "How do I install ZenTab?",
    answer: `ZenTab is not listed on the Chrome Web Store. To install it, you need to follow these steps:\n
    Download the ZenTab extension files.
    Open Chrome and navigate to chrome://extensions/.
    Enable "Developer mode" by toggling the switch in the top right corner.
    Click on "Load unpacked" and select the folder containing the ZenTab files.
    ZenTab will be added to your browser's extensions.`,
    value: "item-1",
  },
  {
    question: "How do I use ZenTab?",
    answer:
    `Using ZenTab is simple:
    Click on the ZenTab icon in your Chrome toolbar.
    If you have tabs open, ZenTab will save their URLs and close them.
    When you click the ZenTab icon again, it will reopen all the previously saved tabs.`,
    value: "item-2",
  },
  {
    question:
      "Can I choose which tabs to save?",
    answer:
      "ZenTab saves all open tabs (including incognito/private tabs) when you click the icon. Currently, there is no option to select specific tabs to save (yet!).",
    value: "item-3",
  },
  {
    question: "What happens to my saved tabs if I close Chrome?",
    answer: "Your saved tabs are stored locally in Chrome's storage. They will be available for reopening the next time you use ZenTab, even if you close and reopen Chrome.",
    value: "item-4",
  },
  {
    question: "What should I do if my tabs don't reopen?",
    answer: `If your tabs don't reopen, try the following steps:
    Ensure that ZenTab has the necessary permissions to access your tabs.
    Check if the URLs were saved correctly by navigating to chrome://extensions/ and inspecting the storage data.
    If the issue persists, consider reinstalling the extension or raising an issue on Github.`,
    value: "item-4",
  },
  {
    question: "How can I uninstall ZenTab?",
    answer: `To uninstall ZenTab:
    Navigate to chrome://extensions/.
    Find ZenTab in the list of installed extensions.
    Click on the "Remove" button to uninstall the extension.`,
    value: "item-4",
  },
  {
    question:
      "Can I contribute to ZenTab?",
    answer:
      "Yes, ZenTab is an open-source project, and contributions are welcome! You can contribute by reporting bugs, suggesting new features, or submitting code improvements. Visit the ZenTab GitHub repository to get started.",
    value: "item-5",
  },
];

export const FAQ = () => {
  return (
    <section
      id="faq"
      className="container py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Frequently Asked{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Questions
        </span>
      </h2>

      <Accordion
        type="single"
        collapsible
        className="w-full AccordionRoot"
      >
        {FAQList.map(({ question, answer, value }: FAQProps) => (
          <AccordionItem
            key={value}
            value={value}
          >
            <AccordionTrigger className="text-left">
              {question}
            </AccordionTrigger>

            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <h3 className="font-medium mt-4">
        Still have questions?{" "}
        <a
          rel="noreferrer noopener"
          href="mailto:harshmehta.m26@gmail.com"
          className="text-primary transition-all border-primary hover:border-b-2"
        >
          Email me!
        </a>
      </h3>
    </section>
  );
};
