<h1>list products</h1>
<table class="table table-hover">
    <th>id</th>
    <th>name</th>
    <th>price</th>
    <th>expDate</th>
    <th>creat at</th>


    @foreach ($products as $product )
        <tr>
            <td>{{$product->id}}</td>
            <td>{{$product->name}}</td>
            <td>{{$product->price}}</td>
            <td>{{$product->expDate}}</td>
            <td>{{$product->created_at}}</td>
        </tr>
    @endforeach
</table>



