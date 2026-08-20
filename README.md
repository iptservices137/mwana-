# Mwana+

PWA mobile-first pour le suivi de santé des enfants de 0 à 5 ans au Cameroun.

## Périmètre actuel

La Phase 1 contient les écrans de démarrage, connexion par téléphone, liste d'enfants et carnet individuel. Les migrations Supabase posent le modèle santé et préparent, sans interface active, la communauté, les alertes WASH et le reporting agrégé.

## Démarrage

1. Installer les dépendances avec `pnpm install`.
2. Créer un projet Supabase et appliquer les migrations du dossier `supabase/migrations` dans l'ordre.
3. Configurer les variables `NEXT_PUBLIC_SUPABASE_URL` et `NEXT_PUBLIC_SUPABASE_ANON_KEY`.
4. Lancer `pnpm dev`.

L’authentification OTP et les écritures Supabase seront connectées dans l’itération suivante ; les maquettes ne collectent encore aucune donnée réelle.

## Déploiement sur Vercel

Vercel détecte automatiquement Next.js : aucun fichier de configuration spécifique n'est requis.

1. Importer ce dossier dans un dépôt GitHub, GitLab ou Bitbucket.
2. Dans Vercel, sélectionner **Add New → Project**, puis importer le dépôt.
3. Laisser le framework sur **Next.js** et exécuter le déploiement.
4. Dans **Settings → Environment Variables**, ajouter les deux variables du fichier `.env.example` avant de connecter Supabase.
