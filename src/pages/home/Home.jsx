import SecondBanner from "../../components/secondBaner/SecondBaner"
;
import ImageSlider from "../../components/slider/ImageSlider";
import Stories from "../../components/stories/Stories";

export default function Home() {
  return (
    <div>
      <ImageSlider />
      <SecondBanner />
      <Stories />
    </div>
  );
}
