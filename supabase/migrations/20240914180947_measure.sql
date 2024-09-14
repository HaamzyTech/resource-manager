alter table "public"."resource" add column "is_deleted" boolean not null default false;

alter table "public"."resource" add column "measure" bigint;

alter table "public"."resource" add constraint "resource_measure_fkey" FOREIGN KEY (measure) REFERENCES measure(id) ON DELETE SET NULL not valid;

alter table "public"."resource" validate constraint "resource_measure_fkey";

set check_function_bodies = off;

CREATE OR REPLACE FUNCTION public.resource_totals()
 RETURNS jsonb
 LANGUAGE plpgsql
AS $function$DECLARE
  result Jsonb;
BEGIN
  select jsonb_agg(
    jsonb_build_object( 
      'resource_id', aggregated_data.id, 
      'resource_name', aggregated_data.name,
      'measure', measure,
      'description', aggregated_data.description, 
      'resource_total', total
    )
  ) into result
  from ( 
    select r.id, r.name,rm.name as measure, rm.description, SUM(rq.quantity) as total 
    from public.resource r
    join public.resource_quantity rq on r.id = rq.product_id
    join public.measure rm on r.measure = rm.id
    group by r.id, r.name, rm.name, rm.description
  ) as aggregated_data;

  return result;
END;$function$
;

create policy "Enable read access for all users"
on "public"."measure"
as permissive
for select
to public
using (true);



