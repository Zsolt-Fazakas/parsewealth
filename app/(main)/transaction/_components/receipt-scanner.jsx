"use client";

import React, { useEffect, useRef } from "react";
import { scanReceipt } from "@/actions/transaction";
import { Camera, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import useFetch from "@/hooks/use-fetch";
import { toast } from "sonner";

export const ReceiptScanner = ({ onScanComplete }) => {
  const fileInputRef = useRef(null);

  const {
    loading: scanLoading,
    fn: scanReceiptFn,
    data: scanData,
  } = useFetch(scanReceipt);

  const handleReceiptScan = async (file) => {
    if (file.size > 5 * 1024 * 1024) {
      toast.error("File size must be less than 5MB");
      return;
    }
    await scanReceiptFn(file);
  };

  useEffect(() => {
    if (scanData && !scanLoading) {
      onScanComplete(scanData);
      toast.success("Receipt scanned successfully");
    }
  }, [scanData, scanLoading]);

  return (
    <div>
      <input
        type="file"
        ref={fileInputRef}
        className="hidden"
        accept="image/*"
        capture="environment"
        onChange={(e) => {
          const file = e.target.files[0];
          if (file) {
            handleReceiptScan(file);
          }
        }}
      />
      <Button
        type="button"
        className="w-full h-10 bg-gradient-to-br from-[#065f46] via-[#047857] to-[#064e3b] animate-gradient hover:opacity-90 transition-opacity text-white hover:text-white"
        onClick={() => fileInputRef.current.click()}
        disabled={scanLoading}
      >
        {scanLoading ? (
          <>
            <Loader2 className="mr-2 animate-spin" />
            <span>Scanning receipt...</span>
          </>
        ) : (
          <>
            <Camera className="mr-2" />
            Scan Receipt with AI
          </>
        )}
      </Button>
    </div>
  );
};
