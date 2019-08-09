import pypyodbc
import datetime
from random import randrange



cnxn = pypyodbc.connect('Driver={SQL Server};'
                        'Server=TUF;'
                        'Database=EMS;'
                        'uid=Hani;pwd=hanihani')






base = datetime.datetime.today()
date_list = [base - datetime.timedelta(days=x) for x in range(365)]

for date in date_list:
    date = str(date)
    date = date[:-7]
    _full = "insert into Scheduling (FullDate ) values ('%s')"%date
    print(_full)
    


parameterList = range(1,100)

for value in range(100):
    meterDetail_query = "insert into MeterDetail (MeterID, ParameterGroupID, ParameterID, SchedulingID, ApartmentID, Value) values\
 (1,1,%s,%s,1,'%s')"%(value,randrange(491,855),randrange(1000))
    print(meterDetail_query)
    
    


    
   
    

cursor.execute("insert into Scheduling (FullDate )values ( ")
cursor.execute("insert into MeterDetails")
i = 1
for row in cursor.fetchall():
    i += 1
    print ('row', i, row)