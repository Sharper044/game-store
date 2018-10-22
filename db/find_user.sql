-- Geting the user --
select *
from gs_customers
where user_id = $1;