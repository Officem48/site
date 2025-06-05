const PortfolioPage = () => {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-6">Портфолио</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {['Проект 1', 'Проект 2', 'Проект 3'].map((project) => (
          <div key={project} className="border p-6 rounded shadow">
            <h3 className="text-xl font-bold">{project}</h3>
            <p className="mt-2 text-gray-600">Описание проекта</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PortfolioPage;