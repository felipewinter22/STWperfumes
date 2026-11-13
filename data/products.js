/* ============================================================
   CATÁLOGO — edite SOMENTE este arquivo para gerenciar perfumes.

   Campos:
     id          identificador único (sem espaços)
     nome        nome do perfume
     marca       marca
     volume      ex.: "100ml"
     preco       número (ex.: 289.9) — formatado em R$ automaticamente
     imagem      caminho da foto dentro da pasta images/
     descricao   texto exibido no detalhe
     status      "pronta-entrega"  ou  "sob-encomenda"
     categoria   "Árabes", "Designer" ... (cria o filtro sozinho)
     destaque    true para aparecer na seção "Em destaque"

   ATENÇÃO: preços, volumes e status abaixo são EXEMPLOS.
   Substitua pelos valores reais da sua loja.
   ============================================================ */
window.STW_PRODUCTS = [
  {
    id: "asad",
    nome: "Asad",
    marca: "Lattafa",
    volume: "100ml",
    preco: 189.9,
    imagem: "images/asad.jpg",
    descricao: "Frasco preto fosco com detalhes dourados e um medalhão de leão. Fragrância amadeirada e especiada, de presença marcante.",
    status: "pronta-entrega",
    categoria: "Árabes",
    destaque: true
  },
  {
    id: "asad-bourbon",
    nome: "Asad Bourbon",
    marca: "Lattafa",
    volume: "100ml",
    preco: 199.9,
    imagem: "images/asad-bourbon.jpg",
    descricao: "Versão em tom terracota, com notas quentes e adocicadas que lembram bourbon, baunilha e especiarias.",
    status: "pronta-entrega",
    categoria: "Árabes",
    destaque: true
  },
  {
    id: "the-kingdom",
    nome: "The Kingdom",
    marca: "Lattafa",
    volume: "100ml",
    preco: 219.9,
    imagem: "images/the-kingdom.jpg",
    descricao: "Frasco dourado texturizado com cristais e caixa branca com relevo dourado. Um perfume de visual nobre.",
    status: "sob-encomenda",
    categoria: "Árabes",
    destaque: true
  },
  {
    id: "hawas-for-him",
    nome: "Hawas For Him",
    marca: "Rasasi",
    volume: "100ml",
    preco: 279.9,
    imagem: "images/hawas-for-him.jpg",
    descricao: "Líquido violeta em frasco de vidro lapidado e tampa trançada. Aquático e frutado, fresco e muito elegante.",
    status: "pronta-entrega",
    categoria: "Árabes",
    destaque: true
  },
  {
    id: "hawas-verde",
    nome: "Hawas Verde",
    marca: "Rasasi",
    volume: "100ml",
    preco: 289.9,
    imagem: "images/hawas-verde.jpg",
    descricao: "Edição em verde com caixa que imita pele de serpente. Fragrância fresca e vibrante.",
    status: "sob-encomenda",
    categoria: "Árabes",
    destaque: false
  },
  {
    id: "scandal",
    nome: "Scandal Pour Homme",
    marca: "Jean Paul Gaultier",
    volume: "100ml",
    preco: 549.9,
    imagem: "images/scandal.jpg",
    descricao: "Frasco com tampa em forma de coroa dourada e degradê âmbar. Intenso, quente e sedutor.",
    status: "pronta-entrega",
    categoria: "Designer",
    destaque: true
  },
  {
    id: "212-vip-black",
    nome: "212 VIP Black",
    marca: "Carolina Herrera",
    volume: "100ml",
    preco: 449.9,
    imagem: "images/212-vip-black.jpg",
    descricao: "Frasco escuro com degradê e letras em cobre. Perfume noturno, moderno e envolvente.",
    status: "sob-encomenda",
    categoria: "Designer",
    destaque: false
  },
  {
    id: "polo-blue",
    nome: "Polo Blue",
    marca: "Ralph Lauren",
    volume: "125ml",
    preco: 339.9,
    imagem: "images/polo-blue.jpg",
    descricao: "Clássico frasco azul-cobalto com o jogador de polo. Fresco, limpo e versátil para o dia a dia.",
    status: "pronta-entrega",
    categoria: "Designer",
    destaque: false
  },
  {
    id: "leau-dissey",
    nome: "L'Eau d'Issey Pour Homme",
    marca: "Issey Miyake",
    volume: "125ml",
    preco: 329.9,
    imagem: "images/leau-dissey.jpg",
    descricao: "Frasco fosco com tampa metálica. Cítrico e aquático, uma referência de frescor.",
    status: "sob-encomenda",
    categoria: "Designer",
    destaque: false
  }
];
