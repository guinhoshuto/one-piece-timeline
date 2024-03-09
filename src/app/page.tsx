import dotenv from 'dotenv'
dotenv.config()

type Event = {
    period: string
    date: string
    description: string
    source: string
}

export default async function Home() {
  const data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}`)
  const timeline: Event[] = await data.json()

  return (
    <div>
      {timeline.map((t: Event, i:number) => (<div key={i}>{t.date}</div>))}
    </div>
  );
}

