import { Col, Container, Row } from "react-bootstrap";
import img from "../../assets/image/programming.svg"
const Header = () => {
    return ( 
        <>
        <Container >
            <Row className="py-5 align-items-center ">
                <Col md={6}>
                <h1 className="px-4 p-sm-0" style={{fontFamily:"lalezar",color:"#332941"}}>دانش و فناوری پایدار</h1>
                <p className="px-4 p-sm-0" style={{fontFamily:"yekan",textAlign:"justify"}}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p>
                </Col>
                <Col md={6} >
                <img src={img} className="img-fluid py-4" />
                </Col>
            </Row>
        </Container>
        
        </>
     );
}
 
export default Header;