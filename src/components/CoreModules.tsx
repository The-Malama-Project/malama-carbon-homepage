import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, HardDrive, Link2, Layers, TrendingUp, Droplets, Leaf } from 'lucide-react';
import { Button } from './ui/button';

interface CoreModulesProps {
  onNavigateToPlatform?: (section?: string) => void;
}

const STACK_LAYERS = [
  {
    step: '01',
    icon: HardDrive,
    title: 'Genesis 300 DePin Node',
    color: '#1B5E20',
    description:
      'Raspberry Pi Zero 2W with EEPROM-provisioned Device DID. Private key burned at manufacture. Solar UPS, IP67 enclosure, RS485 soil probes, LoRaWAN/LTE. Deployed in the field — not in a rack.',
    tag: 'Hardware Layer',
  },
  {
    step: '02',
    icon: Link2,
    title: 'ECDSA/SHA-256 Device Signing',
    color: '#2E7D32',
    description:
      'Every sensor reading is signed by the device private key before it leaves the hardware. Tamper-evidence is cryptographic, not procedural. The signature cannot be retroactively applied by software.',
    tag: 'Trust Layer',
  },
  {
    step: '03',
    icon: Layers,
    title: 'Cardano Mainnet Anchoring',
    color: '#388E3C',
    description:
      'SaveCards emitted hourly to Cardano mainnet via CIP-25/CIP-68. Immutable, timestamped, cryptographically linked to the Device DID. Dual-chain via LayerZero OApp bridge to Base for EVM liquidity.',
    tag: 'Blockchain Layer',
  },
  {
    step: '04',
    icon: TrendingUp,
    title: 'LCO₂ Pre-Finance → VCO₂ Credits',
    color: '#4CAF50',
    description:
      'LCO₂ pre-finance instruments issue against the live data stream at ~65% of expected verified value — unlocking capital in 90 days instead of 24 months. Convert to VCO₂ compliance-grade credits at verification.',
    tag: 'Finance Layer',
  },
];

const MARKETS = [
  { icon: Leaf, label: 'Carbon', sub: 'LCO₂ / VCO₂ lifecycle' },
  { icon: Leaf, label: 'Biodiversity', sub: 'Species co-benefit attestation' },
  { icon: Droplets, label: 'Water Quality', sub: 'Continuous multi-sensor' },
  { icon: Layers, label: 'Soil Health', sub: 'RS485 probe array' },
  { icon: TrendingUp, label: 'Grid Emissions', sub: 'Scope 2 data feed' },
  { icon: TrendingUp, label: 'Prediction Markets', sub: 'Kalshi / Polymarket oracle' },
];

export function CoreModules({ onNavigateToPlatform }: CoreModulesProps) {
  return (
    <section className="py-24 px-6 bg-[#F9FBF9]">
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
            The Stack
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0A1A0F] mb-6" style={{ fontFamily: 'Georgia, serif' }}>
            Hardware to Chain to Market
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Four layers that transform a field sensor reading into a settlement-grade
            climate data record — in under an hour, continuously, at less than $2/tCO₂e.
          </p>
        </motion.div>

        {/* Stack layers */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {STACK_LAYERS.map(({ step, icon: Icon, title, color, description, tag }, i) => (
            <motion.div
              key={title}
              className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: i * 0.12 }}
              viewport={{ once: true }}
            >
              {/* Top accent bar */}
              <div className="h-1 w-full" style={{ backgroundColor: color }} />
              <div className="p-6">
                {/* Step badge */}
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-xs font-bold"
                    style={{ backgroundColor: color }}
                  >
                    {step}
                  </div>
                  <span
                    className="text-xs font-bold tracking-widest uppercase"
                    style={{ color }}
                  >
                    {tag}
                  </span>
                </div>
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center mb-4"
                  style={{ backgroundColor: color + '18' }}
                >
                  <Icon className="w-5 h-5" style={{ color }} />
                </div>
                <h3 className="text-base font-bold text-[#0A1A0F] mb-3">{title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Multi-market section */}
        <motion.div
          className="bg-[#0A1A0F] rounded-2xl p-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-8">
            <p className="text-[#4CAF50] text-sm font-bold tracking-widest uppercase mb-2">Multi-Market Output</p>
            <h3 className="text-2xl font-bold text-white" style={{ fontFamily: 'Georgia, serif' }}>
              One node. Six simultaneous revenue markets.
            </h3>
            <p className="text-[#81C784] text-sm mt-2">
              Infrastructure cost is shared. Each market generates independent revenue from the same hardware deployment.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
            {MARKETS.map(({ icon: Icon, label, sub }) => (
              <div
                key={label}
                className="bg-[#0F2318] border border-[#2E7D32]/40 rounded-xl p-4 flex flex-col items-center text-center gap-2"
              >
                <div className="w-8 h-8 rounded-full bg-[#1B5E20] flex items-center justify-center">
                  <Icon className="w-4 h-4 text-[#4CAF50]" />
                </div>
                <p className="text-white text-sm font-semibold">{label}</p>
                <p className="text-[#81C784] text-xs">{sub}</p>
              </div>
            ))}
          </div>

          <div className="flex justify-center">
            <Button
              onClick={() => onNavigateToPlatform?.()}
              className="bg-[#4CAF50] text-[#0A1A0F] hover:bg-[#388E3C] font-bold flex items-center gap-2"
            >
              See the Full Platform <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
