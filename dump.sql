--
-- PostgreSQL database dump
--

-- Dumped from database version 14.5 (Ubuntu 14.5-0ubuntu0.22.04.1)
-- Dumped by pg_dump version 14.5 (Ubuntu 14.5-0ubuntu0.22.04.1)

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

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: sessions; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.sessions (
    id integer NOT NULL,
    "userId" integer NOT NULL,
    token text NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL
);


--
-- Name: sessions_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.sessions_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: sessions_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.sessions_id_seq OWNED BY public.sessions.id;


--
-- Name: urls; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.urls (
    id integer NOT NULL,
    url text NOT NULL,
    "shortUrl" text NOT NULL,
    "userId" integer NOT NULL,
    "visitCount" integer DEFAULT 0 NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL
);


--
-- Name: urls_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.urls_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: urls_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.urls_id_seq OWNED BY public.urls.id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.users (
    id integer NOT NULL,
    name text NOT NULL,
    email text NOT NULL,
    password text NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL
);


--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: sessions id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.sessions ALTER COLUMN id SET DEFAULT nextval('public.sessions_id_seq'::regclass);


--
-- Name: urls id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.urls ALTER COLUMN id SET DEFAULT nextval('public.urls_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Data for Name: sessions; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.sessions VALUES (2, 1, '48bb3097-26c0-4323-a327-9202f3c2fb4d', '2022-10-17 10:43:28.626823');
INSERT INTO public.sessions VALUES (3, 2, '33f17bc2-48b9-4af4-b672-3b214cf3363c', '2022-10-17 10:43:28.626823');
INSERT INTO public.sessions VALUES (4, 3, '2c7e1bb5-0c01-4b4c-a0ef-cc0d3ce1c50b', '2022-10-17 10:43:28.626823');
INSERT INTO public.sessions VALUES (5, 4, '5bdd60ae-cdd0-497d-80a9-44039c9703b4', '2022-10-17 10:43:28.626823');


--
-- Data for Name: urls; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.urls VALUES (3, 'http://linkedin.com', 'RD3UQ52N', 1, 1, '2022-10-17 10:43:16.623723');
INSERT INTO public.urls VALUES (4, 'http://facebook.com', 'Eo0Fl18R', 1, 4, '2022-10-17 10:43:16.623723');
INSERT INTO public.urls VALUES (5, 'http://ojogos.com', 'TtuU27DW', 1, 0, '2022-10-17 10:43:16.623723');
INSERT INTO public.urls VALUES (7, 'http://globo.com', 'ZPILM55i', 2, 0, '2022-10-17 10:43:16.623723');
INSERT INTO public.urls VALUES (9, 'http://futebol.com', 'f_sfwayj', 2, 2, '2022-10-17 10:43:16.623723');
INSERT INTO public.urls VALUES (8, 'http://sitelegal.com', 'f4D3r847', 2, 1, '2022-10-17 10:43:16.623723');
INSERT INTO public.urls VALUES (10, 'http://futebol.com', 'UgExb37x', 1, 0, '2022-10-17 10:43:16.623723');
INSERT INTO public.urls VALUES (11, 'http://futbet.com', 'oyA_gQ8e', 1, 1, '2022-10-17 10:43:16.623723');
INSERT INTO public.urls VALUES (12, 'https://vamosjogar.com', '9IcnwS_S', 3, 0, '2022-10-17 10:43:16.623723');
INSERT INTO public.urls VALUES (13, 'https://praia.com', '_8cPKZsI', 3, 5, '2022-10-17 10:43:16.623723');
INSERT INTO public.urls VALUES (14, 'https://praiou.com', 'SggYje5O', 4, 0, '2022-10-17 10:43:16.623723');


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.users VALUES (1, 'Joao', 'joaovitorprimo@gmail.com', '$2b$11$HnQNYOlaHv6BrB83Km3k/eX.28QZGSvFrKqGDcGxFQsu9Kl8bvueq', '2022-10-17 10:42:28.975246');
INSERT INTO public.users VALUES (2, 'JvPrimo', 'jv.primo@gmail.com', '$2b$11$RZA0HQ6wDon5tzA.3NfntemMypopp.diMNl2M5mfpSPH/qsZkYbB.', '2022-10-17 10:42:28.975246');
INSERT INTO public.users VALUES (3, 'Cleuza', 'cleuza@gmail.com', '$2b$11$MqLy9cXeKKsj75AGFmDt2uuY2RNAEsOMj7PRhDHgiqAd9wZCXtt0W', '2022-10-17 10:42:28.975246');
INSERT INTO public.users VALUES (4, 'Ronaldo', 'ronaldo@gmail.com', '$2b$11$Yj3/z3Ky17kKwj2UJAtxJusW8w9AfUm5pCzvEt9hY5R8agH7EyvsG', '2022-10-17 10:42:28.975246');


--
-- Name: sessions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.sessions_id_seq', 5, true);


--
-- Name: urls_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.urls_id_seq', 14, true);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.users_id_seq', 4, true);


--
-- Name: sessions sessions_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.sessions
    ADD CONSTRAINT sessions_pkey PRIMARY KEY (id);


--
-- Name: urls urls_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.urls
    ADD CONSTRAINT urls_pkey PRIMARY KEY (id);


--
-- Name: users users_email_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: sessions sessions_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.sessions
    ADD CONSTRAINT "sessions_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id);


--
-- Name: urls urls_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.urls
    ADD CONSTRAINT "urls_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id);


--
-- PostgreSQL database dump complete
--

