import AvailableCars from "@/components/shared/AvailableCars";
import Banner from "../components/shared/Banner";
import WhyChooseUs from "@/components/shared/Choses-us";
import PricingSection from "@/components/shared/PricingSection";

export default function Home() {
  return (
    <div className="">
      <Banner />
      <AvailableCars />
      <WhyChooseUs />
      <PricingSection/>
    </div>
  );
}
