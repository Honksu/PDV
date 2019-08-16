# -*- coding: utf-8 -*-
"""
Created on Thu Apr  4 17:08:31 2019

@author: Tommi Honkanen
"""

import csv
import glob
import os

currencies = ["Exalted Orb","Orb of Annulment","Orb of Transmutation","Orb of Chance","Silver Coin","Orb of Alchemy","Chromatic Orb","Orb of Regret",
              "Orb of Scouring","Orb of Alteration","Blacksmith's Whetstone","Orb of Augmentation"]

write_rows = []
data_path = "data/originals"

files = glob.glob(data_path + os.sep + "*.csv")
id = 0
for name in files:

    write_rows = []
    
    # We loop through all .csv dump files which contain the price information for leagues
    with open(name) as csv_file:
        csv_reader = csv.reader(csv_file, delimiter=';')
        line_count = 0
        for row in csv_reader:
            if line_count == 0:
                print(f'Column names are {", ".join(row)}')
                write_row = ["ID","League","date","Currency","PriceCurrency","Value","CurrencyID"]
                write_rows.append(write_row)
                line_count += 1
                
            # For now we are using only information that's based on chaos orbs, every currency has a value that's based on it
            else:
                if row[3] == "Chaos Orb" and row[2] in currencies:                
                    index = str(currencies.index(row[2]))
                    line_count += 1
                    write_row = [str(id), row[0], row[1], row[2], row[3], str(row[4]), index]
                    write_rows.append(write_row)
                    id += 1
                    
                    
        print(f'Processed {line_count} lines.')
    base = os.path.basename(name[:-4])
    out_name = "data/"+base+"_currencies.csv"
    
    # We write the parsed price data to new .csv files which are then read to the database
    with open(out_name, mode='w', newline='') as currency_file:
        currency_writer = csv.writer(currency_file, delimiter=',', quotechar='"', quoting=csv.QUOTE_MINIMAL)
        
        for row in (write_rows):
            currency_writer.writerow([ row[0], row[1], row[2], row[3], row[4], row[5], row[6]])


