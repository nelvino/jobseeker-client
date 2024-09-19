import { useState } from 'react';
import { useNavigate } from 'react-router';
import { useCreateJob } from '../lib/graphql/hooks';

function CreateJobPage() {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const { createJob, loading } = useCreateJob();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const job = await createJob(title, description);
    navigate(`/jobs/${job.id}`);
  };

  return (
    <div className="container mt-5">
      <h1 className="title">New Job</h1>
      <div className="box">
        <form onSubmit={handleSubmit}>
          <div className="field">
            <label className="label">Title</label>
            <div className="control">
              <input className="input is-fullwidth" type="text" value={title}
                onChange={(event) => setTitle(event.target.value)} />
            </div>
          </div>
          <div className="field">
            <label className="label">Description</label>
            <div className="control">
              <textarea className="textarea is-fullwidth" rows={10} value={description}
                onChange={(event) => setDescription(event.target.value)} />
            </div>
          </div>
          <div className="field">
            <div className="control">
              <button className="button is-link is-fullwidth" disabled={loading}>
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateJobPage;