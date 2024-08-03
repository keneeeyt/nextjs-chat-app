import { Card } from "@/components/ui/card";
import React from "react";


const ConversationFallback = () => {
  return (
    <Card className="hidden lg:flex h-full w-full p-2 items-center justify-center bg-secondary text-secondary-foreground
    ">
      Please select or start a conversation to begin.
    </Card>
  );
};

export default ConversationFallback;
