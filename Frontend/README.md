# 💰 Expense Tracker

### 🧩 Project - 1

A **modern, responsive Expense Tracker application** built with **React** and **Bootstrap** that helps users manage and monitor their expenses efficiently with an intuitive side-by-side layout.

---

## 🚀 Features

- ✅ **Add, Edit & Delete Expenses** — Easily manage your daily expenses with real-time updates.
- 💾 **Form Validation & State Management** — Smooth form handling with React hooks.
- � **API Integration** — Fetches and displays expense data from a **mock API**.
- � **Modern UI Design** — Built with **Bootstrap** and custom **CSS** for a professional look.
- 📱 **Fully Responsive Design** — Optimized for desktop (2-column layout), tablet, and mobile devices.
- 🎯 **Side-by-Side Layout** — Form on left, scrollable expense list on right for desktop users.
- � **Real-time Updates** — Expenses update instantly without page refresh.
- ✨ **Smooth Animations** — Hover effects and transitions for better UX.
- 🎭 **Color-Coded Categories** — Personal, Stocks, Financial, and Banking expenses with different colors.

---

## 🛠️ Tech Stack

- **Frontend:** React.js 19.1.1
- **Styling:** Bootstrap 5 + React Bootstrap + Custom CSS
- **State Management:** React Hooks (useState, useEffect, useRef, useCallback)
- **API:** Mock API (JSONPlaceholder)
- **Build Tool:** Vite
- **Package Manager:** npm

---

## 📂 Project Structure

```
Frontend/
├── src/
│   ├── components/
│   │   ├── ExpenseFrom.jsx      (Form for adding expenses)
│   │   ├── ExpenseList.jsx      (Displays all expenses)
│   │   └── ExpenseItem.jsx      (Edit & Delete buttons)
│   ├── App.jsx                  (Main app component)
│   ├── main.jsx                 (Entry point)
│   ├── index.css                (Custom CSS & responsive styles)
├── public/
│   └── index.html
├── package.json
├── vite.config.js
├── eslint.config.js
└── README.md
```

---

## � Component Details

### **App.jsx**
- Manages global state for expenses
- Handles `addExpense`, `deleteExpense`, and `updateExpense` functions
- Fetches initial data from mock API on component mount
- Passes functions to child components (Form & List)

### **ExpenseForm.jsx**
- Input fields for expense name, amount, and category
- Dropdown with categories: Personal, Stocks, Financial, Banking
- Styled with Bootstrap grid and custom CSS classes
- Clean white background for better visibility

### **ExpenseList.jsx**
- Displays all expenses in a scrollable container
- Shows expense name, amount, and category badge
- Handles edit and delete operations
- Fixed height with auto-scroll for long lists
- Empty state message when no expenses exist

### **ExpenseItem.jsx**
- Edit button: Shows input field to edit expense name
- Delete button: Removes expense from list
- Save button: Saves edited expense
- Keyboard support: Press Enter to save

---

## 🎨 Styling Features

### **Color Scheme**
- Primary Color: `#6366f1` (Indigo)
- Success Color: `#10b981` (Green)
- Danger Color: `#ef4444` (Red)
- Background Gradient: Purple to violet gradient

### **Responsive Breakpoints**
- **Desktop (>768px):** 2-column layout (form left, list right)
- **Tablet (768px):** Single column, stacked layout
- **Mobile (<480px):** Mobile-optimized spacing and font sizes

### **Components Styling**
- **Form Container:** White background with shadow and border radius
- **List Container:** Gradient background with fixed scrollable area
- **Expense Cards:** White cards with hover animations
- **Category Badges:** Color-coded badges (Blue, Yellow, Green, Pink)
- **Buttons:** Modern design with smooth hover animations

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

```bash
# Navigate to Frontend directory
cd Frontend

# Install dependencies
npm install

# Install Bootstrap and React Bootstrap
npm install react-bootstrap bootstrap
```

### Running the Application

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run ESLint
npm lint
```

The application will be available at `http://localhost:5174/`

---

## 📱 Responsive Layout

### **Desktop View (>768px)**
```
┌─────────────────────────────────────┐
│  Expense Tracker Form  │  Expenses   │
│  ┌─────────────────┐   │  ┌────────┐ │
│  │ Name: _______   │   │  │ Item 1 │ │
│  │ Amount: _______│   │  ├────────┤ │
│  │ Type: [Select] │   │  │ Item 2 │ │
│  │ [Add Expense]   │   │  ├────────┤ │
│  └─────────────────┘   │  │ Item 3 │ │
│                        │  └────────┘ │
└─────────────────────────────────────┘
```

### **Mobile View (<480px)**
```
┌──────────────────┐
│ Expense Tracker  │
│ ┌──────────────┐ │
│ │ Name: ___    │ │
│ │ Amount: ___  │ │
│ │ Type: ___    │ │
│ │ [Add Expense]│ │
│ └──────────────┘ │
├──────────────────┤
│ Expenses         │
│ ┌──────────────┐ │
│ │ Expense 1    │ │
│ │ [Edit][Del]  │ │
│ └──────────────┘ │
└──────────────────┘
```

---

## 💡 Key Features Implementation

### **Edit Expense**
1. Click the "Edit" button on any expense
2. An input field appears with a "Save" button
3. Edit the expense name
4. Click "Save" or press Enter
5. The expense updates in real-time

### **Delete Expense**
1. Click the "Delete" button on any expense
2. The expense is immediately removed from the list

### **Add Expense**
1. Fill in the expense form (Name, Amount, Category)
2. Click "Add Expense"
3. The new expense appears in the list
4. Form resets for the next entry

---

## 📊 API Integration

The app fetches initial expenses from:
```
https://69036feed0f10a340b2444d5.mockapi.io/Expenses
```

### Expected Data Format
```json
[
  {
    "expenseName": "Groceries",
    "amount": "1200",
    "type": "Personal"
  },
  {
    "expenseName": "Laptop EMI",
    "amount": "5000",
    "type": "Financial"
  }
]
```

---

## 🎯 Performance Optimizations

- **useCallback:** Prevents unnecessary function re-creation in child components
- **useRef:** Direct DOM access for form field focus without re-renders
- **Memoization:** Optimized component rendering for large lists

---

## 🧑‍💻 Author

**Mukul Singh**

---

## 📄 License

This project is open source and available under the MIT License.  

