import './Content.css';

function Content({ title, description, buttonText }) {
  return (
    <div className="content d-flex flex-column align-items-center justify-content-center text-center py-5 text-light bg-color">
      <h3>{title}</h3>
      <p className='w-75'>{description}</p>
      <button type="button" className="btn bg-color text-light border-light px-5 py-2">
        {buttonText}
      </button>
    </div>
  );
}

export default Content;
