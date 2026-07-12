"use client";

import { useCallback, useState } from "react";
import { useRouter } from "next/navigation";

import { useDropzone } from "react-dropzone";
import toast from "react-hot-toast";
import { UploadCloud } from "lucide-react";

import { useUpload } from "@/hooks/useUpload";
import AIProcessingModal from "@/components/ui/AIProcessingModal";

export default function UploadCard() {
  const router = useRouter();

  const {
    upload,
    loading,
    processingStep,
  } = useUpload();

  const [showModal, setShowModal] = useState(false);

  const onDrop = useCallback(
    async (acceptedFiles: File[]) => {
      if (acceptedFiles.length === 0) return;

      setShowModal(true);

      try {
        const result = await upload(acceptedFiles[0]);

        if (!result?.success) {
          throw new Error("Upload failed");
        }

        toast.success(
          "Financial report analyzed successfully!"
        );
        
        await new Promise((r) =>
          setTimeout(r, 800)
        );
        
        setShowModal(false);
        
        router.push("/dashboard");

      } catch (err) {

        setShowModal(false);

        console.error(err);

        const message =
          err instanceof Error
            ? err.message
            : "Upload failed.";
        
        toast.error(message);
      }
    },
    [upload, router]
  );

  const {
    getRootProps,
    getInputProps,
    open,
    isDragActive,
  } = useDropzone({
    onDrop,
    noClick: true,
    multiple: false,
    accept: {
      "text/csv": [".csv"],
    },
  });

  return (
    <>
      <AIProcessingModal
        open={showModal}
        step={processingStep}
      />

      <section className="rounded-2xl border border-slate-200 bg-white shadow-sm">

        <div className="p-8">

          <h2 className="text-2xl font-bold">
            Upload Financial Report
          </h2>

          <p className="mt-2 text-slate-500">
            Upload a CSV financial statement for AI analysis.
          </p>

          <div
            {...getRootProps()}
            className={`mt-6 cursor-pointer rounded-xl border-2 border-dashed p-8 transition ${
              isDragActive
                ? "border-blue-600 bg-blue-50"
                : "border-slate-300 bg-slate-50"
            }`}
          >

            <input {...getInputProps()} />

            <div className="flex flex-col items-center">

              <UploadCloud
                size={48}
                className="text-blue-600"
              />

              <h3 className="mt-4 text-lg font-semibold">
                {isDragActive
                  ? "Drop your file here"
                  : "Drag & Drop your CSV"}
              </h3>

              <button
                type="button"
                onClick={open}
                disabled={loading}
                className="mt-5 rounded-lg bg-blue-600 px-6 py-3 text-white hover:bg-blue-700 disabled:opacity-50"
              >
                {loading
                  ? "Analyzing..."
                  : "Choose File"}
              </button>

              <p className="mt-4 text-xs text-slate-400">
                Supported format: CSV
              </p>

            </div>

          </div>

        </div>

      </section>
    </>
  );
}
