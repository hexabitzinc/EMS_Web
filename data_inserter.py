import datetime
from random import randrange


base = datetime.datetime.now()
date_list = [base - datetime.timedelta(hours=x) for x in range(365*24)]


f = open("SchedulingData.sql","w+")
for date in date_list:
    year = date.year
    month = date.month
    day = date.day
    time = date.time()
    fullDate = str(date)
    fullDate = fullDate[:-7]
    scheduling_query = "insert into Scheduling (Year, Month, Day, Time, FullDate)\
    values ('%s','%s','%s','%s','%s')"%(year, month, day, time, fullDate)
    f.write(scheduling_query + "\n")
  
    
    
    
f = open("MeterDetailData.sql","w+")
for schedulingID in range(1, 365*24):
    meterID = randrange(1,6)
    parameterGroupID = randrange(1,6)
    parameterID = randrange(1,100)
    apartmentID = randrange(1,40)
    value = randrange(-10, 10)
    meterDetail_query = "insert into MeterDetail (MeterID, ParameterGroupID, ParameterID, SchedulingID, ApartmentID, Value)\
    values (%s, %s, %s, %s, %s, '%s')"%(meterID, parameterGroupID, parameterID, schedulingID, apartmentID, value)
    f.write(meterDetail_query + "\n")
    
f.close()

    
    
    
## Open and read the file as a single buffer
#fd = open('SchedulingData.sql', 'r')
#sqlFile = fd.read()
#fd.close()
#
## all SQL commands (split on ';')
#sqlCommands = sqlFile.split('\n')
#
#
#conn = pypyodbc.connect('Driver={SQL Server};'
#                        'Server=TUF;'
#                        'Database=EMS;'
#                        'uid=Hani;pwd=hanihani')
#c = conn.cursor()
## Execute every command from the input file
#for command in sqlCommands:
#    # This will skip and report errors
#    # For example, if the tables do not yet exist, this will skip over
#    # the DROP TABLE commands
#    try:
#        c.execute(command)
#    except :
#        print ("Command skipped")
    
    

            
            
    
#   
#    
#
#

#     
#    
#cursor = cnxn.cursor()
#cursor.execute("select * from scheduling")
#cursor.execute("insert into MeterDetails")
#i = 1
#for row in cursor.fetchall():
#    i += 1
#    print ('row', i, row)