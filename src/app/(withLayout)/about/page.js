import Image from 'next/image';
import img from "@/assets/next.svg"
const AboutPage = () => {
    return (
        <div div className = 'text-white'>
            <h3>This is about section</h3>
            <Image width={500} height={500} src={img} alt='img'></Image>
        </div>
    );
};

export default AboutPage;