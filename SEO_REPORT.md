# Rapport SEO - arthurjean.com

Date : 21 juillet 2026  
Périmètre : audit statique du code local, sans navigateur, crawl distant, Lighthouse ni données Search Console

## Résumé exécutif

Le socle technique est propre : rendu serveur, HTML sémantique, canonical, sitemap, robots.txt, image sociale et données structurées sont présents. Le défaut principal était le titre de l'accueil, limité à `Arthur Jean`. Il décrit maintenant clairement le positionnement : `Arthur Jean | Developer tools for AI coding agents`.

Le levier suivant n'est plus une balise. Le site reste un portfolio mono-page, donc son potentiel organique est limité à la marque et à quelques requêtes larges. Des pages dédiées à Paneflow, Pyxis, Distill et Rust Doctor auraient beaucoup plus d'impact que de nouveaux micro-ajustements de métadonnées.

## Corrections appliquées

### Titres et métadonnées

- Titre d'accueil descriptif et non dupliqué.
- Modèle global `%s | Arthur Jean` pour les pages internes.
- Description, auteur canonique, créateur, éditeur et nom d'application centralisés dans le layout racine.
- Titres des pages légales adaptés au modèle global.

### Open Graph et X

- Texte alternatif descriptif ajouté à l'image sociale 1200 x 630.
- Attribution X ajoutée avec `@arthurjdev`.
- URL, titre, description et grande image sociale conservés.

### Indexation

- Sitemap limité à la page d'accueil, seule page destinée à apparaître dans les résultats de recherche.
- Pages légales conservées en accès public avec `noindex, follow` et retirées du sitemap.
- Canonical de l'accueil conservé sur `/`.
- Aucun `hreflang` artificiel : une seule version anglaise existe actuellement.

### Données structurées

- Graphe `Person`, `WebSite`, `ProfilePage` et projets conservé.
- Profil Mastodon ajouté à `sameAs` et centralisé avec le lien `rel="me"`.
- URL GitHub exposée comme `codeRepository` pour le projet concerné.
- Relation `subjectOf` retirée : les projets sont créés par Arthur, ils ne sont pas des contenus dont Arthur est le sujet.
- Aucun schema `FAQPage` ajouté puisque la FAQ n'est pas rendue sur la page actuelle.

### Cohérence technique

- `lastModified` mis à jour à la date réelle de cette modification.
- Manifeste complété avec `id`, `scope` et `lang`.
- Couleurs du manifeste alignées sur le thème clair Porcelain par défaut.
- Sections historiques non affichées laissées hors de l'accueil : aucune modification visuelle ou produit n'a été introduite sous couvert de SEO.

## État observé

| Domaine | État | Note |
|---|---|---|
| Indexabilité | Bon | Accueil indexable, pages utilitaires en `noindex, follow` |
| Canonical | Bon | Canonical absolu résolu via `metadataBase` |
| Sitemap | Bon | Contient uniquement l'URL indexable |
| Robots | Bon | Bots de recherche autorisés, bots d'entraînement explicitement bloqués |
| Title et description | Bon | Positionnement clair, longueur raisonnable |
| Open Graph et X | Bon | Grande image, description et attribution présentes |
| Données structurées | Bon | Entités reliées par des identifiants stables |
| HTML sémantique | Bon | Un H1, sections titrées, `main`, `nav` et `footer` |
| Images | Bon | `next/image`, texte alternatif et formats modernes configurés |
| Contenu organique | Limité | Une seule page indexable, aucune page produit interne |
| Performance terrain | Non mesurée | Aucun audit Lighthouse ou Core Web Vitals en production |

La balise `keywords` existe encore, mais elle n'est pas comptée comme un gain SEO significatif. Elle peut rester pour d'autres consommateurs sans influencer la stratégie.

## Priorités suivantes

### 1. Créer des pages produit indexables

Créer `/projects/paneflow`, `/projects/pyxis`, `/projects/distill` et `/projects/rust-doctor`. Chaque page doit avoir une intention propre, un titre et une description uniques, des cas d'usage, des preuves visuelles, des liens vers le produit et un schema adapté au contenu réellement visible.

### 2. Brancher la mesure

Connecter Google Search Console et Bing Webmaster Tools, soumettre le sitemap, puis suivre les impressions, clics, requêtes, pages indexées et Core Web Vitals. Sans ces données, toute priorisation éditoriale reste hypothétique.

### 3. Construire les liens de marque

Faire pointer les dépôts GitHub, documentations, annonces et sites produit vers la page portfolio ou, une fois créées, vers les pages projet pertinentes. Les liens internes et externes doivent distribuer l'autorité vers les contenus qui ciblent une intention réelle.

### 4. Publier peu, mais avec une forte intention

Les meilleurs sujets sont directement reliés aux produits : orchestration de coding agents, architecture de Paneflow, conception d'un CLI agentique en Rust et compression de contexte MCP. Quatre contenus techniques solides valent mieux qu'un flux générique.

## Vérification et limites

Le diff final a été relu et contrôlé avec `git diff --check`. Aucun test, build ou audit navigateur n'a été relancé après les derniers ajustements, conformément à la règle du dépôt qui évite les validations larges hors demande de commit. Context7 était authentifié mais a répondu `Monthly quota exceeded`, ce qui indique une incohérence entre l'authentification active et le quota disponible.

## Fichiers concernés

- `src/app/layout.tsx`
- `src/app/page.tsx`
- `src/app/manifest.ts`
- `src/app/sitemap.ts`
- `src/app/(legal)/cgu/page.mdx`
- `src/app/(legal)/confidentialite/page.mdx`
- `src/app/(legal)/mentions-legales/page.mdx`
- `src/lib/site.config.ts`
- `src/lib/json-ld.ts`
