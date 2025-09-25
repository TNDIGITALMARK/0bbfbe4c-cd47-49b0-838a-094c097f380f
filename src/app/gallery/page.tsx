import { Header } from "@/components/ui/header";
import { CTAButton } from "@/components/ui/cta-button";
import { BeforeAfterSlider } from "@/components/ui/before-after-slider";
import { ProjectCard } from "@/components/ui/project-card";
import { Award, CheckCircle, Users, Star } from "lucide-react";

export const dynamic = 'force-dynamic'

const portfolioProjects = [
  {
    title: "Modern Estate Transformation",
    description: "Sophisticated architectural lighting highlighting contemporary design elements with warm LED uplighting and premium landscape illumination.",
    imageUrl: "/generated/portfolio-1.png",
    price: "$4,200",
    location: "Beverly Hills, CA",
    category: "Modern"
  },
  {
    title: "Colonial Manor Elegance",
    description: "Traditional colonial home enhanced with classic pathway lighting, facade uplighting, and warm accent lighting throughout the landscape.",
    imageUrl: "/generated/portfolio-2.png",
    price: "$5,400",
    location: "Greenwich, CT",
    category: "Traditional"
  },
  {
    title: "Luxury Pathway Design",
    description: "Elegant pathway and landscape lighting creating a welcoming entrance with energy-efficient LEDs and premium fixtures.",
    imageUrl: "/generated/hero-house-after.png",
    price: "$3,800",
    location: "Malibu, CA",
    category: "Landscape"
  },
  {
    title: "Contemporary Accent Design",
    description: "Custom lighting design featuring architectural accents, tree uplighting, and integrated landscape illumination.",
    imageUrl: "/generated/portfolio-1.png",
    price: "$5,200",
    location: "Newport Beach, CA",
    category: "Contemporary"
  },
  {
    title: "Premium Estate Lighting",
    description: "Complete exterior lighting transformation with professional design, premium materials, and lifetime warranty coverage.",
    imageUrl: "/generated/hero-house-after.png",
    price: "$6,800",
    location: "La Jolla, CA",
    category: "Estate"
  },
  {
    title: "Architectural Showcase",
    description: "Stunning architectural features highlighted with precision LED lighting and sophisticated design elements.",
    imageUrl: "/generated/portfolio-2.png",
    price: "$4,900",
    location: "Palo Alto, CA",
    category: "Architectural"
  }
];

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-gemstone-charcoal">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 px-4">
        <div className="container mx-auto">
          <div className="text-center max-w-4xl mx-auto space-y-8">
            <div className="space-y-6">
              <h1 className="font-playfair text-5xl lg:text-6xl font-bold text-gemstone-white leading-tight">
                Portfolio &
                <span className="text-gemstone-gold block">
                  Transformation Gallery
                </span>
              </h1>
              <p className="text-xl text-gemstone-white/80 font-source-sans leading-relaxed max-w-3xl mx-auto">
                Discover stunning before and after transformations showcasing our commitment to excellence in premium exterior lighting design. Each project demonstrates our expertise in enhancing architectural beauty and property value.
              </p>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center items-center gap-8 pt-8">
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 fill-gemstone-gold text-gemstone-gold" />
                <span className="text-gemstone-white font-semibold">4.9/5 Rating</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-gemstone-gold" />
                <span className="text-gemstone-white font-semibold">500+ Completed Projects</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-gemstone-gold" />
                <span className="text-gemstone-white font-semibold">Award-Winning Design</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Before/After */}
      <section className="py-16 px-4 bg-gradient-to-b from-gemstone-charcoal to-gemstone-dark-gray">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl font-bold text-gemstone-white mb-4">
              Featured Transformation
            </h2>
            <p className="text-xl text-gemstone-white/80 max-w-2xl mx-auto">
              See the dramatic difference professional lighting makes. Use the slider to compare before and after results.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <BeforeAfterSlider
              beforeImage="/generated/hero-house-before.png"
              afterImage="/generated/hero-house-after.png"
              className="rounded-lg shadow-2xl"
            />
            <div className="text-center mt-8 space-y-4">
              <h3 className="font-playfair text-2xl font-semibold text-gemstone-white">
                Modern Luxury Estate - Malibu, CA
              </h3>
              <p className="text-gemstone-white/80 max-w-2xl mx-auto">
                Complete exterior lighting transformation featuring architectural uplighting,
                pathway illumination, and landscape accent lighting. Project completed in 3 days
                with premium LED fixtures and lifetime warranty.
              </p>
              <div className="flex justify-center items-center gap-8">
                <span className="text-gemstone-gold font-semibold">Investment: $5,200</span>
                <span className="text-gemstone-white/60">•</span>
                <span className="text-gemstone-white">3-Day Installation</span>
                <span className="text-gemstone-white/60">•</span>
                <span className="text-gemstone-white">Lifetime Warranty</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl font-bold text-gemstone-white mb-4">
              Recent Projects
            </h2>
            <p className="text-xl text-gemstone-white/80 max-w-2xl mx-auto">
              Explore our collection of premium exterior lighting installations. Each project showcases our attention to detail and commitment to excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioProjects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                imageUrl={project.imageUrl}
                price={project.price}
                location={project.location}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Credibility Indicators */}
      <section className="py-16 px-4 bg-gradient-to-b from-gemstone-dark-gray to-gemstone-charcoal">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl font-bold text-gemstone-white mb-4">
              Why Clients Choose Gemstone Lights
            </h2>
            <p className="text-xl text-gemstone-white/80 max-w-2xl mx-auto">
              Our track record speaks for itself. Premium quality, professional service, and exceptional results every time.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gemstone-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-10 h-10 text-gemstone-gold" />
              </div>
              <div className="font-playfair text-3xl font-bold text-gemstone-white mb-2">500+</div>
              <p className="text-gemstone-white/80">Projects Completed</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gemstone-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-10 h-10 text-gemstone-gold" />
              </div>
              <div className="font-playfair text-3xl font-bold text-gemstone-white mb-2">4.9</div>
              <p className="text-gemstone-white/80">Average Rating</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gemstone-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-10 h-10 text-gemstone-gold" />
              </div>
              <div className="font-playfair text-3xl font-bold text-gemstone-white mb-2">25+</div>
              <p className="text-gemstone-white/80">Industry Awards</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gemstone-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-10 h-10 text-gemstone-gold" />
              </div>
              <div className="font-playfair text-3xl font-bold text-gemstone-white mb-2">100%</div>
              <p className="text-gemstone-white/80">Satisfaction Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl font-bold text-gemstone-white mb-4">
              Our Design Process
            </h2>
            <p className="text-xl text-gemstone-white/80 max-w-2xl mx-auto">
              From initial consultation to final installation, we ensure every step exceeds your expectations.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gemstone-gold rounded-full flex items-center justify-center mx-auto text-gemstone-charcoal font-bold text-xl">
                1
              </div>
              <h3 className="font-playfair text-xl font-semibold text-gemstone-white">
                Consultation
              </h3>
              <p className="text-gemstone-white/80 text-sm">
                Free on-site consultation to assess your property and discuss your vision.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gemstone-gold rounded-full flex items-center justify-center mx-auto text-gemstone-charcoal font-bold text-xl">
                2
              </div>
              <h3 className="font-playfair text-xl font-semibold text-gemstone-white">
                Design
              </h3>
              <p className="text-gemstone-white/80 text-sm">
                Custom lighting plan created by our certified designers with 3D visualization.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gemstone-gold rounded-full flex items-center justify-center mx-auto text-gemstone-charcoal font-bold text-xl">
                3
              </div>
              <h3 className="font-playfair text-xl font-semibold text-gemstone-white">
                Installation
              </h3>
              <p className="text-gemstone-white/80 text-sm">
                Professional installation by licensed electricians with minimal disruption.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gemstone-gold rounded-full flex items-center justify-center mx-auto text-gemstone-charcoal font-bold text-xl">
                4
              </div>
              <h3 className="font-playfair text-xl font-semibold text-gemstone-white">
                Enjoy
              </h3>
              <p className="text-gemstone-white/80 text-sm">
                Enjoy your transformed home with lifetime warranty and ongoing support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-gemstone-gold/10 to-gemstone-gold/5">
        <div className="container mx-auto text-center">
          <h2 className="font-playfair text-4xl font-bold text-gemstone-white mb-4">
            Ready to Transform Your Home?
          </h2>
          <p className="text-xl text-gemstone-white/80 max-w-2xl mx-auto mb-8">
            Join our gallery of satisfied customers. Get your free consultation and custom lighting design today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
            <CTAButton size="xl" className="flex-1">
              GET FREE CONSULTATION
            </CTAButton>
            <CTAButton variant="outline" size="xl" className="flex-1">
              (555) GEMSTONE
            </CTAButton>
          </div>
        </div>
      </section>
    </div>
  );
}