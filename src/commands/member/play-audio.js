const { PREFIX } = require("../../config");
const { playAudio } = require("../../services/spider-x-api");
const { InvalidParameterError } = require("../../errors/InvalidParameterError");

module.exports = {
  name: "play-audio",
  description: "Faço o download de músicas",
  commands: ["play-audio", "play", "pa"],
  usage: `${PREFIX}play-audio MC Hariel`,
  handle: async ({
    sendAudioFromURL,
    args,
    sendWaitReact,
    sendSuccessReact,
    sendErrorReply,
  }) => {
    console.log("Comando 'play-audio' iniciado.");
    console.log("Argumentos recibidos:", args);

    if (!args.length) {
      console.error("Error: No se proporcionaron argumentos.");
      throw new InvalidParameterError(
        "Você precisa me dizer o que deseja buscar!"
      );
    }

    console.log("Enviando reacción de espera...");
    await sendWaitReact();

    try {
      console.log("Llamando a la función playAudio con argumento:", args[0]);
      const data = await playAudio(args[0]);
      console.log("Respuesta recibida de playAudio:", data);

      if (!data) {
        console.warn("Advertencia: No se encontraron resultados.");
        await sendErrorReply("Nenhum resultado encontrado!");
        return;
      }

      console.log("Enviando reacción de éxito...");
      await sendSuccessReact();

      console.log("Enviando audio desde URL:", data.url);
      await sendAudioFromURL(data.url);
    } catch (error) {
      console.error("Error ocurrido:", error);
      console.log("Mensaje del error:", error.message);

      await sendErrorReply(error.message);
    }
  },
};