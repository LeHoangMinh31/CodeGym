import students from "./data"
import "./index.css"
const Practise = () => {
    return (
        <table>
            <tr>STUDENTS</tr>
            <tr>
                <th className="">Company</th>
                <th>Contact</th>
                <th>Country</th>
            </tr>
            {students.map(student => (
                <tr>
                    <td>{student.company}</td>
                    <td>{student.contact}</td>
                    <td>{student.country}</td>
                </tr>
            ))}
        </table>
    )
}
export default Practise