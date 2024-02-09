import { useAppSelector } from "../../../redux/store.hooks";

export const JobDetails = () => {
  const job = useAppSelector((state) => state.jobs.selectedJob);

  if (!job) return null;

  return (
    <div>
      <h1>{job?.title}</h1>
      <p>{job?.description}</p>
    </div>
  );
};
