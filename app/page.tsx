import Hero from "./component/hero";
import Camp from "./component/camp";
import Guide from "./component/guide";
import Features from "./component/features";
import GetApp from "./component/get-app";

export default function Home() {
  return (
    <>
      <Hero />
      <Camp/>
      <Guide/>
      <Features/>
      <GetApp/>
    </>
  );
}
