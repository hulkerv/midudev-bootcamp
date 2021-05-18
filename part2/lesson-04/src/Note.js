export const Note = ({content, date}) => (
		<li>
			<p>{content}</p>
			<small><time>{date}</time></small>
		</li>
);


