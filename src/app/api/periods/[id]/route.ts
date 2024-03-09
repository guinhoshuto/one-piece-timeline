import Timeline from "@/services/timeline";

const timeline = new Timeline()

export async function GET(req: Request, { params }: { params: { id: string } }) { 
    const { id } = params
    const data = await timeline.listPeriods()
    const period = data.find(period => period.id === +id)
    if(period){
        return Response.json(period)
    }
    return Response.json({})
}