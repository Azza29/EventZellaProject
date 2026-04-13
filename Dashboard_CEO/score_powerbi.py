# score_powerbi.py
# Ce script est appelé par Power Query.
# Power BI injecte automatiquement un DataFrame appelé "dataset"
# contenant les lignes de ta table active.

import pandas as pd
import joblib
import numpy as np

# ── Chargement du modèle ──────────────────────────────────────────────────
# ⚠️ Mets le chemin absolu vers ton fichier .pkl
MODEL_PATH = r"C:\Users\rouak\Desktop\ML_eventzella\eventzella_best_model_Random_Forest.pkl"
model = joblib.load(MODEL_PATH)

# ── Colonnes attendues par le modèle ─────────────────────────────────────
FEATURES_NUM = [
    'budget', 'marketing_spend', 'new_beneficiaries', 'rating',
    'event_duration_days', 'is_weekend', 'month',
    'day_of_week', 'week_of_year', 'quarter',
]
FEATURES_CAT = [
    'event_type', 'provider_service_type', 'category_name', 'region',
]

# ── Vérification et nettoyage défensif ───────────────────────────────────
for col in FEATURES_NUM:
    if col not in dataset.columns:
        dataset[col] = 0          # valeur par défaut si colonne absente
    dataset[col] = pd.to_numeric(dataset[col], errors='coerce').fillna(0)

for col in FEATURES_CAT:
    if col not in dataset.columns:
        dataset[col] = 'Unknown'
    dataset[col] = dataset[col].fillna('Unknown').astype(str)

# ── Prédiction ───────────────────────────────────────────────────────────
X = dataset[FEATURES_NUM + FEATURES_CAT]
dataset['CA_Predit'] = model.predict(X).round(2)

# ── Power BI récupère le DataFrame modifié ───────────────────────────────
# La variable renvoyée doit s'appeler exactement "dataset"