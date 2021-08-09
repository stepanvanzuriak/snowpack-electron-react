/** @type {import("snowpack").SnowpackUserConfig } */
export default {
    mount: {
      public: { url: '/', static: true },
      src: { url: '/dist' },
    },
    buildOptions: {
        "baseUrl": "./"
    }
  };