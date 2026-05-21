"use client"

import { useState } from "react"
import { Heart, CreditCard, Building2, Wallet, QrCode, Globe, Shield, Check, Info } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"
import { motion } from "framer-motion"

const presetAmounts = [
  { value: 50000, label: "Rp 50K" },
  { value: 100000, label: "Rp 100K" },
  { value: 250000, label: "Rp 250K" },
  { value: 500000, label: "Rp 500K" },
  { value: 1000000, label: "Rp 1M" },
  { value: 2500000, label: "Rp 2.5M" },
]

const presetAmountsUSD = [
  { value: 5, label: "$5" },
  { value: 10, label: "$10" },
  { value: 25, label: "$25" },
  { value: 50, label: "$50" },
  { value: 100, label: "$100" },
  { value: 250, label: "$250" },
]

const paymentMethods = [
  { id: "bank", icon: Building2, label: "Bank Transfer", description: "100+ Indonesian Banks" },
  { id: "card", icon: CreditCard, label: "Credit/Debit Card", description: "Visa, Mastercard, JCB" },
  { id: "ewallet", icon: Wallet, label: "E-Wallet", description: "GoPay, OVO, DANA, ShopeePay" },
  { id: "qris", icon: QrCode, label: "QRIS", description: "Scan & Pay with any app" },
]

const donationImpacts = [
  { amount: "Rp 50.000", impact: "1 family voucher for Pasar Tradisional Gratis", impactId: "1 voucher keluarga untuk Pasar Tradisional Gratis" },
  { amount: "Rp 250.000", impact: "5 family vouchers + cultural materials", impactId: "5 voucher keluarga + materi budaya" },
  { amount: "Rp 1.000.000", impact: "Youth cultural workshop support", impactId: "Dukungan workshop budaya generasi muda" },
  { amount: "Rp 5.000.000", impact: "Community program sponsorship", impactId: "Sponsor program komunitas" },
]

