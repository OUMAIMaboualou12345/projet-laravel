<h1>list users</h1>
<table class="table table-hover">
    <th>id</th>
    <th>name</th>
    <th>email</th>
    <th>phone</th>
    <th>password</th>
    <th>created_at</th>
    <th>updated_at</th>

    @foreach ($users as $user )
        <tr>
            <td>{{$user->id}}</td>
            <td>{{$user->name}}</td>
            <td>{{$user->email}}</td>
            <td>{{$user->phone}}</td>
            <td>{{$user->password}}</td>
            <td>{{$user->created_at}}</td>
            <td>{{$user->updated_at}}</td>
        </tr>
    @endforeach
</table>



