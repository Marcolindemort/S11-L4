import { Card } from "react-bootstrap";
import News from "../types/News";

interface NewsProps {
	news: News;
}

const MyNews = ({ news }: NewsProps) => {
	return (
		<Card className="d-flex">
			<Card.Img src={news.image_url} />
			<Card.Title>{news.title}</Card.Title>
			<Card.Text>{news.summary}</Card.Text>
			<Card.Footer>{news.published_at}</Card.Footer>
		</Card>
	);
};

export default MyNews;
