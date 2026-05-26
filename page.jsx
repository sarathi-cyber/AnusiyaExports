'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Globe, Trophy, Truck, Leaf, ShieldCheck, Heart, Phone, Mail, MapPinIcon, Send } from 'lucide-react';

// Navbar / Top Header
const Navbar = () => {
  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-4 flex flex-col items-center">

        {/* Founder image + Company name row */}
        <div className="flex items-center gap-4">
          {/* Founder Image */}
          <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-emerald-500 shadow-md flex-shrink-0">
            <img
              src="/founder.jpg"
              alt="Founder"
              className="w-full h-full object-cover"
              onError={(e) => {
                // Fallback avatar if image not found
                e.target.style.display = 'none';
                e.target.parentElement.classList.add('bg-emerald-100', 'flex', 'items-center', 'justify-center');
                e.target.parentElement.innerHTML = '<span class="text-emerald-700 font-bold text-lg">A</span>';
              }}
            />
          </div>

          {/* Company Name */}
          <h1 className="text-2xl md:text-3xl font-bold text-slate-900 font-serif tracking-wide">
            Anusiya Exports
          </h1>
        </div>

        {/* Decorative divider line */}
        <div className="flex items-center gap-3 mt-3 w-full max-w-xs">
          <div className="flex-1 h-px bg-emerald-200" />
          <span className="w-2 h-2 rounded-full bg-emerald-500" />
          <div className="flex-1 h-px bg-emerald-200" />
        </div>

        {/* Tagline */}
        <p className="text-xs text-emerald-600 font-semibold tracking-widest mt-1 uppercase">
          Premium Agricultural Exports · Namakkal, Tamil Nadu
        </p>
      </div>
    </header>
  );
};

