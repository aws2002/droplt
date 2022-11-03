import Layout from "../components/Layouts/Layout";
import AboutSec from "../components/SectionsPages/AboutSec";
import Catagore from "../components/SectionsPages/Catagore";
import Compeny from "../components/SectionsPages/Compeny";
import HeroSec from "../components/SectionsPages/HeroSec";
import LastSec from "../components/SectionsPages/LastSec";
import PostCard from "../components/SectionsPages/PostCard";
import PostCard2 from "../components/SectionsPages/PostCard2";
export default function Home() {
  return (
    <div>
      <HeroSec />

      <AboutSec />
      <Compeny/>
      <PostCard/>
      <Catagore/>
      
      <PostCard2/>
      <LastSec/>
    </div>
  );
}
