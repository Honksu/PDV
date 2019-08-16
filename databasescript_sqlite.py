# -*- coding: utf-8 -*-
"""
Created on Thu Apr  4 19:51:32 2019

@author: Tommi Honkanen
"""

import sqlite3
import pandas as pd
import glob
import os

# We create a connection to the project's sqlite3 database and assign a cursor for it
conn = sqlite3.connect('db.sqlite3')  
c = conn.cursor()

data_path = 'data'

files = glob.glob(data_path + os.sep + "*.csv")

# We go through all parsed .csv files and used pandas library to read the data from the files
# and then insert it to the database 
for name in files:

    read_clients = pd.read_csv (name)
    read_clients.to_sql('datavis_currencydata', conn, if_exists='append', index = False)

