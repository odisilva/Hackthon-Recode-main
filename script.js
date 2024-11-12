function updateMicroregions() {
  const mesoregion = document.getElementById("mesoregion").value;
  const microregionSelect = document.getElementById("microregion");

  // Limpa as opções atuais
  microregionSelect.innerHTML =
    '<option value="">Selecione uma microrregião...</option>';

  // Define as microrregiões para cada mesorregião
  const microregions = {
    metropolitana_de_porto_alegre: ["Gravataí", "Porto Alegre", "São Jerônimo"],
    nordeste_riograndense: [
      "Caxias do Sul",
      "Bento Gonçalves",
      "Vacaria",
      "Guaporé",
    ],
    noroeste_riograndense: [
      "Carazinho",
      "Cerro Largo",
      "Cruz Alta",
      "Frederico Westphalen",
      "Ijui",
      "Passo Fundo",
      "Santa Rosa",
      "Três Passos",
    ],
    centro_ocidental_riograndense: [
      "Cachoeira do Sul",
      "Restinga Seca",
      "Santa Maria",
      "Santiago",
      "São Pedro do Sul",
      "Sobradinho",
    ],
    centro_oriental_riograndense: [
      "Candelária",
      "Lajeado-Estrela",
      "Santa Cruz do Sul",
      "Soledade",
    ],
    sudoeste_riograndense: [
      "Alegrete",
      "Bage",
      "Campanha Ocidental",
      "Quaraí",
      "Santana do Livramento",
      "São Borja",
    ],
    sudeste_riograndense: [
      "Campanha Central",
      "Campanha Meridional",
      "Jaguarão",
      "Litoral Lagunar",
      "Pelotas",
    ],
  };

  // Adiciona as opções de microrregiões conforme a mesorregião selecionada
  microregionSelect.disabled = true; // Inicialmente desativado
  if (microregions[mesoregion]) {
    microregionSelect.disabled = false; // Ativa quando há opções
    microregions[mesoregion].forEach((micro) => {
      const option = document.createElement("option");
      option.value = micro.toLowerCase().replace(/ /g, "_");
      option.textContent = micro;
      microregionSelect.appendChild(option);
    });
  }
}

function formatPhone(input) {
  // Remove caracteres não numéricos
  let value = input.value.replace(/\D/g, "");

  // Adiciona a máscara
  if (value.length > 2) {
    value = "(" + value.substring(0, 2) + ") " + value.substring(2);
  }
  if (value.length > 9) {
    value = value.substring(0, 9) + "-" + value.substring(9, 13);
  }

  input.value = value.slice(0, 13);
}
