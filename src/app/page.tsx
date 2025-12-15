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
        <NavbarStyleApple 
          navItems={[
            { name: "Hero", id: "hero" },
            { name: "Testimonials", id: "testimonial-carousel" },
            { name: "Menu", id: "menu" },
            { name: "About", id: "about" },
            { name: "Reviews", id: "testimonials" },
            { name: "Contact", id: "contact" }
          ]}
        />
      </div>
      <div id="hero" data-section="hero">
        <HeroOverlayBottomSplit 
          title="Welcome to Our Restaurant"
          description="Experience exceptional dining with fresh ingredients and creative dishes"
          buttons={[
            { text: "View Menu", href: "menu" },
            { text: "Make Reservation", href: "contact" }
          ]}
        />
      </div>
      <div id="testimonial-carousel" data-section="testimonial-carousel">
        <TestimonialCardEight 
          title="What Our Customers Say"
          testimonials={[
            {
              text: "Amazing food and incredible service. The atmosphere is perfect for any occasion.",
              author: "Sarah Johnson",
              role: "Food Enthusiast",
              avatar: "/placeholders/placeholder1.webp"
            },
            {
              text: "Best dining experience in the city. Every dish is crafted to perfection.",
              author: "Mike Chen",
              role: "Local Reviewer",
              avatar: "/placeholders/placeholder1.webp"
            }
          ]}
        />
      </div>
      <div id="menu" data-section="menu">
        <FeatureCardNineteen 
          title="Our Menu"
          description="Discover our carefully curated selection of dishes"
          features={[
            {
              title: "Appetizers",
              description: "Fresh starts to your meal",
              imageSrc: "/placeholders/placeholder1.webp",
              imageAlt: "Appetizers"
            },
            {
              title: "Main Courses",
              description: "Hearty and satisfying entrees",
              imageSrc: "/placeholders/placeholder1.webp",
              imageAlt: "Main Courses"
            }
          ]}
        />
      </div>
      <div id="about" data-section="about">
        <TagAbout 
          description="We are passionate about creating exceptional dining experiences with locally sourced ingredients and innovative culinary techniques."
        />
      </div>
      <div id="testimonials" data-section="testimonials">
        <TestimonialCardSix 
          title="Customer Reviews"
          testimonials={[
            {
              text: "Exceptional quality and service every time we visit.",
              author: "Emma Wilson",
              role: "Regular Customer",
              avatar: "/placeholders/placeholder1.webp"
            },
            {
              text: "The chef's creativity shines through in every dish.",
              author: "David Brown",
              role: "Food Critic",
              avatar: "/placeholders/placeholder1.webp"
            }
          ]}
        />
      </div>
      <div id="contact" data-section="contact">
        <ContactInline 
          title="Contact Us"
          description="Get in touch to make a reservation or ask any questions"
          email="info@restaurant.com"
          phone="(555) 123-4567"
          address="123 Culinary Street, Food City, FC 12345"
        />
      </div>
      <div id="footer" data-section="footer">
        <FooterSocial 
          companyName="Our Restaurant"
          description="Creating memorable dining experiences since 2020"
          socialLinks={[
            { platform: "facebook", url: "https://facebook.com/ourrestaurant" },
            { platform: "instagram", url: "https://instagram.com/ourrestaurant" }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}