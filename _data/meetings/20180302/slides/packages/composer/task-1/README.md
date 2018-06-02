# composer task-1

Create a new laravel installation

```
composer create-project --prefer-dist laravel/laravel myApp "5.5.*"
```

Start Laravel development server
```
php artisan serve
```

Install Mobile_Detec
```
composer require mobiledetect/mobiledetectlib
```

Use
```
Route::get('/', function () {

    $detect = new Mobile_Detect;

    return $detect->getUserAgent();

});
```

Remove Mobile_Detec
```
composer remove mobiledetect/mobiledetectlib
```