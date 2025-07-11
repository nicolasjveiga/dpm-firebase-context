import { useEffect, useState } from "react";

import {
  getAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  User,
} from "firebase/auth";

/**
 * Firebase authentication hook.
 * @returns Access to main auth service using email and password strategy, plus user object and loading state flag.
 */
export default function useAuth() {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<User | null>(null);

  /**
   * Wrapper for login users with loading state flag for conditional renders.
   * @param email An active user registered in your firebase project.
   * @param password User's password.
   */
  const login = async (email: string, password: string) => {
    setLoading(true);
    try {
      await signInWithEmailAndPassword(getAuth(), email, password);
    } finally {
      setLoading(false);
    }
  };

  /**
   * Wrapper for logout users.
   */
  const logout = async () => {
    await signOut(getAuth());
  };

  /**
   * Wrapper for creating new Users
   * @param email user email
   * @param password user password (min 6 chars)
   */
  const registerUser = async (email: string, password: string) => {
    await createUserWithEmailAndPassword(getAuth(), email, password);
  };

  useEffect(() => {
    onAuthStateChanged(getAuth(), (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
      setLoading(false);
    });
  }, []);

  return { loading, user, login, logout, registerUser };
}