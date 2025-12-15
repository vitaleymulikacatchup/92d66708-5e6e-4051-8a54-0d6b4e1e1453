"use client";

import { ThemeProvider } from "@/components/theme/ThemeProvider";
import NavbarStyleApple from "@/components/navbar/NavbarStyleApple/NavbarStyleApple";
import HeroBillboardCarousel from "@/components/sections/hero/HeroBillboardCarousel";
import TestimonialCardEight from "@/components/sections/testimonial/TestimonialCardEight";
import FeatureCardNineteen from "@/components/sections/feature/FeatureCardNineteen";
import TagAbout from "@/components/sections/about/TagAbout";
import TestimonialCardSix from "@/components/sections/testimonial/TestimonialCardSix";
import ContactInline from "@/components/sections/contact/ContactInline";
import FooterSocial from "@/components/sections/footer/FooterSocial";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-magnetic"
      defaultTextAnimation="entrance-slide"
      borderRadius="rounded"
      contentWidth="large"
      sizing="medium"
      background="none"
      cardStyle="solid"
      primaryButtonStyle="gradient"
      secondaryButtonStyle="glass"
      headingFontWeight="bold"
    >
      <NavbarStyleApple />
      <div id="hero" data-section="hero">
        <HeroBillboardCarousel
          title="Welcome to Our Platform"
          description="Create beautiful, responsive web experiences"
          tag="New Release"
          mediaItems={[
            { imageSrc: "/images/noise.webp", imageAlt: "Portfolio 1" },
            { imageSrc: "/images/noise.webp", imageAlt: "Portfolio 2" },
            { imageSrc: "/images/noise.webp", imageAlt: "Portfolio 3" },
            { imageSrc: "/images/noise.webp", imageAlt: "Portfolio 4" },
            { imageSrc: "/images/noise.webp", imageAlt: "Portfolio 5" },
            { imageSrc: "/images/noise.webp", imageAlt: "Portfolio 6" },
          ]}
          buttons={[
            { text: "Get Started", href: "https://example.com" },
            { text: "Learn More", href: "about" },
          ]}
        />
      </div>
      <div id="testimonial-carousel" data-section="testimonial-carousel">
        <TestimonialCardEight />
      </div>
      <div id="menu" data-section="menu">
        <FeatureCardNineteen />
      </div>
      <div id="about" data-section="about">
        <TagAbout />
      </div>
      <div id="testimonials" data-section="testimonials">
        <TestimonialCardSix />
      </div>
      <div id="contact" data-section="contact">
        <ContactInline />
      </div>
      <div id="footer" data-section="footer">
        <FooterSocial />
      </div>
    </ThemeProvider>
  );
}
