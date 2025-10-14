

export function Mission() {
  return (
    <section id="mission" className="bg-muted/50 py-20 md:py-32">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div>
            <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
              {"Our Mission: Building a Better Tomorrow"}
            </h2>
            <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
              {
                "SUROVI IS A FAITH was founded on the belief that every person deserves access to basic necessities, education, and opportunities for growth. We work directly with communities to understand their needs and create sustainable solutions."
              }
            </p>
            <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
              {
                "Through partnerships with local organizations and dedicated volunteers, we provide clean water, educational resources, healthcare services, and economic empowerment programs to underserved communities worldwide."
              }
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-lg border border-border bg-card p-6">
                <div className="text-2xl font-bold text-primary">100%</div>
                <div className="mt-1 text-sm font-medium text-foreground">Transparency</div>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {"Every dollar tracked and reported"}
                </p>
              </div>
              <div className="rounded-lg border border-border bg-card p-6">
                <div className="text-2xl font-bold text-primary">95%</div>
                <div className="mt-1 text-sm font-medium text-foreground">Direct Impact</div>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {"Of donations go directly to programs"}
                </p>
              </div>
            </div>
          </div>

          <div className="relative h-[400px] lg:h-[600px] rounded-2xl overflow-hidden">
            <img
              src="/diverse-group-of-happy-children-in-a-classroom-lea.jpg"
              alt="Children learning in classroom"
              
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
