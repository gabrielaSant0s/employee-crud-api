CREATE TABLE employee (
    employee_id uuid PRIMARY KEY NOT NULL DEFAULT uuii_gerenate_v4(),
    name VARCHAR(255) NOT NULL,
    job_role VARCHAR(255) NOT NULL,
    salary NUMERIC(5,2),
    date_birthday DATE NOT NULL,
    employee_registration INTEGER NOT NULL
)