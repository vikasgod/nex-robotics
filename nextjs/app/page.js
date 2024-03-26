// import HomeWrapper from "@/component/home/homeWrapper";
import dynamic from "next/dynamic";

const HomeWrapper = dynamic(()=>import('@/component/home/homeWrapper'),{ssr:false})

export default function Home() {
  return (
    <>
    <HomeWrapper/>
    </>
  );
}
