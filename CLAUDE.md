# Unroasted Green Coffee

Landing de marketing (one-page) de un proveedor de café verde en grano —
especialidad y comercial. Next.js (App Router) + TypeScript + Tailwind v4,
estática, desplegada en Vercel (deploy automático al hacer push a `main`).

- Todo el contenido y datos de contacto viven en `content/site.ts` (textos EN/ES).
- Agentes de mantenimiento en `.claude/agents/`: `maintainer` (web) y `growth` (marketing/validación).
- Validación del proyecto: `VALIDACION.md`.

## Convención de commits

- **Commits pequeños y enfocados**: un cambio lógico por commit. Si una tarea toca
  varias cosas no relacionadas (p. ej. una feature + un fix de estilo), haz commits separados.
- Mensaje en imperativo y conciso (ej. `Add origins section`, `Fix hero contrast on mobile`).
- **No** añadir atribución de IA: nada de `Co-Authored-By: Claude…` ni
  `🤖 Generated with Claude Code`. Un hook `commit-msg` lo elimina igualmente como red de seguridad.
- No hacer commit/push salvo que se pida explícitamente.

## Hooks de git

Los hooks viven en `.githooks/` (versionados) y se activan con `core.hooksPath`,
que el script `prepare` de `package.json` configura automáticamente al hacer `npm install`.
