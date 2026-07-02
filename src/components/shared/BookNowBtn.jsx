"use client";

import { authClient } from "@/lib/auth-client";
import React, { useState } from "react";
import { toast } from "react-toastify";
import {
  Button,
  FieldError,
  Form,
  Input,
  Label,
  Modal,
  Surface,
  TextField,
} from "@heroui/react";

const BookNowBtn = ({ data }) => {
  const {
    _id,
    carName,
    imageUrl,
    pickupLocation,
    dailyRentPrice,
    booking_count,
  } = data;

  const { data: session } = authClient.useSession();

  const [driverNeeded, setDriverNeeded] = useState("No");
  const [note, setNote] = useState("");
  const [days, setDays] = useState(1);

  
  const handleIncrement = () => {
    setDays((prev) => prev + 1);
  };

  
  const handleDecrement = () => {
    setDays((prev) => (prev > 1 ? prev - 1 : 1));
  };

  
  const handleSubmit = async (e) => {
    e.preventDefault();

    const userId = session?.user?.id;

    const bookingDate = new Date();

    const { data: tokenData } = await authClient.token();

    const newData = {
      carId: _id,
      name: carName,
      carImage: imageUrl,
      userId,
      bookingDate,
      dailyRentPrice,
      location: pickupLocation,
      driverNeeded,
      note,
      days,
    };

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/api/booking`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${tokenData.token}`,
          },
          body: JSON.stringify(newData),
        }
      );

      const result = await res.json();

      if (!res.ok) {
        return toast.error(result.message || "Booking failed!");
      }

      toast.success(result.message || "Booking successful!");
    } catch (error) {
      toast.error("Error booking car. Try again.");
    }
  };

  return (
    <Modal>
      {/* Trigger Button */}
      <Button className="py-2 h-12 px-6 cursor-pointer rounded-lg bg-[#e6bcf3] text-[#830ea7] font-semibold shadow-md  transition-all duration-300">
        Book Now
      </Button>

      {/* Modal */}
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-md">
            <Modal.CloseTrigger />

            {/* Header */}
            <Modal.Header>
              <Modal.Heading>
                Book {carName}
              </Modal.Heading>

              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                Fill in the details to confirm your booking.
              </p>
            </Modal.Header>

            {/* Body */}
            <Modal.Body className="p-6">
              <Surface variant="default">

                {/* Booking Count */}
                <div className="mb-4">
                  <p className="text-sm font-medium text-indigo-600">
                    Booking Count: {booking_count || 0}
                  </p>
                </div>

                <Form
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-4"
                >

                  {/* Driver Needed */}
                  <div>
                    <Label>Driver Needed</Label>

                    <select
                      value={driverNeeded}
                      onChange={(e) =>
                        setDriverNeeded(e.target.value)
                      }
                      className="w-full px-3 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-sm focus:ring-2 focus:ring-indigo-500"
                    >
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                    </select>
                  </div>

                  {/* Note */}
                  <TextField
                    isRequired
                    name="note"
                    value={note}
                    onChange={(value) => setNote(value)}
                  >
                    <Label>Special Note</Label>

                    <Input placeholder="Write any special note..." />

                    <FieldError />
                  </TextField>

                  {/* Booking Days */}
                  <div>
                    <Label>Number of Days</Label>

                    <div className="flex items-center gap-2 mt-2">

                      {/* Minus */}
                      <Button
                        type="button"
                        onClick={handleDecrement}
                        className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600"
                      >
                        -
                      </Button>

                      {/* Days Input */}
                      <Input
                        type="number"
                        value={days}
                        readOnly
                        className="w-16 text-center"
                      />

                      {/* Plus */}
                      <Button
                        type="button"
                        onClick={handleIncrement}
                        className="bg-green-500 text-white px-3 py-1 rounded-md hover:bg-green-600"
                      >
                        +
                      </Button>

                    </div>
                  </div>

                  {/* Total Price */}
                  <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                    <p className="text-sm text-gray-500">
                      Total Price
                    </p>

                    <h2 className="text-2xl font-bold text-indigo-600">
                      ${dailyRentPrice * days}
                    </h2>
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-2 mt-4">

                    <Button
                      slot="close"
                      variant="secondary"
                    >
                      Cancel
                    </Button>

                    <Button
                      type="submit"
                      className="bg-indigo-600 text-white"
                    >
                      Confirm Booking
                    </Button>

                  </div>
                </Form>
              </Surface>
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
};

export default BookNowBtn;