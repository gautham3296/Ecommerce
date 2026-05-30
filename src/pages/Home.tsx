/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { useProducts } from '../context/ProductsContext';
import CategorySwiper from '../components/CategorySwiper';
import ProductCard from '../components/ProductCard';
import { 
  Sparkles, 
  Shield, 
  Heart, 
  Activity, 
  Flame, 
  Eye, 
  Compass, 
  HelpCircle, 
  Star, 
  Quote, 
  ChevronLeft, 
  ChevronRight, 
  Loader2,
  Laptop,
  Layers,
  Archive,
  Grid
} from 'lucide-react';

export default function Home() {
  const { products, loading } = useProducts();

  // Categorized lists
  const workspaceProducts = products.filter(p => p.category === 'Workspace');
  const sleevesProducts = products.filter(p => p.category === 'Sleeves');
  const lifestyleProducts = products.filter(p => p.category === 'Lifestyle');
  const carryProducts = products.filter(p => p.category === 'Carry');
  const essentialsProducts = products.filter(p => p.category === 'Essentials');

  const bestSellers = products.slice(0, 4);
  const newArrivals = products.slice(4, 8);

  const [activeReviewIndex, setActiveReviewIndex] = React.useState(0);
  const reviews = [
    {
      text: "Outstanding premium feel! The Nomad Keyboard silent switches are truly a masterpiece. My work setup is now a silent, distraction-free haven.",
      author: "Arshi",
      title: "Product Designer",
      location: "Mumbai"
    },
    {
      text: "My saddle leather desk mat developed a beautiful organic dark patina over three months of daily mouse tracking. Worth every single rupee.",
      author: "Gokul S.",
      title: "Software Architect",
      location: "New Delhi"
    },
    {
      text: "The Merino wool laptop sleeve and waxed carry pouch are my favorite everyday companions. Absolutely weatherproof and stunningly elegant.",
      author: "Meera Nair",
      title: "Remote Creative Consultant",
      location: "Kochi"
    }
  ];

  const handleNextReview = () => {
    setActiveReviewIndex((prev) => (prev + 1) % reviews.length);
  };
  const handlePrevReview = () => {
    setActiveReviewIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  // Hero carousel setup
  const [activeHeroSlide, setActiveHeroSlide] = React.useState(0);
  const heroSlides = [
    {
      tagline: "✨ Minimalist Aesthetics • Curated Workspace Essentials",
      titlePart1: "Elevate Your",
      titlePart2: "Desk Environment",
      description: "Uncompromising quality, clean proportions, and satisfying tactile finishes designed to keep you deeply focused and inspired.",
      image: "https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&q=80&w=1600",
      ctaText: "Explore Collection",
      ctaLink: "#categories"
    },
    {
      tagline: "⌨️ Custom Mechanical Gears • Silent Precision",
      titlePart1: "Pristine Typing,",
      titlePart2: "Zero Distractions",
      description: "Whisper-quiet linear keys encased in heavy CNC-milled metal plates. Built to optimize flow for the modern writer and developer.",
      image: "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?auto=format&fit=crop&q=80&w=1600",
      ctaText: "Shop Keyboards",
      ctaLink: "/products"
    },
    {
      tagline: "🎒 Refined Materials • Tailored For Creative Commutes",
      titlePart1: "Modular Essentials,",
      titlePart2: "Everyday Carry",
      description: "Water-resistant waxed cotton canvas and genuine Merino wool sleeves shield your premium notebooks and gear with utmost grace.",
      image: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=1600",
      ctaText: "Shop Protection Sleeves",
      ctaLink: "/products"
    }
  ];

  React.useEffect(() => {
    if (loading) return;
    const timer = setInterval(() => {
      setActiveHeroSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [loading, heroSlides.length]);

  if (loading) {
    return (
      <div className="min-h-screen bg-surface flex flex-col items-center justify-center gap-4">
        <Loader2 className="w-10 h-10 text-primary animate-spin" />
        <span className="font-mono text-xs uppercase tracking-widest text-on-surface-variant">Loading workspace studio...</span>
      </div>
    );
  }

  return (
    <div className="bg-surface text-on-surface">
      {/* 1. Hero Carousel */}
      <section className="relative h-[85vh] lg:h-[90vh] overflow-hidden bg-black flex items-center">
        <AnimatePresence mode="wait">
          <motion.div 
            key={activeHeroSlide}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 0.6, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0 z-0"
          >
            <img 
              src={heroSlides[activeHeroSlide].image} 
              alt="Workspace Inspiration" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
          </motion.div>
        </AnimatePresence>

        {/* Hero Slide Details */}
        <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-16 w-full text-white">
          <div className="max-w-2xl space-y-6">
            <motion.span 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              key={`tag-${activeHeroSlide}`}
              className="inline-block text-xs uppercase font-bold tracking-[0.25em] text-primary bg-primary-container/20 border border-primary/30 px-4 py-2 rounded-full"
            >
              {heroSlides[activeHeroSlide].tagline}
            </motion.span>
            
            <h1 className="font-serif text-5xl md:text-7xl font-extrabold leading-none tracking-tight">
              <motion.span 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                key={`title1-${activeHeroSlide}`}
                className="block"
              >
                {heroSlides[activeHeroSlide].titlePart1}
              </motion.span>
              <motion.span 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                key={`title2-${activeHeroSlide}`}
                className="italic font-light text-primary-container/90 block mt-2"
              >
                {heroSlides[activeHeroSlide].titlePart2}
              </motion.span>
            </h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 0.9, y: 0 }}
              transition={{ delay: 0.3 }}
              key={`desc-${activeHeroSlide}`}
              className="text-base md:text-lg text-white/80 font-sans font-light leading-relaxed max-w-lg"
            >
              {heroSlides[activeHeroSlide].description}
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              key={`btn-${activeHeroSlide}`}
              className="pt-4 flex flex-wrap gap-4"
            >
              <Link 
                to={heroSlides[activeHeroSlide].ctaLink.startsWith('#') ? '/products' : heroSlides[activeHeroSlide].ctaLink}
                className="px-8 py-4 bg-primary text-on-primary rounded-full font-serif font-bold text-xs uppercase tracking-[0.15em] hover:scale-105 transition-all shadow-lg cursor-pointer"
              >
                {heroSlides[activeHeroSlide].ctaText}
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Slides Index Indicators */}
        <div className="absolute bottom-8 right-5 md:right-16 z-20 flex bg-black/40 backdrop-blur-md p-2 rounded-full gap-2 border border-white/10">
          {heroSlides.map((_, idx) => (
            <button 
              key={idx}
              onClick={() => setActiveHeroSlide(idx)}
              className={`h-2.5 rounded-full transition-all duration-300 ${activeHeroSlide === idx ? 'w-8 bg-primary' : 'w-2.5 bg-white/40'}`}
              aria-label={`Show slide ${idx + 1}`}
            />
          ))}
        </div>
      </section>

      {/* 2. Quick Shop: Best Sellers */}
      <section className="py-24 max-w-7xl mx-auto px-5 md:px-16 space-y-12">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 border-b border-outline-variant/20 pb-8">
          <div>
            <span className="text-xs uppercase tracking-[0.250em] font-extrabold text-primary">High-Demand Selection</span>
            <h2 className="font-serif text-3xl md:text-5xl font-black mt-2">
              Our Prime <span className="italic">Best Sellers</span>
            </h2>
          </div>
          <Link 
            to="/products"
            className="text-xs uppercase tracking-widest font-extrabold text-primary border-b-2 border-primary pb-1 hover:opacity-80 transition-opacity"
          >
            View Entire Range →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {bestSellers.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* 3. Promoted Sale Highlights Section */}
      <section className="py-12 bg-surface-container">
        <div className="max-w-7xl mx-auto px-5 md:px-16">
          <div className="bg-white rounded-3xl p-6 md:p-10 border border-outline-variant/30 flex flex-col md:flex-row items-center justify-between gap-8 shadow-xs">
            <div className="space-y-3 max-w-xl text-center md:text-left">
              <span className="text-primary bg-primary-container/40 text-[10px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full w-fit">Seasonal Offer</span>
              <h3 className="font-serif text-2xl md:text-3xl font-extrabold text-on-surface">The Minimalist Design Bundle Offer</h3>
              <p className="text-xs md:text-sm text-on-surface-variant">Elevate your immediate desk layout. Acquire three essential core items—our Hand-Cut Saddle Strap set, Leather Desk Mat, and Acoustic Wooden Clock in a single beautiful container.</p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto">
              <div className="text-center md:text-right">
                <span className="text-sm line-through text-on-surface-variant block">Regular ₹8,898</span>
                <span className="font-serif text-3xl font-black text-primary block">₹6,499 Only</span>
              </div>
              <button 
                onClick={() => {
                  window.location.hash = "#categories";
                }}
                className="w-full sm:w-auto px-8 py-3.5 bg-primary hover:brightness-110 text-on-primary font-bold text-xs uppercase tracking-widest rounded-xl transition-all shadow-md cursor-pointer"
              >
                Claim Package
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Category Slider Matrices */}
      <section id="categories" className="py-20 max-w-7xl mx-auto px-4 md:px-16">
        <div className="text-center mb-16 space-y-4">
          <span className="text-xs uppercase tracking-[0.3em] font-extrabold text-primary">The Studio Matrix</span>
          <h2 className="font-serif text-4xl md:text-6xl font-bold">
            Explore our <span className="italic text-primary">Design Segments</span>
          </h2>
          <p className="text-on-surface-variant max-w-2xl mx-auto text-sm md:text-base">
            Engineered with high precision and ethical material sourcing. Choose your studio focal area.
          </p>
        </div>

        {/* 1. Workspace Products */}
        {workspaceProducts.length > 0 && (
          <div className="border-b border-outline-variant/20 pb-12 mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-primary-container/20 rounded-xl text-primary">
                <Laptop size={24} />
              </div>
              <h3 className="font-serif text-2xl md:text-3xl font-black tracking-tight">Workspace Essentials</h3>
            </div>
            <CategorySwiper
              title="Tactile Desktop Surface"
              tagline="The Wood & Leather Ritual"
              description="Protect your workspace and redefine keyboard tactile responses. Complete with solid walnut wood collars, pure aluminum, and full-grain saddler craft layers."
              bannerImage="https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&q=80&w=600"
              products={workspaceProducts}
            />
          </div>
        )}

        {/* 2. Sleeves Products */}
        {sleevesProducts.length > 0 && (
          <div className="border-b border-outline-variant/20 pb-12 mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-primary-container/20 rounded-xl text-primary">
                <Layers size={24} />
              </div>
              <h3 className="font-serif text-2xl md:text-3xl font-black tracking-tight">Laptop Protection Sleeves</h3>
            </div>
            <CategorySwiper
              title="Merino Wool & Felt Armor"
              tagline="Pure Cushion Engineering"
              description="Sleeve models tailored with water-resistant local German Merino wool fleece. Complete with magnetic silent snap systems to secure your slim workspace computing profiles."
              bannerImage="https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=600"
              products={sleevesProducts}
            />
          </div>
        )}

        {/* 3. Lifestyle Products */}
        {lifestyleProducts.length > 0 && (
          <div className="border-b border-outline-variant/20 pb-12 mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-primary-container/20 rounded-xl text-primary">
                <Sparkles size={24} />
              </div>
              <h3 className="font-serif text-2xl md:text-3xl font-black tracking-tight">Ambient & Lifestyle Comforts</h3>
            </div>
            <CategorySwiper
              title="Calm Aroma & Insulation"
              tagline="Workplace Sanctuary"
              description="Restore mental clarity and temperature control. Hand-poured concrete soy-wax candles mixed withSantals, paired with insulated double-walled hydration thermal flasks."
              bannerImage="https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&q=80&w=600"
              products={lifestyleProducts}
            />
          </div>
        )}

        {/* 4. Carry Pouches */}
        {carryProducts.length > 0 && (
          <div className="border-b border-outline-variant/20 pb-12 mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-primary-container/20 rounded-xl text-primary">
                <Archive size={24} />
              </div>
              <h3 className="font-serif text-2xl md:text-3xl font-black tracking-tight">Everyday Carry Organizers</h3>
            </div>
            <CategorySwiper
              title="Modular Origami Compartments"
              tagline="Travel Ready Systems"
              description="Weather-sealed waxed canvas tech pouches designed with internal elastic partitions to organize chargers, optical mice, hubs, and connection accessories elegantly."
              bannerImage="https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?auto=format&fit=crop&q=80&w=600"
              products={carryProducts}
            />
          </div>
        )}

        {/* 5. Utility Essentials */}
        {essentialsProducts.length > 0 && (
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-primary-container/20 rounded-xl text-primary">
                <Shield size={24} />
              </div>
              <h3 className="font-serif text-2xl md:text-3xl font-black tracking-tight">Clever Utility Essentials</h3>
            </div>
            <CategorySwiper
              title="Saddle Cable & Clocks"
              tagline="Order From Within"
              description="Cure cable nests. Saddle leather wraps fitted with non-corrosion click snaps, paired with acoustic sensor LED wood blocks to display dynamic times."
              bannerImage="https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&q=80&w=600"
              products={essentialsProducts}
            />
          </div>
        )}
      </section>

      {/* 5. Trust Capsules Ribbon */}
      <section className="bg-primary text-on-primary py-8 select-none border-y border-white/5">
        <div className="max-w-7xl mx-auto px-5 md:px-16">
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8 justify-items-center text-center">
            {[
              { label: "Circular Sourcing", icon: "♻️", sub: "Recycled metals & felt" },
              { label: "100% Genuine Craft", icon: "🪵", sub: "Hand-finished timber" },
              { label: "Sustainable Leather", icon: "💼", sub: "Saddle residual pieces" },
              { label: "Aesthetic Design", icon: "📐", sub: "Minimalist grid logic" },
              { label: "Free Logistics", icon: "📦", sub: "On orders above ₹1,999" },
            ].map((benefit, i) => (
              <div key={i} className="flex flex-col items-center space-y-1 group">
                <span className="text-2xl transform group-hover:scale-125 transition-transform duration-300 mb-1">{benefit.icon}</span>
                <span className="font-serif text-sm font-bold tracking-wide">{benefit.label}</span>
                <span className="text-[10px] opacity-80 uppercase tracking-widest">{benefit.sub}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Complete Catalogue Call to Action Banner */}
      <section className="py-16 bg-surface-container border-y border-outline-variant/10 text-center">
        <div className="max-w-3xl mx-auto px-5 space-y-6">
          <span className="text-primary font-black text-xs uppercase tracking-[0.25em] bg-white px-4 py-1.5 rounded-full border border-outline-variant/20 shadow-xs inline-block">
            ✨ Complete Designer Inventory
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-extrabold text-on-surface">
            Can't find what you are looking for?
          </h2>
          <p className="text-on-surface-variant max-w-lg mx-auto text-sm md:text-base">
            Discover our entire collection of exquisite workspace and high-end lifestyle essentials.
          </p>
          <div className="pt-4">
            <Link 
              to="/products"
              className="px-10 py-4.5 bg-primary hover:brightness-110 text-on-primary rounded-full font-serif text-base font-bold shadow-md hover:scale-103 transition-all inline-block cursor-pointer"
            >
              Browse All 9 Design Masterpieces
            </Link>
          </div>
        </div>
      </section>

      {/* 7. Customer voice reviews - slider container */}
      <section className="py-24 bg-white border-y border-outline-variant/10">
        <div className="max-w-4xl mx-auto px-5 text-center space-y-8">
          <span className="text-xs uppercase tracking-[0.3em] font-black text-primary block animate-pulse">Tested & Verified</span>
          <h2 className="font-serif text-3xl md:text-5xl font-extrabold text-on-surface">Client Experiences</h2>
          
          {/* Review Slider */}
          <div className="relative bg-surface-container rounded-3xl p-8 md:p-14 border border-outline-variant/30 shadow-xs">
            <Quote className="w-12 h-12 text-primary/15 mx-auto mb-6" />
            
            <div className="min-h-[140px] flex items-center justify-center">
              <p className="font-serif text-xl md:text-2xl text-on-surface leading-relaxed max-w-2xl italic">
                "{reviews[activeReviewIndex].text}"
              </p>
            </div>

            {/* Stars Row */}
            <div className="flex justify-center text-amber-500 gap-1.5 mt-8 mb-4">
              <Star size={18} fill="currentColor" />
              <Star size={18} fill="currentColor" />
              <Star size={18} fill="currentColor" />
              <Star size={18} fill="currentColor" />
              <Star size={18} fill="currentColor" />
            </div>

            {/* Author */}
            <div className="space-y-1">
              <h4 className="font-sans font-extrabold text-sm text-on-surface">
                {reviews[activeReviewIndex].author}
              </h4>
              <p className="text-xs text-on-surface-variant uppercase tracking-widest leading-none font-semibold">
                {reviews[activeReviewIndex].title} • {reviews[activeReviewIndex].location}
              </p>
            </div>

            {/* Slides controls */}
            <div className="absolute top-1/2 -translate-y-1/2 left-2 md:-left-6 right-2 md:-right-6 flex justify-between pointer-events-none">
              <button 
                onClick={handlePrevReview}
                className="w-10 h-10 rounded-full bg-white border border-outline-variant hover:bg-primary hover:text-white shadow-md flex items-center justify-center pointer-events-auto transition-all cursor-pointer"
                aria-label="Previous review"
              >
                <ChevronLeft size={18} />
              </button>
              <button 
                onClick={handleNextReview}
                className="w-10 h-10 rounded-full bg-white border border-outline-variant hover:bg-primary hover:text-white shadow-md flex items-center justify-center pointer-events-auto transition-all cursor-pointer"
                aria-label="Next review"
              >
                <ChevronRight size={18} />
              </button>
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-1.5 mt-8">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveReviewIndex(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    activeReviewIndex === i ? 'w-5 bg-primary' : 'w-1.5 bg-on-surface-variant/35'
                  }`}
                  aria-label={`Go to review ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 8. Sustainable Design Story Section */}
      <section id="story" className="py-24 bg-surface-container overflow-hidden">
        <div className="max-w-7xl mx-auto px-5 md:px-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute inset-0 bg-primary/5 rounded-[3rem] -rotate-3 scale-103" />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative rounded-[2.5rem] overflow-hidden aspect-[4/5] shadow-2xl border border-outline-variant/30"
            >
              <img 
                src="https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&q=80&w=1000"
                alt="Workspace styling and premium materials"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
          
          <div className="space-y-8">
            <span className="font-sans text-xs uppercase tracking-[0.3em] font-extrabold text-primary bg-primary/10 px-3 py-1.5 rounded-full w-fit block">Our Story & Design Heritage</span>
            <h2 className="font-serif text-4xl md:text-5xl leading-tight text-on-surface font-extrabold">
              Engineering with <br />
              <span className="italic text-primary font-light">Circular Design Principles</span>
            </h2>
            <div className="space-y-6 text-on-surface-variant text-sm md:text-base leading-relaxed">
              <p>
                Our vision is to provide premium, sustainable design products while committing to the advancement of native craftsmanship and high-grade material circularity. We design items that last.
              </p>
              <p>
                We source only genuine full-grain leather off-cuts, sustainable timber, and toxic-free biodegradable components directly from ethical regional workshops. Within our modular assembly chain, we refine each outline of your item to perfection.
              </p>
              <p className="font-semibold text-on-surface flex items-center gap-2">
                🇮🇳 <span className="text-primary">85% of our workspace elements are custom crafted by passionate rural artisans</span>, preserving historic tanning and hand-finished woodworking traditions.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 pt-4 border-t border-outline-variant/35 text-center sm:text-left">
              <div>
                <h4 className="font-serif text-3xl font-black text-primary">100%</h4>
                <p className="text-xs text-on-surface-variant font-bold uppercase tracking-wider">Zero-Soot Sourced</p>
              </div>
              <div className="hidden sm:block border-r border-outline-variant/35" />
              <div>
                <h4 className="font-serif text-3xl font-black text-primary">2,500+</h4>
                <p className="text-xs text-on-surface-variant font-bold uppercase tracking-wider">Desks Composed</p>
              </div>
              <div className="hidden sm:block border-r border-outline-variant/35" />
              <div>
                <h4 className="font-serif text-3xl font-black text-primary">85%</h4>
                <p className="text-xs text-on-surface-variant font-bold uppercase tracking-wider font-sans">Artisanal Workshop Led</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Epic Footer CTA Banner */}
      <section className="py-24 px-5">
        <div className="max-w-7xl mx-auto relative rounded-[3rem] overflow-hidden bg-primary p-12 md:p-24 text-center border border-white/5 shadow-2xl">
          <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
          
          <div className="relative z-10 max-w-3xl mx-auto space-y-6 text-on-primary">
            <Compass className="w-10 h-10 text-primary-container mx-auto animate-spin" style={{ animationDuration: '20s' }} />
            <h2 className="font-serif text-4xl md:text-6xl text-on-primary mb-8 leading-tight font-extrabold">
              Cultivate Your Inner <span className="italic font-light text-primary-container">Workspace Flow</span>.
            </h2>
            <p className="text-on-primary/80 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
              Begin your natural journey towards focus and design excellence today with our sustainably crafted desk accessories and peripherals.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-fit mx-auto pt-6">
              <a href="#categories" className="px-10 py-5 bg-primary-container hover:bg-white hover:text-primary text-on-primary-container rounded-full font-serif text-lg font-bold shadow-xl transition-all block">
                Connect & Shop Collection
              </a>
            </motion.div>
          </div>
        </div>
      </section>

    </div>
  );
}
