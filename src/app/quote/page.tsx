"use client";

import { Header } from "@/components/ui/header";
import { CTAButton } from "@/components/ui/cta-button";
import { CheckCircle, Clock, Shield, Award, Phone, Mail, MapPin, Calendar } from "lucide-react";
import * as React from "react";

export const dynamic = 'force-dynamic'

const serviceOptions = [
  { id: 'landscape', name: 'Landscape Lighting', price: '$2,500 - $4,000' },
  { id: 'architectural', name: 'Architectural Lighting', price: '$3,500 - $5,500' },
  { id: 'pathway', name: 'Pathway & Driveway Lighting', price: '$1,500 - $2,500' },
  { id: 'security', name: 'Security & Safety Lighting', price: '$2,000 - $3,500' },
  { id: 'complete', name: 'Complete Estate Package', price: '$5,000 - $10,000+' },
  { id: 'custom', name: 'Custom Design Consultation', price: 'Quote Required' }
];

const timelineSteps = [
  { step: 1, title: 'Free Consultation', duration: 'Day 1', description: 'On-site assessment and design consultation' },
  { step: 2, title: 'Custom Design', duration: 'Days 2-3', description: 'Professional lighting plan with 3D visualization' },
  { step: 3, title: 'Project Approval', duration: 'Day 4', description: 'Review and approve final design and pricing' },
  { step: 4, title: 'Installation', duration: 'Days 5-7', description: 'Professional installation by licensed electricians' },
  { step: 5, title: 'Final Walkthrough', duration: 'Day 7', description: 'Quality inspection and system demonstration' }
];

