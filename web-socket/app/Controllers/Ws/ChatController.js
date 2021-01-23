'use strict'

class ChatController {
  //constrtuctor se compara com envento open, quando o Client se conecta ao socket ele chama o constuctor
  constructor ({ socket, request }) {
    this.socket = socket
    this.request = request
  }

  onMessage(data){
    this.socket.broadcastToAll('message', data);
  }
}

module.exports = ChatController
