drop database EMS

create database EMS



delete from Scheduling

delete from MeterDetail




-- get all meters for user
select * from Meter where ConsumerID = 1 and MeterTypeID = 1


select fullDate, Value
from MeterDetail inner join Scheduling 
on MeterDetail.SchedulingID = Scheduling.SchedulingID
where FullDate between '2019-06-14 11:43:21' and '2019-08-09 15:43:21'
--and MeterID = 3
and ParameterID in (1,2,3,4,5)
