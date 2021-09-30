import { Table } from 'reactstrap';
import '../App.css';

function ScoreBoard() {

    const userList = JSON.parse(localStorage.getItem('users'));
    return (
        <div className="table">
            <Table size="sm" dark>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nick</th>
                        <th>Point</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        userList.map((user) => {
                            return (
                                <tr key={user.id}>
                                    <td>{user.id}</td>
                                    <td>{user.name}</td>
                                    <td>{user.point}</td>
                                </tr>
                            );
                        })
                    }
                </tbody>
            </Table>
        </div>
    );
}

export default ScoreBoard;