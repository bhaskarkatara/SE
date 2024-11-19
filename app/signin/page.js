"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSignIn = (role) => {
    // In a real application, you would verify credentials against a database or API
    if (
      email === "admin@example.com" &&
      password === "admin123" &&
      role === "admin"
    ) {
      router.push("/admin");
    } else if (
      email === "student@example.com" &&
      password === "student123" &&
      role === "student"
    ) {
      router.push("/student");
    } else {
      setError("Invalid credentials");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4 text-center">Sign In</h2>
        {error && (
          <Alert variant="destructive" className="mb-4">
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}
        <form className="space-y-4">
          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <Button
              type="button"
              className="w-full"
              onClick={() => handleSignIn("admin")}
            >
              Sign in as Admin
            </Button>
            <Button
              type="button"
              className="w-full"
              variant="outline"
              onClick={() => handleSignIn("student")}
            >
              Sign in as Student
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
