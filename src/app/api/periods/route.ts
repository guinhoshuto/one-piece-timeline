import { NextResponse } from "next/server";
import Timeline from "@/services/timeline";

const timeline = new Timeline()

export async function GET() {
    const data = await timeline.listPeriods()
    return NextResponse.json(data)
}