# 🎉 EventZella – Business Intelligence & Machine Learning Project

## 📌 Project Overview

**EventZella** is a Business Intelligence and Data Analytics project designed to analyze and optimize event management services.
The project focuses on understanding **reservations, revenues, service providers, and event categories** in order to support **data-driven decision making**.

Using a **Data Warehouse architecture**, interactive **Power BI dashboards**, and **Machine Learning models**, the platform provides insights into event performance and predicts key business indicators.

---

# 🧠 Project Objectives

The main objectives of this project are:

* Analyze **event reservations and revenues**
* Evaluate **service provider performance**
* Understand **budget distribution across services**
* Monitor **availability and capacity of vendors**
* Apply **Machine Learning** to extract predictive insights

---

# 🏗️ Data Warehouse Architecture

The project follows a **Star Schema** architecture.

### Fact Table

* **dw_factreservations**

  * reservation_id
  * provider_id
  * service_id
  * date_id
  * budget
  * rating

### Dimension Tables

* **dim_provider**
* **dim_service**
* **dim_category**
* **dim_date**

This structure allows efficient analytical queries and dashboard visualizations.

---

# 📊 Power BI Dashboard

The dashboard provides interactive analytics for decision makers.

### Key KPIs

* 📅 **Reservations YTD**
* 💰 **Revenue YTD**
* ⭐ **Composite Quality Score**
* 📦 **Total Availability**
* 👥 **Number of Providers**

### Dashboard Insights

* Event segmentation by type
* Budget distribution by service
* Provider availability and capacity
* Category filtering for deeper analysis

---

# 🤖 Machine Learning Component

A Machine Learning model is implemented to generate predictive insights.

### Example Predictive Goals

* Predict **high rating events**
* Predict **reservation demand**
* Identify **high-performing service categories**

### ML Workflow

1. Data extraction from the Data Warehouse
2. Data cleaning and preprocessing
3. Feature selection
4. Model training (classification or regression)
5. Model evaluation

Tools used:

* **Python**
* **Pandas**
* **Scikit-learn**
* **Google Colab**

---

# 🛠️ Technologies Used

* **Power BI** – Data visualization and dashboards
* **SQL** – Data Warehouse creation
* **Python** – Data preprocessing & machine learning
* **Google Colab** – Model development
* **GitHub** – Version control and project management

---

# 📂 Project Structure

```
EventZellaProject
│
├── data
│   └── DW_PI.sql
│
├── dashboards
│   └── EventZella.pbix
│
├── ml
│   └── data_cleaning.ipynb
│
├── web_app
│   └── PowerBI embedded dashboard
│
└── README.md
```

---

# 🚀 How to Run the Project

### 1️⃣ Clone the repository

```bash
git clone https://github.com/yourusername/EventZellaProject.git
```

### 2️⃣ Open the Power BI Dashboard

Open the file:

```
EventZella.pbix
```

using **Power BI Desktop**.

### 3️⃣ Run Machine Learning Notebook

Open the notebook in **Google Colab** and run the cells.

---

# 📈 Future Improvements

* Add more predictive models
* Deploy ML models via API
* Integrate real-time event analytics
* Improve dashboard interactivity

---


# ⭐ Project Purpose

This project demonstrates skills in:

* Data Warehousing
* Business Intelligence
* Data Visualization
* Machine Learning
* Data-driven decision making

---

⭐ If you like this project, feel free to **star the repository**!
