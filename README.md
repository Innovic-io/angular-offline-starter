# Angular 9 starter with Dexie.js for offline use
Web project starter kit including modern tools and workflow based on angular-cli,
best practices from the community, a scalable base template and a good learning base.
This small AngularJS application contains some simple examples explaining the components of angular.
It is intended for doctors to register, create messages and update profile by using template
driven forms or perform CRUD operations on appointments.


![Screen](http://i.imgur.com/hQ2R58i.png)
![Screen](http://i.imgur.com/9Eu3YWy.png)
![Screen](http://i.imgur.com/51s4x2q.png)
![Screen](http://i.imgur.com/GaxEsHB.png)
![Screen](http://i.imgur.com/f1Dxmmq.png)
![Screen](http://i.imgur.com/ts5qMgd.png)



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
venue-registration/          compiled version
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
|  |- auth.guard.ts          route guards
|  |- logged.guard.ts        route guards
|  +- ...                    additional modules and components
|- assets/                   app assets (images, css)
|- environments/             values for various build environments
|- index.html                html entry point
|- main.ts                   app entry point
|- polyfills.ts              polyfills needed by Angular
|- styles.css                global style entry point
+- test.ts                   unit tests entry point
karma.conf.js                configuration file
```
### What's in the box

- Bootstrap 4.0
- Dexie.js
- Angular 9
- Fortawesome

### Design sketch used for application

https://www.figma.com/file/nx4q7biMjioiw2kaKYOgA2/web-app-ui-devmakasana?node-id=0%3A404
