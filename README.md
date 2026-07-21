# Barbearia Supra — Website

Landing page para a **Barbearia Supra** (Estrada de Benfica 399A, São Domingos de Benfica, Lisboa).
Protótipo Barata Studio · stack vanilla HTML/CSS/JS.

## Preview local

```bash
npm run serve   # http://localhost:5050
```

## Placeholders a preencher (`{{TOKEN}}` no index.html)

| Token | Onde | Valor |
|---|---|---|
| `{{PRECO_CORTE}}` | Serviços | preço corte de cabelo |
| `{{PRECO_CORTE_BARBA}}` | Serviços | preço corte + barba |
| `{{PRECO_BARBA}}` | Serviços | preço barba |
| `{{PRECO_CRIANCA}}` | Serviços | preço corte criança |
| `{{PRECO_LAMINA}}` | Serviços | preço corte com lâmina |
| `{{PRECO_PAI_FILHO}}` | Serviços | preço pai & filho |

## Fotos — drop-in (`assets/img/`)

Slots já ligados com fallback automático: **basta pôr o ficheiro com o nome certo** e aparece; se faltar, fica o placeholder sepia. Sem tocar em código.

| Ficheiro | Onde | Nota |
|---|---|---|
| `hero.jpg` | Fundo do hero | horizontal, ~1920px largo, boa do espaço/fachada |
| `galeria-1.jpg` | Galeria — Interior | vertical (slot alto) |
| `galeria-2.jpg` | Galeria — Corte | quadrada |
| `galeria-3.jpg` | Galeria — Barba | quadrada |
| `galeria-4.jpg` | Galeria — Equipa | horizontal (slot largo) |
| `galeria-5.jpg` | Galeria — Detalhe | quadrada |
| `equipa-rudi.jpg` | Equipa — Rudi | rosto/retrato, será cortado em círculo |
| `equipa-2.jpg` | Equipa — Barbeiro 2 | idem |
| `equipa-3.jpg` | Equipa — Barbeiro 3 | idem |

Todas recebem filtro sépia automático (coerência vintage). PNG ou JPG serve.

## Dados confirmados (scrape público)

- Tel/WhatsApp: 932 411 888 (+351932411888)
- Horário: Seg–Sex 09:30–20:00 · Sáb encerrado · Dom 10:00–15:00
- IG: @barbeariasupra · FB: /Barbeariasupra
- Rating: 4,7★ · 135 avaliações Google
- Barbeiro citado: Rudi
