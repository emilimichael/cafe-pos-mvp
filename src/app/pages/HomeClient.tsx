"use client";

import { useState } from "react";
import { EmiButton } from "@/components/Button/EmiButton";
import { Dialog } from "@/components/Dialog/Dialog";

export function HomeClient() {
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <>
      <EmiButton buttonText="Open Dialog" onClick={() => setDialogOpen(true)} />
      <Dialog
        isOpen={dialogOpen}
        onClose={() => setDialogOpen(false)}
        text="Are you sure?"
      />
    </>
  );
}
