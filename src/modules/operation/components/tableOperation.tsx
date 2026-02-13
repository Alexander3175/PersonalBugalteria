import { useState } from "react";
import "../style/tableOperationStyle.css";

export const TableOperation = () => {
  interface Transaction {
    id: string;
    date: string;
    type: "income" | "expense";
    category: string;
    categoryIcon: string;
    description: string;
    amount: number;
    card?: string;
  }

  const mockTransactions: Transaction[] = [
    {
      id: "1",
      date: "2024-02-13",
      type: "expense",
      category: "Продукти",
      categoryIcon: "🛒",
      description: "Сільпо",
      amount: 850.5,
      card: "Monobank",
    },
    {
      id: "2",
      date: "2024-02-13",
      type: "income",
      category: "Зарплата",
      categoryIcon: "💰",
      description: "Місячна зарплата",
      amount: 25000,
      card: "ПриватБанк",
    },
    {
      id: "3",
      date: "2024-02-12",
      type: "expense",
      category: "Транспорт",
      categoryIcon: "🚗",
      description: "Bolt поїздка",
      amount: 180,
      card: "Monobank",
    },
    {
      id: "4",
      date: "2024-02-12",
      type: "expense",
      category: "Ресторани",
      categoryIcon: "🍽️",
      description: "Обід з колегами",
      amount: 450,
      card: "Cashback",
    },
    {
      id: "5",
      date: "2024-02-11",
      type: "expense",
      category: "Підписки",
      categoryIcon: "📱",
      description: "Netflix Premium",
      amount: 350,
      card: "Monobank",
    },
    {
      id: "6",
      date: "2024-02-11",
      type: "income",
      category: "Фріланс",
      categoryIcon: "💻",
      description: "Розробка сайту",
      amount: 5000,
      card: "ПриватБанк",
    },
    {
      id: "7",
      date: "2024-02-10",
      type: "expense",
      category: "Здоров'я",
      categoryIcon: "💊",
      description: "Аптека 9-1-1",
      amount: 320,
      card: "Monobank",
    },
    {
      id: "8",
      date: "2024-02-10",
      type: "expense",
      category: "Розваги",
      categoryIcon: "🎬",
      description: "Кінотеатр Multiplex",
      amount: 400,
      card: "Cashback",
    },
  ];

  type SortField = "date" | "amount";
  type SortOrder = "asc" | "desc";
  const [transactions, setTransactions] =
    useState<Transaction[]>(mockTransactions);
  const [sortField, setSortField] = useState<SortField>("date");
  const [sortOrder, setSortOrder] = useState<SortOrder>("desc");
  const [filterType, setFilterType] = useState<"all" | "income" | "expense">(
    "all",
  );

  // Сортування
  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortOrder("desc");
    }
  };

  // Видалення
  const handleDelete = (id: string) => {
    if (window.confirm("Ви впевнені, що хочете видалити цю операцію?")) {
      setTransactions(transactions.filter((t) => t.id !== id));
    }
  };

  // Редагування (заглушка)
  const handleEdit = (id: string) => {
    console.log("Edit transaction:", id);
    // Тут буде логіка відкриття модального вікна редагування
  };

  // Фільтрація та сортування
  const filteredAndSorted = transactions
    .filter((t) => filterType === "all" || t.type === filterType)
    .sort((a, b) => {
      let comparison = 0;
      if (sortField === "date") {
        comparison = new Date(a.date).getTime() - new Date(b.date).getTime();
      } else {
        comparison = a.amount - b.amount;
      }
      return sortOrder === "asc" ? comparison : -comparison;
    });

  // Форматування дати
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);

    if (date.toDateString() === today.toDateString()) {
      return "Сьогодні";
    } else if (date.toDateString() === yesterday.toDateString()) {
      return "Вчора";
    } else {
      return date.toLocaleDateString("uk-UA", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      });
    }
  };

  // Форматування суми
  const formatAmount = (amount: number, type: "income" | "expense") => {
    const formatted = amount.toLocaleString("uk-UA", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
    return type === "income" ? `+${formatted}` : `-${formatted}`;
  };

  return (
    <div className="transactions-container">
      {/* Фільтри */}
      <div className="transactions-header">
        <h2 className="transactions-title">Операції</h2>
        <div className="filter-buttons">
          <button
            className={`filter-btn ${filterType === "all" ? "active" : ""}`}
            onClick={() => setFilterType("all")}
          >
            Всі
          </button>
          <button
            className={`filter-btn income ${filterType === "income" ? "active" : ""}`}
            onClick={() => setFilterType("income")}
          >
            <span className="filter-icon">↑</span> Доходи
          </button>
          <button
            className={`filter-btn expense ${filterType === "expense" ? "active" : ""}`}
            onClick={() => setFilterType("expense")}
          >
            <span className="filter-icon">↓</span> Витрати
          </button>
        </div>
      </div>

      {/* Таблиця - Desktop */}
      <div className="table-wrapper">
        <table className="transactions-table">
          <thead>
            <tr>
              <th className="sortable" onClick={() => handleSort("date")}>
                Дата
                <span className="sort-icon">
                  {sortField === "date" && (sortOrder === "asc" ? "↑" : "↓")}
                </span>
              </th>
              <th>Тип</th>
              <th>Категорія</th>
              <th>Опис</th>
              <th
                className="sortable amount-header"
                onClick={() => handleSort("amount")}
              >
                Сума
                <span className="sort-icon">
                  {sortField === "amount" && (sortOrder === "asc" ? "↑" : "↓")}
                </span>
              </th>
              <th className="actions-header">Дії</th>
            </tr>
          </thead>
          <tbody>
            {filteredAndSorted.map((transaction) => (
              <tr key={transaction.id}>
                <td className="date-cell">{formatDate(transaction.date)}</td>
                <td className="type-cell">
                  <span className={`type-badge ${transaction.type}`}>
                    <span className="type-icon">
                      {transaction.type === "income" ? "↑" : "↓"}
                    </span>
                  </span>
                </td>
                <td className="category-cell">
                  <span className="category-icon">
                    {transaction.categoryIcon}
                  </span>
                  <span className="category-name">{transaction.category}</span>
                </td>
                <td className="description-cell">
                  <div className="description-wrapper">
                    <span className="description-text">
                      {transaction.description}
                    </span>
                    {transaction.card && (
                      <span className="card-badge">{transaction.card}</span>
                    )}
                  </div>
                </td>
                <td className={`amount-cell ${transaction.type}`}>
                  {formatAmount(transaction.amount, transaction.type)} ₴
                </td>
                <td className="actions-cell">
                  <button
                    className="action-btn edit"
                    onClick={() => handleEdit(transaction.id)}
                    title="Редагувати"
                  >
                    ✏️
                  </button>
                  <button
                    className="action-btn delete"
                    onClick={() => handleDelete(transaction.id)}
                    title="Видалити"
                  >
                    🗑️
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Картки - Mobile */}
      <div className="transactions-cards">
        {filteredAndSorted.map((transaction) => (
          <div
            key={transaction.id}
            className={`transaction-card ${transaction.type}`}
          >
            <div className="card-header">
              <div className="card-category">
                <span className="category-icon-mobile">
                  {transaction.categoryIcon}
                </span>
                <span className="category-name-mobile">
                  {transaction.category}
                </span>
              </div>
              <span className={`type-badge-mobile ${transaction.type}`}>
                {transaction.type === "income" ? "↑" : "↓"}
              </span>
            </div>

            <div className="card-body">
              <p className="card-description">{transaction.description}</p>
              {transaction.card && (
                <span className="card-badge-mobile">{transaction.card}</span>
              )}
            </div>

            <div className="card-footer">
              <div className="card-date">{formatDate(transaction.date)}</div>
              <div className={`card-amount ${transaction.type}`}>
                {formatAmount(transaction.amount, transaction.type)} ₴
              </div>
            </div>

            <div className="card-actions">
              <button
                className="card-action-btn edit"
                onClick={() => handleEdit(transaction.id)}
              >
                ✏️ Редагувати
              </button>
              <button
                className="card-action-btn delete"
                onClick={() => handleDelete(transaction.id)}
              >
                🗑️ Видалити
              </button>
            </div>
          </div>
        ))}
      </div>

      {filteredAndSorted.length === 0 && (
        <div className="empty-state">
          <p className="empty-icon">📭</p>
          <p className="empty-text">Операцій не знайдено</p>
        </div>
      )}
    </div>
  );
};
