"use client";

import { authClient } from "@/lib/auth-client";
import { Mail, CalendarCheck, ShieldCheck } from "lucide-react";
import Image from "next/image";

export default function UserProfile() {
  const { data: session } = authClient.useSession();

  const user = session?.user || {};

  const {
    id,
    name,
    email,
    emailVerified,
    image,
    createdAt,
    updatedAt,
  } = user;

  if (!session?.user) {
    return (
      <section className="max-w-3xl mx-auto py-10 text-center">
        Loading profile...
      </section>
    );
  }

  return (
    <section className="max-w-3xl my-5 mx-auto px-6 py-10 bg-white dark:bg-gray-900 rounded-2xl shadow-lg">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-center gap-6">

        {/* Avatar */}
        {image && (
          <Image
            width={100}
            height={100}
            src={image}
            alt={name || "User"}
            className="w-32 h-32 rounded-full object-cover shadow-md hover:scale-105 transition-transform"
          />
        )}

        {/* Info */}
        <div className="space-y-2 text-center md:text-left">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
            {name}
          </h2>

          <p className="flex items-center justify-center md:justify-start gap-2 text-gray-600 dark:text-gray-300">
            <Mail size={18} /> {email}
          </p>

          <p className="flex items-center justify-center md:justify-start gap-2 text-gray-600 dark:text-gray-300">
            <ShieldCheck size={18} />
            {emailVerified ? "Verified" : "Not Verified"}
          </p>
        </div>
      </div>

      {/* Details */}
      <div className="mt-8 space-y-3 text-gray-700 dark:text-gray-300">
        <p>
          <span className="font-semibold">User ID:</span> {id}
        </p>

        <p className="flex items-center gap-2">
          <CalendarCheck size={18} />
          Created At:
          {createdAt
            ? new Date(createdAt).toLocaleString()
            : "N/A"}
        </p>

        <p className="flex items-center gap-2">
          <CalendarCheck size={18} />
          Updated At:
          {updatedAt
            ? new Date(updatedAt).toLocaleString()
            : "N/A"}
        </p>
      </div>
    </section>
  );
}