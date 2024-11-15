import { lazy } from "react";

const SecondBanner = lazy(
  async () => await import("../../components/secondBaner/SecondBaner")
);
const ImageSlider = lazy(
  async () => await import("../../components/slider/ImageSlider")
);
const Stories = lazy(
  async () => await import("../../components/stories/Stories")
);

export default function Home() {
  return (
    <div>
      <ImageSlider />
      <SecondBanner />
      <Stories />
    </div>
  );
}
