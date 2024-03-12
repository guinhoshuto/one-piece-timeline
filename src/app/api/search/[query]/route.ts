import Timeline from "@/services/timeline";

const timeline = new Timeline()

export async function GET(req: Request, { params }: { params: { query: string }}){
    const { query } = params
    const data = await timeline.search(query)
    return Response.json(data)
}
