# Instalación
``` 
ng add @ngrx/store
``` 
``` 
ng add @ngrx/store-devtools
``` 


# Generar nuevo Store
``` 
ng generate store auth/Auth --module auth.module.ts
```

# Add to store

- Inject store with State
```
private store: Store<AppState>
```

- Dispatch to save data.
Siempre llevan type y payload
```
    this.store.dispatch({
    type: 'Login Action',
    payload: {
        user
    }
    })

```

- Crear las actions en un fichero a parte con una convencción especifica
"[{Place}] {event or action}"

- Especificar multiples actions por colocación en app, para poder llevar un registro desde donde se ha ejecutado la action
```
export const login = createAction(
    "[Login Page] User Login",
    props<{user: User}>()
);
```

Una vez generada la action, se usará para guardar el login


# Reducer

Es el que convierte el State a un nuevo State con el action que se le pasa
