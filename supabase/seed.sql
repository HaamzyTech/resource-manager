SET session_replication_role = replica;

--
-- PostgreSQL database dump
--

-- Dumped from database version 15.1 (Ubuntu 15.1-1.pgdg20.04+1)
-- Dumped by pg_dump version 15.7 (Ubuntu 15.7-1.pgdg20.04+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Data for Name: audit_log_entries; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."audit_log_entries" ("instance_id", "id", "payload", "created_at", "ip_address") VALUES
	('00000000-0000-0000-0000-000000000000', 'a85e8daf-9c24-4dc0-a7c9-433bab79940f', '{"action":"user_signedup","actor_id":"00000000-0000-0000-0000-000000000000","actor_username":"service_role","actor_via_sso":false,"log_type":"team","traits":{"user_email":"haamzy.hm@outlook.com","user_id":"c740cf06-c992-4b64-a7e3-20f056a08258","user_phone":""}}', '2024-09-13 12:27:38.863898+00', ''),
	('00000000-0000-0000-0000-000000000000', '33b4c64e-5472-4d17-a338-ecc58fd8d8fd', '{"action":"login","actor_id":"c740cf06-c992-4b64-a7e3-20f056a08258","actor_username":"haamzy.hm@outlook.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2024-09-13 12:27:56.595125+00', ''),
	('00000000-0000-0000-0000-000000000000', '85c2ea81-3492-4ec0-99ed-6a165981f488', '{"action":"token_refreshed","actor_id":"c740cf06-c992-4b64-a7e3-20f056a08258","actor_username":"haamzy.hm@outlook.com","actor_via_sso":false,"log_type":"token"}', '2024-09-13 13:30:43.589811+00', ''),
	('00000000-0000-0000-0000-000000000000', '233b144e-66c0-4766-ba86-74679552408c', '{"action":"token_revoked","actor_id":"c740cf06-c992-4b64-a7e3-20f056a08258","actor_username":"haamzy.hm@outlook.com","actor_via_sso":false,"log_type":"token"}', '2024-09-13 13:30:43.597106+00', ''),
	('00000000-0000-0000-0000-000000000000', '1f66384d-7256-4cff-89c6-0809ab553b0d', '{"action":"token_refreshed","actor_id":"c740cf06-c992-4b64-a7e3-20f056a08258","actor_username":"haamzy.hm@outlook.com","actor_via_sso":false,"log_type":"token"}', '2024-09-13 13:30:43.661525+00', ''),
	('00000000-0000-0000-0000-000000000000', 'ab8231fe-92c3-4cfd-8a5c-b76afca39942', '{"action":"token_refreshed","actor_id":"c740cf06-c992-4b64-a7e3-20f056a08258","actor_username":"haamzy.hm@outlook.com","actor_via_sso":false,"log_type":"token"}', '2024-09-13 14:46:03.249965+00', ''),
	('00000000-0000-0000-0000-000000000000', '06ec29ba-54e0-4161-994d-4c54f648d3de', '{"action":"token_revoked","actor_id":"c740cf06-c992-4b64-a7e3-20f056a08258","actor_username":"haamzy.hm@outlook.com","actor_via_sso":false,"log_type":"token"}', '2024-09-13 14:46:03.252083+00', ''),
	('00000000-0000-0000-0000-000000000000', 'a2b21519-37b6-4808-ad66-e92a3267bde1', '{"action":"token_refreshed","actor_id":"c740cf06-c992-4b64-a7e3-20f056a08258","actor_username":"haamzy.hm@outlook.com","actor_via_sso":false,"log_type":"token"}', '2024-09-13 14:46:03.300409+00', ''),
	('00000000-0000-0000-0000-000000000000', 'd7cd143f-7014-492f-a4d7-68082b5c3779', '{"action":"token_refreshed","actor_id":"c740cf06-c992-4b64-a7e3-20f056a08258","actor_username":"haamzy.hm@outlook.com","actor_via_sso":false,"log_type":"token"}', '2024-09-13 16:19:45.593803+00', ''),
	('00000000-0000-0000-0000-000000000000', '3f1824f0-f318-41ba-bdc6-fb399e3def5e', '{"action":"token_revoked","actor_id":"c740cf06-c992-4b64-a7e3-20f056a08258","actor_username":"haamzy.hm@outlook.com","actor_via_sso":false,"log_type":"token"}', '2024-09-13 16:19:45.597581+00', ''),
	('00000000-0000-0000-0000-000000000000', '432b9745-2c2e-4888-a209-ede9fa5092c0', '{"action":"token_refreshed","actor_id":"c740cf06-c992-4b64-a7e3-20f056a08258","actor_username":"haamzy.hm@outlook.com","actor_via_sso":false,"log_type":"token"}', '2024-09-13 16:19:45.691289+00', ''),
	('00000000-0000-0000-0000-000000000000', '4567c013-1636-482a-8d93-2d7e51147fe6', '{"action":"token_refreshed","actor_id":"c740cf06-c992-4b64-a7e3-20f056a08258","actor_username":"haamzy.hm@outlook.com","actor_via_sso":false,"log_type":"token"}', '2024-09-14 07:32:25.346489+00', ''),
	('00000000-0000-0000-0000-000000000000', '7b4ee6ee-522e-40d6-80b8-980713b8dff6', '{"action":"token_revoked","actor_id":"c740cf06-c992-4b64-a7e3-20f056a08258","actor_username":"haamzy.hm@outlook.com","actor_via_sso":false,"log_type":"token"}', '2024-09-14 07:32:25.354863+00', ''),
	('00000000-0000-0000-0000-000000000000', 'd794d7b0-89e9-44b9-9c4e-398ccb86f81c', '{"action":"token_refreshed","actor_id":"c740cf06-c992-4b64-a7e3-20f056a08258","actor_username":"haamzy.hm@outlook.com","actor_via_sso":false,"log_type":"token"}', '2024-09-14 07:32:25.519036+00', ''),
	('00000000-0000-0000-0000-000000000000', 'fc2643ed-e691-49c9-88a4-a08e6245d221', '{"action":"login","actor_id":"c740cf06-c992-4b64-a7e3-20f056a08258","actor_username":"haamzy.hm@outlook.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2024-09-14 09:47:21.77162+00', ''),
	('00000000-0000-0000-0000-000000000000', 'f3c5dbf5-ee88-4c38-85fb-f5074d4375e1', '{"action":"token_refreshed","actor_id":"c740cf06-c992-4b64-a7e3-20f056a08258","actor_username":"haamzy.hm@outlook.com","actor_via_sso":false,"log_type":"token"}', '2024-09-14 10:52:36.925648+00', ''),
	('00000000-0000-0000-0000-000000000000', '7bbad50c-7e13-483c-a0f2-c199cb0bf7ea', '{"action":"token_revoked","actor_id":"c740cf06-c992-4b64-a7e3-20f056a08258","actor_username":"haamzy.hm@outlook.com","actor_via_sso":false,"log_type":"token"}', '2024-09-14 10:52:36.928984+00', ''),
	('00000000-0000-0000-0000-000000000000', '203be13f-b70b-47e3-8e79-02a0e9ea4b15', '{"action":"token_refreshed","actor_id":"c740cf06-c992-4b64-a7e3-20f056a08258","actor_username":"haamzy.hm@outlook.com","actor_via_sso":false,"log_type":"token"}', '2024-09-14 10:52:37.077845+00', ''),
	('00000000-0000-0000-0000-000000000000', '1d802774-8a56-477f-8359-fe9fc757211e', '{"action":"token_refreshed","actor_id":"c740cf06-c992-4b64-a7e3-20f056a08258","actor_username":"haamzy.hm@outlook.com","actor_via_sso":false,"log_type":"token"}', '2024-09-14 15:41:53.802991+00', ''),
	('00000000-0000-0000-0000-000000000000', 'ba79f609-dd21-4b54-8595-755ac11f574e', '{"action":"token_revoked","actor_id":"c740cf06-c992-4b64-a7e3-20f056a08258","actor_username":"haamzy.hm@outlook.com","actor_via_sso":false,"log_type":"token"}', '2024-09-14 15:41:53.809703+00', ''),
	('00000000-0000-0000-0000-000000000000', 'd8dbdfa9-4acb-4904-80f1-74f352c39dd1', '{"action":"token_refreshed","actor_id":"c740cf06-c992-4b64-a7e3-20f056a08258","actor_username":"haamzy.hm@outlook.com","actor_via_sso":false,"log_type":"token"}', '2024-09-14 15:41:53.916652+00', ''),
	('00000000-0000-0000-0000-000000000000', 'f164680f-a2c2-456c-b110-71db5fc21fb7', '{"action":"token_refreshed","actor_id":"c740cf06-c992-4b64-a7e3-20f056a08258","actor_username":"haamzy.hm@outlook.com","actor_via_sso":false,"log_type":"token"}', '2024-09-14 16:41:54.026402+00', ''),
	('00000000-0000-0000-0000-000000000000', '9a1f1dc0-f085-4a8a-9430-f4480f37b4b7', '{"action":"token_revoked","actor_id":"c740cf06-c992-4b64-a7e3-20f056a08258","actor_username":"haamzy.hm@outlook.com","actor_via_sso":false,"log_type":"token"}', '2024-09-14 16:41:54.0288+00', ''),
	('00000000-0000-0000-0000-000000000000', '1c56cac2-25d4-4651-9498-08c64b5f929e', '{"action":"token_refreshed","actor_id":"c740cf06-c992-4b64-a7e3-20f056a08258","actor_username":"haamzy.hm@outlook.com","actor_via_sso":false,"log_type":"token"}', '2024-09-14 16:41:54.074311+00', ''),
	('00000000-0000-0000-0000-000000000000', '68766b53-ed73-437f-ad3f-f7d0de20f72b', '{"action":"token_refreshed","actor_id":"c740cf06-c992-4b64-a7e3-20f056a08258","actor_username":"haamzy.hm@outlook.com","actor_via_sso":false,"log_type":"token"}', '2024-09-14 17:43:44.593342+00', ''),
	('00000000-0000-0000-0000-000000000000', '4267af3e-07dd-42af-accb-c913296e3df8', '{"action":"token_revoked","actor_id":"c740cf06-c992-4b64-a7e3-20f056a08258","actor_username":"haamzy.hm@outlook.com","actor_via_sso":false,"log_type":"token"}', '2024-09-14 17:43:44.595475+00', ''),
	('00000000-0000-0000-0000-000000000000', 'f7722f71-6e2c-4124-a4b3-d5750d3004af', '{"action":"token_refreshed","actor_id":"c740cf06-c992-4b64-a7e3-20f056a08258","actor_username":"haamzy.hm@outlook.com","actor_via_sso":false,"log_type":"token"}', '2024-09-14 17:43:44.712248+00', '');


--
-- Data for Name: flow_state; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: users; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."users" ("instance_id", "id", "aud", "role", "email", "encrypted_password", "email_confirmed_at", "invited_at", "confirmation_token", "confirmation_sent_at", "recovery_token", "recovery_sent_at", "email_change_token_new", "email_change", "email_change_sent_at", "last_sign_in_at", "raw_app_meta_data", "raw_user_meta_data", "is_super_admin", "created_at", "updated_at", "phone", "phone_confirmed_at", "phone_change", "phone_change_token", "phone_change_sent_at", "email_change_token_current", "email_change_confirm_status", "banned_until", "reauthentication_token", "reauthentication_sent_at", "is_sso_user", "deleted_at", "is_anonymous") VALUES
	('00000000-0000-0000-0000-000000000000', 'c740cf06-c992-4b64-a7e3-20f056a08258', 'authenticated', 'authenticated', 'haamzy.hm@outlook.com', '$2a$10$EZ/JaaHqWyORGQQ0e4rX3O9qSgRskhcEvs7eyDPjZwUryd5RsRGJu', '2024-09-13 12:27:38.874267+00', NULL, '', NULL, '', NULL, '', '', NULL, '2024-09-14 09:47:21.776646+00', '{"provider": "email", "providers": ["email"]}', '{}', NULL, '2024-09-13 12:27:38.847722+00', '2024-09-14 17:43:44.60271+00', NULL, NULL, '', '', NULL, '', 0, NULL, '', NULL, false, NULL, false);


--
-- Data for Name: identities; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."identities" ("provider_id", "user_id", "identity_data", "provider", "last_sign_in_at", "created_at", "updated_at", "id") VALUES
	('c740cf06-c992-4b64-a7e3-20f056a08258', 'c740cf06-c992-4b64-a7e3-20f056a08258', '{"sub": "c740cf06-c992-4b64-a7e3-20f056a08258", "email": "haamzy.hm@outlook.com", "email_verified": false, "phone_verified": false}', 'email', '2024-09-13 12:27:38.856819+00', '2024-09-13 12:27:38.857333+00', '2024-09-13 12:27:38.857333+00', '358ce78d-d8e8-4bca-a4d2-f6f990c13007');


--
-- Data for Name: instances; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: sessions; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."sessions" ("id", "user_id", "created_at", "updated_at", "factor_id", "aal", "not_after", "refreshed_at", "user_agent", "ip", "tag") VALUES
	('bb76a8e9-385c-46c3-a609-8be29b8e8c2c', 'c740cf06-c992-4b64-a7e3-20f056a08258', '2024-09-13 12:27:56.595921+00', '2024-09-14 07:32:25.523543+00', NULL, 'aal1', NULL, '2024-09-14 07:32:25.523414', 'Next.js Middleware', '172.18.0.1', NULL),
	('b987c446-8c31-469a-ab03-f480e7e5659a', 'c740cf06-c992-4b64-a7e3-20f056a08258', '2024-09-14 09:47:21.776743+00', '2024-09-14 17:43:44.714214+00', NULL, 'aal1', NULL, '2024-09-14 17:43:44.714141', 'Next.js Middleware', '172.18.0.1', NULL);


--
-- Data for Name: mfa_amr_claims; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."mfa_amr_claims" ("session_id", "created_at", "updated_at", "authentication_method", "id") VALUES
	('bb76a8e9-385c-46c3-a609-8be29b8e8c2c', '2024-09-13 12:27:56.604067+00', '2024-09-13 12:27:56.604067+00', 'password', '12ac590f-727f-469a-96ff-a7e3337b8835'),
	('b987c446-8c31-469a-ab03-f480e7e5659a', '2024-09-14 09:47:21.784307+00', '2024-09-14 09:47:21.784307+00', 'password', '108d6f19-87f9-48e4-b9f6-08cc803153d1');


--
-- Data for Name: mfa_factors; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: mfa_challenges; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: one_time_tokens; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: refresh_tokens; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."refresh_tokens" ("instance_id", "id", "token", "user_id", "revoked", "created_at", "updated_at", "parent", "session_id") VALUES
	('00000000-0000-0000-0000-000000000000', 1, '6Htsrc43V_9DD4SnxsuMYw', 'c740cf06-c992-4b64-a7e3-20f056a08258', true, '2024-09-13 12:27:56.599611+00', '2024-09-13 13:30:43.598166+00', NULL, 'bb76a8e9-385c-46c3-a609-8be29b8e8c2c'),
	('00000000-0000-0000-0000-000000000000', 2, 'OSIWBx5XSGkObhAL2ir_lQ', 'c740cf06-c992-4b64-a7e3-20f056a08258', true, '2024-09-13 13:30:43.603641+00', '2024-09-13 14:46:03.252662+00', '6Htsrc43V_9DD4SnxsuMYw', 'bb76a8e9-385c-46c3-a609-8be29b8e8c2c'),
	('00000000-0000-0000-0000-000000000000', 3, 'dnGGaMbSh5XaJuD8ZhWeIg', 'c740cf06-c992-4b64-a7e3-20f056a08258', true, '2024-09-13 14:46:03.254148+00', '2024-09-13 16:19:45.598026+00', 'OSIWBx5XSGkObhAL2ir_lQ', 'bb76a8e9-385c-46c3-a609-8be29b8e8c2c'),
	('00000000-0000-0000-0000-000000000000', 4, 'xIxT2LX_OPimx7yejE5s6w', 'c740cf06-c992-4b64-a7e3-20f056a08258', true, '2024-09-13 16:19:45.600268+00', '2024-09-14 07:32:25.35743+00', 'dnGGaMbSh5XaJuD8ZhWeIg', 'bb76a8e9-385c-46c3-a609-8be29b8e8c2c'),
	('00000000-0000-0000-0000-000000000000', 5, 'Wym6IACsj9Gip5J8hT2JuQ', 'c740cf06-c992-4b64-a7e3-20f056a08258', false, '2024-09-14 07:32:25.377452+00', '2024-09-14 07:32:25.377452+00', 'xIxT2LX_OPimx7yejE5s6w', 'bb76a8e9-385c-46c3-a609-8be29b8e8c2c'),
	('00000000-0000-0000-0000-000000000000', 6, 'GMGqacOW8LIqNmPvlKbRhQ', 'c740cf06-c992-4b64-a7e3-20f056a08258', true, '2024-09-14 09:47:21.780948+00', '2024-09-14 10:52:36.929814+00', NULL, 'b987c446-8c31-469a-ab03-f480e7e5659a'),
	('00000000-0000-0000-0000-000000000000', 7, 'dq6k7sn-Y40anKuj3lYhHA', 'c740cf06-c992-4b64-a7e3-20f056a08258', true, '2024-09-14 10:52:36.932769+00', '2024-09-14 15:41:53.811406+00', 'GMGqacOW8LIqNmPvlKbRhQ', 'b987c446-8c31-469a-ab03-f480e7e5659a'),
	('00000000-0000-0000-0000-000000000000', 8, 'KSU2qAvbNlT8rSNGVQl2dg', 'c740cf06-c992-4b64-a7e3-20f056a08258', true, '2024-09-14 15:41:53.813692+00', '2024-09-14 16:41:54.029725+00', 'dq6k7sn-Y40anKuj3lYhHA', 'b987c446-8c31-469a-ab03-f480e7e5659a'),
	('00000000-0000-0000-0000-000000000000', 9, 'HvB5ReWVpQrSk2VRmEumwA', 'c740cf06-c992-4b64-a7e3-20f056a08258', true, '2024-09-14 16:41:54.030944+00', '2024-09-14 17:43:44.596185+00', 'KSU2qAvbNlT8rSNGVQl2dg', 'b987c446-8c31-469a-ab03-f480e7e5659a'),
	('00000000-0000-0000-0000-000000000000', 10, 'oAOR8oLUSx9AdvaH-vNQjQ', 'c740cf06-c992-4b64-a7e3-20f056a08258', false, '2024-09-14 17:43:44.600009+00', '2024-09-14 17:43:44.600009+00', 'HvB5ReWVpQrSk2VRmEumwA', 'b987c446-8c31-469a-ab03-f480e7e5659a');


--
-- Data for Name: sso_providers; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: saml_providers; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: saml_relay_states; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: sso_domains; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: key; Type: TABLE DATA; Schema: pgsodium; Owner: supabase_admin
--



--
-- Data for Name: measure; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."measure" ("id", "created_at", "name", "description") VALUES
	(1, '2024-09-13 13:16:36.650299+00', 'L', 'Litre (s)'),
	(3, '2024-09-13 13:22:11.994906+00', 'ton', 'Tonne (s)'),
	(2, '2024-09-13 13:21:38.091013+00', 'Kg', 'Kilogram (s)');


--
-- Data for Name: profile; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."profile" ("id", "first_name", "last_name", "email", "avatar", "created_at", "user_id") VALUES
	(1, 'Haamzy', 'Tech', 'haamzy.hm@outlook.com', NULL, '2024-09-13 12:32:56.997633+00', 'c740cf06-c992-4b64-a7e3-20f056a08258');


--
-- Data for Name: resource; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."resource" ("id", "name", "description", "created_at", "is_deleted", "measure") VALUES
	(6, 'Diesel', 'Fuel', '2024-09-14 10:32:51.556664+00', false, 1),
	(7, 'Copper', 'Mineral', '2024-09-14 10:34:46.182617+00', false, 3),
	(8, 'Gold', 'Mineral', '2024-09-14 10:35:57.668546+00', false, 3);


--
-- Data for Name: resource_quantity; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."resource_quantity" ("id", "product_id", "date", "quantity", "created_at", "measure") VALUES
	(5, 6, '2024-09-11', 100, '2024-09-14 10:37:39.251905+00', NULL),
	(6, 7, '2024-09-11', 2, '2024-09-14 11:09:30.044285+00', NULL),
	(7, 8, '2024-09-11', 1, '2024-09-14 11:09:47.810674+00', NULL);


--
-- Data for Name: role; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- Data for Name: buckets; Type: TABLE DATA; Schema: storage; Owner: supabase_storage_admin
--



--
-- Data for Name: objects; Type: TABLE DATA; Schema: storage; Owner: supabase_storage_admin
--



--
-- Data for Name: s3_multipart_uploads; Type: TABLE DATA; Schema: storage; Owner: supabase_storage_admin
--



--
-- Data for Name: s3_multipart_uploads_parts; Type: TABLE DATA; Schema: storage; Owner: supabase_storage_admin
--



--
-- Data for Name: hooks; Type: TABLE DATA; Schema: supabase_functions; Owner: supabase_functions_admin
--



--
-- Data for Name: secrets; Type: TABLE DATA; Schema: vault; Owner: supabase_admin
--



--
-- Name: refresh_tokens_id_seq; Type: SEQUENCE SET; Schema: auth; Owner: supabase_auth_admin
--

SELECT pg_catalog.setval('"auth"."refresh_tokens_id_seq"', 10, true);


--
-- Name: key_key_id_seq; Type: SEQUENCE SET; Schema: pgsodium; Owner: supabase_admin
--

SELECT pg_catalog.setval('"pgsodium"."key_key_id_seq"', 1, false);


--
-- Name: measure_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('"public"."measure_id_seq"', 3, true);


--
-- Name: profile_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('"public"."profile_id_seq"', 1, true);


--
-- Name: resource_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('"public"."resource_id_seq"', 8, true);


--
-- Name: resource_quantity_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('"public"."resource_quantity_id_seq"', 7, true);


--
-- Name: role_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('"public"."role_id_seq"', 1, false);


--
-- Name: hooks_id_seq; Type: SEQUENCE SET; Schema: supabase_functions; Owner: supabase_functions_admin
--

SELECT pg_catalog.setval('"supabase_functions"."hooks_id_seq"', 1, false);


--
-- PostgreSQL database dump complete
--

RESET ALL;
