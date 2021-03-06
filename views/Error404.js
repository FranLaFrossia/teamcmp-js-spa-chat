const Error404 = {
  /**
   * Render the page content.
   */
  render: async () => {
    return /*html*/ `
      <section>
        <h1 class="text-center">Error404</h1>
        <a href="/#/chat">Chat</a>
        <a href="/#/profile">Profile</a>
      </section>
    `;
  },
  /**
   * Separate call for DOM interactions
   */
  after_render: async () => {}
};
export default Error404;