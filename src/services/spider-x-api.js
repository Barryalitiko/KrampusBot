const axios = require("axios");

const { SPIDER_API_TOKEN, SPIDER_API_BASE_URL } = require("../config");

// Función para reproducir audio
exports.playAudio = async (search) => {
  console.log("playAudio iniciado con búsqueda:", search);

  if (!search) {
    console.error("Error: No se proporcionó un término de búsqueda.");
    throw new Error("Você precisa informar o que deseja buscar!");
  }

  if (!SPIDER_API_TOKEN || SPIDER_API_TOKEN === "seu_token_aqui") {
    console.error("Error: Token de la API no configurado.");
    throw new Error("Token da API do Spider X não configurado");
  }

  const endpoint = `${SPIDER_API_BASE_URL}/downloads/play-audio?search=${encodeURIComponent(
    search
  )}&api_key=${SPIDER_API_TOKEN}`;
  console.log("Llamando al endpoint de playAudio:", endpoint);

  const { data } = await axios.get(endpoint);
  console.log("Respuesta recibida de playAudio:", data);

  return data;
};

// Función para reproducir video
exports.playVideo = async (search) => {
  console.log("playVideo iniciado con búsqueda:", search);

  if (!search) {
    console.error("Error: No se proporcionó un término de búsqueda.");
    throw new Error("Você precisa informar o que deseja buscar!");
  }

  if (!SPIDER_API_TOKEN || SPIDER_API_TOKEN === "seu_token_aqui") {
    console.error("Error: Token de la API no configurado.");
    throw new Error("Token da API do Spider X não configurado");
  }

  const endpoint = `${SPIDER_API_BASE_URL}/downloads/play-video?search=${encodeURIComponent(
    search
  )}&api_key=${SPIDER_API_TOKEN}`;
  console.log("Llamando al endpoint de playVideo:", endpoint);

  const { data } = await axios.get(endpoint);
  console.log("Respuesta recibida de playVideo:", data);

  return data;
};

// Función GPT-4
exports.gpt4 = async (text) => {
  console.log("gpt4 iniciado con texto:", text);

  if (!text) {
    console.error("Error: No se proporcionó texto.");
    throw new Error("Você precisa informar o parâmetro de texto!");
  }

  if (!SPIDER_API_TOKEN || SPIDER_API_TOKEN === "seu_token_aqui") {
    console.error("Error: Token de la API no configurado.");
    throw new Error("Token da API do Spider X não configurado");
  }

  const endpoint = `${SPIDER_API_BASE_URL}/ai/gpt-4?api_key=${SPIDER_API_TOKEN}`;
  console.log("Llamando al endpoint de gpt4:", endpoint);

  const { data } = await axios.post(endpoint, { text });
  console.log("Respuesta recibida de gpt4:", data);

  return data.response;
};

// Función ATTP
exports.attp = async (text) => {
  console.log("attp iniciado con texto:", text);

  if (!text) {
    console.error("Error: No se proporcionó texto.");
    throw new Error("Você precisa informar o parâmetro de texto!");
  }

  if (!SPIDER_API_TOKEN || SPIDER_API_TOKEN === "seu_token_aqui") {
    console.error("Error: Token de la API no configurado.");
    throw new Error("Token da API do Spider X não configurado");
  }

  const url = `${SPIDER_API_BASE_URL}/stickers/attp?text=${encodeURIComponent(
    text
  )}&api_key=${SPIDER_API_TOKEN}`;
  console.log("URL generada para ATTP:", url);

  return url;
};

// Función de bienvenida
exports.welcome = async (text, description, imageURL) => {
  console.log(
    "welcome iniciado con parámetros:",
    "texto:",
    text,
    "descripción:",
    description,
    "URL de imagen:",
    imageURL
  );

  if (!text || !description || !imageURL) {
    console.error(
      "Error: Faltan parámetros. Asegúrate de proporcionar texto, descripción y URL de imagen."
    );
    throw new Error(
      "Você precisa informar o texto, descrição e URL da imagem!"
    );
  }

  if (!SPIDER_API_TOKEN || SPIDER_API_TOKEN === "seu_token_aqui") {
    console.error("Error: Token de la API no configurado.");
    throw new Error("Token da API do Spider X não configurado");
  }

  const url = `${SPIDER_API_BASE_URL}/canvas/welcome?text=${encodeURIComponent(
    text
  )}&description=${encodeURIComponent(
    description
  )}&image_url=${encodeURIComponent(imageURL)}&api_key=${SPIDER_API_TOKEN}`;
  console.log("URL generada para Welcome:", url);

  return url;
};