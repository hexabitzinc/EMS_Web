drop database EMS

create database EMS



delete from Scheduling




-- get all meters for user
select * from Meter where ConsumerID = 1 and MeterTypeID = 1


select * from MeterDetail 
where MeterID = 1 and SchedulingID = (select SchedulingID from Scheduling where FullDate BETWeen 'START' and 'END')


