import type { Metadata } from "next";
import VendorRegistrationForm from "@/components/VendorRegistrationForm";

export const metadata: Metadata = {
  title: "Vendor Portal Registration | Energizese",
};

export default function VendorRegistrationPage() {
  return <VendorRegistrationForm />;
}
