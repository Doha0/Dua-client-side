import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import frame from "@/assets/icons/Frame.png";
import copy from "@/assets/icons/copy.png";
import bookmark from "@/assets/icons/bookmark2.png";
import memorize from "@/assets/icons/Memorize2.png";
import share from "@/assets/icons/share.png";
import report from "@/assets/icons/report.png";
import audio from "@/assets/icons/audio.png";
import Image from "next/image";

const DuaCard = () => {
  return (
    <section className="w-[54rem] col-span-5">
      <Card>
        <CardHeader className="flex flex-row mb-2">
          <Image src={frame} />
          <CardTitle className="text-primary text-base ml-3">
            1. The servant is dependent on his Lord #1
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-7">
          <p>
            All human beings depend on Allah for their welfare and prevention of
            evil in various matters of their religion and world. Allah says
            (interpretation of the meaning): O mankind, you are those in need of
            Allah, while Allah is the Free of need, the Praiseworthy.
          </p>
          <p className="text-2xl">
            لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيْكَ لَهُ، لَهُ الْمُلْكُ
            وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ، اَللَّهُمَّ لَا
            مَانِعَ لِمَا أَعْطَيْتَ وَلَا مُعْطِيَ لِمَا مَنَعْتَ وَلَا
            يَنْفَعُ ذَا الْجَدِّ مِنْكَ الْجَدُّ
          </p>
          <div>
            <p>Reference:</p>
            <p>Surah Al-Fatir 35:15</p>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <div>
            <Image src={audio} />
          </div>
          <div className="flex items-center gap-x-10">
            <Image src={copy} />
            <Image src={bookmark} />
            <Image src={memorize} />
            <Image src={share} />
            <Image src={report} />
          </div>
        </CardFooter>
      </Card>
    </section>
  );
};

export default DuaCard;
