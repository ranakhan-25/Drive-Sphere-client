"use client";

import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import React from "react";
import { toast } from "react-toastify";

import {
  AlertDialog,
  Button,
} from "@heroui/react";

const DeleteBookingCar = ({ id }) => {
  const router = useRouter();

  // Delete Function
  const handleDelete = async () => {
    const { data } = await authClient.token();

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/api/booking/${id}`,
        {
          method: "DELETE",
          headers: {
            authorization: `Bearer ${data.token}`,
          },
        }
      );

      const result = await res.json();

      if (!res.ok) {
        return toast.error(
          result.message || "Failed to delete booking"
        );
      }

      toast.success(
        result.message || "Booking deleted successfully!"
      );

      router.refresh();

    } catch (error) {
      console.log(error);

      toast.error(
        "Error deleting booking. Try again."
      );
    }
  };

  return (
    <AlertDialog>

      {/* Open Button */}
      <Button className="mt-4 px-4 py-2 rounded-lg bg-red-600 text-white font-medium hover:bg-red-700 transition">
        Delete Booking
      </Button>

      {/* Modal */}
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-[420px] rounded-2xl">

            {/* Close Button */}
            <AlertDialog.CloseTrigger />

            {/* Header */}
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />

              <AlertDialog.Heading>
                Delete Booking?
              </AlertDialog.Heading>
            </AlertDialog.Header>

            {/* Body */}
            <AlertDialog.Body>
              <p className="text-gray-600 dark:text-gray-300">
                Are you sure you want to delete this booking?
                This action cannot be undone.
              </p>
            </AlertDialog.Body>

            {/* Footer */}
            <AlertDialog.Footer>

              {/* Cancel */}
              <Button
                slot="close"
                variant="secondary"
              >
                Cancel
              </Button>

              {/* Confirm Delete */}
              <Button
                onClick={handleDelete}
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

export default DeleteBookingCar;