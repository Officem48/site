const ContactPage = () => {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-6">Свяжитесь с нами</h1>
      <form className="max-w-md mx-auto space-y-4">
        <input type="text" placeholder="Имя" className="w-full p-2 border rounded" />
        <input type="email" placeholder="Email" className="w-full p-2 border rounded" />
        <textarea placeholder="Сообщение" className="w-full p-2 border rounded"></textarea>
        <button className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800 transition">
          Отправить
        </button>
      </form>
    </div>
  );
};

export default ContactPage;