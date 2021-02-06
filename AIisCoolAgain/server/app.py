from flask import Flask
import pickle
from xgboost import XGBClassifier
import os
import pandas as pd
import numpy as np
import json
from json import JSONEncoder

models_path = os.path.abspath("../models/")
out_path = os.path.abspath("../out/")

app = Flask(__name__)

with open(os.path.join(models_path, "XGBClassifier.pkl"), 'rb') as file :
  model = pickle.load(file) 
items = pd.read_csv(os.path.join(out_path, "items1.csv")).to_numpy().tolist()

print(f"loaded {len(items)} items")

def _predict (week, dayofweek) :
  input = np.array([ [idx, dayofweek, week] for idx in range(len(items))])
  
  predictions = model.predict(input)
  return predictions.tolist()
  

@app.route('/predict/<week>/<dayofweek>', methods=["GET"])
def predict(week = 0, dayofweek = 0):
  return json.dumps(_predict(week, dayofweek))

@app.route('/items', methods=["GET"])
def getItems() :
  return json.dumps(items)
