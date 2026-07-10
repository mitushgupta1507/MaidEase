import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import WorkerHero from "../components/WorkerDetails/WorkerHero";
import AboutWorker from "../components/WorkerDetails/AboutWorker";
import PricingCard from "../components/WorkerDetails/PricingCard";
import Reviews from "../components/WorkerDetails/Reviews";
import SimilarWorkers from "../components/WorkerDetails/SimilarWorkers";

import api from "../services/api";

const WorkerDetails = () => {
  const { id } = useParams();

  const [worker, setWorker] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWorker = async () => {
      try {
        const { data } = await api.get(`/workers/${id}`);
        setWorker(data.data);
      } catch (error) {
        console.error("Failed to load worker:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchWorker();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-2xl font-bold">
        Loading...
      </div>
    );
  }

  if (!worker) {
    return (
      <div className="min-h-screen flex items-center justify-center text-2xl font-bold text-red-600">
        Worker Not Found
      </div>
    );
  }

  return (
    <main className="min-h-screen overflow-hidden bg-slate-50">

      <WorkerHero worker={worker} />

      <AboutWorker worker={worker} />

      <PricingCard worker={worker} />

      <Reviews worker={worker} />

      <SimilarWorkers worker={worker} />

    </main>
  );
};

export default WorkerDetails;