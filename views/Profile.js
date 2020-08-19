const Profile = {
  /**
   * Render the page content.
   */
  render: async () => {
    return /*html*/ `
      <header>
        <div class="header__title">Shopie</div>
      </header>
      <section id="dada" class="profile">
        <a href="/#/chat" class="profile__img">
          <img src="/images/sophie_profile-img.jpg" alt="Shopie">
          <div class="profile__img__status shadow"><span>Online</span></div>
        </a>

        <div class="profile__data">
          <div class="profile__data__header">
            <div>
              <span class="profile__data__name">Sophie</span>, <span class="profile__data__age">22</span>
            </div>
            <div class="profile__data__city">New York</div>
            <div class="profile__data__star"></div>
          </div>
          <div class="profile__data__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni totam delectus inventore nihil. Cumque temporibus cupiditate tempora fuga velit amet minima dicta!</div>
        </div>

        <button class="profile__button btn btn--solid btn--block">Add as friend</button>
      </section>
    `;
  },
  /**
   * Separate call for DOM interactions
   */
  after_render: async () => {
    let profileBtn = document.querySelector('.profile__button');
    let body = document.getElementById('body');

    profileBtn.onclick = function () {
      body.classList.toggle('--added');
    }
  }
};
export default Profile;