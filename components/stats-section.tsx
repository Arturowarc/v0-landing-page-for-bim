export function StatsSection() {
  const stats = [
    { value: "60%", label: "Error Reduction" },
    { value: "20%", label: "Material Waste Cut" },
    { value: "100%", label: "US Standards Compliant" },
  ]

  return (
    <section className="py-24 md:py-32 bg-primary text-primary-foreground">
      <div className="container px-4 mx-auto">
        <div className="mx-auto max-w-5xl grid grid-cols-1 gap-8 md:grid-cols-3">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-4xl font-bold sm:text-5xl md:text-6xl">{stat.value}</p>
              <p className="mt-2 text-sm sm:text-base opacity-90">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
