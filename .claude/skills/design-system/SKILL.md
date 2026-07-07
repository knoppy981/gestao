---
name: design-system
description: Identidade visual do projeto (cores de marca, tokens semânticos, raio, sombra assinatura, tipografia e padrões de layout). Use SEMPRE que for criar ou ajustar qualquer componente, página, tela ou elemento de UI neste projeto, para manter a aparência consistente sem depender da pasta exemplo/.
---

# Identidade visual do projeto

Este projeto tem uma identidade visual própria, extraída de um projeto de referência
(Remix + shadcn antigo). **A fonte da verdade agora é o código deste projeto**, não a
pasta `exemplo/` — que pode ser apagada a qualquer momento. Nunca importe, copie
sintaxe ou referencie arquivos de `exemplo/`; ela usa Remix, Radix, Tailwind v3 e HSL,
incompatíveis com a stack atual (Next.js 16 + Base UI + Tailwind v4 + oklch).

Ao construir UI, siga estas regras para reproduzir a identidade.

## Stack de UI (não confundir)

- **Primitivos:** `@base-ui/react` (Base UI), **não** Radix. Veja a skill `shadcn`
  e `rules/base-vs-radix.md` dela para diferenças de API.
- **Tailwind v4** com tokens em `app/globals.css` via `@theme inline`. Sem
  `tailwind.config.js`.
- **Ícones:** `lucide-react`.
- **`cn()`** de `@/lib/utils` para compor classes.
- Componentes base ficam em `components/ui/`. Prefira estendê-los a recriar.

## Cores — sempre via tokens, nunca hex/hsl solto

Use classes de token (`bg-primary`, `text-muted-foreground`, etc.). **Nunca** escreva
cores literais (`#3b82f6`, `bg-blue-500`) em componentes.

### Cor de marca (o coração da identidade)

O primary é um **azul-claro** e o primary-foreground é um **azul saturado**. Isso é
proposital e inverte o padrão shadcn:

- `bg-primary` → fundo azul-claro. `text-primary-foreground` → azul forte legível.
- Botão default (`bg-primary text-primary-foreground`) = pílula azul-clara com texto
  azul forte. É a assinatura da marca.
- Para **texto/link** em azul, use `text-primary-foreground` (o azul saturado tem
  contraste). `text-primary` (azul-claro) só serve como cor de fundo/preenchimento.

### Tokens semânticos extras

Além dos tokens shadcn padrão, o projeto tem:

- `warning` / `warning-foreground` — amarelo (avisos, pendências).
- `positive` / `positive-foreground` — verde (sucesso, confirmações, "pago").

Use `bg-positive text-positive-foreground`, `text-warning`, etc. Para erros continue
usando `destructive`.

Todos os tokens: `background, foreground, card, popover, primary, secondary, muted,
accent, destructive, warning, positive` (cada um com `-foreground`), mais `border,
input, ring, chart-1..5, sidebar*`. Dark mode segue o **sistema operacional**
(`prefers-color-scheme`) — não há classe `.dark` nem toggle. Ao usar variantes
`dark:`, saiba que elas disparam pela media query do SO.

## Forma e elevação

- **Raio:** `--radius: 0.5rem`. Use `rounded-md/lg/xl` (derivados do token). Elementos
  de marca e CTAs tendem a ser **bem arredondados** (`rounded-xl`, às vezes
  `rounded-full` em barras/pills).
- **Sombra assinatura:** utilitário **`shadow-elevated`** — uma sombra em várias
  camadas usada em containers "flutuantes" (navbar ao rolar, cards de destaque,
  barras de progresso). Prefira `shadow-elevated` a `shadow-lg` genérico quando quiser
  o look da marca. Ex.: `<div className="rounded-xl p-1 shadow-elevated">`.

## Tipografia

- Fonte sans: Geist (via `--font-sans`), aplicada no `<html>`. Títulos usam
  `font-heading` (mapeado para a sans). Não importe fontes novas.
- Hierarquia enxuta: títulos `text-lg`/`text-base` com `font-medium`; corpo `text-sm`;
  secundário em `text-muted-foreground`.

## Padrões de layout

Herdados do projeto de referência — reproduza o "sabor", não o código:

- **Navbar fixa** no topo, com padding lateral generoso (`px-[5%] sm:px-[10%]`) e uma
  transição de padding + `shadow-elevated` ao rolar a página.
- **Conteúdo centralizado** vertical e horizontalmente em telas de fluxo
  (`min-h-svh flex flex-col items-center justify-center`), com largura contida
  (`w-[90%] sm:w-[80%]`).
- **Respiro generoso** entre blocos: `gap-8 sm:gap-14`, seções com `flex flex-col`.
- Mobile-first: sempre defina o comportamento base e refine com `sm:`/`md:`.
- Estados desabilitados/bloqueados: `opacity-50` + ícone `Lock`.

## Checklist ao criar um componente/página

1. Só tokens de cor (nada de cor literal). Marca = `primary`/`primary-foreground` azul.
2. Cantos arredondados coerentes (`rounded-lg`/`xl`); `shadow-elevated` para elevação.
3. Base UI + `components/ui/` existentes; `cn()` para classes; ícones `lucide-react`.
4. Mobile-first, espaçamento generoso, `text-muted-foreground` no secundário.
5. Funciona em light e dark (dark = `prefers-color-scheme`), sem referência a `exemplo/`.

## Onde os tokens vivem

`app/globals.css` — bloco `@theme inline` (mapeia tokens → utilitários) e `:root` /
`@media (prefers-color-scheme: dark)` (valores claro/escuro). Para ajustar a marca,
edite ali; todos os componentes herdam automaticamente.
