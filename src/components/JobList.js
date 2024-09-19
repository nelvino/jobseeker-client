import { Link } from 'react-router-dom';
import { formatDate } from '../lib/formatters';

function JobList({ jobs }) {
  return (
    <ul className="box">
      {jobs.map((job) => (
        <JobItem key={job.id} job={job} />
      ))}
    </ul>
  );
}

function JobItem({ job }) {
  const title = job.company
    ? `${job.title} at ${job.company.name}`
    : job.title;
  
  return (
    <li className="media">
      <div className="media-left">
        <p className="has-text-grey">{formatDate(job.date)}</p>
      </div>
      <div className="media-content">
        <Link to={`/jobs/${job.id}`} className="title is-5 has-text-link">
          {title}
        </Link>
      </div>
      <div className="media-right">
        <Link to={`/jobs/${job.id}`} className="button is-small is-info">
          View Details
        </Link>
      </div>
    </li>
  );
}

export default JobList;