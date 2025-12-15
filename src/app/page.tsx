"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroOverlayBottomSplit from '@/components/sections/hero/HeroOverlayBottomSplit';
import FeatureCardNineteen from '@/components/sections/feature/FeatureCardNineteen';
import TagAbout from '@/components/sections/about/TagAbout';
import TestimonialCardSix from '@/components/sections/testimonial/TestimonialCardSix';
import ContactInline from '@/components/sections/contact/ContactInline';
import FooterSocial from '@/components/sections/footer/FooterSocial';

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="expand-hover"
      defaultTextAnimation="reveal-blur"
      borderRadius="soft"
      contentWidth="medium"
      sizing="mediumSizeExtraSmallSpacing"
      background="grid"
      cardStyle="gradient-radial"
      primaryButtonStyle="layered-depth"
      secondaryButtonStyle="outline"
      headingFontWeight="normal"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          navItems={[
            { name: "Menu", id: "menu" },
            { name: "About", id: "about" },
            { name: "Locations", id: "locations" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="BrewLoft"
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroOverlayBottomSplit
          title="Artisan Coffee Crafted Daily"
          description="Experience exceptional specialty coffee and pastries in our welcoming space. From single-origin espresso to perfectly steamed milk drinks."
          buttons={[
            { text: "View Menu", href: "menu" },
            { text: "Find Us", href: "locations" }
          ]}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1765798893651-bktzx2js.jpg"
          imageAlt="Premium espresso with latte art"
          showDimOverlay={false}
        />
      </div>

      <div id="menu" data-section="menu">
        <FeatureCardNineteen
          tag="Our Selection"
          title="Signature Menu"
          description="Discover our carefully curated selection of specialty coffees and artisanal pastries"
          features={[
            {
              id: 1,
              tag: "Signature",
              title: "Cappuccino",
              subtitle: "Perfectly balanced espresso and steamed milk",
              description: "Our signature cappuccino features premium Italian espresso with velvety microfoam and a touch of natural sweetness. Made with precision and care.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1765798894976-nxawolkj.jpg",
              imageAlt: "Cappuccino with latte art"
            },
            {
              id: 2,
              tag: "Classic",
              title: "Americano",
              subtitle: "Rich and full-bodied espresso",
              description: "Double shot espresso diluted with hot water for a smooth, powerful coffee experience. Perfect for those who love authentic coffee flavor.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1765798896089-u3yui3xo.jpg",
              imageAlt: "Black americano coffee"
            },
            {
              id: 3,
              tag: "Complement",
              title: "Fresh Pastries",
              subtitle: "Baked daily from premium ingredients",
              description: "Our pastries are baked fresh every morning using organic flour and butter. Pair them with your favorite coffee for the perfect breakfast.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1765798897215-vntlmsqb.jpg",
              imageAlt: "Fresh croissant pastry"
            }
          ]}
          textboxLayout="default"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="about" data-section="about">
        <TagAbout
          tag="Our Story"
          description="BrewLoft was founded on a simple belief: exceptional coffee creates exceptional moments. We source premium beans directly from sustainable farms and roast them in small batches to preserve their unique character. Every cup tells a story of craftsmanship, passion, and respect for the coffee traditions."
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardSix
          tag="Customer Love"
          title="What Our Guests Say"
          description="Hear from coffee enthusiasts who make BrewLoft part of their daily routine"
          testimonials={[
            {
              id: "1",
              name: "Sarah Martinez",
              handle: "@sarahmartinez",
              testimonial: "Best cappuccino in the city. The baristas really know their craft and the atmosphere is perfect for working or catching up with friends.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1765798899571-hdv25cva.jpg",
              imageAlt: "Sarah Martinez"
            },
            {
              id: "2",
              name: "James Chen",
              handle: "@jchen_coffee",
              testimonial: "I've tried many specialty coffee shops, but BrewLoft stands out. The quality is consistent and the team genuinely cares about every cup.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1765798900802-jz2th6od.jpg",
              imageAlt: "James Chen"
            },
            {
              id: "3",
              name: "Emma Thompson",
              handle: "@emmathompson_",
              testimonial: "The pastries here are incredible. Fresh, delicious, and the perfect complement to their coffee. This is my happy place.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1765798902211-cwbynw5v.jpg",
              imageAlt: "Emma Thompson"
            },
            {
              id: "4",
              name: "Michael Rodriguez",
              handle: "@mrodriguez92",
              testimonial: "BrewLoft has become my second office. Great wifi, excellent coffee, and a welcoming community. Highly recommend.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1765798903262-1t52dyqq.jpg",
              imageAlt: "Michael Rodriguez"
            }
          ]}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground="noInvert"
          speed={40}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactInline
          text="Join Our Community"
          animationType="reveal-blur"
          inputPlaceholder="Enter your email for updates"
          buttonText="Subscribe"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterSocial
          logoText="BrewLoft"
          columns={[
            {
              title: "Hours",
              items: [
                { label: "Mon-Fri: 6am - 8pm", href: "#" },
                { label: "Sat-Sun: 7am - 9pm", href: "#" }
              ]
            },
            {
              title: "Location",
              items: [
                { label: "Downtown District", href: "#" },
                { label: "Visit Us", href: "locations" }
              ]
            },
            {
              title: "Connect",
              items: [
                { label: "Contact", href: "contact" },
                { label: "Menu", href: "menu" }
              ]
            }
          ]}
          copyrightText="© BrewLoft Coffee, 2025. All rights reserved."
        />
      </div>
    </ThemeProvider>
  );
}