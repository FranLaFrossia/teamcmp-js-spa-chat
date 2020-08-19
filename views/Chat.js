const Chat = {
  /**
   * Render the page content.
   */
  render: async () => {
    return /*html*/ `
      <header>
        <a href="/#/profile" class="header__back"><i class="lni lni-chevron-left"></i></a>
        <div class="header__title">Shopie</div>
      </header>
      <section class="chat">
        <div class="chat__wrapper">
          
        </div>
        <div id="chatForm">
          <div class="input__wrapper">
            <input class="chat__input" type="text" placeholder="Write a message...">
            <button class="btn chat__btn">Enviar</button>
          </div>
        </div>
      </section>
    `;
  },
  /**
   * Separate call for DOM interactions
   */
  after_render: async () => {

    const chat = document.querySelector('.chat__wrapper');
    const input = document.querySelector(".chat__input");
    const sendBtn = document.querySelector('.chat__btn');
    let myChat = [];
  
    function renderHerChat() {
      if (window.sessionStorage.randomChat) {
        chat.innerHTML = `
          <div class="chat__row --other">
          <div class="chat__row__img">
          <a href="/#/profile"><img src="images/sophie_avatar-img.jpeg" alt="Sophie"></a>
          </div>
          <div class="chat__row__msg">${sessionStorage.getItem("randomChat")}</div>
          </div>
        `
      }
    }

    // Render array of data in differents chat rows
    function renderMyChat(chatValue) {
      chatValue.forEach(c => {
        const chatRow = `
        <div class="chat__row --self">
          <div class="chat__row__msg">${c}</div>
          <div class="chat__row__img">
            <img src="images/self_avatar.jpg" alt="Fran">
          </div>
        </div>
        `;
        chat.insertAdjacentHTML('beforeend', chatRow);
      });
    }

    // Insert a new row to the chat view
    function updateMyChat(newChatRow) {
      let myRowTemplate = `
      <div class="chat__row --self">
        <div class="chat__row__msg">${newChatRow}</div>
        <div class="chat__row__img">
          <img src="images/self_avatar.jpg" alt="Fran">
        </div>
      </div>
      `;
      chat.insertAdjacentHTML('beforeend', myRowTemplate);
    }

    // Render both chats if they already existed
    function renderChat() {
      renderHerChat();

      if (window.sessionStorage.myChat) {
        // get raw string data from SessionStorage and parse it
        const myChatFromSes = window.sessionStorage.myChat;
        const myChatJSON = JSON.parse(myChatFromSes);
        myChat = myChatJSON;
        renderMyChat(myChatJSON);
      }
    }

    // Save data in session on send
    sendBtn.onclick = () => {
      if(input.value) {
        myChat.push(input.value);
        let JSONreadyMyChat = JSON.stringify(myChat);
        sessionStorage.setItem("myChat", JSONreadyMyChat);
        updateMyChat(input.value);
        input.value = '';
      }
    }
    
    if (window.sessionStorage.myChat) {
      renderChat();
    } else {
      setTimeout( function() { renderHerChat(); }, 800);
    }
  }
};
export default Chat;