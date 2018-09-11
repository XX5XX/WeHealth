let createError = require('http-errors');
let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');

let loginRouter = require('./routes/login');
let per_indexRouter = require('./routes/per_index');
let per_personalInfoRouter = require('./routes/per_personalInfo');
let per_hcStoreRouter = require('./routes/per_hcStore');
let per_historyDataRouter = require('./routes/per_historyData');
let per_myDeviceRouter = require('./routes/per_myDevice');
let per_myOrderRouter = require('./routes/per_myOrder');
let per_visitorRecordRouter = require('./routes/per_visitorRecord');
let per_aboutusRouter = require('./routes/per_aboutus');
let per_regRouter = require('./routes/per_reg');
let org_indexRouter = require('./routes/org_index');
let org_organizationInfoRouter = require('./routes/org_organizationInfo');
let org_hcStoreRouter = require('./routes/org_hcStore');
let org_downloadDataRouter = require('./routes/org_downloadData');
let org_transactionRecordRouter = require('./routes/org_transactionRecord');
let org_myOrderRouter = require('./routes/org_myOrder');
let org_uploadDataRouter = require('./routes/org_uploadData');
let org_aboutusRouter = require('./routes/org_aboutus');
let org_regRouter = require('./routes/org_reg');
let updataInfo = require('./routes/updateInfo');
let insertData=require('./routes/insertData');
let per_historyData_bloodPressureRouter=require('./routes/per_historyData_bloodPressure');
let per_historyData_heartRateRouter=require('./routes/per_historyData_heartRate');
let per_historyData_sleepQualityRouter=require('./routes/per_historyData_sleepQuality');
//var shop = require('img/shop');

let app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/login',loginRouter);
app.use('/per_index', per_indexRouter);
app.use('/per_hcStore',per_hcStoreRouter);
app.use('/per_historyData',per_historyDataRouter);
app.use('/per_myDevice',per_myDeviceRouter);
app.use('/per_myOrder',per_myOrderRouter);
app.use('/per_personalInfo',per_personalInfoRouter);
app.use('/per_visitorRecord',per_visitorRecordRouter);
app.use('/per_aboutus',per_aboutusRouter);
app.use('/per_reg',per_regRouter);
app.use('/org_index', org_indexRouter);
app.use('/org_hcStore',org_hcStoreRouter);
app.use('/org_uploadData',org_uploadDataRouter);
app.use('/org_downloadData',org_downloadDataRouter);
app.use('/org_myOrder',org_myOrderRouter);
app.use('/org_organizationInfo',org_organizationInfoRouter);
app.use('/org_transactionRecord',org_transactionRecordRouter);
app.use('/org_aboutus',org_aboutusRouter);
app.use('/org_reg',org_regRouter);
app.use('/updateInfo',updataInfo);
app.use('/insertData',insertData);
app.use('/per_historyData_bloodPressure',per_historyData_bloodPressureRouter);
app.use('/per_historyData_heartRate',per_historyData_heartRateRouter);
app.use('/per_historyData_sleepQuality',per_historyData_sleepQualityRouter);
//app.use('/public/img/shop.png',shop);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
