import React from 'react';
import { motion } from '../utils/motion';
import { Button } from './ui/button';
import { Shield, Cpu, Link } from 'lucide-react';

const MALAMA_LOGO_URL = 'https://fykjijdixtcgjavidmve.supabase.co/storage/v1/object/public/website-assets/logos/logo.png';

async function trackCTA(buttonLabel: string, destination: string) {
  try {
    const { analytics } = await import('../lib/analytics');
    await analytics.trackCTAClick({
      buttonLabel,
      buttonLocation: 'hero',
      pageName: 'home',
      destination
    });
  } catch (error) {
    console.error('Failed to track CTA:', error);
  }
}

interface HeroSectionProps {
  onExplorePlatform?: () => void;
  onHowItWorks?: () => void;
  onStartProject?: () => void;
  onLandSteward?: () => void;
  onShowDocumentation?: () => void;
  onShowBlog?: () => void;
  onShowProjectGallery?: () => void;
  onShowTimeline?: () => void;
}

export function HeroSection({
  onExplorePlatform,
  onHowItWorks,
  onStartProject,
  onLandSteward,
  onShowProjectGallery,
  onShowTimeline,
}: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0A1A0F]">

      {/* Background: subtle dark forest image with strong green overlay */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(10,26,15,0.92) 0%, rgba(27,94,32,0.70) 50%, rgba(10,26,15,0.92) 100%), url('https://images.unsplash.com/photo-1546064125-11154220541f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2b2xjYW5vJTIwbGFuZHNjYXBlJTIwaGF3YWlpfGVufDF8fHx8MTc1NjI3MjkwMXww&ixlib=rb-4.1.0&q=80&w=1080')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        initial={{ scale: 1.05 }}
        animate={{ scale: 1 }}
        transition={{ duration: 12, ease: 'easeOut' }}
      />

      {/* Grid overlay for data-layer feel */}
      <div
        className="absolute inset-0 z-0 opacity-10"
        style={{
          backgroundImage: 'linear-gradient(rgba(76,175,80,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(76,175,80,0.3) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Left accent stripe */}
      <div className="absolute left-0 top-0 h-full w-1 bg-[#4CAF50] z-10" />

      {/* Logo */}
      <motion.div
        className="absolute top-10 left-1/2 -translate-x-1/2 z-20"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
      >
        <img
          src={MALAMA_LOGO_URL}
          alt="Mālama Labs"
          width="220"
          height="220"
          className="object-contain"
        />
      </motion.div>

      {/* Main content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto px-6 pt-32 pb-20">

        {/* Live proof badge */}
        <motion.div
          className="inline-flex items-center gap-2 bg-[#1B5E20]/60 border border-[#4CAF50]/40 rounded-full px-4 py-1.5 mb-8"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <span className="w-2 h-2 rounded-full bg-[#4CAF50] animate-pulse" />
          <span className="text-[#A5D6A7] text-sm font-medium tracking-wide">
            Live on Cardano Mainnet · Hourly signed data from Idaho field deployment
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
          style={{ fontFamily: 'Georgia, serif' }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
        >
          The Trust Anchor for<br />
          <span className="text-[#4CAF50]">Verifiable Real‑World Data</span>
        </motion.h1>

        {/* Subhead */}
        <motion.p
          className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto mb-4 leading-relaxed"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5 }}
        >
          Hardware-signed, blockchain-anchored environmental data — cryptographically
          verified at the source, streamed continuously, and settlement-ready across carbon,
          biodiversity, water, and soil markets.
        </motion.p>

        <motion.p
          className="text-sm text-[#81C784] mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          Software-only MRV cannot replicate hardware-signed truth. That is the moat.
        </motion.p>

        {/* Three proof pillars */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          {[
            { icon: Shield, label: 'Device-level ECDSA signing', sub: 'Tamper-proof at the hardware' },
            { icon: Link, label: 'Cardano mainnet anchoring', sub: 'Hourly SaveCards, immutable' },
            { icon: Cpu, label: 'Multi-market data layer', sub: 'One node. Six revenue markets.' },
          ].map(({ icon: Icon, label, sub }) => (
            <div
              key={label}
              className="bg-[#0F2318]/80 border border-[#2E7D32]/50 rounded-xl p-4 flex flex-col items-center gap-2"
            >
              <div className="w-8 h-8 rounded-full bg-[#1B5E20] flex items-center justify-center">
                <Icon className="w-4 h-4 text-[#4CAF50]" />
              </div>
              <p className="text-white text-sm font-semibold">{label}</p>
              <p className="text-[#81C784] text-xs">{sub}</p>
            </div>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div
          className="flex flex-wrap gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          <Button
            size="lg"
            onClick={() => {
              trackCTA('Start Your Project', '/signup');
              onStartProject?.();
            }}
            className="bg-[#4CAF50] text-[#0A1A0F] hover:bg-[#388E3C] font-bold px-8 hover:scale-105 transition-all duration-300"
          >
            Start Your Project
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={() => {
              trackCTA('For Project Developers', '/land-steward');
              onLandSteward?.();
            }}
            className="border-[#4CAF50]/60 text-white hover:bg-[#1B5E20]/40 transition-all duration-300"
          >
            For Project Developers
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={() => {
              trackCTA('Explore the Platform', '/platform');
              onExplorePlatform?.();
            }}
            className="border-white/30 text-white hover:bg-white/10 transition-all duration-300"
          >
            Explore the Platform
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={() => {
              trackCTA('How It Works', '/how-it-works');
              onHowItWorks?.();
            }}
            className="border-white/30 text-white hover:bg-white/10 transition-all duration-300"
          >
            How It Works
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={() => {
              trackCTA('Carbon Timeline', '/timeline');
              onShowTimeline?.();
            }}
            className="border-white/30 text-white hover:bg-white/10 transition-all duration-300"
          >
            Carbon Timeline
          </Button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-[#4CAF50]/50 rounded-full flex items-start justify-center pt-1.5">
          <div className="w-1 h-2.5 bg-[#4CAF50] rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}
