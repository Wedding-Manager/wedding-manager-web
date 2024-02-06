import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

export default function SubmitButton(props: {
  label?: string;
  isLoading?: boolean;
}) {
  const { label, isLoading } = props;
  return (
    <button
      disabled={isLoading}
      type="submit"
      className="border-solid bg-purple-500	 px-10  py-2 text-white mt-6 rounded-md  "
    >
      {label || "Submit"}
    </button>
  );
}

export function SignupButton(props: any): JSX.Element {
  return (
    <Link
      className="border-solid bg-purple-500	 px-10  py-2 text-white mt-6 rounded-md  "
      href={"/signup"}
    >
      SignUp
    </Link>
  );
}
