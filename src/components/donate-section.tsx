"use client"

import { useState } from "react"
import { Card } from "./../components/ui/card"
import { Button } from "./../components/ui/button"
import { Input } from "./../components/ui/input"
import { Label } from "./../components/ui/label"
import { RadioGroup, RadioGroupItem } from "./../components/ui/radio-group"

const amounts = [25, 50, 100, 250, 500]

export function DonateSection() {
  const [selectedAmount, setSelectedAmount] = useState<number | "custom">(100)
  const [customAmount, setCustomAmount] = useState("")

  return (
    <section id="donate" className="py-20 md:py-32">
      <div className="container">
        <div className="mx-auto max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
              {"Make Your Donation Today"}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
              {"Your generosity creates lasting change. Choose an amount below to get started."}
            </p>
          </div>

          <Card className="border-border bg-card p-8 md:p-12">
            <div className="space-y-8">
              <div>
                <Label className="text-base font-semibold text-foreground">Select Amount</Label>
                <div className="mt-4 grid grid-cols-3 gap-3 sm:grid-cols-5">
                  {amounts.map((amount) => (
                    <button
                      key={amount}
                      onClick={() => setSelectedAmount(amount)}
                      className={`rounded-lg border-2 px-4 py-3 text-center font-semibold transition-colors ${
                        selectedAmount === amount
                          ? "border-primary bg-primary text-primary-foreground"
                          : "border-border bg-background text-foreground hover:border-primary/50"
                      }`}
                    >
                      ${amount}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <Label htmlFor="custom-amount" className="text-base font-semibold text-foreground">
                  Or Enter Custom Amount
                </Label>
                <div className="relative mt-2">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
                  <Input
                    id="custom-amount"
                    type="number"
                    placeholder="Enter amount"
                    value={customAmount}
                    onChange={(e) => {
                      setCustomAmount(e.target.value)
                      setSelectedAmount("custom")
                    }}
                    className="pl-7"
                  />
                </div>
              </div>

              <div>
                <Label className="text-base font-semibold text-foreground">Donation Frequency</Label>
                <RadioGroup defaultValue="once" className="mt-4 space-y-3">
                  <div className="flex items-center space-x-3 rounded-lg border border-border bg-background p-4">
                    <RadioGroupItem value="once" id="once" />
                    <Label htmlFor="once" className="flex-1 cursor-pointer font-normal text-foreground">
                      One-time donation
                    </Label>
                  </div>
                  <div className="flex items-center space-x-3 rounded-lg border border-border bg-background p-4">
                    <RadioGroupItem value="monthly" id="monthly" />
                    <Label htmlFor="monthly" className="flex-1 cursor-pointer font-normal text-foreground">
                      Monthly donation
                      <span className="ml-2 text-sm text-muted-foreground">(Recommended)</span>
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="space-y-4">
                <div>
                  <Label htmlFor="email" className="text-foreground">
                    Email Address
                  </Label>
                  <Input id="email" type="email" placeholder="your@email.com" className="mt-2" />
                </div>
                <div>
                  <Label htmlFor="name" className="text-foreground">
                    Full Name
                  </Label>
                  <Input id="name" type="text" placeholder="John Doe" className="mt-2" />
                </div>
              </div>

              <Button
                size="lg"
                className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90 text-base"
              >
                Complete Donation
              </Button>

              <p className="text-center text-sm leading-relaxed text-muted-foreground">
                {"Your donation is secure and tax-deductible. You will receive a receipt via email."}
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
