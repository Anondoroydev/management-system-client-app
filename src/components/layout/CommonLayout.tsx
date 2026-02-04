import Footer from "./Footer";
import Navbar from "./Navbar";

interface IProps {
    children: React.ReactNode
}
export default function CommonLayout({ children }: IProps) {
    return (
        <div>
            <Navbar/>
            {children}
            <Footer />
        </div>
    );
}
