"use client";

import { signIn, useSession } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";

export default function Login() {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session) {
      router.push("/dashboard");
    }
  }, [session, router]);

  return (
    <div className="h-screen flex">
      {/* LEFT */}
      <div className="hidden md:flex w-1/2 bg-black text-white items-center justify-center text-4xl font-bold">
        Board.
      </div>

      {/* RIGHT */}
      <div className="flex w-full md:w-1/2 items-center justify-center bg-gray-100">
        <div className="w-[350px]">
          <h1 className="text-3xl font-bold mb-2">Sign In</h1>
          <p className="text-gray-500 mb-6">Sign in to your account</p>

          {/* SOCIAL BUTTONS */}
          <div className="flex gap-4 mb-6">
            {/* GOOGLE */}
            <button
              onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
              className="flex items-center justify-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm border border-gray-100 w-full hover:shadow"
            >
              <FcGoogle size={16} />
              <span className="text-[11px] text-[#858585] font-normal text-center">
                Sign in with Google
              </span>
            </button>

            {/* APPLE */}
            <button className="flex items-center justify-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm border border-gray-100 w-full hover:shadow">
              <FaApple size={14} />
              <span className="text-[12px] text-[#858585] font-normal text-center">
                Sign in with Apple
              </span>
            </button>
          </div>

          {/* FORM */}
          <div className="bg-white p-6 rounded-xl shadow">
            <input
              placeholder="Email address"
              className="w-full mb-4 p-2 border rounded bg-gray-100"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full mb-4 p-2 border rounded bg-gray-100"
            />

            <p className="text-blue-500 text-sm mb-4 cursor-pointer">
              Forgot password?
            </p>

            <button className="w-full bg-black text-white py-2 rounded-lg">
              Sign In
            </button>
          </div>

          <p className="text-center mt-4 text-sm">
            Don’t have an account?{" "}
            <span className="text-blue-500 cursor-pointer">
              Register here
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}