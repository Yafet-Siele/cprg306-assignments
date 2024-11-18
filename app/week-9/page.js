"use client";

import Link from "next/link";
import { useUserAuth } from "./_utils/auth-context";

export default function LoginPage() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  async function signIn() {
    try {
      await gitHubSignIn();
    } catch (error) {
      console.dir(error);
    }
  }

  async function signOut() {
    try {
      await firebaseSignOut();
    } catch (error) {
      console.dir(error);
    }
  }

  return (
    <main className="h-screen bg-black text-white">
      <p className="font-bold text-4xl mb-5">Shopping List App</p>
      {user ? (
        <div className="text-lg">
          <p>Welcome, {user.displayName} ({user.email})</p>
          <button onClick={signOut} className="text-lg hover:underline">Sign Out</button><br></br>
          <Link href="week-9\shopping-list" className={"hover:underline"}>Continue to Shopping List </Link>
        </div>
      ) : (
        <div>
          <button onClick={signIn} className="text-lg hover:underline">Sign In with GitHub</button>
        </div>
      )}
    </main>
  );
}