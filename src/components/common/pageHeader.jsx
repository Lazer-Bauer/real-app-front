const PageHeader = ({ title, description }) => {
  return (
    <>
      <div className="row">
        <h1 className="text-center">{title}</h1>
      </div>

      <div className="row mt-2 text-center">
        {description && <div className="col-12">{description}</div>}
      </div>
    </>
  );
};
export default PageHeader;
