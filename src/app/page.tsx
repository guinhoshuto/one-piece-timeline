type Event = {
    period: string
    date: string
    description: string
    source: string
}

export default async function Home() {
  const data = await fetch('/api')
  const timeline: Event[] = await data.json()

  return (
    <div>
      {timeline.map((t: Event, i:number) => (<div key={i}>{t.date}</div>))}
    </div>
  );
}

