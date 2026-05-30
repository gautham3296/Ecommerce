/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import Header from './Header';
import Footer from './Footer';
import CartDrawer from './CartDrawer';
import { useCart } from '../context/CartContext';
import { ShoppingBag } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const { isCartOpen, setIsCartOpen, itemCount } = useCart();
  
  return (
    <div className="min-h-screen flex flex-col bg-surface overflow-x-clip">
      <Header />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />

      {/* Elegant Floating Cart Button for Quick Checkout */}
      <AnimatePresence>
        {itemCount > 0 && (
          <motion.button
            id="floating-checkout-cart"
            initial={{ scale: 0, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0, opacity: 0, y: 50 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsCartOpen(true)}
            className="fixed bottom-6 right-6 z-40 bg-[#48671c] hover:bg-[#344d13] text-white p-4 rounded-full shadow-2xl transition-all flex items-center justify-center cursor-pointer group"
            title="Open checkout basket"
          >
            <div className="relative">
              <ShoppingBag className="w-6 h-6 group-hover:scale-105 transition-transform" />
              <motion.span
                key={itemCount}
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="absolute -top-3.5 -right-3.5 bg-red-650 text-white text-[11px] font-mono font-extrabold w-5.5 h-5.5 rounded-full flex items-center justify-center border-2 border-surface shadow-md"
              >
                {itemCount}
              </motion.span>
            </div>
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
