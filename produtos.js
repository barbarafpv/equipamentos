/* ============================================================
   PRODUTOS — edite aqui preços, links, textos e fotos.
   ------------------------------------------------------------
   • preco:  apenas o número (ex.: 2800). Aparece como "R$ 2.800".
   • foto:   caminho da imagem dentro da pasta "imagens/".
             Se o arquivo não existir, a página mostra um espaço reservado.
   • vendido: mude para true quando vender — o card ganha a etiqueta
             "VENDIDO" e o botão é desativado.
   • Para remover um produto, apague o bloco { ... } inteiro.
   • Para adicionar, copie um bloco, cole abaixo e ajuste.
   ============================================================ */

/* WhatsApp para contato: código do país (55) + DDD + número, só dígitos. */
const WHATSAPP = "5531984484397";
const WHATSAPP_EXIBICAO = "(31) 98448-4397";

const PRODUTOS = [
  {
    categoria: "Tecnologia",
    nome: "Notebook Gamer Acer Nitro 5 AN515-51",
    destaques: ["16 GB de RAM", "Usado"],
    descricao: "",
    preco: 2800,
    foto: "imagens/notebook-acer-nitro-5.webp",
    link: "https://produto.mercadolivre.com.br/MLB-7965419058-notebook-acer-nitro-5-an515-51-16gb-preto-_JM",
    vendido: true,
  },
  {
    categoria: "Realidade virtual",
    nome: "Meta Quest 2 — 256 GB",
    destaques: ["256 GB", "Usado"],
    descricao: "",
    preco: 1600,
    foto: "imagens/meta-quest-2.webp",
    link: "https://produto.mercadolivre.com.br/MLB-7966591070-oculos-vr-oculus-quest-2-com-256-gb-branco-_JM",
    vendido: false,
  },
  {
    categoria: "Drones",
    nome: "Drone DJI Mini 4 Pro Standard",
    destaques: ["Controle DJI RC-N2", "Usado conservado"],
    descricao: "",
    preco: 4500,
    foto: "imagens/dji-mini-4-pro.webp",
    link: "https://www.mercadolivre.com.br/drone-dji-mini-4-pro-dji-rcn2-sem-tela-usado-conservado/up/MLBU5859908168?pdp_filters=item_id%3AMLB7965247196",
    vendido: false,
  },
  {
    categoria: "Audiovisual",
    nome: "Blackmagic Pocket Cinema Camera 6K + Cage Tilta",
    destaques: ["Montagem EF", "Com nota fiscal"],
    descricao: "Revisada recentemente em assistência técnica autorizada, com nota fiscal.",
    preco: 9000,
    foto: "imagens/blackmagic-pocket-6k.webp",
    link: "https://produto.mercadolivre.com.br/MLB-5534471601-cmera-blackmagic-pocket-cinema-6k-ef-cage-tilta-preto-_JM",
    vendido: false,
  },
];
