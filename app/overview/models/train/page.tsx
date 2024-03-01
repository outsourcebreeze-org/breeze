import TrainModelZone from "@/components/TrainModelZone";
import VideoComponent from "@/components/ui/VideoComponent";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

export default async function Index() {
  return (
    <div className="w-full max-w-2xl mx-auto">
      <div
        id="train-model-container"
        className="flex flex-1 flex-col gap-2 px-2"
      >
          <Link href="/overview" className="text-sm w-fit">
          <Button variant={"outline"}>
            <FaArrowLeft className="mr-2" />
            Go Back
          </Button>
        </Link>
        <VideoComponent apiKey='eyJzb3VsSWQiOiJkZG5hLW91dHNvdXJjZWJyZWV6ZWI2ZGQtLXRlc3RhcGkiLCJhdXRoU2VydmVyIjoiaHR0cHM6Ly9kaC5hei5zb3VsbWFjaGluZXMuY2xvdWQvYXBpL2p3dCIsImF1dGhUb2tlbiI6ImFwaWtleV92MV9iMGYzNGJiNS1kYmUyLTRhYjktYjBhMC0wMzIzZWI1MDg3OWIifQ==' />
      </div>
    </div>
  );
}
