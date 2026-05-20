"use client";
import { authClient } from "@/lib/auth-client";
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
import { useRouter } from "next/navigation";
import { BiCar } from "react-icons/bi";
import { toast } from "react-toastify";

const UpdateCar = ({ data }) => {
  const router = useRouter();
  const {
    _id,
    dailyRentPrice,
    imageUrl,
    carType,
    description,
    pickupLocation,
    availabilityStatus,
  } = data;

  const onSubmit = async (e) => {
    
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const updatedCar = Object.fromEntries(formData.entries());
    const { data: tokenData } = await authClient.token();

    try {
      const token = tokenData?.token;
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/api/cars/${_id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(updatedCar),
        },
      );

      if (!res.ok) {
        throw new Error("Failed to update car");
      }
      const data = await res.json();

      if (data) {
        toast.success(data.message);
        router.refresh();
      }
    } catch (error) {
      toast.error("Error updating car. Try again.");
    }
  };

  return (
    <Modal>
      <Button className="px-6 py-6 font-medium rounded-lg bg-indigo-100 text-black  hover:bg-indigo-200 transition">
        Update Car
      </Button>
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-lg">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Icon className="bg-indigo-100 text-indigo-600">
                <BiCar className="size-5" />
              </Modal.Icon>
              <Modal.Heading>Update Car</Modal.Heading>
              <p className="mt-1.5 text-sm text-gray-500 dark:text-gray-400">
                Modify the car details below and save changes.
              </p>
            </Modal.Header>
            <Modal.Body className="p-6">
              <Surface variant="default">
                <Form onSubmit={onSubmit} className="flex flex-col gap-4">
                  <TextField
                    name="dailyRentPrice"
                    type="number"
                    defaultValue={dailyRentPrice}
                  >
                    <Label>Daily Rent Price</Label>
                    <Input placeholder="Enter price" />
                    <FieldError />
                  </TextField>

                  <TextField name="carType" defaultValue={carType}>
                    <Label>Car Type</Label>
                    <Input placeholder="SUV, Sedan, etc." />
                    <FieldError />
                  </TextField>

                  <TextField
                    name="pickupLocation"
                    defaultValue={pickupLocation}
                  >
                    <Label>Pickup Location</Label>
                    <Input placeholder="Enter pickup location" />
                    <FieldError />
                  </TextField>

                  <TextField
                    name="availabilityStatus"
                    defaultValue={availabilityStatus}
                  >
                    <Label>Availability</Label>
                    <Input placeholder="Available / Not Available" />
                    <FieldError />
                  </TextField>

                  <TextField name="description" defaultValue={description}>
                    <Label>Description</Label>
                    <Input placeholder="Enter description" />
                    <FieldError />
                  </TextField>

                  <TextField name="imageUrl" type="url" defaultValue={imageUrl}>
                    <Label>Image URL</Label>
                    <Input placeholder="Enter image URL" />
                    <FieldError />
                  </TextField>

                  <div className="flex gap-2 mt-4">
                    <Button slot="close" variant="secondary">
                      Cancel
                    </Button>
                    <Button
                      type="submit"
                      slot="close"
                      className="bg-indigo-600 text-white"
                    >
                      Save Changes
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

export default UpdateCar;
