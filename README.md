## Project requirments:
- mySQL
- node
## Project setup:
- create db and table

```
CREATE DATABASE activity_tracker;
USE activity_tracker;
create table activity (
    id                   integer NOT NULL AUTO_INCREMENT PRIMARY KEY,
    ms_difference        integer,
    start_month_and_day  char(50),
    distance             float,
    activity_type        char(5)
);
```
## Local development:
- `npm run server` - start server
- `npm run start` - start client
