# 02 Caculator

### Post function

```html
    <form action="/" method="POST"> 
        <!-- // form action="/" ->So our form has a post method, which means it's going to 
        //try and send the data that is entered into the inputs to a location that is
        //our home route. -->
```

### { extended: true }
- By setting that extended option to true, that basically just allows us to **post nested** objects. And it's not something that we're going to be using, but it's something that bodyParser is requiring you to explicitly declare. 
- body parser allows us to **req.body**. 
    - ex. console.log(req.body.num1)

```javascript
app.use(bodyParser.urlencoded({ extended: true }));
```
