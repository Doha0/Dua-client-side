import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

// images
import searchIcon from "@/assets/icons/search.png";
import feverIcon from "@/assets/icons/fever.png";

import Image from "next/image";
import SubCategoryCard from "../SubCategoryCard/SubCategoryCard";
import data from "@/api/data";
// import { useEffect, useState } from "react";

export default async function CategoryCard() {
  const allDua = await data();

  console.log(allDua);

  return (
    <section className="w-[24rem] col-span-3 h-[85.5vh] lg:h-[74vh] bg-white hidden lg:block rounded-md">
      <Card className="rounded-md">
        <CardHeader className="bg-primary mx-auto font-semibold text-white text-center py-5 rounded-t-md">
          <h3>categories</h3>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              {/* Search by Categories */}
              <div className="relative flex flex-col space-y-1.5 my-4">
                <div className="relative">
                  <Image
                    className="absolute inset-0 left-0 right-0 my-auto m-2"
                    src={searchIcon}
                  />
                  <Input
                    id="search"
                    placeholder="Search by Categories"
                    className="pl-10"
                  />
                </div>
              </div>
              {/* Subcategory */}
              <SubCategoryCard />
            </div>
          </form>
        </CardContent>
        {/* <CardFooter className="flex justify-between">
          <Button variant="outline">Cancel</Button>
          <Button>Deploy</Button>
        </CardFooter> */}
      </Card>
    </section>
  );
}
