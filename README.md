# Angular 9 starter with Dexie.js for offline use
Web project starter kit including modern tools and workflow based on angular-cli,
best practices from the community, a scalable base template and a good learning base.
This small AngularJS application contains some simple examples explaining the components of angular.
It is intended for doctors to register, create and update appointments, their profile
or their messages by using template driven forms.


![Screen](http://i.imgur.com/ultZQCS.png)


## Getting started

Go to project folder and install dependencies:
```bash
npm install
```

Launch development server, and open localhost:4200 in your browser:

```bash
npm start
```

### Project structure
```bash
venue-registration/                        compiled version
e2e/                         end-to-end tests
src/                         project source code
|- app/                      app components
|  |- @core/                 core module (singleton services and single-use components)
|  |- @shared/               shared module  (common components, directives and pipes)
|  |- components/            dumb components
|  |- helpers/               generate unique guid
|  |- models/                models
|  |- pages/                 smart components
|  |- pipes/                 pipes
|  |- services/              services
|  |- app.component.*        app root component (shell)
|  |- app.module.ts          app root module definition
|  |- app-routing.module.ts  app routes
|  |- auth.guard.ts          app routes
|  |- logged.guard.ts        app routes
|  +- ...                    additional modules and components
|- assets/                   app assets (images, css)
|- environments/             values for various build environments
|- index.html                html entry point
|- main.ts                   app entry point
|- polyfills.ts              polyfills needed by Angular
|- styles.css                global style entry point
+- test.ts                   unit tests entry point
proxy.conf.js                backend proxy configuration
```

### What's in the box

- Bootstrap 4.0
- Dexie.js
- Angular 9
- Fortawesome

### Design sketch used for application

https://www.figma.com/file/nx4q7biMjioiw2kaKYOgA2/web-app-ui-devmakasana?node-id=0%3A404
