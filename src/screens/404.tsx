import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Page404 = () => {
  const navigate = useNavigate()
  useEffect(() => {
    setTimeout(() => {
      navigate('/');
    }, 5000);
  }, []);
  return (
    <main className="p-4">
      <h1>There's nothing here!</h1>
    </main>
  );
};