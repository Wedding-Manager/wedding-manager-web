import Link from "next/link";
import React from "react";

export default function SubmitButton(props: { label?: string }) {
  const { label } = props;
  return (
    <button
      type="submit"
      className="border-solid bg-purple-500	 px-10  py-2 text-white mt-6 rounded-md  "
    >
      {label || "Submit"}
    </button>
  );
}

export function SignupButton(): JSX.Element {
  return (
    <Link
      className="border-solid bg-purple-500	 px-10  py-2 text-white mt-6 rounded-md  "
      href={"/signup"}
    >
      SignUp
    </Link>
  );
}
