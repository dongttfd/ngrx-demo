# NgrxDemo

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.0 and [@ngrx/schematics](https://ngrx.io/guide/schematics) version 9.0.0 

# Install packages

Run `npm install`

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module|store|action|reducer|container|effect|entity|feature`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).


## API config test

### For user router (`/user`) => (fix 404)

Using test api in [Online REST API for Testing](https://gorest.co.in/)

Add your token to `environment` at `tokenAPI`

```
export const environment = {
    ...
    tokenAPI: <your-token>
};
```

Command this code at `app.module.ts`

```
    HttpClientInMemoryWebApiModule
        .forRoot(DataService, { dataEncapsulation: false, delay: 200 }),
```

### For book router (`/book`) and article router (`/article`)

Open this codoe at `app.module.ts`

```
    HttpClientInMemoryWebApiModule
        .forRoot(DataService, { dataEncapsulation: false, delay: 200 }),
```

## Folder structure

```
├── app
 │ ├── app-routing.module.ts
 │ ├── app.component.css
 │ ├── app.component.html
 │ ├── app.component.ts
 │ ├── app.module.ts
 │ │
 │ ├── core
 │ │    ├── config
 │ │    │     └── code.ts
 │ │    └── request.interceptor.ts
 │ │
 │ ├── shared
 │ │    ├── shared.module.ts
 │ │    └── models
 │ │    │     ├── index.ts
 │ │    │     ├── alert.model.ts
 │ │    │     ├── user.response.model.ts
 │ │    │     ├── user-list.response.model.ts
 │ │    │     ├── user.model.ts
 │ │    │     └── ...
 │ │    └── services
 │ │    │     ├── index.ts
 │ │    │     ├── user.service.ts
 │ │    │     └── ...
 │ │    └── components
 │ │          ├── alert
 │ │          │   ├── alert.component.css
 │ │          │   ├── alert.component.html
 │ │          │   ├── alert.component.spec.ts
 │ │          │   └── alert.component.ts
 │ │          ├── confirm
 │ │          │   ├── confirm.component.css
 │ │          │   ├── confirm.component.html
 │ │          │   ├── confirm.component.spec.ts
 │ │          │   └── confirm.component.ts
 │ │          └── ...
 │ │
 │ ├── feature1
 │ │     ├── feature1.component.css
 │ │     ├── feature1.component.html
 │ │     └── feature1.component.spec.ts
 │ │     └── feature1.component.ts
 │ ├── feature2
 │ │     ├── feature2.component.css
 │ │     ├── feature2.component.html
 │ │     └── feature2.component.spec.ts
 │ │     └── feature2.component.ts
 │ ├── store
 │ │    ├── index.ts
 │ │    ├── root.store.module.ts
 │ │    ├── root.selectors.ts
 │ │    ├── root.state.ts
 │ │    └── {feature1}
 │ │    |    ├── index.ts
 │ │    |    ├── {feature1}.actions.ts
 │ │    |    ├── {feature1}.effects.ts
 │ │    |    ├── {feature1}.reducer.ts
 │ │    |    ├── {feature1}.selectors.ts
 │ │    |    ├── {feature1}.state.ts
 │ │    |    └── {feature1}.module.ts
 │ │    └── {feature2}
 │ │    |    ├── index.ts
 │ │    |    ├── {feature2}.actions.ts
 │ │    |    ├── {feature2}.effects.ts
 │ │    |    ├── {feature2}.reducer.ts
 │ │    |    ├── {feature2}.selectors.ts
 │ │    |    ├── {feature2}.state.ts
 │ │    |    └── {feature2}.module.ts
 │ │    └── ...
 ├── assets
 ├── environments
 │ ├── environment.prod.ts
 │ └── environment.ts
 ├── index.html
 ├── main.ts
 ├── polyfills.ts
 ├── styles.css
 ├── test.ts
 ...
```
