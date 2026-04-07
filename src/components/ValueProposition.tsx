import React from 'react';
import { motion } from 'motion/react';
import { Button } from './ui/button';
import { ShieldCheck, Zap, Globe, ArrowRight } from 'lucide-react';

interface ValuePropositionProps {
  onExplorePlatform?: () => void;
}

const PILLARS = [
  {
    icon: ShieldCheck,
    color: '#4CAF50',
    title: 'Hardware-Signed at Source',
    body: 'Every data point originates from a device with a burned-in DID and ECDSA private key. The signature is created before the data leaves the sensor — not in software, not in the cloud. Tamper-evidence is physical, not assumed.',
    contrast: 'Traditional MRV: manual logs, episodic audits, software attestation only.',
  },
  {
    icon: Zap,
    color: '#00ACC1',
    title: 'Continuous, Not Episodic',
    body: 'SaveCards stream hourly to Cardano mainnet. Verification is not a 12-month audit cycle — it is a live data feed. LCO₂ pre-finance instruments issue against the stream. VCO₂ compliance credits mint when thresholds are met.',
    contrast: 'Traditional MRV: $20K–$50K per project, 18–24 month credit cycle.',
  },
  {
    icon: Globe,
    color: '#A5D6A7',
    title: 'One Node. Six Markets.',
    body: 'A single Genesis 300 field deployment simultaneously generates verified data for carbon accounting, biodiversity attestation, soil health, water quality, grid emissions, and prediction market settlement. Infrastructure cost is shared across all revenue streams.',
    contrast: 'Competitors: single-market tools that require separate deployments per use case.',
  },
];

export function ValueProposition({ onExplorePlatform }: ValuePropositionProps) {
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
            The Thesis
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0A1A0F] mb-6" style={{ fontFamily: 'Georgia, serif' }}>
            From Planet to Protocol
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Climate markets have had a data provenance problem for decades. Mālama's answer
            is cryptographically signed, immutable, on-chain environmental data — the trust
            layer that makes real-world impact investable.
          </p>
        </motion.div>

        {/* Three pillars */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {PILLARS.map(({ icon: Icon, color, title, body, contrast }, i) => (
            <motion.div
              key={title}
              className="bg-[#F1F8E9] rounded-2xl overflow-hidden border border-[#C8E6C9]"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              viewport={{ once: true }}
            >
              {/* Top accent */}
              <div className="h-1 w-full" style={{ backgroundColor: color }} />
              <div className="p-7">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center mb-5"
                  style={{ backgroundColor: color + '22' }}
                >
                  <Icon className="w-5 h-5" style={{ color }} />
                </div>
                <h3 className="text-xl font-bold text-[#0A1A0F] mb-3">{title}</h3>
                <p className="text-gray-700 text-sm leading-relaxed mb-5">{body}</p>
                <div className="bg-white rounded-lg p-3 border border-[#C8E6C9]">
                  <p className="text-xs text-gray-500 italic">{contrast}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom proof bar */}
        <motion.div
          className="bg-[#0A1A0F] rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div>
            <p className="text-[#4CAF50] text-sm font-bold tracking-widest uppercase mb-1">Live Proof</p>
            <p className="text-white text-xl font-bold" style={{ fontFamily: 'Georgia, serif' }}>
              Genesis 300 node op5pro-field-a is emitting hourly SaveCards on Cardano mainnet right now.
            </p>
            <p className="text-[#81C784] text-sm mt-1">
              Idaho City ERW site · ECDSA-signed · CIP-25/CIP-68 · Live since early 2025
            </p>
          </div>
          <Button
            onClick={onExplorePlatform}
            className="bg-[#4CAF50] text-[#0A1A0F] hover:bg-[#388E3C] font-bold whitespace-nowrap flex items-center gap-2 shrink-0"
          >
            Explore the Platform <ArrowRight className="w-4 h-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
