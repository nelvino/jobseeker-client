import { useState } from "react";
import JobList from "../components/JobList";
import PaginationBar from '../components/PaginationBar';
import { useJobs } from "../lib/graphql/hooks";

const JOBS_PER_PAGE = 10;

function HomePage() {
  const [currentPage, setCurrentPage] = useState(1);
  const { jobs, loading, error } = useJobs(JOBS_PER_PAGE, (currentPage - 1) * JOBS_PER_PAGE);

  if (loading) {
    return <div className="has-text-centered">Loading...</div>;
  }
  
  if (error) {
    return <div className="notification is-danger">Data unavailable</div>;
  }

  const totalPages = Math.ceil(jobs.totalCount / JOBS_PER_PAGE);

  return (
    <div className="container mt-5">
      <h1 className="title has-text-centered">Job Seeker App</h1>
      <div className="box">
        <PaginationBar currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
        <JobList jobs={jobs.items} />
      </div>
    </div>
  );
}

export default HomePage;