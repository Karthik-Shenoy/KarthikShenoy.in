--
-- PostgreSQL database dump
--

-- Dumped from database version 16.6
-- Dumped by pg_dump version 16.6

-- Started on 2025-02-08 00:49:56

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
-- TOC entry 216 (class 1259 OID 24602)
-- Name: posts; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.posts (
    id integer NOT NULL,
    title text,
    description text,
    tags text[],
    create_at date,
    category text NOT NULL
);


ALTER TABLE public.posts OWNER TO postgres;

--
-- TOC entry 215 (class 1259 OID 24601)
-- Name: posts_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.posts_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.posts_id_seq OWNER TO postgres;

--
-- TOC entry 4851 (class 0 OID 0)
-- Dependencies: 215
-- Name: posts_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.posts_id_seq OWNED BY public.posts.id;


--
-- TOC entry 217 (class 1259 OID 24610)
-- Name: projects; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.projects (
    title character varying(30),
    description text,
    imgurl text,
    techstack text[],
    id integer NOT NULL,
    doclink text,
    demolink text
);


ALTER TABLE public.projects OWNER TO postgres;

--
-- TOC entry 218 (class 1259 OID 24615)
-- Name: projects_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.projects_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.projects_id_seq OWNER TO postgres;

--
-- TOC entry 4852 (class 0 OID 0)
-- Dependencies: 218
-- Name: projects_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.projects_id_seq OWNED BY public.projects.id;


--
-- TOC entry 4693 (class 2604 OID 24605)
-- Name: posts id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.posts ALTER COLUMN id SET DEFAULT nextval('public.posts_id_seq'::regclass);


--
-- TOC entry 4694 (class 2604 OID 24616)
-- Name: projects id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.projects ALTER COLUMN id SET DEFAULT nextval('public.projects_id_seq'::regclass);


--
-- TOC entry 4843 (class 0 OID 24602)
-- Dependencies: 216
-- Data for Name: posts; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.posts (id, title, description, tags, create_at, category) FROM stdin;
1	How Shared-Nothing Architecture Scales Even on a Single Node	Breaking the preconceived notion that multiple threads are inefficient for low I/O overhead due to synchronization overhead and context switching! Explore how DragonflyDB leverages a shared-nothing architecture to maximize performance by splitting partitions across cores, unlike Redis' single-threaded event loop	{"low level design","high level design",multi-threading}	2025-02-07	low-level-design
\.


--
-- TOC entry 4844 (class 0 OID 24610)
-- Dependencies: 217
-- Data for Name: projects; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.projects (title, description, imgurl, techstack, id, doclink, demolink) FROM stdin;
Word Roulette	Word Roulette is a round-based multiplayer game, similar to roulette, using WebSockets for interactive gameplay, built with JavaScript and Go.	./ProjectIcons/WordRoulette.png	{React,TypeScript,TailwindCSS,Go}	1		https://karthik.shenoyk.com/demo/word-roulette
CustomDB	The project enables spawning a database with either LSM trees or SSTables as the storage engine. It features a middle layer written in Go that communicates with clients via HTTP and the database via UDP. The complete logic, from the query engine to the storage engine, is implemented in C++	./ProjectIcons/CustomDB.png	{React,TypeScript,C++,GO}	2		https://karthik.shenoyk.com/demo/db-profiler/
\.


--
-- TOC entry 4853 (class 0 OID 0)
-- Dependencies: 215
-- Name: posts_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.posts_id_seq', 1, true);


--
-- TOC entry 4854 (class 0 OID 0)
-- Dependencies: 218
-- Name: projects_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.projects_id_seq', 2, true);


--
-- TOC entry 4696 (class 2606 OID 24609)
-- Name: posts posts_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.posts
    ADD CONSTRAINT posts_pkey PRIMARY KEY (id);


--
-- TOC entry 4698 (class 2606 OID 24623)
-- Name: projects projects_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.projects
    ADD CONSTRAINT projects_pkey PRIMARY KEY (id);


-- Completed on 2025-02-08 00:50:00

--
-- PostgreSQL database dump complete
--