// Hero Section
const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-slate-950">
      {/* Animated background gradient */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ duration: 2 }}
          className="absolute top-0 -left-1/2 w-full h-full bg-gradient-to-r from-emerald-900/30 via-transparent to-transparent"
        />
        <motion.div
          animate={{ y: [0, 30, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjYwIiBoZWlnaHQ9IjYwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDYwIDAgTCAwIDAgMCA2MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI0LCA2MzUsIDczLCAwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 px-4 md:px-8 max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block mb-6 px-4 py-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full">
            <span className="text-emerald-400 text-sm font-semibold tracking-widest">PREMIUM AGRICULTURAL EXPORTS</span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight font-serif"
        >
          Exporting Freshness from India to the World
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          Premium quality eggs, bananas, tender coconuts, and fresh coconuts exported globally with international standards and uncompromising quality.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button className="px-8 py-4 bg-emerald-500 text-white font-semibold rounded-lg hover:bg-emerald-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-emerald-500/50">
            Request Quote
          </button>
          <button className="px-8 py-4 border-2 border-emerald-400 text-emerald-400 font-semibold rounded-lg hover:bg-emerald-400/10 transition-all duration-300">
            Contact Us
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-emerald-400 rounded-full flex items-center justify-center">
          <motion.div
            animate={{ y: [0, 4, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-2 bg-emerald-400 rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
};

// About Section
const About = () => {
  const features = [
    { icon: Trophy, title: 'Genuine Exporter', desc: 'Direct source from certified Indian farms and producers' },
    { icon: ShieldCheck, title: 'Quality Commitment', desc: 'Stringent quality checks and international compliance' },
    { icon: Globe, title: 'Global Standards', desc: 'Meet and exceed international export requirements' },
    { icon: Leaf, title: 'Ethical Sourcing', desc: 'Sustainable practices and fair trade principles' },
    { icon: Truck, title: 'Reliable Logistics', desc: 'Professional supply chain with temperature control' },
    { icon: Heart, title: 'Customer First', desc: 'Dedicated support for all your sourcing needs' },
  ];

  return (
    <section className="py-20 px-4 md:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 font-serif mb-4">
            About Our Company
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            A genuine agricultural exporter committed to delivering premium produce with international quality standards and unwavering reliability.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-8 bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl hover:shadow-lg transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-emerald-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Products Section
const Products = () => {
  const products = [
    {
      name: 'Fresh Export Eggs',
      image: '🥚',
      specs: ['Grade A Quality', 'Hygienic Packaging', '24-28 Days Freshness', 'International Shipping'],
      description: 'Premium quality eggs from certified farms, processed with international food safety standards.'
    },
    {
      name: 'Premium Bananas',
      image: '🍌',
      specs: ['Ripeness Assurance', 'Custom Packaging', '14 Days Shelf Life', 'Bulk Orders Available'],
      description: 'Handpicked bananas at perfect maturity, carefully packed for international distribution.'
    },
    {
      name: 'Tender Coconut',
      image: '🥥',
      specs: ['Fresh Tender Nuts', 'Eco-Packaging', 'Freshness Guaranteed', 'Temperature Controlled'],
      description: 'Young tender coconuts packed fresh, ideal for export markets demanding premium quality.'
    },
    {
      name: 'Fresh Coconut',
      image: '🥥',
      specs: ['Mature Quality', 'Multi-Layer Packaging', 'Moisture Retention', 'Global Supply'],
      description: 'Premium matured coconuts graded for export, meeting international quality benchmarks.'
    },
  ];

  return (
    <section className="py-20 px-4 md:px-8 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 font-serif mb-4">
            Our Premium Products
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Export-grade quality across all product categories with international shipping capabilities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="h-32 bg-gradient-to-br from-emerald-100 to-emerald-50 flex items-center justify-center text-6xl group-hover:scale-110 transition-transform duration-300">
                {product.image}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3">{product.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{product.description}</p>
                <div className="space-y-2">
                  {product.specs.map((spec, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-gray-700">
                      <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                      {spec}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Why Choose Us
const WhyChooseUs = () => {
  const reasons = [
    { icon: Globe, title: 'Global Export Network', desc: 'Established connections across 50+ countries' },
    { icon: Trophy, title: 'International Quality', desc: 'Certifications & compliance with global standards' },
    { icon: ShieldCheck, title: 'Hygienic Packaging', desc: 'Food-grade materials with freshness assurance' },
    { icon: Truck, title: 'Timely Delivery', desc: 'Reliable logistics with on-time guarantees' },
    { icon: Heart, title: 'Trusted Relationships', desc: 'Long-term partnerships with major importers' },
    { icon: Leaf, title: 'Competitive Pricing', desc: 'Best rates without compromising quality' },
    { icon: Leaf, title: 'Farm Fresh Products', desc: 'Direct sourcing from certified farms' },
    { icon: MapPin, title: 'Reliable Logistics', desc: 'Professional cold chain management' },
  ];

  return (
    <section className="py-20 px-4 md:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 font-serif mb-4">
            Why Choose Us
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Partnership advantages that set us apart in the global agricultural export market.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="p-6 bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-xl border border-emerald-200 hover:border-emerald-400 transition-all duration-300 group cursor-pointer"
            >
              <div className="w-10 h-10 bg-emerald-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <reason.icon className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">{reason.title}</h3>
              <p className="text-sm text-gray-700">{reason.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Quality Standards
const QualityStandards = () => {
  const standards = [
    { title: 'Strict Quality Checks', desc: 'Multi-level inspection at farm, processing, and packaging stages' },
    { title: 'Export Compliance', desc: 'Full adherence to international food safety and export regulations' },
    { title: 'Freshness Preservation', desc: 'Advanced cold chain and temperature-controlled storage solutions' },
    { title: 'Packaging Standards', desc: 'Food-grade materials meeting international requirements' },
    { title: 'Customer-Focused Ops', desc: 'Transparent processes with real-time tracking and communication' },
  ];

  return (
    <section className="py-20 px-4 md:px-8 bg-slate-900 text-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-serif mb-4">
            International Quality Standards
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Unwavering commitment to quality at every stage of the export process.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {standards.map((std, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-6 bg-gradient-to-br from-emerald-900/40 to-emerald-800/20 border border-emerald-700 rounded-xl hover:border-emerald-500 transition-all duration-300"
            >
              <h3 className="text-lg font-semibold mb-2">{std.title}</h3>
              <p className="text-gray-300 text-sm">{std.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Testimonials
const Testimonials = () => {
  const testimonials = [
    {
      name: 'David Chen',
      company: 'Fresh Imports Asia',
      country: 'Singapore',
      quote: 'Exceptional product quality and professional handling throughout the supply chain. A reliable partner for our sourcing needs.',
      rating: 5
    },
    {
      name: 'Maria Rodriguez',
      company: 'European Fruit Distributors',
      country: 'Spain',
      quote: 'Consistent deliveries with premium quality. Their attention to detail and freshness assurance is unmatched.',
      rating: 5
    },
    {
      name: 'Ahmad Al-Rashid',
      company: 'Middle East Trading Co.',
      country: 'UAE',
      quote: 'Trustworthy exporter with excellent communication and timely deliveries. Highly recommended for bulk orders.',
      rating: 5
    },
  ];

  return (
    <section className="py-20 px-4 md:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 font-serif mb-4">
            International Buyers Trust Us
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Feedback from our satisfied global partners.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-8 bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl border border-slate-200 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">&quot;{testimonial.quote}&quot;</p>
              <div className="border-t border-slate-200 pt-4">
                <p className="font-semibold text-slate-900">{testimonial.name}</p>
                <p className="text-sm text-gray-600">{testimonial.company}</p>
                <p className="text-xs text-emerald-600 font-semibold">{testimonial.country}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Contact Section
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    product: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <section className="py-20 px-4 md:px-8 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 font-serif mb-4">
            Get In Touch
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Ready to source premium agricultural products? Contact us for inquiries and quotes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6 font-serif">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex gap-4 items-start group cursor-pointer">
                  <div className="w-12 h-12 bg-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 font-semibold">Phone</p>
                    <p className="text-lg text-slate-900 font-semibold">+91 XXXXX XXXXX</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start group cursor-pointer">
                  <div className="w-12 h-12 bg-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 font-semibold">Email</p>
                    <p className="text-lg text-slate-900 font-semibold">export@company.in</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start group cursor-pointer">
                  <div className="w-12 h-12 bg-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <MapPinIcon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 font-semibold">Address</p>
                    <p className="text-lg text-slate-900 font-semibold">Namakkal, Tamil Nadu, India</p>
                  </div>
                </div>

                <div className="pt-6 border-t border-gray-200">
                  <p className="text-sm text-gray-600 font-semibold mb-4">Quick Contact</p>
                  <button className="w-full px-6 py-3 bg-emerald-500 text-white font-semibold rounded-lg hover:bg-emerald-600 transition-all duration-300 flex items-center justify-center gap-2 group">
                    <span>WhatsApp Inquiry</span>
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      →
                    </motion.span>
                  </button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-lg p-8"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-2">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-2">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all"
                  placeholder="+1 (555) 000-0000"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-2">Product Interest</label>
                <select
                  name="product"
                  value={formData.product}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all"
                >
                  <option value="">Select a product</option>
                  <option value="eggs">Fresh Export Eggs</option>
                  <option value="bananas">Premium Bananas</option>
                  <option value="tender-coconut">Tender Coconut</option>
                  <option value="coconut">Fresh Coconut</option>
                  <option value="all">All Products</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all resize-none"
                  placeholder="Tell us about your sourcing needs..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-emerald-500 text-white font-semibold rounded-lg hover:bg-emerald-600 transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                <span>Send Inquiry</span>
                <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Footer
const Footer = () => {
  return (
    <footer className="bg-slate-900 text-gray-300 py-12 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-white font-bold text-lg mb-4 font-serif">Anusiya Exports</h3>
            <p className="text-sm text-gray-400">Leading agricultural exporter from Namakkal, Tamil Nadu with global partnerships and international quality standards.</p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Products</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-emerald-400 transition">Fresh Export Eggs</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition">Premium Bananas</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition">Tender Coconut</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition">Fresh Coconut</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-emerald-400 transition">About Us</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition">Quality Standards</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition">Certifications</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Connect</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center hover:bg-emerald-600 transition text-sm">f</a>
              <a href="#" className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center hover:bg-emerald-600 transition text-sm">𝕏</a>
              <a href="#" className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center hover:bg-emerald-600 transition text-sm">in</a>
              <a href="#" className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center hover:bg-emerald-600 transition text-sm">📧</a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>&copy; 2024 Anusiya Exports, Namakkal. All rights reserved.</p>
            <p>🏆 ISO 22000 | APEDA Registered | FSSAI Certified</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Main Page
export default function Home() {
  return (
    <main className="overflow-hidden">
      <Navbar />
      <Hero />
      <About />
      <Products />
      <WhyChooseUs />
      <QualityStandards />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}