"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroOverlayBottomSplit from '@/components/sections/hero/HeroOverlayBottomSplit';
import TestimonialCardEight from '@/components/sections/testimonial/TestimonialCardEight';
import FeatureCardNineteen from '@/components/sections/feature/FeatureCardNineteen';
import TagAbout from '@/components/sections/about/TagAbout';
import TestimonialCardSix from '@/components/sections/testimonial/TestimonialCardSix';
import ContactInline from '@/components/sections/contact/ContactInline';
import FooterSocial from '@/components/sections/footer/FooterSocial';

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
      <div id="nav" data-section="nav">
        <NavbarStyleApple />
      </div>
      <div id="hero" data-section="hero">
        <HeroOverlayBottomSplit />
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
