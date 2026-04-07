import React from 'react';
import { motion } from 'motion/react';
import { Button } from './ui/button';
import { ArrowRight, Users, Code2, ShoppingCart, Handshake } from 'lucide-react';

interface ClosingCTAProps {
  onStartProject?: () => void;
  onLandSteward?: () => void;
  onExplorePlatform?: () => void;
  onHowItWorks?: () => void;
}

const PATHS = [
  {
    icon: Users,
    color: '#4CAF50',
    audience: 'Project Developers',
    headline: 'Earn from verified field data',
    body: 'Deploy a Genesis 300 node on your land. Stream signed environmental data. Receive LCO₂ pre-finance in 90 days, convert to VCO₂ at verification. Sub-$2/tCO₂e MRV cost vs. $20K–$50K traditional.',
    cta: 'Start Your Project',
    onClick: 'startProject' as const,
  },
  {
    icon: Code2,
    color: '#00ACC1',
    audience: 'Technology Builders',
    headline: 'Build on the trust layer',
    body: 'Access the dMRV API, SaveCard data feeds, and Cardano mainnet oracle endpoints. Build climate fintech applications on top of hardware-verified environmental data.',
    cta: 'Explore the Platform',
    onClick: 'explorePlatform' as const,
  },
  {
    icon: ShoppingCart,
    color: '#A5D6A7',
    audience: 'Corporate Buyers',
    headline: 'Purchase with full data provenance',
    body: 'Every credit carries a cryptographic chain of custody from sensor to chain. Hardware-signed, registry-ready, audit-grade. LCO₂ available now. VCO₂ at verification.',
    cta: 'How It Works',
    onClick: 'howItWorks' as const,
  },
  {
    icon: Handshake,
    color: '#81C784',
    audience: 'Partners & Registries',
    headline: 'Integrate the data layer',
    body: 'Connect Verra, Gold Standard, Isometric, Puro.earth, or ACR workflows to continuous, hardware-anchored MRV data streams. Reduce audit overhead. Improve credit integrity.',
    cta: 'Get in Touch',
    onClick: 'startProject' as const,
  },
];

type OnClickKey = 'startProject' | 'explorePlatform' | 'howItWorks';

export function ClosingCTA({
  onStartProject,
  onLandSteward,
  onExplorePlatform,
  onHowItWorks,
}: ClosingCTAProps) {
  const handlers: Record<OnClickKey, (() => void) | undefined> = {
    startProject: onStartProject,
    explorePlatform: onExplorePlatform,
    howItWorks: onHowItWorks,
  };

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="inline-block text-xs font-bold tracking-widest text-[#2E7D32] uppercase mb-4 border border-[#2E7D32]/30 rounded-full px-4 py-1">
            Choose Your Path
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0A1A0F] mb-6" style={{ fontFamily: 'Georgia, serif' }}>
            Get started with Mālama Labs
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Select your role in the climate data ecosystem.
          </p>
        </motion.div>

        {/* Audience cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {PATHS.map(({ icon: Icon, color, audience, headline, body, cta, onClick }, i) => (
            <motion.div
              key={audience}
              className="bg-[#F9FBF9] rounded-2xl border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: i * 0.12 }}
              viewport={{ once: true }}
            >
              <div className="h-1 w-full" style={{ backgroundColor: color }} />
              <div className="p-6 flex flex-col flex-1">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center mb-4"
                  style={{ backgroundColor: color + '22' }}
                >
                  <Icon className="w-5 h-5" style={{ color }} />
                </div>
                <p className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color }}>
                  {audience}
                </p>
                <h3 className="text-base font-bold text-[#0A1A0F] mb-3">{headline}</h3>
                <p className="text-sm text-gray-600 leading-relaxed flex-1">{body}</p>
                <Button
                  variant="outline"
                  size="sm"
                  className="mt-5 border-current text-[#0A1A0F] hover:bg-[#F1F8E9] flex items-center gap-1 w-full justify-center"
                  style={{ borderColor: color }}
                  onClick={handlers[onClick]}
                >
                  {cta} <ArrowRight className="w-3 h-3" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Final closing banner */}
        <motion.div
          className="bg-[#0A1A0F] rounded-2xl p-10 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-[#4CAF50] text-sm font-bold tracking-widest uppercase mb-3">Hawai'i Grown. Planet Scale.</p>
          <h3
            className="text-3xl md:text-4xl font-bold text-white mb-4 max-w-2xl mx-auto leading-tight"
            style={{ fontFamily: 'Georgia, serif' }}
          >
            The hardware is in the ground.<br />
            The data is on-chain.<br />
            <span className="text-[#4CAF50]">The trust layer for climate markets is being built now.</span>
          </h3>
          <p className="text-[#81C784] text-sm mb-8 max-w-xl mx-auto">
            Mālama means to care for, protect, and serve. Our system combines indigenous land stewardship
            with hardware-anchored cryptographic verification — because real care requires real proof.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button
              size="lg"
              onClick={onStartProject}
              className="bg-[#4CAF50] text-[#0A1A0F] hover:bg-[#388E3C] font-bold px-8"
            >
              Start Your Project
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={onExplorePlatform}
              className="border-[#4CAF50]/50 text-white hover:bg-[#1B5E20]/30"
            >
              Explore the Platform
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
