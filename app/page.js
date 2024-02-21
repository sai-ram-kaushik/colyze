import AboutUs from "@/components/AboutUs";
import HomePage from "@/components/HomePage";
import WhyUs from "@/components/WhyUs";
import Faq from "@/components/Faq";
import landingPage from "@/data/landing-page-data.json";
export default function Home() {
  return (
    <main>
      <HomePage homePage={landingPage.homePage} />
      <WhyUs whyUs={landingPage.whyus} />
      <AboutUs aboutUs={landingPage.aboutUs} />
      <Faq faq={landingPage.faq} />
    </main>
  );
}
