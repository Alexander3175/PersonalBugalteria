import "@core/styles/global.css";
import "@core/styles/variables.css";
import { Outlet } from "react-router";
import { useQuery } from "@tanstack/react-query";
import { pingBackend } from "@/core/utils/ping";

const App = () => {
  const { error, isLoading } = useQuery({
    queryKey: ["ping"],
    queryFn: pingBackend,
    refetchInterval: 5000,
  });

  if (isLoading) return <div>Перевірка бекенду...</div>;
  if (error) return <div>Помилка: {(error as Error).message}</div>;

  return (
    <div className="wrapper">
      <div className="main-conteiner">
        <Outlet />
      </div>
    </div>
  );
};

export default App;
