Vue.config.devtools = true;

var app = new Vue ({
    el: '#root',
    data: {
      disks: [
        {
          poster: "https://www.onstageweb.com/wp-content/uploads/2018/09/bon-jovi-new-jersey.jpg",
          title: "New Jersey",
          author: "Bon Jovi",
          genre: "Rock",
          year: "1988"
        }
      ]
    },
  });
