<h1>list categorys</h1>
<table class="table table-hover">
    <th>id</th>
    <th>name</th>
    <th>creat at</th>



    @foreach ($categorys as $category )
        <tr>
            <td>{{$category->id}}</td>
            <td>{{$category->categoryName}}</td>
            <td>{{$category->created_at}}</td>
        </tr>
    @endforeach
</table>



