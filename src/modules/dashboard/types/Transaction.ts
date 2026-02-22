export interface Transaction {
  id: string;
  date: string;
  type: "income" | "expense";
  category: string;
  categoryIcon: string;
  description: string;
  amount: number;
  card?: string;
}
