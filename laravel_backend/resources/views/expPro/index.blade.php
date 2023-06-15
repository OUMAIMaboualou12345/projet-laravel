<h1>list expProduct</h1>
<table class="table table-hover">
    <th>id</th>
    <th>name</th>
    <th>email</th>


    @foreach ($expPro as $item )
        <tr>
            <td>{{$item->id}}</td>
            <td>{{$item->product_id}}</td>
            <td>{{$item->product_name}}</td>
        </tr>
    @endforeach
</table>
