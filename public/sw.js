self.addEventListener("push", (event) => {
    const data = event.data.json();
    const title = data.title;
    const body = data.body;
    const icon = data.icon;
    const url = data.data.url;
  
    const notificationOptions = {
      body: body,
      tag: new Date().getTime(),
      icon: icon,
      data: {
        url: https://tracsub.vercel.app/dashboard, // Replace with the desired URL for redirecting user to the desired page
      },
    };
  
    self.registration.showNotification(title, notificationOptions);
  });