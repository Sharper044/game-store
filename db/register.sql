insert into gs_customers (user_id, email)
values ($1, $2);

select *
from rew_users
where user_id = $1;