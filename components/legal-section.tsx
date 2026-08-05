"use client"

import { useLanguage } from "@/lib/language-context"
import { Card, CardContent } from "@/components/ui/card"

const legalItems = [
  {
    key: "status",
    labelKey: "legal.status",
    valueKey: "legal.statusValue",
  },
  {
    key: "sk",
    labelKey: "legal.sk",
    valueKey: "legal.skValue",
  },
  {
    key: "akta",
    labelKey: "legal.akta",
    valueKey: "legal.aktaValue",
  },
  {
    key: "npwp",
    labelKey: "legal.npwp",
    valueKey: "legal.npwpValue",
  },
]

export function LegalSection() {
  const { t } = useLanguage()

  return (
    <section id="legal" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            {t("legal.title")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed text-pretty">
            {t("legal.description")}
          </p>
        </div>

        <Card className="max-w-4xl mx-auto">
          <CardContent className="p-6 lg:p-8">
            <div className="flex justify-center mb-8">
              <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium">
                {t("legal.badge")}
              </span>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {legalItems.map((item) => (
                <div key={item.key} className="space-y-1">
                  <p className="text-sm text-muted-foreground">{t(item.labelKey)}</p>
                  <p className="font-medium text-foreground">{t(item.valueKey)}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
