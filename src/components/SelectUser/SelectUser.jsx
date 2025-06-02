import { useContext } from "react";
import { UserContext } from "../../context/user.context";

const SelectUser = (chengedUser) => {

    const { userId } = useContext(UserContext)
    const chengeUser = (e) => {
        chengedUser(e.target.value)
        console.log(e.target.value)
    }
    return (
        <select name="name" id="user" value={userId} onChange={chengeUser}>
            <option value="1">Матвей</option>
            <option value="2">Даша</option>
        </select>
    );
};

export default SelectUser;