export function DonationSection() {
  const { language } = useLanguage()
  const [currency, setCurrency] = useState<"IDR" | "USD">("IDR")
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null)
  const [customAmount, setCustomAmount] = useState("")
  const [selectedPayment, setSelectedPayment] = useState<string | null>(null)
  const [donationType, setDonationType] = useState<"once" | "monthly">("once")

  const amounts = currency === "IDR" ? presetAmounts : presetAmountsUSD

  // Bilingual content
  const content = {
    label: language === "id" ? "Dukung Gerakan Kami" : "Support Our Movement",
    title: language === "id" ? "Dukung Gerakan Budaya & Pengabdian Sosial" : "Support Our Cultural & Social Movement",
    description: language === "id" 
      ? "Kontribusi Anda membantu pengembangan program budaya, kegiatan sosial masyarakat, dokumentasi tradisi lokal, dan pemberdayaan generasi muda."
      : "Your contribution helps develop cultural programs, community social activities, local tradition documentation, and youth empowerment.",
    selectAmount: language === "id" ? "Pilih Nominal" : "Select Amount",
    oneTime: language === "id" ? "Sekali" : "One-time",
    monthly: language === "id" ? "Bulanan" : "Monthly",
    customAmount: language === "id" ? "Masukkan nominal lainnya" : "Enter custom amount",
    paymentMethod: language === "id" ? "Metode Pembayaran" : "Payment Method",
    submit: language === "id" ? "Donasi Sekarang" : "Donate Now",
    secured: language === "id" ? "Diamankan oleh Bayarind Payment Gateway" : "Secured by Bayarind Payment Gateway",
    yourImpact: language === "id" ? "Dampak Donasi Anda" : "Your Donation Impact",
    whyTrust: language === "id" ? "Komitmen Kami" : "Our Commitment",
    trustSecure: language === "id" ? "Enkripsi SSL 256-bit" : "256-bit SSL encryption",
    trustBank: language === "id" ? "Terdaftar di Bank Indonesia" : "Registered with Bank Indonesia",
    trustGlobal: language === "id" ? "Pembayaran internasional didukung" : "International payments supported",
    transparencyNote: language === "id" 
      ? "Program pendanaan dan laporan kegiatan akan dipublikasikan secara bertahap."
      : "Funding programs and activity reports will be published periodically.",
  }

  const handleDonate = () => {
    const amount = selectedAmount || parseInt(customAmount)
    if (!amount || !selectedPayment) return

    // Bayarind integration - redirect to payment
    const paymentUrl = `https://checkout.bayarind.id/?amount=${amount}&currency=${currency}&merchant=anbhakti&type=${donationType}`
    window.open(paymentUrl, "_blank")
  }

  const formatCurrency = (amount: number) => {
    if (currency === "IDR") {
      return new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", minimumFractionDigits: 0 }).format(amount)
    }
    return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(amount)
  }

  return (
    <section id="donate" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-6"
          >
            <Heart className="w-4 h-4" />
            {content.label}
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl lg:text-5xl font-bold text-foreground mb-4 text-balance"
          >
            {content.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-lg text-pretty"
          >
            {content.description}
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Donation Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-2 bg-card rounded-2xl p-6 lg:p-8 border border-border shadow-sm"
          >
            {/* Currency Selector */}
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-lg font-semibold text-foreground">{content.selectAmount}</h3>
              <div className="flex items-center gap-2 p-1 bg-muted rounded-lg">
                <button
                  onClick={() => setCurrency("IDR")}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                    currency === "IDR" ? "bg-background text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  IDR
                </button>
                <button
                  onClick={() => setCurrency("USD")}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                    currency === "USD" ? "bg-background text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <Globe className="w-4 h-4" /> USD
                </button>
              </div>
            </div>

            {/* Donation Type */}
            <div className="flex gap-3 mb-6">
              <button
                onClick={() => setDonationType("once")}
                className={`flex-1 py-3 rounded-lg text-sm font-medium transition-colors border ${
                  donationType === "once"
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-background text-foreground border-border hover:border-primary/50"
                }`}
              >
                {content.oneTime}
              </button>
              <button
                onClick={() => setDonationType("monthly")}
                className={`flex-1 py-3 rounded-lg text-sm font-medium transition-colors border ${
                  donationType === "monthly"
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-background text-foreground border-border hover:border-primary/50"
                }`}
              >
                {content.monthly}
              </button>
            </div>

            {/* Preset Amounts */}
            <div className="grid grid-cols-3 gap-3 mb-4">
              {amounts.map((preset) => (
                <button
                  key={preset.value}
                  onClick={() => {
                    setSelectedAmount(preset.value)
                    setCustomAmount("")
                  }}
                  className={`py-4 rounded-lg text-sm font-semibold transition-all border ${
                    selectedAmount === preset.value
                      ? "bg-primary text-primary-foreground border-primary scale-105"
                      : "bg-background text-foreground border-border hover:border-primary/50"
                  }`}
                >
                  {preset.label}
                </button>
              ))}
            </div>

            {/* Custom Amount */}
            <div className="mb-8">
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground font-medium">
                  {currency === "IDR" ? "Rp" : "$"}
                </span>
                <input
                  type="number"
                  placeholder={content.customAmount}
                  value={customAmount}
                  onChange={(e) => {
                    setCustomAmount(e.target.value)
                    setSelectedAmount(null)
                  }}
                  className="w-full pl-12 pr-4 py-4 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
                />
              </div>
            </div>

            {/* Payment Methods */}
            <h3 className="text-lg font-semibold text-foreground mb-4">{content.paymentMethod}</h3>
            <div className="grid grid-cols-2 gap-3 mb-8">
              {paymentMethods.map((method) => (
                <button
                  key={method.id}
                  onClick={() => setSelectedPayment(method.id)}
                  className={`flex items-center gap-3 p-4 rounded-lg border transition-all ${
                    selectedPayment === method.id
                      ? "bg-primary/5 border-primary"
                      : "bg-background border-border hover:border-primary/50"
                  }`}
                >
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                    selectedPayment === method.id ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                  }`}>
                    <method.icon className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <p className="font-medium text-foreground text-sm">{method.label}</p>
                    <p className="text-xs text-muted-foreground">{method.description}</p>
                  </div>
                </button>
              ))}
            </div>

            {/* Submit Button */}
            <Button
              onClick={handleDonate}
              disabled={!(selectedAmount || customAmount) || !selectedPayment}
              className="w-full py-6 text-lg font-semibold bg-primary text-primary-foreground hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Heart className="w-5 h-5 mr-2" />
              {content.submit} {(selectedAmount || customAmount) && formatCurrency(selectedAmount || parseInt(customAmount))}
            </Button>

            {/* Security Badge */}
            <div className="flex items-center justify-center gap-2 mt-4 text-sm text-muted-foreground">
              <Shield className="w-4 h-4" />
              <span>{content.secured}</span>
            </div>
          </motion.div>

          {/* Impact Sidebar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="space-y-6"
          >
            {/* Impact Card */}
            <div className="bg-card rounded-2xl p-6 border border-border">
              <h3 className="text-lg font-semibold text-foreground mb-4">{content.yourImpact}</h3>
              <div className="space-y-4">
                {donationImpacts.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground text-sm">{item.amount}</p>
                      <p className="text-sm text-muted-foreground">{language === "id" ? item.impactId : item.impact}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Trust Badges */}
            <div className="bg-card rounded-2xl p-6 border border-border">
              <h3 className="text-lg font-semibold text-foreground mb-4">{content.whyTrust}</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-green-500/10 flex items-center justify-center">
                    <Shield className="w-4 h-4 text-green-600" />
                  </div>
                  <p className="text-sm text-foreground">{content.trustSecure}</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center">
                    <Building2 className="w-4 h-4 text-blue-600" />
                  </div>
                  <p className="text-sm text-foreground">{content.trustBank}</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center">
                    <Globe className="w-4 h-4 text-amber-600" />
                  </div>
                  <p className="text-sm text-foreground">{content.trustGlobal}</p>
                </div>
              </div>
            </div>

            {/* Transparency Note */}
            <div className="p-4 bg-muted/50 rounded-xl border border-border">
              <div className="flex items-start gap-3">
                <Info className="w-5 h-5 text-muted-foreground shrink-0 mt-0.5" />
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {content.transparencyNote}
                </p>
              </div>
            </div>

            {/* Powered by Bayarind */}
            <div className="text-center p-4 bg-muted/50 rounded-xl">
              <p className="text-xs text-muted-foreground mb-2">Powered by</p>
              <div className="flex items-center justify-center gap-2">
                <span className="font-semibold text-foreground">Bayarind</span>
                <span className="text-xs px-2 py-0.5 bg-green-500/10 text-green-600 rounded-full">PCI DSS</span>
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                {language === "id" ? "Payment gateway terpercaya Indonesia" : "Indonesia's trusted payment gateway"}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
