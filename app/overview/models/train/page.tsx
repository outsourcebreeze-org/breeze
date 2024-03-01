import TrainModelZone from "@/components/TrainModelZone";
import VideoComponent from "@/components/ui/VideoComponent";
import { Button } from "@/components/ui/button";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

export default async function Index() {
  return (
    <div className="w-full max-w-2xl mx-auto">
      <div
      id="train-model-container"
        className="flex flex-1 flex-col gap-2 px-2 w-full h-screen">

          <Link href="/overview" className="text-sm w-fit">
          <Button variant={"outline"}>
            <FaArrowLeft className="mr-2" />
            Go Back
          </Button>
        </Link>
        <VideoComponent apiKey={process.env.NEXT_PUBLIC_SOULMACHINE_API_KEY!} />
      </div>
    </div>
  );
}
