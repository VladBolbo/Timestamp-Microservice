let express = require('express');
let app = express();
let bodyParser = require('body-parser');
let port = 8080;

app.use(bodyParser.json());
//app.use('/app', next());

app.get('/:date', (req, res) => {
    let date = req.params.date;
    let numCheckPattern = /^[0-9]*$/;
    date = date.replace('%20', '');
    if (numCheckPattern.test(date)) {
        let newDate = new Date(date*1000);
        res.json({
            unix: date,
            natural: newDate.toDateString()
        })
    }
    if( (new Date(date)).getTime() > 0 ) {
        res.json( {
            unix:     Date.parse(date),
            natural:  date
        });
    }
    //console.log('this is it!');
})

app.listen(port, console.log('We are connected...'));