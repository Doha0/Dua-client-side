import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import feverIcon from "@/assets/icons/fever.png";
import Image from "next/image";

const SubCategoryCard = () => {
  return (
    <section>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>
            <div className="flex gap-4 bg-[#E8F0F5] p-3 rounded-md">
              <div className="bg-[#CFE0E5] rounded-md w-14 h-14 flex items-center justify-center">
                <Image className="w-10 h-10" src={feverIcon} />
              </div>
              <div className="space-y-1">
                <p className="text-primary font-semibold">
                  Introduction to Dua
                </p>
                <p className="text-muted-foreground text-sm">Subcategory: 11</p>
              </div>
              <div className="space-y-1">
                <p className="text-center font-semibold">15</p>
                <p className="text-muted-foreground text-sm">Duas</p>
              </div>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
};

export default SubCategoryCard;
