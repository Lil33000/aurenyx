"use client";

import { Dialog, DialogContent, DialogOverlay } from "@/components/ui/dialog";
import { X } from "lucide-react";

export default function CalModal({ open, onClose }) {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogOverlay className="fixed inset-0 bg-black/80 backdrop-blur-md z-[99999]" />

      <DialogContent
        className="relative z-[100000] w-[90%] md:w-[800px] h-[80vh] p-0 border border-goldSoft/30 
        bg-gradient-to-b from-blackDeep to-blackElevate rounded-2xl 
        shadow-[0_0_35px_rgba(201,169,97,0.25)] 
        data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 
        data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-50 text-goldSoft hover:text-whiteSoft transition-colors"
        >
          <X size={24} />
        </button>

        {/* Iframe Cal.com */}
        <iframe
          src="https://cal.com/aurenyx-studio/appel-strategie-aurenyx-studio?layout=month_view"
          className="absolute inset-0 w-full h-full border-none rounded-2xl"
          allow="clipboard-write; microphone; camera"
          loading="lazy"
        />
      </DialogContent>
    </Dialog>
  );
}
