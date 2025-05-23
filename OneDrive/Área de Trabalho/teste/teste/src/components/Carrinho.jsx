// Importações necessárias para o componente
import { useState } from "react"; // Hook do React para gerenciar estado
import "bootstrap/dist/css/bootstrap.min.css"; // Estilos do Bootstrap para design responsivo
import "./Carrinho.css"; // Arquivo CSS personalizado (se existir)

// Componente principal da página do carrinho
export default function PaginaCarrinho() {
  
  // ========== ESTADOS DO COMPONENTE ==========
  // Estado para controlar a quantidade de itens selecionados
  const [quantidade, setQuantidade] = useState(1);
  
  // Estado para controlar se o item foi removido do carrinho
  const [itemRemovido, setItemRemovido] = useState(false);

  // ========== FUNÇÕES DE CONTROLE ==========
  
  // Função para diminuir a quantidade (não permite menos que 1)
  const diminuirQuantidade = () => {
    if (quantidade > 1) setQuantidade(quantidade - 1);
  };

  // Função para aumentar a quantidade
  const aumentarQuantidade = () => {
    setQuantidade(quantidade + 1);
  };

  // Função para remover o item do carrinho
  const removerItem = () => {
    setItemRemovido(true); // Marca o item como removido
  };

  // ========== CÁLCULOS FINANCEIROS ==========
  const precoUnitario = 219; // Preço fixo de cada produto
  
  // Se o item foi removido, desconto = 0, senão = 30
  const desconto = itemRemovido ? 0 : 30;
  
  // Se o item foi removido, subtotal = 0, senão = quantidade × preço
  const subtotal = itemRemovido ? 0 : quantidade * precoUnitario;
  
  // Total = subtotal menos desconto
  const total = subtotal - desconto;

  // ========== RENDERIZAÇÃO DO COMPONENTE ==========
  return (
    // Container principal com background claro e padding
    <div className="container-fluid bg-light-subtle py-5 px-4 ps-5">
      
      {/* Layout principal em duas colunas */}
      <div className="row gx-5 w-100 ">
        
        {/* ========== COLUNA ESQUERDA (CARRINHO + PRODUTOS RELACIONADOS) ========== */}
        <div className="col-lg-9">
          
          {/* Card principal do carrinho */}
          <div className="card p-4 mb-4">
            
            {/* ========== CABEÇALHO DO CARRINHO ========== */}
            <div className="d-flex justify-content-between border-bottom pb-3 mb-3 ">
              {/* Título do carrinho */}
              <h6 className="fw-bold w-50">MEU CARRINHO</h6>
              
              {/* Labels das colunas (Quantidade, Unitário, Total) */}
              <div className="d-flex w-50 justify-content-between text-uppercase small fw-semibold">
                <div>Quantidade</div>
                <div>Unitário</div>
                <div>Total</div>
              </div>
            </div>

            {/* ========== CONTEÚDO CONDICIONAL DO CARRINHO ========== */}
            {itemRemovido ? (
              // ========== TELA DE CARRINHO VAZIO ==========
              <div className="text-center py-5">
                <h5 className="text-muted " id="">Seu carrinho está vazio</h5>
                <p className="text-muted">Adicione produtos para continuar sua compra</p>
                
                {/* Botão para restaurar o item (apenas para demonstração) */}
                <button 
                  className="btn btn-primary border-0" 
                  id="BotaoOk"
                  onClick={() => setItemRemovido(false)} // Restaura o item
                >
                  Restaurar item
                </button>
              </div>
            ) : (
              // ========== ITEM DO CARRINHO ==========
              <div className="d-flex-row justify-content-between align-items-center">
                <div className="d-flex align-items-center mb-3 justify-content-between align-items-center">
                  
                  {/* ========== INFORMAÇÕES DO PRODUTO ========== */}
                  <div className="w-50 d-flex">
                    {/* Imagem do produto */}
                    <img
                      src="../src/assets/sapato.png"
                      alt="Tênis"
                      className="img-thumbnail me-3"
                      style={{
                        width: "127px",
                        height: "104px",
                        background: "#E2E3FF", // Background da imagem
                      }}
                    />
                    
                    {/* Detalhes do produto */}
                    <div className=" justify-content-between align-items-center">
                      <h6 className="mb-1">
                        Tênis Nike Revolution 6 <br /> Next Nature Masculino
                      </h6>
                      <div className="text-muted small">
                        Cor: Vermelho / Branco
                      </div>
                      <div className="text-muted small">
                        Tamanho: <strong>42</strong>
                      </div>
                    </div>
                  </div>

                  {/* ========== CONTROLES E PREÇOS ========== */}
                  <div className=" d-flex w-50 d-flex justify-content-around flex-column">
                    
                    <div className="d-flex justify-content-between">
                      
                      {/* ========== CONTROLES DE QUANTIDADE ========== */}
                      <div
                        className="d-flex-row justify-content-between"
                        style={{ width: "112px", height: "73px" }}
                      >
                        {/* Botão para diminuir quantidade */}
                        <button
                          className="btn btn-outline-secondary btn-sm"
                          onClick={diminuirQuantidade}
                          style={{ width: "35px", height: "35px" }}
                        >
                          -
                        </button>
                        
                        {/* Display da quantidade atual */}
                        <span className="mx-2 fw-semibold">{quantidade}</span>
                        
                        {/* Botão para aumentar quantidade */}
                        <button
                          className="btn btn-outline-secondary btn-sm"
                          onClick={aumentarQuantidade}
                          style={{ width: "35px", height: "35px" }}
                        >
                          +
                        </button>
                        
                        {/* Botão para remover item */}
                        <div>
                          <button 
                            className="btn btn-link p-0 mt-2 text-decoration-underline text-muted"
                            onClick={removerItem} // Chama a função de remoção
                          >
                            Remover item
                          </button>
                        </div>
                      </div>
                      
                      {/* ========== PREÇO UNITÁRIO ========== */}
                      <div>
                        {/* Preço original riscado */}
                        <div className="text-decoration-line-through text-muted">
                          R$ 219,00
                        </div>
                        {/* Preço atual */}
                        <div className="fw-semibold">
                          R$ {precoUnitario.toFixed(2)}
                        </div>
                      </div>
                      
                      {/* ========== PREÇO TOTAL DO ITEM ========== */}
                      <div>
                        {/* Preço total original riscado */}
                        <div className="text-decoration-line-through text-muted">
                          R$ 219,00
                        </div>
                        {/* Preço total atual (quantidade × preço unitário) */}
                        <div className="fw-semibold">
                          R$ {(precoUnitario * quantidade).toFixed(2)}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Linha divisória */}
            <hr />

            {/* ========== SEÇÃO DE CUPOM E FRETE ========== */}
            <div className="row">
              
              {/* ========== CUPOM DE DESCONTO ========== */}
              <div className="col-md-6 mb-3">
                <label className="form-label">
                  <strong>Cupom de desconto</strong>
                </label>
                <div className="input-group">
                  {/* Campo de input para código do cupom */}
                  <input
                    type="text"
                    className="form-control rounded-3"
                    placeholder="Insira seu código"
                    id="BotaoCodigo"
                  />
                  {/* Botão para aplicar cupom */}
                  <button
                    className="btn btn-outline-pink ms-3 rounded-3"
                    id="BotaoOk"
                  >
                    OK
                  </button>
                </div>
              </div>
              
              {/* ========== CALCULADORA DE FRETE ========== */}
              <div className="col-md-6">
                <label className="form-label">
                  <strong>Calcular frete</strong>
                </label>
                <div className="input-group">
                  {/* Campo de input para CEP */}
                  <input
                    type="text"
                    className="form-control rounded-3"
                    placeholder="Insira seu CEP"
                    id="BotaoCodigo"
                  />
                  {/* Botão para calcular frete */}
                  <button
                    className="btn btn-outline-pink ms-3 rounded-3"
                    id="BotaoOk"
                  >
                    OK
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* ========== SEÇÃO DE PRODUTOS RELACIONADOS ========== */}
          
          {/* Cabeçalho da seção */}
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h5 className="fw-bold">Produtos Relacionados</h5>
            <span className="text-pink fw-semibold">Ver todos →</span>
          </div>

          {/* Grid de produtos relacionados */}
          <div className="row">
            {/* Cria 4 cards de produtos usando map */}
            {[...Array(4)].map((_, i) => (
              <div className="col-6 col-md-3 mb-3" key={i}>
                
                {/* Card do produto */}
                <div
                  className="card h-card card-product p-3 text-center d-flex justify-content-center"
                  style={{ width: "214px", height: "234px" }}
                >
                  {/* Badge de desconto apenas no primeiro produto */}
                  {i === 0 && (
                    <span className="badge bg-success position-absolute top-0 start-0 m-2">
                      30% OFF
                    </span>
                  )}
                  
                  {/* Imagem do produto */}
                  <div className="position-relative">
                    <img
                      src="../src/assets/nike-shoe.png"
                      alt="Produto"
                      className=""
                      style={{
                        width: "181px",
                        height: "97px",
                        transform: "rotate(-19deg)", // Rotaciona a imagem
                      }}
                    />
                  </div>
                </div>
                
                {/* Informações do produto */}
                <div className="card-body text-start pt-4 ps-2">
                  <small className="text-muted d-block">Tênis</small>
                  <div>K-Swiss V8 - Masculino</div>
                  <div className="d-flex">
                    {/* Preço original riscado */}
                    <small className="text-muted text-decoration-line-through">
                      R$ 200,00
                    </small>
                    {/* Preço com desconto */}
                    <div className="fw-bold ps-3">R$ 100,00</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ========== COLUNA DIREITA (RESUMO DO PEDIDO) ========== */}
        <div className="col-lg-3">
          
          {/* Card do resumo */}
          <div
            className="card p-4 justify-content-between"
            style={{ height: "400px" }}
          >
            
            {/* Título do resumo */}
            <h6 className="fw-bold mb-3">RESUMO</h6>
            
            {/* ========== DETALHES FINANCEIROS ========== */}
            
            {/* Subtotal */}
            <div className="d-flex justify-content-between mb-2">
              <span>Subtotal:</span>
              <span>R$ {subtotal.toFixed(2)}</span>
            </div>
            
            {/* Frete (sempre gratuito neste exemplo) */}
            <div className="d-flex justify-content-between mb-2">
              <span>Frete:</span>
              <span>R$ 0,00</span>
            </div>
            
            {/* Desconto aplicado */}
            <div className="d-flex justify-content-between mb-2">
              <span>Desconto:</span>
              <span>R$ {desconto.toFixed(2)}</span>
            </div>
            
            {/* Linha divisória */}
            <hr />
            
            {/* Total final em destaque */}
            <div className="d-flex justify-content-between text-danger fw-bold">
              <span>Total</span>
              <span>R$ {total.toFixed(2)}</span>
            </div>
            
            {/* Opção de parcelamento */}
            <small className="text-muted d-block mb-3">
              ou 10x de R$ {(total / 10).toFixed(2)} sem juros
            </small>
            
            {/* Botão para continuar a compra */}
            <button className="btn btn-warning w-100">Continuar</button>
          </div>
        </div>
      </div>
    </div>
  );
}