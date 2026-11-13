# STW PARFUM — Mostruário de perfumes

Site estático (HTML + CSS + JavaScript puro). Não precisa instalar nada.

## Estrutura

```
stw-parfum/
├── index.html          página (hero, destaques, catálogo, como funciona, contato)
├── css/style.css       todo o visual
├── js/app.js           filtros, busca, modal e links do WhatsApp
├── data/
│   ├── config.js       ← número do WhatsApp (único lugar)
│   └── products.js     ← todos os perfumes
└── images/             fotos dos perfumes
```

## Como executar

Abra o `index.html` no navegador (duplo clique). Para publicar, envie a pasta inteira
para qualquer hospedagem estática (Netlify, GitHub Pages, Vercel, Hostinger etc.).

## Trocar o WhatsApp

Em `data/config.js`, altere `whatsapp` (código do país + DDD + número, só dígitos).
O número de exemplo `5549999999999` é falso e precisa ser trocado.

## Cadastrar, editar e remover perfumes (`data/products.js`)

- **Novo perfume:** copie um bloco `{ ... },`, cole ao final da lista e mude os campos.
  Salve a foto em `images/` e aponte em `imagem`. Use um `id` único.
- **Preço:** altere `preco` (número com ponto: `189.9`).
- **Disponibilidade:** `status: "pronta-entrega"` ou `status: "sob-encomenda"`.
- **Imagem:** troque o arquivo em `images/` ou o caminho em `imagem`.
- **Destaques:** `destaque: true` (os 4 primeiros marcados aparecem na home).
- **Categoria:** escreva qualquer nome; o filtro é criado automaticamente.
- **Remover:** apague o bloco do perfume.

Os preços, volumes, categorias, status e descrições atuais são exemplos: ajuste para os reais.

## Prazo de encomenda

Em `data/config.js`, campo `prazoEncomenda`.

## Dica sobre as fotos

Fotos com fundo limpo e iluminação parecida deixam o catálogo mais sofisticado.
As fotos feitas na mão, com fundo de parede, funcionam, mas as feitas na prateleira
iluminada ficam mais bonitas.
