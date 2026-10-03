import React from 'react'

const stats = [
  {
    title: "Total Users",
    value: "1000",
  },
  {
    title: "Total Orders",
    value: "1000",
  },
  {
    title: "Total Products",
    value: "1000",
  },
]

export default function DashboardPage() {
  return (
    <section>
      <div>
        <h2 className="text-3xl font-semibold">Dashboard</h2>
        <p className='mt-2 text-muted-foreground'>Welcoms back!</p>
      </div>

      <div className='mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-3'>
        {stats.map((stat) => {
          return (
          <div key={stat.title} className='rounded-2xl border border-border bg-background p-6 transition hover:border-primary/40 hover:shadow-sm'>
            <div className='flex items-start justify-between'>
              <div>
                <p className='text-sm text-muted-foreground'>{stat.title}</p>
                <h3 className='mt-3 text-4xl font-semibold'>{stat.value}</h3>
              </div>
            </div>
          </div>
          )
        })}
      </div>
    </section>
  )
}
