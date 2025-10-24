/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable no-console */
import React from "react";
import { FaEye, FaEdit, FaTrashAlt, FaSpinner } from "react-icons/fa";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { deleteThisResume } from "@/Services/resumeAPI";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

function ResumeCard({ resume, refreshData }) {
  const [loading, setLoading] = React.useState(false);
  const [openAlert, setOpenAlert] = React.useState(false);
  const navigate = useNavigate();

  const handleDelete = async () => {
    setLoading(true);
    try {
      await deleteThisResume(resume._id);
      toast.success("Resume deleted successfully!");
    } catch (error) {
      console.error("Error deleting resume:", error.message);
      toast.error("Failed to delete resume. Please try again.");
    } finally {
      setLoading(false);
      setOpenAlert(false);
      refreshData();
    }
  };

  return (
    <div
      className={`group relative bg-white rounded-xl shadow-md border border-blue-200 hover:border-blue-400 transition-all duration-300 ease-in-out transform hover:-translate-y-1`}
    >
      {/* Card Body */}
      <div className="p-6 flex flex-col justify-between h-full">
        {/* Resume Title */}
        <div className="flex flex-col items-center text-center">
          <h2 className="text-lg font-semibold text-gray-800 mb-1">
            {resume.title || "Untitled Resume"}
          </h2>
          <p className="text-sm text-gray-500">
            Last updated:{" "}
            <span className="font-medium text-gray-700">
              {new Date(resume.updatedAt).toLocaleDateString()}
            </span>
          </p>
        </div>

        {/* Divider */}
        <div className="mt-5 mb-3 border-t border-gray-100"></div>

        {/* Action Buttons */}
        <div className="flex items-center justify-center gap-4">
          <Button
            variant="ghost"
            onClick={() => navigate(`/dashboard/view-resume/${resume._id}`)}
            className="hover:bg-blue-50"
          >
            <FaEye className="text-gray-600 hover:text-blue-600 text-lg transition duration-300" />
          </Button>

          <Button
            variant="ghost"
            onClick={() => navigate(`/dashboard/edit-resume/${resume._id}`)}
            className="hover:bg-blue-50"
          >
            <FaEdit className="text-gray-600 hover:text-blue-600 text-lg transition duration-300" />
          </Button>

          <Button
            variant="ghost"
            onClick={() => setOpenAlert(true)}
            className="hover:bg-red-50"
          >
            <FaTrashAlt className="text-gray-600 hover:text-red-600 text-lg transition duration-300" />
          </Button>
        </div>
      </div>

      {/* Delete Confirmation Dialog */}
      <AlertDialog open={openAlert} onOpenChange={setOpenAlert}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete this resume?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. It will permanently remove your
              resume and all associated data.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel disabled={loading}>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleDelete} disabled={loading}>
              {loading ? (
                <FaSpinner className="animate-spin mr-2" />
              ) : (
                "Delete"
              )}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}

export default ResumeCard;
