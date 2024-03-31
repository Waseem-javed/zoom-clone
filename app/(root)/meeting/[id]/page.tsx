"use client";
import React, { useState } from "react";
import { useUser } from "@clerk/nextjs";
import { StreamCall, StreamTheme } from "@stream-io/video-react-sdk";
import MeetingSetup from "@/components/MeetingSetup";
import MeetingRoom from "@/components/MeetingRoom";
import { useCallGetById } from "@/hooks/useGetById";
import Loader from "@/components/Loader";

const Meeting = ({ params }: { params: { id: string } }) => {
  const { user, isLoaded } = useUser();

  const [isSetupComplete, setIsSetupComplete] = useState(false);

  const { call, isCallLoading } = useCallGetById(params.id);

  if (!isLoaded || isCallLoading) return <Loader />;

  return (
    <section className="h-screen w-full">
      <StreamCall call={call}>
        <StreamTheme>
          {!isSetupComplete ? (
            <MeetingSetup setIsSetupComplete={setIsSetupComplete} />
          ) : (
            <MeetingRoom />
          )}
        </StreamTheme>
      </StreamCall>
    </section>
  );
};

export default Meeting;
