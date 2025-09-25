import { Header } from "@/components/ui/header";
import { CTAButton } from "@/components/ui/cta-button";
import { BeforeAfterSlider } from "@/components/ui/before-after-slider";
import { TestimonialCard } from "@/components/ui/testimonial-card";
import { ProjectCard } from "@/components/ui/project-card";
import { CheckCircle, Award, Shield, Zap, Star, Users, Trophy } from "lucide-react";

export const dynamic = 'force-dynamic'

export default function Index() {
  return (
    <div className="min-h-screen bg-gemstone-charcoal">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="font-playfair text-5xl lg:text-6xl font-bold text-gemstone-white leading-tight">
                  Experience
                  <span className="text-gemstone-gold block">
                    Architectural Illumination
                  </span>
                </h1>
                <p className="text-xl text-gemstone-white/80 font-source-sans leading-relaxed">
                  Transform your home into a stunning masterpiece with premium LED exterior lighting. Professional installation, lifetime warranty, and breathtaking results guaranteed.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <CTAButton size="xl" className="flex-1 sm:flex-none">
                  GET FREE QUOTE
                </CTAButton>
                <CTAButton variant="outline" size="xl" className="flex-1 sm:flex-none">
                  View Portfolio
                </CTAButton>
              </div>

              {/* Trust Indicators */}
              <div className="flex items-center gap-6 pt-4">
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 fill-gemstone-gold text-gemstone-gold" />
                  <span className="text-gemstone-white font-semibold">4.9/5 Rating</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-gemstone-gold" />
                  <span className="text-gemstone-white font-semibold">500+ Projects</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-gemstone-gold" />
                  <span className="text-gemstone-white font-semibold">Licensed & Insured</span>
                </div>
              </div>
            </div>

            {/* Hero Before/After Slider */}
            <div className="space-y-4">
              <BeforeAfterSlider
                beforeImage="/generated/hero-house-before.png"
                afterImage="/generated/hero-house-after.png"
                className="rounded-lg shadow-2xl"
              />
              <div className="text-center">
                <p className="text-gemstone-white/60 text-sm font-source-sans">
                  See the dramatic transformation with professional lighting design
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Propositions */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl font-bold text-gemstone-white mb-4">
              Why Choose Gemstone Lights?
            </h2>
            <p className="text-xl text-gemstone-white/80 max-w-2xl mx-auto">
              Premium quality, professional installation, and unmatched customer service make us the premier choice for luxury exterior lighting.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="premium-card rounded-lg bg-card p-8 text-center">
              <div className="w-16 h-16 bg-gemstone-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-gemstone-gold" />
              </div>
              <h3 className="font-playfair text-2xl font-semibold text-gemstone-white mb-4">
                Lifetime Warranty
              </h3>
              <p className="text-gemstone-white/80 leading-relaxed">
                Every installation comes with our comprehensive lifetime warranty on both products and workmanship. Your investment is protected for years to come.
              </p>
            </div>

            <div className="premium-card rounded-lg bg-card p-8 text-center">
              <div className="w-16 h-16 bg-gemstone-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="w-8 h-8 text-gemstone-gold" />
              </div>
              <h3 className="font-playfair text-2xl font-semibold text-gemstone-white mb-4">
                Energy Efficient LEDs
              </h3>
              <p className="text-gemstone-white/80 leading-relaxed">
                Our premium LED lighting systems use 80% less energy than traditional lighting while delivering superior brightness and color quality.
              </p>
            </div>

            <div className="premium-card rounded-lg bg-card p-8 text-center">
              <div className="w-16 h-16 bg-gemstone-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Trophy className="w-8 h-8 text-gemstone-gold" />
              </div>
              <h3 className="font-playfair text-2xl font-semibold text-gemstone-white mb-4">
                Award-Winning Design
              </h3>
              <p className="text-gemstone-white/80 leading-relaxed">
                Our certified lighting designers create custom illumination plans that enhance your home's architecture and increase property value.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Gallery Preview */}
      <section className="py-16 px-4 bg-gradient-to-b from-gemstone-charcoal to-gemstone-dark-gray">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl font-bold text-gemstone-white mb-4">
              Premium Gallery
            </h2>
            <p className="text-xl text-gemstone-white/80 max-w-2xl mx-auto">
              Discover stunning transformations from our recent projects. Each installation showcases our commitment to excellence and attention to detail.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <ProjectCard
              title="Modern Estate Transformation"
              description="Sophisticated architectural lighting highlighting contemporary design elements with warm LED uplighting."
              imageUrl="/generated/portfolio-1.png"
              price="$4,200"
              location="Beverly Hills, CA"
            />
            <ProjectCard
              title="Luxury Pathway Lighting"
              description="Elegant pathway and landscape lighting creating a welcoming entrance with energy-efficient LEDs."
              imageUrl="/generated/hero-house-after.png"
              price="$3,800"
              location="Malibu, CA"
            />
            <ProjectCard
              title="Contemporary Accent Design"
              description="Custom lighting design featuring architectural accents and premium landscape illumination."
              imageUrl="/generated/portfolio-1.png"
              price="$5,200"
              location="Newport Beach, CA"
            />
            <ProjectCard
              title="Premium Estate Lighting"
              description="Complete exterior lighting transformation with professional design and lifetime warranty coverage."
              imageUrl="/generated/hero-house-after.png"
              price="$6,800"
              location="La Jolla, CA"
            />
          </div>

          <div className="text-center">
            <CTAButton size="lg" variant="outline">
              View Complete Gallery
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl font-bold text-gemstone-white mb-4">
              Customer Testimonials
            </h2>
            <p className="text-xl text-gemstone-white/80 max-w-2xl mx-auto">
              Don't just take our word for it. Hear what our satisfied customers have to say about their Gemstone Lights experience.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <TestimonialCard
              name="Sarah Mitchell"
              title="Homeowner, Beverly Hills"
              content="The transformation of our home's exterior is absolutely stunning. The team was professional, punctual, and the quality exceeded our expectations. Worth every penny!"
              rating={5}
            />
            <TestimonialCard
              name="Michael Chen"
              title="Property Developer"
              content="We've worked with Gemstone Lights on multiple luxury properties. Their attention to detail and design expertise consistently delivers exceptional results that wow our clients."
              rating={5}
            />
            <TestimonialCard
              name="Jennifer Rodriguez"
              title="Homeowner, Malibu"
              content="From consultation to installation, everything was seamless. The lighting has completely changed how our home looks at night. Our neighbors are all asking for recommendations!"
              rating={5}
            />
          </div>
        </div>
      </section>

      {/* Pricing & Timeline */}
      <section className="py-16 px-4 bg-gradient-to-b from-gemstone-dark-gray to-gemstone-charcoal">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h2 className="font-playfair text-4xl font-bold text-gemstone-white">
                  Pricing & Timeline
                </h2>
                <p className="text-xl text-gemstone-white/80 leading-relaxed">
                  Transparent pricing with no hidden fees. Most projects completed within 2-3 days with minimal disruption to your daily routine.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-4 p-4 bg-gemstone-charcoal/50 rounded-lg">
                  <CheckCircle className="w-6 h-6 text-gemstone-gold flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gemstone-white">Average Project Range</h4>
                    <p className="text-gemstone-white/80">$2,500 - $5,000+ depending on scope and complexity</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-gemstone-charcoal/50 rounded-lg">
                  <CheckCircle className="w-6 h-6 text-gemstone-gold flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gemstone-white">Free Design Consultation</h4>
                    <p className="text-gemstone-white/80">Professional lighting design included with every project</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-gemstone-charcoal/50 rounded-lg">
                  <CheckCircle className="w-6 h-6 text-gemstone-gold flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gemstone-white">Quick Installation</h4>
                    <p className="text-gemstone-white/80">Most projects completed in 2-3 days with lifetime warranty</p>
                  </div>
                </div>
              </div>

              <CTAButton size="lg" className="w-full sm:w-auto">
                GET YOUR QUOTE TODAY
              </CTAButton>
            </div>

            <div className="space-y-6">
              <div className="premium-card rounded-lg bg-card p-8">
                <h3 className="font-playfair text-2xl font-semibold text-gemstone-white mb-6 text-center">
                  Professional Certifications
                </h3>
                <div className="grid grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gemstone-gold/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Award className="w-8 h-8 text-gemstone-gold" />
                    </div>
                    <p className="text-sm text-gemstone-white font-medium">Licensed</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gemstone-gold/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Shield className="w-8 h-8 text-gemstone-gold" />
                    </div>
                    <p className="text-sm text-gemstone-white font-medium">Insured</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gemstone-gold/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Trophy className="w-8 h-8 text-gemstone-gold" />
                    </div>
                    <p className="text-sm text-gemstone-white font-medium">Certified</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-4 bg-gradient-to-r from-gemstone-gold/10 to-gemstone-gold/5">
        <div className="container mx-auto text-center">
          <h2 className="font-playfair text-4xl font-bold text-gemstone-white mb-4">
            Ready to Transform Your Home?
          </h2>
          <p className="text-xl text-gemstone-white/80 max-w-2xl mx-auto mb-8">
            Join hundreds of satisfied customers who have elevated their home's beauty and value with Gemstone Lights premium exterior lighting.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
            <CTAButton size="xl" className="flex-1">
              GET FREE ESTIMATE
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