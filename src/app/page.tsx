import Navbar from "@/components/Navbar";

import HomeScreen from "@/modules/home/components";
import AboutScreen from "@/modules/home/components/About";
import SkillScreen from "@/modules/home/components/Skills";
import ProjectScreen from "@/modules/home/components/Projects";
import ExperienceScreen from "@/modules/home/components/Experiences"
export default async function Home() {
  return (
    <>
      <div className="overflow-x-hidden overflow-y-hidden">
        <Navbar />
        <HomeScreen />
        <AboutScreen />
        <SkillScreen />
        <ProjectScreen />
        <ExperienceScreen/>
      </div>
    </>
  )
}
