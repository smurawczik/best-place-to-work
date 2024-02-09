import { useParams } from "react-router-dom";
import { useGetJobDetails } from "../../hooks/useGetJobDetails";
import { JobDetails } from "../../components/JobDetails";

export const JobPage = () => {
  const { id } = useParams();

  useGetJobDetails(id);

  return <JobDetails />;
};
