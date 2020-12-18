import React from "react";
import "./App.css";

export default class App extends React.Component {
  state = {
    listaMensagem: [{ nomeUsuario: "", inputMensagem: "" }],

    valorInputUsuario: "",
    valorInputMensagem: ""
  };

  onClickMensagem = () => {
    const novaMensagem = {
      nomeUsuario: this.state.valorInputUsuario + ":",
      inputMensagem: this.state.valorInputMensagem
    };

    const novaListaMensagem = [...this.state.listaMensagem, novaMensagem];
    this.setState({ listaMensagem: novaListaMensagem });

    this.setState({ valorInputUsuario: "" });
    this.setState({ valorInputMensagem: "" });
  };

  onChangeInputUsuario = (event) => {
    this.setState({ valorInputUsuario: event.target.value });
  };

  onChangeInputMensagem = (event) => {
    this.setState({ valorInputMensagem: event.target.value });
  };

  render() {
    const listaComponentes = this.state.listaMensagem.map((p) => {
      return (
        <div className="estilos-p">
          <p className="p-usuario">
            {p.nomeUsuario} 
          </p>

          <p className="p-mensagem">
            {p.inputMensagem}
          </p>
        </div>
      );
    });

    return (
      <div className="container-pai">
        <div className="container-chat">{listaComponentes}</div>
        <div className="container-inputs">
          <div className="box-input-btn">
            <input
              className="estiloInputUsuario"
              value={this.state.valorInputUsuario}
              onChange={this.onChangeInputUsuario}
              placeholder="Usuário"
            />
            <input
              className="estiloInputMensagem"
              value={this.state.valorInputMensagem}
              onChange={this.onChangeInputMensagem}
              placeholder="Mensagem"
            />
            <button className="estiloBtn" onClick={this.onClickMensagem}>Enviar Mensagem</button>
          </div>
        </div>
      </div>
    );
  }
}
