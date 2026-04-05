import React, { useEffect, useState } from "react";
import { supabase } from "./supabase";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkSession = async () => {
      const { data } = await supabase.auth.getSession();
      setSession(data.session);
      setLoading(false);
    };

    checkSession();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  // ❌ Not logged in → redirect
  if (!session) {
    return <Navigate to="/" replace />;
  }

  // ✅ Logged in → allow access
  return children;
}
