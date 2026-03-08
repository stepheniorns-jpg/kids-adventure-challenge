create extension if not exists "pgcrypto";

create table families (
  id uuid primary key default gen_random_uuid(),
  owner_user_id uuid not null,
  name text not null,
  created_at timestamptz not null default now()
);

create table kids (
  id uuid primary key default gen_random_uuid(),
  family_id uuid not null references families(id) on delete cascade,
  name text not null,
  age int not null,
  level int not null default 1,
  points int not null default 0,
  weekly_goal int not null default 100,
  streak int not null default 0,
  created_at timestamptz not null default now()
);

create table challenges (
  id uuid primary key default gen_random_uuid(),
  family_id uuid references families(id) on delete cascade,
  title text not null,
  category text not null,
  points int not null,
  badge_name text not null,
  difficulty text not null,
  requires_gps boolean not null default false,
  requires_photo boolean not null default false,
  is_active boolean not null default true,
  created_by uuid not null,
  created_at timestamptz not null default now()
);

create table challenge_completions (
  id uuid primary key default gen_random_uuid(),
  challenge_id uuid not null references challenges(id) on delete cascade,
  kid_id uuid not null references kids(id) on delete cascade,
  gps_verified boolean not null default false,
  photo_url text,
  status text not null default 'pending' check (status in ('pending','approved','rejected')),
  completed_at timestamptz not null default now()
);

create table rewards (
  id uuid primary key default gen_random_uuid(),
  family_id uuid not null references families(id) on delete cascade,
  title text not null,
  cost_points int not null,
  is_active boolean not null default true,
  created_at timestamptz not null default now()
);
