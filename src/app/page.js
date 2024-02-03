/*
Author: Abu Jar Gifary Doha;
Date: 31/01/2024;
*/

import CategoryCard from "@/components/CategoryCard/CategoryCard";
import DuaCard from "@/components/DuaCard/DuaCard";
import Navbar from "@/components/Navbar/navbar";
import UserSettings from "@/components/UserSettings/UserSettings";

export default function Home() {
  return (
    <main className="home-layout">
      <Navbar />
      <CategoryCard />
      <DuaCard />
      <UserSettings />
    </main>
  );
}
