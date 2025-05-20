# Zustand Re-renders: Otimizando Composição de Componentes

Este projeto mostra, de forma prática, como o Zustand pode ser usado em três níveis de composição de componentes, com foco em performance e controle de re-renderizações no React/Next.js.

---

## 📌 Objetivo

Evitar re-renderizações desnecessárias causadas por mudanças no estado global usando [Zustand](https://github.com/pmndrs/zustand).

---

## 🔢 Etapas do Projeto

### 🟠 Passo 1 — Componente sem separação

- Tudo está em um único componente.
- O estado do Zustand é consumido diretamente.
- Toda a página re-renderiza ao alterar o estado.
- **Uso direto:** `useMainStore` é usado dentro do mesmo componente que renderiza o layout e os botões.

**Consequência:** mesmo os elementos que não dependem do estado (ex: botões de navegação) são re-renderizados.

---

### 🟡 Passo 2 — Componentes extraídos

- `FirstValue` e `AddButton` foram extraídos como componentes separados.
- Cada um consome seu respectivo valor/função do Zustand.
- O componente principal (`Example2`) **não consome o Zustand diretamente**.
- Os botões de navegação também foram extraídos (`LinkToFirstExample`, `LinkToThirdExample`).

**Benefício:** somente os componentes que realmente usam o estado re-renderizam.

---

### 🟢 Passo 3 — Performance refinada com memo/useMemo

- Componentes estáticos foram otimizados com `React.memo` (como `Example3`).
- Blocos de código e links foram extraídos e memorizados com `useMemo`.
- Os componentes que usam Zustand continuam isolados.
- A estrutura garante que **nenhum outro trecho** seja afetado nas mudanças de estado.

**Resultado final:** Re-renderização mínima, performance máxima e código limpo.

---

## 🚀 Tecnologias Usadas

- [Next.js](https://nextjs.org/)
- [Zustand](https://github.com/pmndrs/zustand)
- [React](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)

---

## 🧠 Conclusão

Componentizar apenas o que depende do estado já é suficiente para evitar re-renderizações desnecessárias. Com `memo` e `useMemo`, você consegue ainda mais controle — sem precisar "picotar" todo o layout.

---
