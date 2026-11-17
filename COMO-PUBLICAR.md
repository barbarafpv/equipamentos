# Equipamentos à Venda — como publicar e atualizar

Página de vitrine com os equipamentos à venda. É um site estático (sem servidor e sem banco de dados), então fica **100% gratuito** no GitHub Pages.

## Arquivos

| Arquivo | Para que serve |
|---|---|
| `index.html` | Estrutura da página, título, SEO |
| `estilo.css` | Visual (cores, fontes, layout, celular) |
| `script.js` | Monta os cards automaticamente (não precisa mexer) |
| **`produtos.js`** | **Preços, links, textos e fotos: é o único arquivo que você vai editar** |
| `favicon.svg` | Ícone da aba do navegador |
| `imagens/` | Pasta das fotos dos equipamentos |

Para ver no seu computador, é só dar dois cliques em `index.html`.

---

## 1. Adicionar as fotos

Salve as fotos na pasta `imagens/` com **exatamente** estes nomes:

- `notebook-acer-nitro-5.webp`
- `meta-quest-2.webp`
- `dji-mini-4-pro.webp`
- `blackmagic-pocket-6k.webp`

As fotos atuais já foram baixadas dos seus anúncios. Para trocar, use fotos quadradas ou verticais (cerca de 1200 px), com até ~300 KB cada. O site https://squoosh.app comprime grátis. Se o arquivo não existir, a página mostra o espaço "Foto em breve". Para usar .jpg, mude o campo `foto` em `produtos.js`.

Dica: no anúncio do Mercado Livre, clique com o botão direito na foto e escolha **"Salvar imagem como…"**.

---

## 2. Publicar no GitHub Pages (grátis, recomendado)

1. Crie uma conta gratuita em https://github.com (se ainda não tiver).
2. Clique em **+** (canto superior direito) → **New repository**.
   - *Repository name*: `equipamentos` (o nome aparece no endereço)
   - Marque **Public**
   - Clique em **Create repository**.
3. Na página do repositório, clique no link **"uploading an existing file"**.
4. Arraste para a janela: `index.html`, `estilo.css`, `script.js`, `produtos.js`, `favicon.svg` e a **pasta** `imagens`.
   (A pasta `.claude` e este arquivo `COMO-PUBLICAR.md` não precisam ir.)
5. Clique em **Commit changes**.
6. Vá em **Settings** → **Pages** (menu da esquerda).
   - Em *Source*, escolha **Deploy from a branch**
   - Em *Branch*, escolha **main** e **/ (root)** → **Save**.
7. Aguarde 1–2 minutos e atualize a página. Vai aparecer o endereço:

   **`https://SEU-USUARIO.github.io/equipamentos/`**

Esse é o link para compartilhar no WhatsApp, Instagram etc.

---

## 3. Atualizar preços, links ou textos

Tudo pelo navegador, sem instalar nada:

1. No repositório, clique em `produtos.js` → ícone de **lápis** (Edit).
2. Altere o que quiser. Exemplos:
   - Preço: `preco: 2800,` → `preco: 2500,`
   - Marcar como vendido: `vendido: false,` → `vendido: true,`
   - Link: troque o texto entre aspas em `link: "..."`.
3. Clique em **Commit changes**.
4. Em 1–2 minutos o site já está atualizado. Se ainda aparecer o preço antigo, aperte **Ctrl + F5** (ou abra em aba anônima): é só o cache do navegador.

**Cuidado ao editar:** mantenha as aspas `"..."` e a vírgula no fim de cada linha.

## 4. Trocar ou adicionar fotos depois

No repositório, abra a pasta `imagens` → **Add file** → **Upload files** → arraste a foto (com o mesmo nome para substituir) → **Commit changes**.

## 5. Adicionar um novo equipamento

Em `produtos.js`, copie um bloco inteiro `{ ... },`, cole logo abaixo e ajuste nome, preço, link e foto.

---

## Alternativa: Netlify Drop (ainda mais rápido)

1. Acesse https://app.netlify.com/drop
2. Arraste a pasta inteira **EQUIPAMENTOS A VENDA**.
3. Pronto: ele gera um endereço como `https://nome-aleatorio.netlify.app`.

Crie a conta gratuita quando ele pedir, senão o site expira. Para mudar o nome do endereço: *Site configuration → Change site name*. Para atualizar, edite os arquivos no computador e arraste a pasta de novo em *Deploys*.

O GitHub Pages é melhor para atualizar com frequência, porque você edita o preço direto no navegador.