export default function QuotePage() {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    propertyType: '',
    services: [] as string[],
    budget: '',
    timeframe: '',
    description: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleServiceChange = (serviceId: string) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(serviceId)
        ? prev.services.filter(s => s !== serviceId)
        : [...prev.services, serviceId]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    // In a real app, you would send this to your backend
  };

  return (
    <div className="min-h-screen bg-gemstone-charcoal">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 px-4">
        <div className="container mx-auto">
          <div className="text-center max-w-4xl mx-auto space-y-8">
            <div className="space-y-6">
              <h1 className="font-playfair text-5xl lg:text-6xl font-bold text-gemstone-white leading-tight">
                Get Your Free
                <span className="text-gemstone-gold block">
                  Lighting Quote
                </span>
              </h1>
              <p className="text-xl text-gemstone-white/80 font-source-sans leading-relaxed max-w-3xl mx-auto">
                Transform your property with premium exterior lighting. Our expert team provides transparent pricing, professional installation, and lifetime warranty on every project.
              </p>
            </div>

            {/* Quick Contact Options */}
            <div className="flex flex-wrap justify-center items-center gap-6 pt-8">
              <a
                href="tel:+1-555-GEMSTONE"
                className="flex items-center gap-2 text-gemstone-gold hover:text-gemstone-gold/80 transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span className="font-semibold">(555) GEMSTONE</span>
              </a>
              <a
                href="mailto:info@gemstonelights.com"
                className="flex items-center gap-2 text-gemstone-gold hover:text-gemstone-gold/80 transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span className="font-semibold">info@gemstonelights.com</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Form and Service Details */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Quote Form */}
            <div className="space-y-8">
              <div className="text-center lg:text-left">
                <h2 className="font-playfair text-3xl font-bold text-gemstone-white mb-4">
                  Request Your Free Quote
                </h2>
                <p className="text-gemstone-white/80">
                  Get a detailed estimate for your project. Our team will contact you within 24 hours.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-gemstone-white font-medium mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gemstone-dark-gray border border-gemstone-medium-gray/30 rounded-md text-gemstone-white placeholder-gemstone-medium-gray focus:outline-none focus:ring-2 focus:ring-gemstone-gold"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-gemstone-white font-medium mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gemstone-dark-gray border border-gemstone-medium-gray/30 rounded-md text-gemstone-white placeholder-gemstone-medium-gray focus:outline-none focus:ring-2 focus:ring-gemstone-gold"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-gemstone-white font-medium mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gemstone-dark-gray border border-gemstone-medium-gray/30 rounded-md text-gemstone-white placeholder-gemstone-medium-gray focus:outline-none focus:ring-2 focus:ring-gemstone-gold"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="address" className="block text-gemstone-white font-medium mb-2">
                    Property Address *
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gemstone-dark-gray border border-gemstone-medium-gray/30 rounded-md text-gemstone-white placeholder-gemstone-medium-gray focus:outline-none focus:ring-2 focus:ring-gemstone-gold"
                    placeholder="123 Main St, City, State 12345"
                  />
                </div>

                {/* Property Details */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="propertyType" className="block text-gemstone-white font-medium mb-2">
                      Property Type
                    </label>
                    <select
                      id="propertyType"
                      name="propertyType"
                      value={formData.propertyType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gemstone-dark-gray border border-gemstone-medium-gray/30 rounded-md text-gemstone-white focus:outline-none focus:ring-2 focus:ring-gemstone-gold"
                    >
                      <option value="">Select property type</option>
                      <option value="single-family">Single Family Home</option>
                      <option value="estate">Luxury Estate</option>
                      <option value="commercial">Commercial Property</option>
                      <option value="condo">Condominium</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="budget" className="block text-gemstone-white font-medium mb-2">
                      Budget Range
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gemstone-dark-gray border border-gemstone-medium-gray/30 rounded-md text-gemstone-white focus:outline-none focus:ring-2 focus:ring-gemstone-gold"
                    >
                      <option value="">Select budget range</option>
                      <option value="under-2500">Under $2,500</option>
                      <option value="2500-5000">$2,500 - $5,000</option>
                      <option value="5000-10000">$5,000 - $10,000</option>
                      <option value="10000-plus">$10,000+</option>
                      <option value="flexible">Flexible</option>
                    </select>
                  </div>
                </div>

                {/* Services */}
                <div>
                  <label className="block text-gemstone-white font-medium mb-4">
                    Services Needed (Select all that apply)
                  </label>
                  <div className="grid md:grid-cols-2 gap-3">
                    {serviceOptions.map((service) => (
                      <label key={service.id} className="flex items-center space-x-3 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={formData.services.includes(service.id)}
                          onChange={() => handleServiceChange(service.id)}
                          className="w-4 h-4 text-gemstone-gold bg-gemstone-dark-gray border-gemstone-medium-gray/30 rounded focus:ring-gemstone-gold focus:ring-2"
                        />
                        <div>
                          <div className="text-gemstone-white text-sm">{service.name}</div>
                          <div className="text-gemstone-gold text-xs">{service.price}</div>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label htmlFor="timeframe" className="block text-gemstone-white font-medium mb-2">
                    Preferred Timeline
                  </label>
                  <select
                    id="timeframe"
                    name="timeframe"
                    value={formData.timeframe}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gemstone-dark-gray border border-gemstone-medium-gray/30 rounded-md text-gemstone-white focus:outline-none focus:ring-2 focus:ring-gemstone-gold"
                  >
                    <option value="">Select timeline</option>
                    <option value="asap">As soon as possible</option>
                    <option value="1-month">Within 1 month</option>
                    <option value="2-3-months">2-3 months</option>
                    <option value="planning">Just planning ahead</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="description" className="block text-gemstone-white font-medium mb-2">
                    Project Description
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 bg-gemstone-dark-gray border border-gemstone-medium-gray/30 rounded-md text-gemstone-white placeholder-gemstone-medium-gray focus:outline-none focus:ring-2 focus:ring-gemstone-gold resize-none"
                    placeholder="Tell us about your vision, specific areas you want lit, or any special requirements..."
                  ></textarea>
                </div>

                <CTAButton type="submit" size="lg" className="w-full">
                  GET MY FREE QUOTE
                </CTAButton>

                <p className="text-gemstone-white/60 text-sm text-center">
                  By submitting this form, you agree to our privacy policy. We'll never share your information.
                </p>
              </form>
            </div>

            {/* Service Details */}
            <div className="space-y-8">
              {/* Pricing Overview */}
              <div className="premium-card rounded-lg bg-card p-8">
                <h3 className="font-playfair text-2xl font-semibold text-gemstone-white mb-6">
                  Service Pricing
                </h3>
                <div className="space-y-4">
                  {serviceOptions.map((service, index) => (
                    <div key={index} className="flex justify-between items-center py-3 border-b border-gemstone-dark-gray last:border-0">
                      <span className="text-gemstone-white">{service.name}</span>
                      <span className="text-gemstone-gold font-semibold">{service.price}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-gemstone-gold/10 rounded-lg">
                  <p className="text-gemstone-white text-sm">
                    <strong>All prices include:</strong> Free consultation, custom design, premium LED fixtures, professional installation, and lifetime warranty.
                  </p>
                </div>
              </div>

              {/* Service Timeline */}
              <div className="premium-card rounded-lg bg-card p-8">
                <h3 className="font-playfair text-2xl font-semibold text-gemstone-white mb-6">
                  Project Timeline
                </h3>
                <div className="space-y-6">
                  {timelineSteps.map((step, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 bg-gemstone-gold rounded-full flex items-center justify-center text-gemstone-charcoal font-bold text-sm">
                          {step.step}
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <h4 className="font-semibold text-gemstone-white">{step.title}</h4>
                          <span className="text-gemstone-gold text-sm">{step.duration}</span>
                        </div>
                        <p className="text-gemstone-white/80 text-sm">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Guarantees */}
              <div className="premium-card rounded-lg bg-card p-8">
                <h3 className="font-playfair text-2xl font-semibold text-gemstone-white mb-6">
                  Our Guarantees
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-gemstone-gold flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gemstone-white">Lifetime Warranty</h4>
                      <p className="text-gemstone-white/80 text-sm">Full coverage on products and workmanship</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Award className="w-5 h-5 text-gemstone-gold flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gemstone-white">Licensed & Insured</h4>
                      <p className="text-gemstone-white/80 text-sm">Fully certified and bonded professionals</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-gemstone-gold flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gemstone-white">100% Satisfaction</h4>
                      <p className="text-gemstone-white/80 text-sm">We guarantee your complete satisfaction</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-gemstone-gold flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gemstone-white">24-Hour Response</h4>
                      <p className="text-gemstone-white/80 text-sm">Quick response to all inquiries</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-4 bg-gradient-to-b from-gemstone-dark-gray to-gemstone-charcoal">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-3xl font-bold text-gemstone-white mb-4">
              Prefer to Talk Directly?
            </h2>
            <p className="text-gemstone-white/80 max-w-2xl mx-auto">
              Our lighting experts are standing by to answer your questions and help you design the perfect lighting solution.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gemstone-gold/10 rounded-full flex items-center justify-center mx-auto">
                <Phone className="w-8 h-8 text-gemstone-gold" />
              </div>
              <h3 className="font-semibold text-gemstone-white">Call Us</h3>
              <a
                href="tel:+1-555-GEMSTONE"
                className="text-gemstone-gold hover:text-gemstone-gold/80 transition-colors font-semibold block"
              >
                (555) GEMSTONE
              </a>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gemstone-gold/10 rounded-full flex items-center justify-center mx-auto">
                <Mail className="w-8 h-8 text-gemstone-gold" />
              </div>
              <h3 className="font-semibold text-gemstone-white">Email Us</h3>
              <a
                href="mailto:info@gemstonelights.com"
                className="text-gemstone-gold hover:text-gemstone-gold/80 transition-colors font-semibold block"
              >
                info@gemstonelights.com
              </a>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gemstone-gold/10 rounded-full flex items-center justify-center mx-auto">
                <Calendar className="w-8 h-8 text-gemstone-gold" />
              </div>
              <h3 className="font-semibold text-gemstone-white">Schedule</h3>
              <span className="text-gemstone-white/80 block">
                Mon-Sat: 8AM-6PM<br />Sun: By Appointment
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}