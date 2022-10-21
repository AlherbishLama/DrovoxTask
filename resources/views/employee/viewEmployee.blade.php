@extends('index')
@section('content')
    <view-employee :employee_id="{{request()->route('id')}}"></view-employee>
@endsection
