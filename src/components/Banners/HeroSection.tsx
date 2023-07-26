import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

export default function HeroSection({}: Props) {
  return (
    <section className="w-full  pt-[30px] pb-[60px]">
      <h2 className="sr-only">Hero section </h2>
      <div className="w-full banner-wrapper mb-[60px]">
        <div className="container-x mx-auto">
          <div className="main-wrapper w-full">
            <div className="banner-card xl:flex xl:space-x-[30px] xl:h-[600px]  mb-[30px]">
              <div data-aos="fade-right" className="xl:w-[740px] w-full h-full">
                <Link href="/">
                  <Image
                    src="/banners/banner-1.png"
                    alt="banner"
                    width="740"
                    height="600"
                    className="w-full max-w-full h-auto object-cover"
                  />
                </Link>
              </div>
              <div className="flex-1 flex xl:flex-col flex-row xl:space-y-[30px] h-full ">
                <div data-aos="fade-left" className="w-full xl:h-1/2">
                  <Link href="/">
                    <Image
                      src="/banners/banner-2.png"
                      alt="banner"
                      width="398"
                      height="285"
                      className="w-full h-full"
                    />
                  </Link>
                </div>
                <div data-aos="fade-left" className="w-full xl:h-1/2">
                  <Link href="/">
                    <Image
                      src="/banners/banner-3.png"
                      alt="banner"
                      width="398"
                      height="285"
                      className="w-full h-full"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
