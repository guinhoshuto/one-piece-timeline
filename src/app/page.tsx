import dotenv from 'dotenv'
import { InferGetServerSidePropsType } from 'next'
dotenv.config()

type Event = {
    period: string
    date: string
    description: string
    source: string
}

export async function getTimeline(){
  const data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}`)
  const timeline: Event[] = await data.json()
  return timeline
}

export default async function Home() {
  const timeline = await getTimeline()

  return (
    <div>
      {timeline.map((t: Event, i:number) => (<div key={i}>{t.date}</div>))}
    </div>
  );
}
