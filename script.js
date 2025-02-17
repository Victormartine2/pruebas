const criptomonedas = [
    { name: "Bitcoin", symbol: "BTC", price: 45000, marketCap: "850B", change24h: "+2.5%" },
    { name: "Ethereum", symbol: "ETH", price: 3200, marketCap: "370B", change24h: "+1.8%" },
    { name: "Cardano", symbol: "ADA", price: 1.2, marketCap: "40B", change24h: "-0.5%" },
    { name: "Binance Coin", symbol: "BNB", price: 410, marketCap: "70B", change24h: "+3.1%" },
    { name: "Solana", symbol: "SOL", price: 100, marketCap: "30B", change24h: "+4.0%" }
  ];
  
  function generarTabla() {
    const tbody = document.getElementById("cryptoTableBody");
    tbody.innerHTML = "";
    criptomonedas.forEach(cripto => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${cripto.name}</td>
        <td>${cripto.symbol}</td>
        <td>$${cripto.price}</td>
        <td>${cripto.marketCap}</td>
        <td>${cripto.change24h}</td>
      `;
      tbody.appendChild(row);
    });
  }
  
  document.getElementById("updateButton").addEventListener("click", function() {
    console.clear();
    console.log("Botón pulsado: Actualizando la tabla...");
    generarTabla();
    console.log("Tabla actualizada correctamente.");
    this.textContent = "Tabla actualizada";
    this.style.backgroundColor = "green";
    this.disabled = true;
    setTimeout(() => {
      this.textContent = "Actualizar Datos";
      this.style.backgroundColor = "#007bff";
      this.disabled = false;
    }, 3000);
  });
  
  generarTabla();
  