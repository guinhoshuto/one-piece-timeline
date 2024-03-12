import data from '../../public/timeline.json'

type Event = {
    period: string
    date: string
    description: string
    source: string
}
export default class Timeline{
    async getData(){
        const timeline = await data
        return JSON.parse(JSON.stringify(timeline))
    }

    async listPeriods(){
        const timeline = await this.getData()
        const periodsList = [... new Set(timeline.map((t: Event) => t.period))]
        const periods = periodsList.map((p: string | unknown, i: number) => {
            const period = timeline.filter((t: Event) => t.period === p)

            return {
                id:i , 
                period: p,
                first_event: period[0].date,
                last_event: period[period.length - 1].date
            }
        })
        return periods
    }

    async listDates(){
        const timeline = await this.getData()
        const datesList = [... new Set(timeline.map((t: Event) => t.date))]
        const dates = datesList.map((d: string | unknown, i: number) => {
            const date = timeline.filter((t: Event) => t.date === d)
            return {
                id: i,
                period: date[0].period,
                date: d,
                event_count: date.length
            }
        })
        return dates
    }

    async search(query: string){
        const timeline = await this.getData()
        const result: Event[] = []

        timeline.forEach((event: Event) => {
            if(event.description.toLowerCase().includes(query.toLowerCase())) result.push(event) 
        })
        return result
    }
}