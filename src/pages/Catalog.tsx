/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useProducts } from '../context/ProductsContext';
import ProductCard from '../components/ProductCard';
import { Shield, Sparkles, Layers, Archive, Laptop, Grid } from 'lucide-react';

export default function Catalog() {
  const { products, loading } = useProducts();
  const [activeCategory, setActiveCategory] = useState<'All' | 'Workspace' | 'Sleeves' | 'Lifestyle' | 'Carry' | 'Essentials'>('All');

  const categories = [
    { name: 'All', icon: Grid },
    { name: 'Workspace', icon: Laptop },
    { name: 'Sleeves', icon: Layers },
    { name: 'Lifestyle', icon: Sparkles },
    { name: 'Carry', icon: Archive },
    { name: 'Essentials', icon: Shield },
  ] as const;

  // Filter products by category
  const filteredProducts = products.filter((product) => {
    if (activeCategory === 'All') return true;
    return product.category === activeCategory;
  });

  return (
    <div className="bg-surface text-on-surface min-h-screen py-10 md:py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-16 space-y-12">
        
        {/* Dynamic Catalog Header */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <span className="text-xs uppercase tracking-[0.3em] font-extrabold text-primary bg-primary-container/60 px-4 py-1.5 rounded-full w-fit mx-auto block">
            ✨ Curated Design Essentials
          </span>
          <h1 className="font-serif text-4xl md:text-5xl font-extrabold text-on-surface">
            Our Complete <span className="italic text-primary">Design Collection</span>
          </h1>
          <p className="text-on-surface-variant text-sm md:text-base leading-relaxed">
            Carefully curated from premium, sustainable materials. Elevate your everyday workspace and daily lifestyle rituals.
          </p>
        </div>

        {/* Categories Tab Selector */}
        <div className="flex justify-center overflow-x-auto scrollbar-none pb-2 -mx-4 px-4 sm:mx-0 sm:px-0">
          <div className="flex bg-surface-container p-1.5 rounded-2xl gap-1 border border-outline-variant/20 flex-nowrap shrink-0">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeCategory === cat.name;
              return (
                <button
                  key={cat.name}
                  onClick={() => setActiveCategory(cat.name)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs md:text-sm font-bold tracking-wide uppercase transition-all duration-300 cursor-pointer ${
                    isActive
                      ? 'bg-primary text-on-primary shadow-md'
                      : 'text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface'
                  }`}
                >
                  <Icon size={14} className={isActive ? 'animate-pulse' : ''} />
                  {cat.name}
                </button>
              );
            })}
          </div>
        </div>

        {/* Products Grid */}
        <div className="min-h-[400px]">
          <AnimatePresence mode="popLayout">
            <motion.div
              layout
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8"
            >
              {filteredProducts.map((product) => (
                <motion.div
                  layout
                  key={product.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                >
                  <ProductCard product={product} />
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {filteredProducts.length === 0 && (
            <div className="text-center py-20 space-y-4">
              <p className="text-on-surface-variant font-medium">No goods found in this category.</p>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
