app.set('views', path.resolve('./src/views'))
app.set('views', path.resolve(__dirname, '../views'))

app.use(express.static(path.resolve(__dirname, './public')))
