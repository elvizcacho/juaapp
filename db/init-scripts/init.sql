CREATE USER app_freelancing;
ALTER USER app_freelancing WITH encrypted password 'copito';
CREATE USER app_accounting;
ALTER USER app_accounting WITH encrypted password 'copito';
CREATE DATABASE db_juaapp;
CREATE DATABASE db_accounting;
GRANT ALL PRIVILEGES ON DATABASE db_juaapp TO admin;
GRANT ALL PRIVILEGES ON DATABASE db_accounting TO admin;
GRANT SELECT, INSERT, UPDATE, DELETE ON ALL TABLES IN SCHEMA public TO app_freelancing
GRANT SELECT, INSERT, UPDATE, DELETE ON ALL TABLES IN SCHEMA public TO app_accounting;

/* TODO: Fix the GRANT for app_freelancer and app_accounting and implement in APPS */

