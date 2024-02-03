import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import language from "@/assets/icons/Language.png";
import general from "@/assets/icons/general.png";
import font from "@/assets/icons/font.png";
import appearance from "@/assets/icons/appearance.png";
import toggle from "@/assets/icons/switch.png";
import Image from "next/image";

const data = [
  { icon: language, text: "Language Settings" },
  { icon: general, text: "General Settings" },
  { icon: font, text: "Font Settings" },
  { icon: appearance, text: "Appearance Settings" },
];

const UserSettings = () => {
  return (
    <section className="w-[20rem] col-span-2 col-start-11">
      <div className="flex justify-center items-center">
        <Card>
          <CardHeader>
            <CardTitle className="text-center font-bold text-xl">
              Settings
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 pb-0">
            {data.map((setting, index) => (
              <div key={index} className="flex items-center rounded-md">
                <div className="relative w-full">
                  <Image
                    src={setting.icon}
                    alt={`${setting.text} Icon`}
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 bg-[#E8F0F5] p-2 w-10 h-10 rounded-full"
                  />
                  <p className="pl-16 w-[290px] h-[55px] bg-[#F7F8FA] rounded-md p-3 text-[#868686]">
                    {setting.text}
                  </p>
                </div>
              </div>
            ))}
          </CardContent>
          <CardFooter>
            <div className="flex justify-between items-center py-7 px-4 border-b-[1px] border-x-[1px]">
              <p className="text-[#393939]">Night Mode</p>
              <Image className="w-8 h-4" src={toggle} />
            </div>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
};

export default UserSettings;
