import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { formatDate } from '../lib/formatters';
import { useJob } from '../lib/graphql/hooks';

function JobPage() {
  const { jobId } = useParams();
  const { job, loading, error } = useJob(jobId);

  if (loading) {
    return <div className="has-text-centered">Loading...</div>;
  }

  if (error) {
    return <div className="notification is-danger">Data unavailable</div>;
  }

  return (
    <div className="container mt-5">
      <h1 className="title is-2 has-text-link has-text-centered-mobile">{job.title}</h1>
      <h2 className="subtitle is-4 has-text-centered-mobile">
        <Link to={`/companies/${job.company.id}`} className="has-text-weight-bold has-text-primary">
          {job.company.name}
        </Link>
      </h2>
      <div className="box">
        <div className="block has-text-grey-light">
          Posted: {formatDate(job.date, 'long')}
        </div>
        <p className="block">{job.description}</p>
      </div>
    </div>
  );
}

export default JobPage;