"use client"

import { Card } from "./../../../components/ui/card"
import { Button } from "./../../../components/ui/button"
import { Input } from "./../../../components/ui/input"
import { Label } from "./../../../components/ui/label"
import { RadioGroup, RadioGroupItem } from "./../../../components/ui/radio-group"
import { Checkbox } from "./../../../components/ui/checkbox"
import { useState } from "react"
import { Heart, Shield, Award, Users, TrendingUp } from "lucide-react"

const amounts = [25, 50, 100, 250, 500, 1000]

const impactData = {
  25: "Provides school supplies for 2 children",
  50: "Feeds a family of 4 for a week",
  100: "Provides clean water access for 10 people",
  250: "Funds medical care for 5 patients",
  500: "Supports a child's education for a year",
  1000: "Builds a water well for a community",
}

export function DonationPage() {
  const [customAmount, setCustomAmount] = useState("")
  const [selectedAmount, setSelectedAmount] = useState("100")

  const currentImpact = impactData[Number(selectedAmount) as keyof typeof impactData] || "Makes a significant impact"

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-secondary/10 to-primary/5 py-16">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Transform Lives Today
            </h1>
            <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
              Your generosity creates lasting change. Every donation brings hope to those who need it most.
            </p>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-12 border-b">
        <div className="container">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-3">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <div className="text-3xl font-bold text-foreground">50K+</div>
              <div className="text-sm text-muted-foreground">Lives Impacted</div>
            </div>
            <div className="text-center">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-3">
                <Heart className="h-6 w-6 text-primary" />
              </div>
              <div className="text-3xl font-bold text-foreground">10K+</div>
              <div className="text-sm text-muted-foreground">Active Donors</div>
            </div>
            <div className="text-center">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-3">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <div className="text-3xl font-bold text-foreground">95%</div>
              <div className="text-sm text-muted-foreground">To Programs</div>
            </div>
            <div className="text-center">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-3">
                <TrendingUp className="h-6 w-6 text-primary" />
              </div>
              <div className="text-3xl font-bold text-foreground">$5M+</div>
              <div className="text-sm text-muted-foreground">Raised This Year</div>
            </div>
          </div>
        </div>
      </section>

      {/* Donation Form */}
      <section className="py-16">
        <div className="container">
          <div className="grid gap-8 lg:grid-cols-3">
            {/* Main Form */}
            <div className="lg:col-span-2">
              <Card className="p-8">
                <h2 className="text-2xl font-bold text-foreground mb-6">Make Your Donation</h2>
                <form className="space-y-6">
                  <div className="space-y-4">
                    <Label className="text-base font-semibold">Select Amount</Label>
                    <RadioGroup
                      value={selectedAmount}
                      onValueChange={setSelectedAmount}
                      className="grid grid-cols-3 gap-4"
                    >
                      {amounts.map((amount) => (
                        <div key={amount}>
                          <RadioGroupItem value={amount.toString()} id={`amount-${amount}`} className="peer sr-only" />
                          <Label
                            htmlFor={`amount-${amount}`}
                            className="flex items-center justify-center rounded-lg border-2 border-muted bg-background p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/5 cursor-pointer transition-colors font-semibold"
                          >
                            ${amount}
                          </Label>
                        </div>
                      ))}
                    </RadioGroup>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="custom">Or Enter Custom Amount</Label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground font-semibold">
                        $
                      </span>
                      <Input
                        id="custom"
                        type="number"
                        placeholder="0.00"
                        className="pl-7"
                        value={customAmount}
                        onChange={(e:any) => setCustomAmount(e.target.value)}
                      />
                    </div>
                  </div>

                  {/* Impact Display */}
                  <Card className="bg-primary/5 p-4 border-primary/20">
                    <div className="flex items-start gap-3">
                      <Heart className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <p className="font-semibold text-foreground mb-1">Your Impact</p>
                        <p className="text-sm text-muted-foreground">{currentImpact}</p>
                      </div>
                    </div>
                  </Card>

                  <div className="space-y-4">
                    <Label className="text-base font-semibold">Donation Frequency</Label>
                    <RadioGroup defaultValue="once" className="grid grid-cols-2 gap-4">
                      <div>
                        <RadioGroupItem value="once" id="once" className="peer sr-only" />
                        <Label
                          htmlFor="once"
                          className="flex items-center justify-center rounded-lg border-2 border-muted bg-background p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/5 cursor-pointer transition-colors"
                        >
                          One-time
                        </Label>
                      </div>
                      <div>
                        <RadioGroupItem value="monthly" id="monthly" className="peer sr-only" />
                        <Label
                          htmlFor="monthly"
                          className="flex flex-col items-center justify-center rounded-lg border-2 border-muted bg-background p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/5 cursor-pointer transition-colors"
                        >
                          <span>Monthly</span>
                          <span className="text-xs text-muted-foreground mt-1">Maximize your impact</span>
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div className="space-y-4">
                    <Label className="text-base font-semibold">Your Information</Label>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="donor-first">First Name *</Label>
                        <Input id="donor-first" placeholder="John" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="donor-last">Last Name *</Label>
                        <Input id="donor-last" placeholder="Doe" required />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="donor-email">Email *</Label>
                      <Input id="donor-email" type="email" placeholder="john@example.com" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="donor-phone">Phone Number</Label>
                      <Input id="donor-phone" type="tel" placeholder="+1 (555) 123-4567" />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="anonymous" />
                      <label
                        htmlFor="anonymous"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Make this donation anonymous
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="newsletter" defaultChecked />
                      <label
                        htmlFor="newsletter"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Send me updates about how my donation is making an impact
                      </label>
                    </div>
                  </div>

                  <Button type="submit" size="lg" className="w-full text-base">
                    Complete Donation
                  </Button>

                  <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
                    <Shield className="h-4 w-4" />
                    <span>Secure payment • Tax-deductible • Instant receipt</span>
                  </div>
                </form>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <Card className="p-6">
                <h3 className="font-semibold text-foreground mb-4">Why Donate?</h3>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-xs text-primary">✓</span>
                    </div>
                    <span>95% of donations go directly to programs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-xs text-primary">✓</span>
                    </div>
                    <span>Tax-deductible 501(c)(3) organization</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-xs text-primary">✓</span>
                    </div>
                    <span>Transparent reporting on fund usage</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-xs text-primary">✓</span>
                    </div>
                    <span>Regular updates on your impact</span>
                  </li>
                </ul>
              </Card>

              <Card className="p-6">
                <h3 className="font-semibold text-foreground mb-4">Other Ways to Give</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="font-medium text-foreground">Corporate Matching</p>
                    <p className="text-muted-foreground">Double your impact with employer matching</p>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Planned Giving</p>
                    <p className="text-muted-foreground">Leave a lasting legacy</p>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Stock Donations</p>
                    <p className="text-muted-foreground">Tax-efficient giving option</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-primary/5 border-primary/20">
                <h3 className="font-semibold text-foreground mb-2">Need Help?</h3>
                <p className="text-sm text-muted-foreground mb-4">Our team is here to assist you with your donation</p>
                <Button variant="outline" className="w-full bg-transparent" asChild>
                  <a href="mailto:donations@hopefoundation.org">Contact Us</a>
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Donor Recognition */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Donor Recognition Levels</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We're grateful for donors at every level. Here's how we recognize your generosity.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
            <Card className="p-6 text-center">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-amber-100 mb-4">
                <Award className="h-6 w-6 text-amber-600" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Friend</h3>
              <p className="text-2xl font-bold text-primary mb-2">$1 - $99</p>
              <p className="text-sm text-muted-foreground">Thank you letter & tax receipt</p>
            </Card>

            <Card className="p-6 text-center">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 mb-4">
                <Award className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Supporter</h3>
              <p className="text-2xl font-bold text-primary mb-2">$100 - $499</p>
              <p className="text-sm text-muted-foreground">Newsletter + website recognition</p>
            </Card>

            <Card className="p-6 text-center">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-purple-100 mb-4">
                <Award className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Champion</h3>
              <p className="text-2xl font-bold text-primary mb-2">$500 - $999</p>
              <p className="text-sm text-muted-foreground">Annual report listing + impact updates</p>
            </Card>

            <Card className="p-6 text-center border-primary/50">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-4">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Visionary</h3>
              <p className="text-2xl font-bold text-primary mb-2">$1,000+</p>
              <p className="text-sm text-muted-foreground">All benefits + exclusive events</p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
