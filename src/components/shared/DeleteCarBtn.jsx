"use client";

import { authClient } from "@/lib/auth-client";
import { AlertDialog, Button } from "@heroui/react";
import { useRouter } from "next/navigation";
import React from "react";
import { toast } from "react-toastify";

const DeleteCarBtn = ({ carId }) => {
  const router = useRouter();
 

  // Delete Function
  const handleDeleteCar = async () => {

     const { data, error } = await authClient.token();
    try {
      
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/api/cars/${carId}`,
        {
          method: "DELETE",
          headers: {
            authorization: `Bearer ${data.token}`,
          },
        }
      );

     const deletedData = await res.json();

      if (res.ok) {
        toast.success(deletedData?.message || "Car deleted successfully");
        router.refresh();
      } else {
        toast.error(deletedData?.message || "Failed to delete car");
      }
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  return (
    <AlertDialog>
      {/* Open Button */}
      <Button className="px-6 py-6 font-medium rounded-lg bg-red-600 text-white hover:bg-red-700 transition">
        Delete Car
      </Button>

      {/* Modal */}
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-100 rounded-2xl">

            {/* Close Button */}
            <AlertDialog.CloseTrigger />

            {/* Header */}
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />

              <AlertDialog.Heading>
                Delete Car Permanently?
              </AlertDialog.Heading>
            </AlertDialog.Header>

            {/* Body */}
            <AlertDialog.Body>
              <p className="text-gray-600">
                This action will permanently delete this car and
                all related data. This action cannot be undone.
              </p>
            </AlertDialog.Body>

            {/* Footer */}
            <AlertDialog.Footer>
              {/* Cancel */}
              <Button slot="close" variant="tertiary">
                Cancel
              </Button>

              {/* Confirm Delete */}
              <Button
                onClick={handleDeleteCar}
                className="bg-red-600 text-white hover:bg-red-700"
              >
                Confirm Delete
              </Button>
            </AlertDialog.Footer>

          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
};

export default DeleteCarBtn;