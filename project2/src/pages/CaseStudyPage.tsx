import { useParams } from 'react-router-dom';

const CaseStudyPage = () => {
  const { id } = useParams();
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-6">Кейс: {id}</h1>
      <p>Информация о проекте "{id}"</p>
    </div>
  );
};

export default CaseStudyPage;