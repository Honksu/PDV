# -*- coding: utf-8 -*-
"""
Created on Fri Aug  16 21:05:28 2019

@author: Tommi Honkanen
"""

import csv
import psycopg2
import pandas as pd
import glob
import os

# We create a connection to the project's postgresql database and assign a cursor for it
conn = psycopg2.connect("host=localhost dbname=pdv user=postgres password=kayttaja port=5433")  
cur = conn.cursor()

data_path = 'data'

files = glob.glob(data_path + os.sep + "*.csv")

# We go through all parsed .csv files and use csv and psycopg2 libraries to read the data from the files
# and then insert it to the database 

for name in files:

    with open(name, 'r') as f:
        reader =csv.reader(f)
        next(reader)
        for row in reader:
        
         cur.execute(
         "INSERT INTO datavis_currencydata VALUES(%s, %s, %s, %s, %s, %s, %s)",
         row
         )
         conn.commit()


