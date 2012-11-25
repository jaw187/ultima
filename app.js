
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')

var app = module.exports = express.createServer();

// Configuration

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.logger());
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true })); 
});

app.configure('production', function(){
  app.use(express.errorHandler()); 
});

// Routes

app.get('/', routes.index);

app.get('/salonmenu.html', routes.salonmenu);
app.get('/spamenu-massage.html', routes.spamenumassage);
app.get('/spamenu-body.html', routes.spamenubody);
app.get('/spamenu-wax.html', routes.spamenuwax);
app.get('/spamenu-facials.html', routes.spamenufacials);

app.get('/staff-redken.html', routes.staffredken);
app.get('/staff-stylists.html', routes.staffstylists);
app.get('/staff-masterstylists.html', routes.staffmasterstylists);
app.get('/staff-specialists.html', routes.staffspecialists);
app.get('/staff-estheticians.html', routes.staffestheticians);
app.get('/staff-massage.html', routes.staffmassage);
app.get('/staff-nails.html', routes.staffnails);

app.get('/bridal-pics.html', routes.bridalpics);
app.get('/bridal-offers.html', routes.bridaloffers);

app.get('/promotions.html', routes.promotions);
app.get('/giftcertificates.html', routes.giftcertificates);

app.get('/contact.html', routes.contact);

app.listen(3000);
console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
