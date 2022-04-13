create table if not exists students
(
    id             serial primary key,
    name           text        not null,
    email          text        not null,
    registration   text unique not null,
    socialIdNumber text        not null,
    updatedAt      timestamp,
    createdAt      timestamp default now()
);

insert into students
    (name, email, registration, socialIdNumber)
values ('Maico Dal Ponte', 'maico.dalponte@codengage.com', '01209159', '00000019100')
on conflict (registration) do nothing;

select * from students
