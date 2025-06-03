import { useCallback, useState } from "react";
import Button from "../Button/Button";
import SelectUser from "../SelectUser/SelectUser";
import Logo from "../Logo/Logo";

const logos = ["/logo.svg", "/vite.svg"]

const Header = () => {
    const [logoIndex, setlogoIndex] = useState(0);

    const toogleLogo = useCallback(() => {
        setlogoIndex(state => Number(!state))
    }, [])

    return (
        <>
            <Logo image={logos[0]} />
            <SelectUser />
            <Button onClick={toogleLogo}>Поменять лого</Button>
        </>
    );
};

export default Header;