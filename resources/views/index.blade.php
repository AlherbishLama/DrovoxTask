<<<<<<<< HEAD:resources/views/index.blade.php
<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="{{ mix('css/app.css') }}">
        <title>Drovox Task</title>

    </head>
    <body>
        <div id="app">
            @yield('content')
        </div>
        <script src="{{asset("/js/app.js")}}"></script>
    </body>
</html>
========
@extends('index')
@section('content')
    <welcome-component></welcome-component>
@endsection
>>>>>>>> development:resources/views/welcome.blade.php
