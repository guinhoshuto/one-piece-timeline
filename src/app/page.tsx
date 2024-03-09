type Event = {
    period: string
    date: string
    description: string
    source: string
}

export default async function Home() {
  const data = await fetch('http://localhost:3001/api')
  const timeline: Event[] = await data.json()

  return (
    <div>
      {timeline.map((t: Event, i:number) => (<div key={i}>{t.date}</div>))}
    </div>
  );
}

