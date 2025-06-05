const DashboardSidebar = () => {
  return (
    <aside className="w-64 bg-black text-white p-6">
      <h2 className="text-xl font-bold mb-6">Dashboard</h2>
      <nav>
        <ul className="space-y-2">
          <li><a href="/dashboard" className="block py-2 hover:text-gray-300">Главная</a></li>
          <li><a href="/dashboard/projects" className="block py-2 hover:text-gray-300">Проекты</a></li>
          <li><a href="/dashboard/messages" className="block py-2 hover:text-gray-300">Сообщения</a></li>
          <li><a href="/dashboard/invoices" className="block py-2 hover:text-gray-300">Счета</a></li>
          <li><a href="/dashboard/knowledge" className="block py-2 hover:text-gray-300">База знаний</a></li>
          <li><a href="/dashboard/settings" className="block py-2 hover:text-gray-300">Настройки</a></li>
        </ul>
      </nav>
    </aside>
  );
};

export default DashboardSidebar;