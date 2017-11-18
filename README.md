# A-Autocomplete

Angular lib wrapper for JQuery ui Autocomplete


# Install

```
npm install --save a-autocomplete
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


  2. Install jquery y jquery-ui in your project.
```
    npm install --save jquery jquery-ui-dist
``` 


  3. Include the js and the css in your .angular-cli.json

```
  ...
  "styles": [
    "../node_modules/jquery-ui-dist/jquery-ui.min.css"
  ],
  "scripts": [
    "../node_modules/jquery/dist/jquery.min.js",
    "../node_modules/jquery-ui-dist/jquery-ui.min.js"
  ]
  ...
```

  4. Use it in the component
```
  <input [options]="{source: ['hola', 'mundo']}" a-autocomplete>
```

You can set any autocomplete option, that jquery-ui autocomplete in [Autocomplete Docs] (http://api.jqueryui.com/autocomplete/)