import { useParams } from 'react-router';
import JobList from '../components/JobList';
import { useCompany } from '../lib/graphql/hooks';

function CompanyPage() {
  const { companyId } = useParams();
  const { company, loading, error } = useCompany(companyId);

  if (loading) {
    return <div className="has-text-centered">Loading...</div>;
  }

  if (error) {
    return <div className="notification is-danger">Data unavailable</div>;
  }

  return (
    <div className="container mt-5">
      <h1 className="title has-text-primary has-text-centered">{company.name}</h1>
      <div className="box content">
        <p>{company.description}</p>
      </div>
      <h2 className="title is-5 has-text-centered-mobile">Jobs at {company.name}</h2>
      <JobList jobs={company.jobs} />
    </div>
  );
}

export default CompanyPage;