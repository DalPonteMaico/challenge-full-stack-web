create schema if not exists challenge;
create table if not exists challenge.students
(
    id             serial primary key,
    name           text        not null,
    email          text        not null,
    registration   text unique not null,
    socialIdNumber text        not null,
    updatedAt      timestamp,
    createdAt      timestamp default now()
);

insert into challenge.students
    (name, email, registration, socialIdNumber)
values ('Maico Dal Ponte', 'maico.dalponte@codengage.com', '01209159', '00000019100')
on conflict (registration) do nothing;
