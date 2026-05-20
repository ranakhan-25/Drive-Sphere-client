"use client";
import { authClient } from "@/lib/auth-client";
import {
  Button,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import { toast } from "react-toastify";

const page = () => {

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const carData = Object.fromEntries(formData.entries());

    const { data, error } = await authClient.token();

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/api/add-car`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${data?.token}`,
        },
        body: JSON.stringify(carData),
      },
    );

    const result = await res.json();

    if (result) {
      toast(result.message);
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      
      {/* Title & Short Description */}
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">
          Add a New Car
        </h2>
        <p className="mt-3 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Fill out the form below to add a new car to the rental system. Provide
          accurate details including name, type, capacity, location, and image
          URL.
        </p>
      </div>

      {/* Form */}
      <Form
        className="flex w-full flex-col gap-4 bg-indigo-50 px-5 py-6 rounded-2xl shadow-md"
        onSubmit={onSubmit}
      >
        <div className="md:grid grid-cols-2 gap-5">
          <TextField isRequired name="carName" type="text">
            <Label className="dark:text-blue-500">Car Name</Label>
            <Input placeholder="Enter car Name" />
            <FieldError />
          </TextField>

          <TextField isRequired name="dailyRentPrice" type="number">
            <Label className="dark:text-blue-500">Price</Label>
            <Input placeholder="Price..." />
            <FieldError />
          </TextField>
        </div>

        <TextField
          isRequired
          name="description"
          type="text"
          minLength={8}
          validate={(value) =>
            value.length < 8
              ? "Description must be at least 8 characters"
              : null
          }
        >
          <Label className="dark:text-blue-500">Description</Label>
          <Input placeholder="Enter description" />
          <FieldError />
        </TextField>

        <TextField
          isRequired
          name="availabilityStatus"
          type="text"
          minLength={3}
          validate={(value) =>
            value.length < 3
              ? "Availability must be at least 3 characters"
              : null
          }
        >
          <Label className="dark:text-blue-500">Availability</Label>
          <Input placeholder="Enter Availability" />
          <FieldError />
        </TextField>

        <TextField
          isRequired
          name="imageUrl"
          type="url"
          validate={(value) =>
            !value.startsWith("https") ? "Enter a valid image URL" : null
          }
        >
          <Label className="dark:text-blue-500">Image URL</Label>
          <Input placeholder="Enter Image URL" />
          <FieldError />
        </TextField>

        <TextField isRequired name="seatCapacity" type="number">
          <Label className="dark:text-blue-500">Capacity</Label>
          <Input placeholder="Enter Capacity" />
          <FieldError />
        </TextField>

        <TextField isRequired name="carType" type="text">
          <Label className="dark:text-blue-500">Type</Label>
          <Input placeholder="Enter Car Type" />
          <FieldError />
        </TextField>

        <TextField isRequired name="pickupLocation" type="text">
          <Label className="dark:text-blue-500">Location</Label>
          <Input placeholder="Enter Location" />
          <FieldError />
        </TextField>

        <div className="flex gap-2 mt-4">
          <Button type="submit">Add Car</Button>
          <Button type="reset" variant="secondary">
            Cancel
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default page;
