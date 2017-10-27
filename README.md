# A-Autocomplete

Angular lib wrapper for JQuery ui Autocomplete


# Install

```
npm install --save angular-a-autocomplete
```


# Usage
  1. Import the module in your module.
```

  import {AAutocompleteModule} from 'a-autocomplete';


  @NgModule({
    ...
    imports:[AAutocompleteModule]
    ...
  })

```

2. Use it in the component

```
  <a-autocomplete [options]="{source: ['hola', 'mundo']}"></a-autocomplete>
```
