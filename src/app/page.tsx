'use client'

import dotenv from 'dotenv'
import { InferGetServerSidePropsType } from 'next'
import { useEffect, useState } from 'react'
dotenv.config()

type Event = {
    period: string
    date: string
    description: string
    source: string
}

export default function Home() {
  const [timeline, setTimeline] = useState<Event[]>([])

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}`)
      .then((res: Response) => res.json())
      .then((tl: Event[]) => setTimeline(tl))

  }, [])


  return (
    <div>
      {timeline.map((t: Event, i:number) => (<div key={i}>{t.date}</div>))}
    </div>
  );
}
