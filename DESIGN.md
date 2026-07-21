# DESIGN.md — Barbearia Supra

## Color strategy
Committed vintage. Superfície = papel kraft; tinta preta carrega o contraste; sépia/dourado velho é o único acento. Neutros tingidos para o quente (nunca #000/#fff).

| Token | Valor | Uso |
|---|---|---|
| `--paper` | `#e9dec5` | fundo base (kraft) |
| `--paper-2` | `#e2d5b8` | secções alternadas |
| `--surface` | `#f2e9d4` | cartões / papel elevado |
| `--ink` | `#211a11` | títulos, botão principal |
| `--ink-2` | `#3a2f21` | corpo |
| `--sepia` | `#8a5a2b` | acento primário, eyebrows, números |
| `--gold` / `--gold-soft` | `#a9762f` / `#c1913f` | estrelas, links footer |
| `--muted` | `#7b6a4f` | secundário |
| `--espresso` | `#1c150d` | footer escuro (contraste) |

Grão de papel via `--grain` (radial-gradients sobrepostos) no body e hero.

## Typography
- **Display:** Tanker Regular (self-hosted woff2) — títulos, eyebrows, números, hero.
- **Corpo:** Erode Regular (self-hosted) — serif quente, parágrafos.
- Fallbacks: Georgia, serif. Escala com contraste ≥1.25 entre passos.

## Elevation & shape
- `--radius: 12px`. Sombra quente única: `0 16px 40px rgba(50,35,15,.18)`.
- Botões: cantos 4px (ink cheio) / ghost (borda ink). Pill só no badge Google e FAB.

## Motion
- `--ease: cubic-bezier(.2,.7,.2,1)` (ease-out). Sem bounce.
- Reveal-on-scroll (IntersectionObserver), carrossel autoplay 3.5s, hover lifts. Tudo respeita `prefers-reduced-motion`.

## Components chave
- Nav fixa (transparente → papel translúcido ao scroll). Menu mobile full-page com redes/contactos.
- Serviços: cartões numerados (01–04), sem ícones. Um `--feat` destacado.
- Equipa: retratos circulares com borda sépia.
- Galeria: carrossel horizontal centrado, cartões quadrados, sépia auto.
- Avaliações: branding Google (SVG G inline), avatares, prova social real.
- FAB WhatsApp (PNG) + telefone preferencial.

## Anti-patterns evitados
Sem emoji decorativo, sem cards idênticos genéricos, sem dark+neon, sem gradient-text, sem side-stripe borders, sem em dashes na copy.
