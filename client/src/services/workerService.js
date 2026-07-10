import api from "./api";

export const getWorkers = async (params = {}) => {
  const { data } = await api.get("/workers", {
    params,
  });

  return data;
};

export const getWorkerById = async (id) => {
  const { data } = await api.get(`/workers/${id}`);
  return data;
};

export const getAdminWorkers = async () => {
  const { data } = await api.get("/admin/workers");
  return data;
};

export const deleteWorker = async (id) => {
  const { data } = await api.delete(`/admin/workers/${id}`);
  return data;
};

export const updateWorkerStatus = async (id, status) => {
  const { data } = await api.patch(`/admin/workers/${id}/status`, { status });
  return data;
};
export const createWorker = async (workerData) => {
  const { data } = await api.post(
    "/workers",
    workerData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );

  return data;
};