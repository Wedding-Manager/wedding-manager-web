import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

export default function SubmitButton(props: { label?: string }) {
  const { label } = props;
  return (
    // <motion.div
    //   className=" px-10 flex justify-center w-full"
    //   whileHover={{
    //     scale: 1.1,
    //     textShadow: "0px 0px 8px rgb(255,255,255)",
    //     boxShadow: "0px 0px 8px rgb(255,255,255)",
    //   }}
    // >
    <button
      type="submit"
      className="border-solid bg-purple-500	 px-10  py-2 text-white mt-6 rounded-md  "
    >
      {label || "Submit"}
    </button>
    // </motion.div>
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
